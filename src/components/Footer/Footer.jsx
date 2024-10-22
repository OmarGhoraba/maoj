import React from 'react'
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <div className="footer ">
        <div className="container">
          <div className="row">
            <div className="first-sec col-lg-4">
              <div className="pic">
                <img src="./assets/.png" alt="" />
                <h2 className='fs-1'>
                  MOAJ<span>.</span>
                </h2>
              </div>
              <p className="text-white">
                Mealify is a restaurant landing page that offers a delicious
                dining experience to its customers.
              </p>
              <h3 className="m">Social Media</h3>

              <ul>
                <li>
                  <i class="fa-brands fa-twitter"></i>
                </li>
                <li>
                  <i class="fa-brands fa-facebook-f"></i>
                </li>
                <li>
                  <i class="fa-brands fa-instagram"></i>
                </li>
                <li>
                  <i class="fa-brands fa-linkedin"></i>
                </li>
              </ul>
            </div>
            <div className="sec-sec col-lg-4">
              <h2>Subscribe our Newsletter</h2>
              <p className="text-white">
                Don't miss out on our latest menu updates and exclusive offers -
                join our newsletter today and stay up-to-date with all things
                Mealify!
              </p>

              <button className="btn btn-primary p-2">
           
                <i class="fa-solid fa-envelope "></i>subscribe
              </button>
              <input type="text" className='p-2' />
            </div>
            <div class="thr-sec col-lg-4">
              <h2>Get in Touch</h2>
              <ul>
                <li>
                  {" "}
                  <i className="fa-solid fa-location-dot text-white"></i>
                  <span>A108 Adam Street, New York, NY 535022</span>
                </li>
                <li>
                  {" "}
                  <i className="fa-solid fa-envelope text-white"></i>
                  <span>contact@example.com</span>
                </li>
                <li>
                  {" "}
                  <i className="fa-solid fa-phone text-white"></i>
                  <span>+1 5589 55488 55</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
