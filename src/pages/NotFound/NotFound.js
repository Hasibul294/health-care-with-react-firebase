import React from "react";
import { Link } from "react-router-dom";
import img from "../../images/error-404.PNG";

const NotFound = () => {
  return (
    <div className="my-5 w-50 mx-auto">
      <img src={img} alt="" />
      <h3 className="text-4xl font-bold my-4 ms-3">
        "We can't find the page your are looking for.....
      </h3>
      <Link to="/home">
        <button className="btn btn-primary ms-3">Go to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
