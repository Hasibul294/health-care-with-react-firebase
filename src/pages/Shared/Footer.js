import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-dark mt-5 p-3 text-white">
        <div className="p-5 d-flex justify-content-around">
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
      </div>
      <p className="mb-0 p-3 text-center text-white bg-primary">
        Copyright<i className="far fa-copyright"></i> 2025 Humanity Hospital.
        All right reserved, Privacy Policy updated. Terms of Uses
      </p>
    </>
  );
};

export default Footer;
