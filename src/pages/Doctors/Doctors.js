import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div className="my-5">
      <h5 className="text-dark fw-light text-center">
        MEET OUR EXPERIENCED DOCTOR
      </h5>
      <h2 className="text-primary text-center">WE ARE EXPERTS IN OUR FIELD</h2>
      <hr className="border-bottom border-4 border-primary w-25 mx-auto" />
      <Container>
        <Row className="g-4 my-3">
          {doctors.map((doctor) => (
            <Doctor key={doctor.id} doctor={doctor}></Doctor>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Doctors;
