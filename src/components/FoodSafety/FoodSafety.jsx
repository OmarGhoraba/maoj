import React from 'react'
  import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref , getDownloadURL } from "firebase/storage";

import { useState, useEffect } from 'react';
import "./FoodSafety.module.css";
import { db } from "../../FireBase/firebase";

    const storage = getStorage();
const imagesRef = ref(storage, "images/download.jpeg");
const url = "https://firebasestorage.googleapis.com/v0/b/moaj-3dc62.appspot.com/o/images%2Fdownload.jpeg?alt=media&token=dd7e828e-9e83-438c-a475-e503e5b64f6f";

  const FetchDocument = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    // Document reference: collection name and document ID
    
const fetchDocument = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "foodsafety"));
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
    useEffect(  () => {
      fetchDocument();
    }, []);

    // Display loading, error, or document data
    return (
      <div>
        {loading && <p>Loading document...</p>}
        {error && <p>{error}</p>}
        {data && (
          <div>
            <h3>
              Document Data:
              <p>
                {data.map((item) => (
                  <div>
                    <p>{item.title}</p>
                    <img src={url} alt="" />
                  </div>
                ))}
              </p>
            </h3>

            <p></p>
          </div>
        )}
      </div>
    );
  };
 
export default FetchDocument;       
        



