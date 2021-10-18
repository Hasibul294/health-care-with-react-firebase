import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/background-1.jpg";
import banner2 from "../../../images/background-2.jpg";
import banner3 from "../../../images/background-3.jpg";

const Banner = () => {
  return (
    <>
      <Carousel interval={2000}>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption className="w-50 mx-auto mb-5 pb-5 text-uppercase">
            <h1 className="mb-5 fs-bold fst-italic">
              Our patients are at the centre of everything we do.
            </h1>
            <div className="mb-5 text-end lh-1 text-dark">
              <p>medicine cure disease, but only doctors can cure patients.</p>
              <h5 className="text-primary fs-bold">-Carl Jung</h5>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption className="w-50 mx-auto mb-5 pb-5 text-uppercase">
            <h1 className="mb-5 fs-bold fst-italic text-end text-dark">
              WE HAVE THE WORLD CLASS DOCTOR FOR YOUR CARE
            </h1>
            <div className="mb-5 fs-bold text-end lh-1 text-dark">
              <p>
                A doctor is not a mechanic. A car doesn't react with a mechanic,
                but a human being does.
              </p>
              <h5 className="text-primary fs-bold">-Randa Haines</h5>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption className="w-50 mb-5 pb-5 text-uppercase">
            <h1 className="mb-5 fs-bold fst-italic text-start">
              I give up my life to learn how to save yours.
            </h1>
            <div className="mb-5 fs-bold text-start lh-1 text-dark">
              <p>The best doctor is the one you run to and can't find.</p>
              <h5 className="text-primary fs-bold">-Denis Diderot</h5>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
