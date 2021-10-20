import React from "react";
import img from "../../images/UnderConstruction.png";

const Cart = () => {
  return (
    <div className="mt-3">
      <h2 className="text-center text-danger">
        Sorry, we are adding this feature very soon.
      </h2>
      <img
        style={{ width: "70%", display: "block", margin: "auto" }}
        src={img}
        alt=""
      />
    </div>
  );
};

export default Cart;
