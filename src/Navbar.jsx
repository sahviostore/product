import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./images/logo.webp"
import { Link } from "react-router-dom";

export const Menu = () =>{
    return(
        <>
    <Navbar expand="lg" className="Menu">
      <Container>
        <div className="logo-container">
          <img src={logo} style={{width : "10rem" , borderRadius : "50%"}} loading="lazy" alt="Brand-Logo"/>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="links">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about"> About</Nav.Link>
              <Nav.Link as={Link} to="/product">Product</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}