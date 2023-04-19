import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avataaars.svg";
// import MyImg from "../../Assets/Projects/MyImg.png"
import HomeMYImg from "../../Assets/Projects/HomeMYImg.png";
// import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <br />
            <br />
            <p className="home-about-body">
              I am a <b className="purple">Full Stack developer </b>
              who likes to craft solid and scalable full stack projects with great
              user experience.
              <br />
              <br />
              Like a Jedi with a lightsaber, I wield the power of{" "}
              <b className="purple">Javascript, React.js, Css, Git, Html</b> and
              more with ease. Though I may not be fully fluent, I approach my
              work with a relaxed and natural style, always striving for
              excellence.
              <br />
              <br />
              When I'm not coding, you can find me 
              <i>
                <b className="purple"> traveling </b> the
                world search of new adventures. Or, if the weather isn't
                cooperating, you might find me curled up on the couch with a
                <b className="purple"> good book</b> .
              </i>
              <br />
              <br />I am also part of
              <i>
              <b className="purple"> Microsoft Student Learn Ambassador Program </b>
              </i>
              where I get to Interact with senior microsoft leaders and also get to contribute to the community. Apart from this I also participate in various
              <b className="purple"> Hackathons & Coding Competions </b>
               where I get to learn and explore new things in technology.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            {/* <Tilt> */}
              <img src={HomeMYImg} className="img-fluid" alt="avatar" />
            {/* </Tilt> */}
          </Col>
        </Row>
        <Row>
          <br />
          <br />
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Akshithachinthakindi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/Akshithachinthakindi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
