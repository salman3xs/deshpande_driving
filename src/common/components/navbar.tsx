import React, { FC } from "react";

const Navbar: FC = (): JSX.Element => {
  return (
    <div className="nav-bar">
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <a href="#" className="navbar-brand">
            MENU
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav mr-auto">
              <a href="/" className="nav-item nav-link active">
                Home
              </a>
              <a href="about" className="nav-item nav-link">
                About
              </a>
              <a href="services" className="nav-item nav-link">
                Service
              </a>
              <a href="prices" className="nav-item nav-link">
                Price
              </a>
              <a href="batches" className="nav-item nav-link">
                Batches
              </a>
              <a href="contact" className="nav-item nav-link">
                Contact
              </a>
            </div>
            <div className="ml-auto">
              <a className="btn btn-custom" href="#">
                Get Appointment
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
