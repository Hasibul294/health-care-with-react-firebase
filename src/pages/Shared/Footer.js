import React from "react";
import logo from "../../images/logo/hospital.png";

const Footer = () => {
  return (
    <>
      <div className="bg-dark p-3 text-white">
        <div className="py-5 d-lg-flex justify-content-around">
          <div>
            <img
              style={{ width: "50px", marginLeft: "35px" }}
              src={logo}
              alt=""
            />
            <h3>
              <span className="text-primary">H.</span>Hospital
            </h3>
            <p>Humanity First</p>
          </div>
          <div>
            <p>About Humanity Hospital</p>
            <p>Read Our Blog</p>
            <p>Sign up to Discount</p>
            <p>Add your Hospital</p>
          </div>
          <div>
            <p>Get Help</p>
            <p>Read FAQs</p>
            <p>Views All Cities</p>
            <p>Hospital Near Me</p>
          </div>
        </div>
        <p className="d-md-flex justify-content-center">
          <i className="fab fa-google me-3 me-lg-5"></i>
          <i className="fab fa-facebook me-3 me-lg-5"></i>
          <i className="fab fa-twitter me-3 me-lg-5"></i>
          <i className="fab fa-instagram-square me-3 me-lg-5"></i>
        </p>
      </div>
      <p className="mb-0 p-3 text-center text-white bg-primary">
        Copyright<i className="far fa-copyright"></i> 2025 Humanity Hospital.
        All right reserved.
      </p>
    </>
  );
};

export default Footer;
