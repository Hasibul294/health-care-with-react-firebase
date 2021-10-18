import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

const ServiceDetails = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch("https://hasibul294.github.io/react-health-care/services.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  console.log(details);
  const serviceDetails = details.find((item) => item.id == id);
  console.log(serviceDetails);
  return (
    <>
      <h1 className="text-center text-primary my-4">About Our Service</h1>
      <hr className="border-bottom border-4 border-primary w-25 mx-auto" />
      <div className="container text-start d-lg-flex justify-content-center align-items-center my-5">
        <div>
          <h2 className="fw-bold">{serviceDetails?.title}</h2>
          <h6>Key Point: {serviceDetails?.keyPoint}</h6>
          <p className="my-3 w-75">
            {serviceDetails?.description} In our job, you will never go home at
            the end of the day thinking that you haven’t done something valuable
            and important.
          </p>
          <h6>Rating: {serviceDetails?.rating}</h6>
          <h3>Price: {serviceDetails?.cost}</h3>
          <NavLink to="/login">
            <button className="btn btn-primary w-25 text-white border-0 rounded-pill mt-2">
              <i className="fas fa-shopping-cart"></i> Booking
            </button>
          </NavLink>
        </div>
        <img style={{ width: "50%" }} src={serviceDetails?.img} alt="" />
      </div>
    </>
  );
};

export default ServiceDetails;
