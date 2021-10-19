import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/home">
            <span className="text-primary">H.</span>Hospital
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={NavLink} to="/doctors">
                Doctors
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            {user?.email && (
              <Navbar.Text>
                Hello:{" "}
                <span className="fw-bold text-white me-2">
                  {user?.displayName}
                </span>
              </Navbar.Text>
            )}
            {user?.email ? (
              <button onClick={logOut} className="btn btn-primary py-1">
                LogOut
              </button>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/login">
                  <button className="btn btn-primary py-1">LogIn</button>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/register">
                  <button className="btn btn-primary py-1">Register</button>
                </Nav.Link>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
