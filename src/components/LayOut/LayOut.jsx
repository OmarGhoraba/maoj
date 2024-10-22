import React from 'react'
import "./LayOut.module.css";
import "../NavBar/NavBar";
import "../Footer/Footer";
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
const LayOut = () => {
  return (
    <>
     <NavBar/>
      <Outlet/>
    <Footer/>
    </>
  );
};
export default LayOut;