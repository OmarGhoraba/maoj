import React from 'react'
import './NavBar.module.css'
import { Link } from 'react-router-dom'
import logo from "../../assets/freshcart-logo.svg";


export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="fresh cart logo" width={"120"} height={"60"} />
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mx-auto mt-2 mt-lg-0  ">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/foodsafety">
                  Food Safety
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Futureplans">
                  FuturePlans
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  innovation
                </Link>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <Link className="dropdown-item" to="Global">
                    Global
                  </Link>
                  <Link className="dropdown-item" to="Local">
                    Local
                  </Link>
                  <Link className="dropdown-item" to="SchoolLife">
                    School Life
                  </Link>
                </div>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  P.P.P
                </Link>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <Link className="dropdown-item" to="Preservation">
                    Preservation
                  </Link>
                  <Link className="dropdown-item" to="Proccessing">
                    processing
                  </Link>
                  <Link className="dropdown-item" to="Packaging">
                    Packaging
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/GraduationProjects">
                  GraduationProjects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">
                  AboutUs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/refrances">
                  Refrances
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
