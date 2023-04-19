import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Akshitha Chinthakindi. </span>
            Currently, I am a third year Computer Science Under-graduate from
            <span className="purple"> Lovely Professional University </span>
            Specialized in 
            <span className="purple"> Full Stack Web Development. </span>
            <br />
            <br />
            I am a tech enthusiast with a good proficiency in 
            <span className="purple"> Web Development & Problem-Solving. </span> 
            When I'm not busy scribbling code, I like to keep things interesting
            by exploring various fields in technology such as making <span className="purple"> Illustrations </span> and as I am also interested in <span className="purple"> Graphics </span> and I often try to make new posters and illustrations as I am passionate about designing and editing. Not only this, but I'd like to collaborate on anything that values exllenece and innovation technology.
          </p>
          <h3 style={{ paddingBottom: "20px", paddingTop: "20px" }}>
             <strong className="purple">Education </strong>
          </h3>
          <p style={{ textAlign: "justify" }}>
            Lovely professional University | 
            <span className="purple"> Phagwara, Punjab</span>
            <br />
            <span className="purple">BTech, CSE &nbsp;|&nbsp; 2020 - Present </span>
            <br />
            Alphores Junior College |
            <span className="purple"> Karimnagar, Telangana</span>
            <br />
            <span className="purple">12th, PCM &nbsp;|&nbsp; 2018 - 2020 </span> <br />
            Siddhartha High School |
            <span className="purple"> Karimnagar, Telangana</span> 
            <br />
            <span className="purple">Matriculation &nbsp;|&nbsp; 2018 </span>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
