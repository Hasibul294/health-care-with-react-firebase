import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../../images/show-up-image/room.png";
import img2 from "../../../images/show-up-image/staff.png";
import img3 from "../../../images/show-up-image/patient.png";
import img4 from "../../../images/show-up-image/medal.png";

const ShowUp = () => {
  return (
    <>
      <div className="bg-success p-5">
        <Container>
          <Row className="g-4 py-3 text-white">
            <Col md={3}>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="bg-primary rounded-circle p-4 me-3"
                  src={img1}
                  alt=""
                />
                <div>
                  <h1 className="">126</h1>
                  <h5>Hospital Rooms</h5>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="bg-primary rounded-circle p-4 me-3"
                  src={img2}
                  alt=""
                />
                <div>
                  <h1>510</h1>
                  <h5>Qualified Staff</h5>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="bg-primary rounded-circle p-4 me-3"
                  src={img3}
                  alt=""
                />
                <div>
                  <h1>6,200</h1>
                  <h5>Satisfied Patients</h5>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="bg-primary rounded-circle p-4 me-3"
                  src={img4}
                  alt=""
                />
                <div>
                  <h1>513</h1>
                  <h5>Doctors Medals</h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ShowUp;
