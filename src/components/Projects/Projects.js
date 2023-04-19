import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import proj2 from "../../Assets/Projects/proj2.png";
import proj1 from "../../Assets/Projects/proj1.png";
import proj3 from "../../Assets/Projects/proj3.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj1}
              isBlog={false}
              title="Chase"
              description="This website is made for a simpler banking experience for a simpler life With 10 million transcations all over the globe. we are ready to handle all your payement problems nationally and internationally where you can invest with our team of expert investors who continuously research the markets and help you in your investing journey."
              ghLink="https://github.com/Akshithachinthakindi/Chase-website"
              demoLink="https://akshithachinthakindi.github.io/Chase-website/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj2}
              isBlog={false}
              title="VConnect"
              description="An innovative platform where women in STEM fields can come together and discuss. VConnect creates an inclusive culture to successfully harness technology’s potential to truly transform society. It will act as an innovative platform where women in STEM fields can come together and discuss their ideas and doubts and queries."
              ghLink="https://github.com/Akshithachinthakindi/VConnect"
              demoLink="https://akshithachinthakindi.github.io/VConnect-master/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj3}
              isBlog={false}
              title="E-learning website"
              description="An online learning platform is an integrated set of interactive online services that provide trainers, learners, and others involved in education with information, tools and resources to support and enhance education delivery and management. One type of eLearning platform is a learning management system (LMS)."
              ghLink="https://github.com/Akshithachinthakindi/E-Learning-Portal"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
