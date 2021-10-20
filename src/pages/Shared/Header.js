import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo/hospital.png";

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
            <img style={{ width: "50px" }} src={logo} alt="" />
            <span className="ms-2">H.</span>Hospital
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
              <Nav.Link as={NavLink} to="/news">
                News
              </Nav.Link>
            </Nav>
            {user?.displayName && (
              <Navbar.Text>
                Hi,{" "}
                <span className="fw-bold text-white me-2">
                  {user?.displayName}
                </span>
              </Navbar.Text>
            )}
            {user?.displayName ? (
              <button onClick={logOut} className="btn btn-primary py-1">
                LogOut
              </button>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/login">
                  <button className="btn btn-primary">LogIn</button>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/register">
                  <button className="btn btn-primary">Register</button>
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
