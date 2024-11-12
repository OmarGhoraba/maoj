import React from 'react'
import { useEffect } from 'react'
import './Home.css'
import vision from '../../assets/vision.png'
import msg from '../../assets/msg.png'
import aos from "aos";
import "aos/dist/aos.css";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  

export default function Home() {
      useEffect(() => {
        aos.init();
      }, []);
  return (
    <>
      {/* ============================ titel area ============ */}
      <div className="main-head h-100">
        <div className="container " style={{ height: "100vh" }}>
          <div className="row h-100 justify-content-center align-items-center ">
            <div
              className="justify-content-center align-items-center text-center"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <p className="p-main fw-bold mb-0">Welcome to</p>
              <h1 className="main-title fw-bolder typing-effect">MAOJ</h1>
              <p className="p-main ">
                We're the biggest, best platform to share your knowledge
              </p>
              <button className="btn btn-primary">Learn More</button>
              <button className="btn btn-success ml-2">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
      {/* ======================= vision ======================  */}
      <div className="vision mb-5 py-5">
        <div className="container   pt-5 justify-content-center algin-items-center text-center">
          <h2 className="p-main fw-bolder" data-aos="fade-up">
            Our Vision
          </h2>
          <div className="icon  rounded-5 d-flex align-items-center  mb-3 justify-content-center">
            <i className="fa-solid fa-eye fa-beat "></i>
          </div>
          <div
            className="row text-center shadow p-4 bg-white m-4 "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="serv-item col-lg-6 ">
              <img src={vision} alt="" className="w-100" />
            </div>

            <div className="serv-item col-lg-6">
              <p className="fw-bold fs-2 text-muted text-start">
                To be the trusted leader in sustainable aquatic food processing
                and preservation, delivering safe, high-quality marine products
                that contribute to global food security and environmental
                responsibility
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= mssage ======================  */}

      <div className=" message mb-5 py-5">
        <div className="container   pt-5 justify-content-center algin-items-center text-center">
          <h2 className="p-main fw-bolder" data-aos="fade-up">
            Our Massage
          </h2>
          <div className="icon  rounded-5 d-flex align-items-center  mb-3 justify-content-center ">
            <i class="fa-solid fa-envelope fa-beat-fade"></i>
          </div>

          <div
            className="row text-center shadow p-4 bg-white m-4 "
            data-aos="fade-up "
            data-aos-duration="2000"
          >
            <div className="serv-item col-lg-6">
              <p className="fw-bold fs-2 text-muted text-start">
                To produce safe, premium aquatic foods and byproducts by using
                advanced preservation and processing technologies. We prioritize
                food safety and quality standards, sustainable sourcing, and
                rigorous testing at every step, ensuring products meet the
                highest industry standards while supporting local communities
                and marine ecosystems.
              </p>
            </div>
            <div className="serv-item col-lg-6 ">
              <img src={msg} alt="" className="w-100" />
            </div>
          </div>
        </div>

        <div>
          <button
            className="bottom-up "
            onClick={scrollToTop}
            style={{ display: window.scrollY > 0 }}
          >
            <i class="fa-solid fa-plane-up text-white mt-1 ms-1 fs-3"></i>
          </button>
        </div>
      </div>
    </>
  );
}
