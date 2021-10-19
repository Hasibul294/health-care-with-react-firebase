import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const News = () => {
  return (
    <div className="my-5">
      <h5 className="text-dark fw-light text-center">OUR NEWS</h5>
      <h2 className="text-primary text-center">LATEST NEWS & ARTICLES</h2>
      <hr className="border-bottom border-4 border-primary w-25 mx-auto" />
      <Container>
        <Row className="g-4 my-3">
          <Col md={4}>
            <Card className="card p-1 border-0">
              <Card.Img
                className="card-img mx-auto"
                variant="top"
                src="https://kit.baliniz.com/medicalife/wp-content/uploads/sites/10/2021/05/medical-council.jpg"
              />
              <Card.Body>
                <p className="fw-light fst-italic">Medical</p>
                <Card.Title className="fw-bold">
                  Best Medical Network Directory For Physicians & Clients
                </Card.Title>
                <Card.Text className="">
                  Dialer Video connects you to your patient through a no-reply
                  text message. Your cell number is kept private— you designate
                  the callback number. And it works with any smartphone.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card p-1 border-0">
              <Card.Img
                className="card-img mx-auto"
                variant="top"
                src="https://kit.baliniz.com/medicalife/wp-content/uploads/sites/10/2021/05/disability-and-healthcare.jpg"
              />
              <Card.Body>
                <p className="fw-light fst-italic">Insight</p>
                <Card.Title className="fw-bold">
                  Why Primary Health Care Is Very Important in Our life?
                </Card.Title>
                <Card.Text className="">
                  While primary health care looks different in every country,
                  there are common building blocks that form the foundation of
                  success. A strong primary health care system has many
                  facilities.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card p-1 border-0">
              <Card.Img
                className="card-img mx-auto"
                variant="top"
                src="https://kit.baliniz.com/medicalife/wp-content/uploads/sites/10/2021/05/psychologist-and-patient-talking-in-clinic-mental-health-concept.jpg"
              />
              <Card.Body>
                <p className="fw-light fst-italic">Health</p>
                <Card.Title className="fw-bold">
                  6 Tips to Protect Your Mental Health When You’re Sick
                </Card.Title>
                <Card.Text className="">
                  It’s normal to feel anxiety, worry and grief any time you’re
                  diagnosed with a medical conditio – and that’s certainly true
                  if you test positive for COVID-19, or are presumed to be
                  positive. If your symptoms aren’t severe and you can recover
                  at home.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default News;
