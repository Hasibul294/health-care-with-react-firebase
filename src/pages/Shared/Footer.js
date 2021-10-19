import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="bg-dark mt-5 p-3 text-white">
        <div className="py-5 d-lg-flex justify-content-around">
          <div>
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
          <i class="fab fa-google me-3 me-lg-5"></i>
          <i class="fab fa-facebook me-3 me-lg-5"></i>
          <i class="fab fa-twitter me-3 me-lg-5"></i>
          <i class="fab fa-instagram-square me-3 me-lg-5"></i>
        </p>
      </div>
      <p className="mb-0 p-3 text-center text-white bg-primary">
        Copyright<i className="far fa-copyright"></i> 2025 Humanity Hospital.
        All right reserved, Privacy Policy updated. Terms of Uses
      </p>
    </>
  );
};

export default Footer;
