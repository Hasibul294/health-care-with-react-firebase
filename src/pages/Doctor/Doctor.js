import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Doctor.css";

const Doctor = ({ doctor }) => {
  const { name, title, description, img } = doctor;
  return (
    <Col className="" md={6}>
      <Card className="card p-1 border-0">
        <Row className="g-4 text-start">
          <Col md={5}>
            <Card.Img
              className="card-img-doc mx-auto"
              variant="top"
              src={img}
            />
          </Col>
          <Col md={7}>
            <Card.Body>
              <Card.Title className="fw-bold">{name}</Card.Title>
              <p className="fst-italic">{title}</p>
              <Card.Text className="lh-sm">{description}</Card.Text>
              <h5 className="text-primary">
                See more{" "}
                <i className="fas fa-arrow-circle-right text-success"></i>
              </h5>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default Doctor;
