import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Container fluid className="about-section upgraded-about">
      <Particle />

      <Container>

        {/* TOP SECTION */}
        <Row className="align-items-center about-top">

          <Col
            md={7}
            className="about-text hidden"
            ref={(el) => (sectionsRef.current[0] = el)}
          >
            <h1 className="about-title">
              Know Who <span className="purple">I'M</span>
            </h1>
            <Aboutcard />
          </Col>

          <Col
            md={5}
            className="about-img text-center hidden"
            ref={(el) => (sectionsRef.current[1] = el)}
          >
            <img src={laptopImg} alt="about" className="img-fluid laptop-img" />
          </Col>

        </Row>

        {/* SKILLS */}
        <div
          className="section-spacing hidden"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h1 className="project-heading">
            Professional <span className="purple">Skillset</span>
          </h1>
          <Techstack />
        </div>

        {/* TOOLS */}
        <div
          className="section-spacing hidden delay-1"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h1 className="project-heading">
            <span className="purple">Tools</span> I use
          </h1>
          <Toolstack />
        </div>

        {/* GITHUB */}
        <div
          className="section-spacing hidden delay-2"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <Github />
        </div>

      </Container>

      {/* 🔥 STYLES */}
      <style>{`

        .upgraded-about {
          background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
          padding-top: 130px; /* ✅ FIXED (push whole section down) */
          padding-bottom: 90px;
          color: white;
        }

        /* Extra spacing under navbar */
        .about-top {
          margin-top: 20px; /* ✅ clean alignment */
        }

        .about-title {
          font-size: 2.5em;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .section-spacing {
          margin-top: 70px;
        }

        .about-img {
          padding-top: 60px;
        }

        .laptop-img {
          max-width: 350px;
          transition: transform 0.4s ease;
          animation: float 5s ease-in-out infinite;
        }

        .laptop-img:hover {
          transform: scale(1.08);
        }

        /* FLOAT */
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        /* SCROLL ANIMATION */
        .hidden {
          opacity: 0;
          transform: translateY(60px);
          transition: all 0.8s ease;
        }

        .show {
          opacity: 1;
          transform: translateY(0);
        }

        /* DELAYS */
        .delay-1 {
          transition-delay: 0.2s;
        }

        .delay-2 {
          transition-delay: 0.4s;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .about-img {
            padding-top: 30px;
          }

          .about-title {
            font-size: 2rem;
            text-align: center;
          }

          .section-spacing {
            margin-top: 50px;
          }

          .upgraded-about {
            padding-top: 110px; /* ✅ slightly smaller for mobile */
          }
        }

      `}</style>
    </Container>
  );
}

export default About;