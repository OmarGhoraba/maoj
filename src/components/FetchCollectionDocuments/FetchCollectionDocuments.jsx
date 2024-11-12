// File: FetchCollectionDocuments.js
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../FireBase/firebase";
import { FidgetSpinner } from "react-loader-spinner";
import { Link } from "react-router-dom";
import "./FetchCollectionDocuments.css";

const FetchCollectionDocuments = ({ collectionName, title }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const fetchDocuments = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      const dataList = [];
      querySnapshot.forEach((doc) => {
        dataList.push({ id: doc.id, ...doc.data() });
      });
      setData(dataList);
    } catch (err) {
      console.error("Error fetching documents:", err);
      setError("Error fetching documents");
    } finally {
      setLoading(false);
    }
  };
const dirc = (id) => {
  if (collectionName.toLowerCase() === "processing" && id === "1") {
    return "/Details/Proccessing/1";
  } else {
    return `/Details/${collectionName}/${id}`;
  }

};
  useEffect(() => {
    fetchDocuments();
  }, [collectionName]);

  return (
    <div>
      {loading && (
        <div className="d-flex vh-100 justify-content-center align-items-center">
          <FidgetSpinner
            visible={true}
            height="200"
            width="200"
            ariaLabel="fidget-spinner-loading"
            wrapperStyle={{}}
            wrapperClass="fidget-spinner-wrapper"
          />
        </div>
      )}
      {error && <p>{error}</p>}
      {data && (
        <div className="container text-center">
          <h3 className="mb-4 fw-bolder main-head fs-1">{title}</h3>
          <div className="row mb-5 text-center">
            {data.map((item) => (

              <div key={item.id} className="col-lg-4 ">
                <Link
                  to = {dirc(item.id)}
                  className="link main"
                >
                  <div className="card mt-5 shadow p-0 rounded-3 overflow-hidden ">
                    <img src={item.url} alt="" className=" image" />
                    <h3>{item.title}</h3>
                    <div className="div">
                      <p className="see-more text-muted m-2">
                        {item.d1 && typeof item.d1 === "string"
                          ? item.d1.split(" ").slice(0, 30).join(" ") + "..."
                          : "No description available"}
                        <Link to={`/Details/${collectionName}/${item.id}`}>
                          See more
                        </Link>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FetchCollectionDocuments;
