import React, { useState } from "react";
import axois from "axios";
import "./AboutUs.css";
import img1 from "../../assets/omargh.png";
import img2 from "../../assets/omar2.png";
import img3 from "../../assets/amressam.png";
import img4 from "../../assets/abdullah.png";
import img5 from "../../assets/abouda.jpg";
import img6 from "../../assets/ali.png";
import aboutus from "../../assets/aboutus.jpg";
import faculty from "../../assets/faculty.jpg";
import drsamar from "../../assets/drsamar.jpg";
import drahmed from "../../assets/drahmed.jpg";
import sec from "../../assets/fa.jpg";
export default function AboutUs() {
  const [Name, setName] = useState("");
  const [email, setemail] = useState("");
  const [comment, setcomment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Name: Name,
      email: email,
      comment: comment,
    };
    axois
      .post(
        "https://api.sheetbest.com/sheets/1b28a2df-cd78-4331-a39a-6cda39a935ad",
        data
      )
      .then((res) => {
        setName("");
        setemail("");
        setcomment("");
      });
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="about pb-5">
        <div className="container ">
          <h1 className="text-center my-4">About Us</h1>
          <div className="row mb-5 shadow ">
            <div className="div d-flex align-items-center col-lg-6 bg-light">
              <p className="fw-bold fs-4 text-secondary text-center ">
                We are a team of students from the College of Fisheries and
                Fisheries Sciences. We decided to put most of what is related to
                our department on one site to help students research and also to
                be a reference for everything related to manufacturing
                processes.
              </p>
            </div>
            <div className="div col-lg-6 p-0 ">
              <div
                id="carouselExampleAutoplaying"
                class="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="1500"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={aboutus} className="w-100  d-block" alt="" />
                  </div>
                  <div class="carousel-item">
                    <img src={sec} className="w-100 h-100 d-block" alt="" />
                  </div>
                  <div class="carousel-item">
                    <img src={aboutus} className="w-100  d-block" alt="" />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our-sup bg-light py-5">
        <div className="container">
          <div className="row">
            <h2 className="text-center mb-5">Our Supervisors</h2>
            <div className="div col-lg-6">
              <div className=" dr-samar d-flex flex-column align-items-center shadow rounded-3 pb-5 bg-light">
                <img
                  src={drahmed}
                  alt="Dr. ahmed"
                  className="rounded-circle w-50 mb-3 border border-3 border-primary"
                />
                <h2 className="text-primary text-center mb-2">
                  Prof-Ahmed Tayel
                </h2>
                <h4 className="text-secondary">
                  Professor of food Biotechnology
                </h4>

                <p className="text-center fw-bold m-0 text-secondary">
                  Faculty of Aquatic and Fisheries Science, Kafr El-Sheikh
                  University
                </p>
                <p className="m-0 text-muted text-center">
                  Vice-Dean of Faculty of Aquatic and Fisheries Sciences,
                  Kafrelsheikh University
                </p>
              </div>
            </div>

            <div className="div col-lg-6">
              <div className=" dr-samar d-flex flex-column align-items-center shadow rounded-3  bg-light">
                <img
                  src={drsamar}
                  alt="Dr. ahmed"
                  className="rounded-circle w-50 mb-3 border border-3 border-primary"
                />
                <h2 className="text-primary text-center mb-2">
                  Dr. Manar Shehab
                </h2>
                <h4 className="text-secondary">Assistant Lecturer </h4>
                <p className="text-center fw-bold m-0 text-secondary">
                  Faculty of Aquatic and Fisheries Science, Kafr El-Sheikh
                  University
                </p>
                <p className="m-0 text-muted text-center">
                  M.Sc.|Faculty of Aquatic and Fisheries Science,Kafr El-Sheikh
                  University
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ourteam pb-5">
        <div className="container">
          <h1 className="text-center">Our Team</h1>
          <div className="row aboutrow mt-4 ">
            <div className="col-lg-4 ">
              <div className="cardo text-center mb-4 p-0 rounded-2 overflow-hidden shadow w-100 m-auto">
                <div className="img-area ">
                  <img className="w-100" src={img1} alt="" />
                </div>
                <h2>Omar Ghoraba</h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cardo text-center mb-4 p-0 rounded-2 overflow-hidden shadow w-100  m-auto  ">
                <div className="img-area ">
                  <img className="w-100" src={img2} alt="" />
                </div>
                <h2>Omar Hossam</h2>
              </div>
            </div>{" "}
            <div className="col-lg-4">
              <div className="cardo text-center mb-4 p-0 rounded-2 overflow-hidden shadow w-100 m-auto">
                <div className="img-area ">
                  <img className="w-100" src={img3} alt="" />
                </div>
                <h2>Amr Essam</h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cardo text-center mb-4 p-0 rounded-2 overflow-hidden shadow w-100 m-auto">
                <div className="img-area ">
                  <img className="w-100" src={img4} alt="" />
                </div>
                <h2>Abdallah Mohamed</h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cardo text-center mb-4 p-0 rounded-2 overflow-hidden shadow w-100 m-auto">
                <div className="img-area ">
                  <img className="w-100" src={img5} alt="" />
                </div>
                <h2>Abouda Ramadan</h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cardo text-center mb-4 p-0 rounded-2 overflow-hidden shadow w-100 m-auto">
                <div className="img-area ">
                  <img className="w-100" src={img6} alt="" />
                </div>
                <h2>Ali el-hariry</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <h2 className="text-center my-4">Our Location</h2>
        <div className="row">
          <div className="col-lg-6 p-0">
            <img src={faculty} className="w-100" alt="" />
          </div>
          <div className="col-lg-6 p-0 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.462353104409!2d30.955658624049146!3d31.09687906794217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7ac7c8813b8ab%3A0xe232ed3f42bab749!2z2YPZhNmK2Kkg2LnZhNmI2YUg2KfZhNir2LHZiNipINin2YTYs9mF2YPZitipIC0g2KzYp9mF2LnYqSDZg9mB2LEg2KfZhNi02YrYrg!5e0!3m2!1sar!2seg!4v1731258443540!5m2!1sar!2seg"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="container my-5">
          <h2 className="text-center mb-4">Contact Us</h2>
          <div className="row justify-content-center">
            <div className="col-lg-12 ">
              <form
                autoComplete="off"
                onSubmit={handleSubmit}
                className="p-4 rounded shadow bg-light"
              >
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                    value={Name}
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={(e) => setemail(e.target.value)}
                    value={email}
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="comment" className="form-label">
                    Comment
                  </label>
                  <textarea
                    className="form-control"
                    onChange={(e) => setcomment(e.target.value)}
                    value={comment}
                    id="comment"
                    rows="4"
                    placeholder="Write your comment here"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <button
        className="bottom-up "
        onClick={scrollToTop}
        style={{ display: window.scrollY > 0 }}
      >
        <i class="fa-solid fa-plane-up text-white mt-1 ms-1 fs-3"></i>
      </button>
    </>
  );
}
