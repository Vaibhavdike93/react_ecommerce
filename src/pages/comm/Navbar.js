import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() 
{

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        {/* Brand Logo with Shopping Icon */}
        <a className="navbar-brand fw-bold d-flex align-items-center" href="/">
          <i className="bi bi-shop me-2"></i>
          <span>ShopZone</span>
        </a>

        {/* Mobile Toggle Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <a className="nav-link active d-flex align-items-center" href="/">
                <i className="bi bi-house-door me-1"></i>
                Home
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link d-flex align-items-center" href="/products">
                <i className="bi bi-grid me-1"></i>
                Products
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link d-flex align-items-center" href="/cart">
                <i className="bi bi-cart3 me-1"></i>
                Cart
                <span className="badge bg-danger ms-1 rounded-pill">3</span>
              </a>
            </li>
          </ul>

          {/* Search and Auth Buttons */}
          <div className="d-flex">
            <form className="d-flex me-2">
              <div className="input-group">
                <input 
                  type="search" 
                  className="form-control" 
                  placeholder="Search..." 
                  aria-label="Search"
                />
                <button className="btn btn-outline-light" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>
            <div className="btn-group">
              <div className={localStorage.getItem("user_token")==undefined ? "d-block":"d-none"}>
                <button className="btn btn-outline-light">
                  <Link to={"/login"} className="text-decoration-none">
                    <i className="bi bi-box-arrow-in-right"></i> Login
                  </Link>
                </button>
                <button className="btn btn-primary ">
                  <Link to={"/register"} className="text-decoration-none text-light">
                    <i className="bi bi-person-plus"></i> Register
                  </Link>
                </button>
              </div>

              <div className={localStorage.getItem("user_token")==undefined ? "d-none":"d-block"}>
                <button className="btn btn-primary ">
                  <Link to={"/profile"} className="text-decoration-none text-light">
                    <i className="bi bi-person me-1"></i> Your Profile
                  </Link>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;