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
import CS from "../../Assets/Projects/CS.png"
import DG from "../../Assets/Projects/DG.jpg"
import PDD from "../../Assets/Projects/PDD.png"
import AF from "../../Assets/Projects/AF.png"

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
              imgPath={CS}
              isBlog={false}
              title="Chingu Shoppe"
              description="Chingu Shoppe is a fully responsive dynamic ecommerce website, maximum compatiblities in all mobile devices, built with ReactJs"
              ghLink="https://chingu-shoppe.vercel.app/"
            />
          </Col>
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
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DG}
              isBlog={false}
              title="DG Logger"
              description="This project logs Diesel Generator (DG) ON/OFF timestamps using an ESP32, a DS3231 RTC, and Google Sheets as a cloud-based logbook via Google Apps Script Web App."
              ghLink="https://github.com/pibarel27/DG_Status"
            />
          </Col>
                      <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PDD}
              isBlog={false}
              title="Plant Disease Detection"
              description="Agri Disease Detection System Using Python Project Overview:The Agri Disease Detection System is a Python-based intelligent application designed to detect and classify various crop diseases using image processing and machine learning techniques. The system helps farmers identify plant diseases at an early stage, reducing crop loss and improving agricultural productivity."
              ghLink="https://github.com/pibarel27/Plant-Disease-Detection"
            />
          </Col>
                      <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AF}
              isBlog={false}
              title="AutoFiller"
              description="In live broadcasting environments like radio stations streaming to YouTube, copyright detection can instantly mute or block the stream. AutoFiller solves this problem by automatically switching to safe filler content whenever such an issue occurs.
The application runs continuously in the background and manages content switching without manual intervention."
              ghLink="https://github.com/pibarel27/AutoFiller"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
