import React from "react";
import "./navbar.css";

import { Navbar, Container, Nav } from "react-bootstrap";
export default function navabar() {
  return (
    <div>
      <div className="fixed-top">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container fluid>
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              {/* <img
                src="image-7.png"
                alt=""
                className="imge"
              /> */}

              <Nav className="me-aut">
                <Nav.Link href="#story">STORY</Nav.Link>
                <Nav.Link href="#roadmap">ROADMAP</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#membership">MEMBERSHIP</Nav.Link>
                <Nav.Link href="#team">TEAM</Nav.Link>
                <Nav.Link href="#faq">FAQ</Nav.Link>
                <Nav.Link href="#mint">MINT</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
              <button className="btn btn-primary">CONNECT WALLET</button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
