import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import DESAM from "../../Assets/Projects/DESAM.png";
import SN from "../../Assets/Projects/SN.png";
import fb from "../../Assets/Projects/fb.png";
import noblenonprofit from "../../Assets/Projects/noblenonprofit.png";
import chatbot from "../../Assets/Projects/chatbot.png";
import Portfolio from "../../Assets/Portfolio.png";
import ChinguLyrics from "../../Assets/ChingLyrics.png"

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
              imgPath={ChinguLyrics}
              isBlog={false}
              title="Chingu Lyrics"
              description="This project is a feature-rich music-lyrics player built using ReactJS, designed to provide users with a seamless and immersive music listening experience. The core functionality of the music player includes play, pause, next, previous and Guitar Chords track controls, but it goes beyond that by offering real-time lyrics synchronization for an enhanced music experience."
              ghLink="https://chingu-lyrics.vercel.app"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noblenonprofit}
              isBlog={false}
              title="Noble Nonprofit"
              description="
              This is a donation Webpage designed to reduce needy people  by donating excess essential items to poor or needy peoples. This Webpage is based on ReactsJs and HTML & CSS.."
              ghLink="https://github.com/pibarel27/Noble-Nonprofit_FrontEnd"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio"
              description="A portfolio is a compilation of materials that exemplifies your beliefs, skills, qualifications, education, training, and experiences. It provides insight into your personality and work ethic. A portfolio website is generally a static website featuring work samples and other details as explained above. It is closely related to Online Resume or C.V. "
              ghLink="https://github.com/pibarel27/pibaportfolio.github.io"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fb}
              isBlog={false}
              title="Fb Clone"
              description="Facebook Login Page Clone by using HTML and Css"
              ghLink="https://github.com/pibarel27/fb.clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DESAM}
              isBlog={false}
              title="DESAM"
              description="A simple website for an students organization web page with using ReactJs Tailwind Css."
              ghLink="https://github.com/pibarel27/DESAM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Chatbot"
              description="A chatbot is a computer program that simulates human conversation with an end user. Not all chatbots are equipped with artificial intelligence (AI), but modern chatbots increasingly use conversational AI techniques such as natural language processing (NLP) to understand user questions and automate responses to them. Here we can upload our files and can ask any related to it"
              ghLink="https://github.com/pibarel27/Chatbot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SN}
              isBlog={false}
              title="Sign Language"
              description="Sign language is manual communication commonly used by people who are deaf. Sign language is not universal; people who are deaf from different countries speak different sign languages. The gestures or symbols in sign language are organized in a linguistic way."
              ghLink="https://github.com/pibarel27/Sign-Language"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
