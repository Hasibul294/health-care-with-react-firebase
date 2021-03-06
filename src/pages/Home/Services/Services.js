import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://hasibul294.github.io/react-health-care/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-5">
      <h5 className="text-dark fw-light text-center">
        WE CARE OUR DEPARTMENT SUPPORT
      </h5>
      <h2 className="text-primary text-center">OUR OUTSTANDING DEPARTMENT</h2>
      <hr className="border-bottom border-4 border-primary w-25 mx-auto" />
      <Container>
        <Row className="g-4 my-3">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
