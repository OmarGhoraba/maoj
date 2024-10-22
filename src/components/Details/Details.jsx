import React, { useState, useEffect } from "react";
import "./Details.css";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../FireBase/firebase";

const FetchDocument = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let { id } = useParams(); 


  const fetchDocument = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "preservation"));
      const dataList = [];
      querySnapshot.forEach((doc) => {
        dataList.push({ id: doc.id, ...doc.data() }); 
      });
      const filteredData = dataList.find((item) => item.id === id);
      if (filteredData) {
        setData(filteredData); 
      } else {
        setError("Document not found");
      }
    } catch (err) {
      console.error("Error fetching document:", err);
      setError("Error fetching document");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDocument();
  }, [id]); 

  return (
    <div>
      {loading && <p>Loading document...</p>}
      {error && <p>{error}</p>}
      {data && (
        <div className="detail p-5">
          <div className="container detail-box  mb-5 ">
            <h3 className="mb-4 text-center">
              Preservation Method:{" "}
              <h3 className="title-main fw-bold"> {data.title}</h3>
            </h3>
            <div className="row mt-5 mb-5">
              <div className="col-lg-6">
                <img
                  src={data.url}
                  alt={data.title}
                  className="mx-2 w-100 me-2"
                />
              </div>
              <div className="dov col-lg-6">
                <p className="fs-3">{data.d1}</p>
              </div>
              <div className="dov col-lg-12 mt-2">
                <p className="fs-3">{data.d2}</p>
              </div>
              <div className="dov col-lg-12 mt-2">
                <p className="fs-3">{data.d3}</p>
              </div>
              <div className="dov col-lg-12 mt-2">
                <p className="fs-3 ">{data.d4}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FetchDocument;
