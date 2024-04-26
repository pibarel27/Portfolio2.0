import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import SN from "../../Assets/Projects/SN.png";
import fb from "../../Assets/Projects/fb.png";
import noblenonprofit from "../../Assets/Projects/noblenonprofit.png";
import suicide from "../../Assets/Projects/suicide.png";
import Portfolio from "../../Assets/Portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noblenonprofit}
              isBlog={false}
              title="Noble Nonprofit"
              description="A platform where everyone can donate for needy."
              ghLink="https://github.com/pibarel27/Noble-Nonprofit_FrontEnd"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio"
              description="My personal portfolio bulid with HTML "
              ghLink="https://github.com/pibarel27/pibaportfolio.github.io"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fb}
              isBlog={false}
              title="Fb Clone"
              description="Facebook Login Page Clone"
              ghLink="https://github.com/pibarel27/fb.clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="NGO"
              description="SImple."
              ghLink="https://github.com/pibarel27/Chingu"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Chatbot"
              description="A chatbot is a computer program that simulates human conversation with an end user. Not all chatbots are equipped with artificial intelligence (AI), but modern chatbots increasingly use conversational AI techniques such as natural language processing (NLP) to understand user questions and automate responses to them."
              ghLink="https://github.com/pibarel27/Chatbot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SN}
              isBlog={false}
              title="Sign Language"
              description="Sign language is manual communication commonly used by people who are deaf. Sign language is not universal; people who are deaf from different countries speak different sign languages. The gestures or symbols in sign language are organized in a linguistic way."
              ghLink="https://github.com/pibarel27/SignLanguage"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
