import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            ArnoldNews
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link className="nav-item nav-link active" to="/">
                Home
              </Link>

              <Link className="nav-item nav-link active" to="/form">
                Form
              </Link>

              <Link className="nav-item nav-link active" to="/list">
                News List
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <br />
    </div>
  );
};

export default Header;
