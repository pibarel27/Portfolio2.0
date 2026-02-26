import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section upgraded-about">
      <Particle />

      <Container>

        {/* TOP SECTION */}
        <Row className="align-items-center about-top">

          <Col md={7} className="about-text slide-left">
            <h1 className="about-title">
              Know Who <span className="purple">I'M</span>
            </h1>
            <Aboutcard />
          </Col>

          <Col md={5} className="about-img floating-img text-center">
            <img src={laptopImg} alt="about" className="img-fluid laptop-img" />
          </Col>

        </Row>

        {/* SKILLS */}
        <div className="section-spacing slide-up">
          <h1 className="project-heading">
            Professional <span className="purple">Skillset</span>
          </h1>
          <Techstack />
        </div>

        {/* TOOLS */}
        <div className="section-spacing slide-up-delay">
          <h1 className="project-heading">
            <span className="purple">Tools</span> I use
          </h1>
          <Toolstack />
        </div>

        {/* GITHUB */}
        <div className="section-spacing slide-up-delay-2">
          <Github />
        </div>

      </Container>

      {/* 🔥 Internal Styling */}
      <style>{`

        .upgraded-about {
          background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
          padding-top: 100px;
          padding-bottom: 80px;
          color: white;
        }

        .about-title {
          font-size: 2.4em;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .section-spacing {
          margin-top: 60px;
        }

        .about-img {
          padding-top: 80px;
        }

        .laptop-img {
          max-width: 350px;
          transition: transform 0.4s ease;
        }

        .laptop-img:hover {
          transform: scale(1.05);
        }

        /* Floating animation */
        .floating-img {
          animation: float 5s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        /* Slide Left */
        .slide-left {
          animation: slideLeft 1s ease-out forwards;
        }

        @keyframes slideLeft {
          from {
            transform: translateX(-100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        /* Slide Up */
        .slide-up {
          animation: slideUp 1s ease-out forwards;
        }

        .slide-up-delay {
          animation: slideUp 1s ease-out forwards;
          animation-delay: 0.3s;
        }

        .slide-up-delay-2 {
          animation: slideUp 1s ease-out forwards;
          animation-delay: 0.6s;
        }

        @keyframes slideUp {
          from {
            transform: translateY(80px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .about-img {
            padding-top: 30px;
          }
        }

      `}</style>
    </Container>
  );
}

export default About;