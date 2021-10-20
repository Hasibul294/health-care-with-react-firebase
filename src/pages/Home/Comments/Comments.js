import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../../images/quote.png";

const Comments = () => {
  return (
    <div className="my-5 py-3">
      <h5 className="text-dark fw-light text-center">
        Don’t Hear From Us Only
      </h5>
      <h2 className="text-primary text-center">What People Say About Us</h2>
      <hr className="border-bottom border-4 border-primary w-25 mx-auto" />
      <Container>
        <Row className="g-4 py-3 my-4">
          <Col md={4}>
            <div className="d-flex justify-content-center align-items-start">
              <img className="me-3" src={img} alt="" />
              <div>
                <h2 className="">Barbara S.</h2>
                <p className="fst-italic">Kelowna, BC</p>
                <h4 className="fw-light">
                  i am more than fully satisfied with the excellent service
                  provided so carefully and so sincerely by each and every care
                  giver
                </h4>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="d-flex justify-content-center align-items-start">
              <img className="me-3" src={img} alt="" />
              <div>
                <h2 className="">Habib M.</h2>
                <p className="fst-italic">Calgary</p>
                <h4 className="fw-light">
                  we are confident leaving mother in nanocare’s quality care!
                  they deliver wonderful service with a personal touch!
                </h4>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="d-flex justify-content-center align-items-start">
              <img className="me-3" src={img} alt="" />
              <div>
                <h2 className="">Jennifer R.</h2>
                <p className="fst-italic">Caregiving daughter</p>
                <h4 className="fw-light">
                  my mom’s primary caregiver is wonderful. the nurse is
                  wonderful and the overall experience was awesome!
                </h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Comments;
