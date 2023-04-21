import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  // AiFillTablet,
  // AiFillBuild,
  // AiOutlineAim,
  // AiOutlineBold,
  AiOutlineBook,
} from "react-icons/ai";


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return ( 
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                // as={Link}
                // to="https://drive.google.com/file/d/1iX6aYdHTdr-mFDdk6A8yU5NNwbFlDd3O/view?usp=sharing"
                // onClick={() => updateExpanded(false)}
                href="https://drive.google.com/file/d/1vwD_cDwVGSmLeYF3wG1WgWYZWTlzce6D/view?usp=sharing"
                target="_blank"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineBook
                  style={{ marginBottom: "2px" }}
                />{" "}
                Resume
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Akshithachinthakindi"
                target="_blank"
                className="fork-btn-inner"
              >
                <AiFillGithub style={{ fontSize: "1.6em" }} />
              </Button>
            </Nav.Item>
            {/* <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Akshithachinthakindi"
                target="_blank"
                className="fork-btn-inner"
              >
                <AiFillBuild style={{ fontSize: "1.6em" }} />
              </Button>
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
