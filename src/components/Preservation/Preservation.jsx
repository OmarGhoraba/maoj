import React from "react";
import "./Preservation.css";
import aos from "aos";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, listAll } from "firebase/storage";
import { useState, useEffect } from "react";
import { db } from "../../FireBase/firebase";


const FetchDocument = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);

  // Document reference: collection name and document ID

  const fetchDocument = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "preservation"));
      const dataList = [];
      querySnapshot.forEach((doc) => {
        dataList.push(doc.data());
      });
      setData(dataList);
    } catch (err) {
      console.error("Error fetching document:", err);
      setError("Error fetching document");
    } finally {
      setLoading(false);
    }
  };

  // Fetch document on component mount
  useEffect(() => {
    fetchDocument();
  }, []);

  // Display loading, error, or document data
  return (
    <div>
      {loading && <p>Loading document...</p>}
      {error && <p>{error}</p>}
      {data && (
        <div>
          <div className="container text-center">
            <h3 className="mb-4 Fw-bolder main-head fs-1">Preservation Methods</h3>
            <div className="row mb-5 text-center ">
              {data.map((item) => (
                <div className="div col-lg-4 main">
                  <Link
                    className="link"
                    key={item.id}
                    to={`/Details/${item.id}`}
                  >
                    <div className="card mt-5 shadow main ">
                      <h3>{item.title}</h3>
                      <div className="div ">
                        <img src={item.url} alt="" className="mx-2 image" />
                        <p className="see-more text-muted m-2"  >
                          {item.d1 && typeof item.d1 === "string"
                            ? item.d1.split(" ").slice(0, 30).join(" ") + "..."
                            : "No description available"}
                          <Link to={`/Details/${item.id}`}>See more</Link>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FetchDocument;
