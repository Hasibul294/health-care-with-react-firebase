import React from "react";
import { Card, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import "./Service.css";

const Service = ({ service }) => {
  const { id, title, keyPoint, img } = service;
  const history = useHistory();
  const handleDetails = () => {
    history.push(`/details/${id}`);
  };
  return (
    <Col md={4}>
      <Card className="card p-1 border-0">
        <Card.Img className="card-img mx-auto" variant="top" src={img} />
        <Card.Body>
          <Card.Title className="fw-bold text-center">{title}</Card.Title>
          <Card.Text className="text-center">{keyPoint}</Card.Text>
          <button
            onClick={handleDetails}
            className="btn btn-primary d-block mx-auto"
          >
            Details
            <i className="fas fa-info-circle ms-2 p-1"></i>
          </button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
