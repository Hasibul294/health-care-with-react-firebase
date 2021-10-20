import React from "react";
import Banner from "../Banner/Banner";
import Comments from "../Comments/Comments";
import Services from "../Services/Services";
import ShowUp from "../ShowUp/ShowUp";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Comments></Comments>
      <ShowUp></ShowUp>
    </div>
  );
};

export default Home;
