import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Pibarel from "../../Assets/Pibarel.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />

        <Container className="home-content">
          <Row className="align-items-center">

            {/* LEFT SIDE */}
            <Col md={7} className="home-header slide-left">

              <h1 className="heading">
                Hi There!{" "}
                <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M{" "}
                <strong className="main-name">
                  Pibarel Maisnam
                </strong>
              </h1>

              <div className="type-section">
                <Type />
              </div>

            </Col>

            {/* RIGHT SIDE */}
            <Col md={5} className="slide-right text-center">
              <div className="image-wrapper">
                <img
                  src={Pibarel}
                  alt="home pic"
                  className="img-fluid floating-img"
                />
              </div>
            </Col>

          </Row>
        </Container>
      </Container>

      <Home2 />

      {/* 🔥 Internal Styling */}
      <style>{`

        .home-section {
          position: relative;
          padding-top: 80px;
          padding-bottom: 50px;
          color: white;
        }

        .heading {
          font-size: 2.5rem;
          font-weight: 600;
          animation: fadeDown 1s ease forwards;
        }

        .heading-name {
          font-size: 2.8rem;
          margin-top: 10px;
          animation: fadeUp 1.2s ease forwards;
        }

        .main-name {
          background: linear-gradient(45deg, #c770f0, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .type-section {
          padding-top: 40px;
          font-size: 1.2rem;
          animation: fadeUp 1.5s ease forwards;
        }

        /* Wave Animation */
        .wave {
          display: inline-block;
          animation: waveAnimation 2s infinite;
          transform-origin: 70% 70%;
        }

        @keyframes waveAnimation {
          0% { transform: rotate(0deg); }
          15% { transform: rotate(14deg); }
          30% { transform: rotate(-8deg); }
          40% { transform: rotate(14deg); }
          50% { transform: rotate(-4deg); }
          60% { transform: rotate(10deg); }
          70% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }

        /* Slide Animations */
        .slide-left {
          animation: slideLeft 1s ease-out forwards;
        }

        .slide-right {
          animation: slideRight 1s ease-out forwards;
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

        @keyframes slideRight {
          from {
            transform: translateX(100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        /* Fade Animations */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Floating Image */
        .image-wrapper {
          position: relative;
        }

        .floating-img {
          max-height: 450px;
          animation: float 4s ease-in-out infinite;
          transition: 0.4s ease;
        }

        .floating-img:hover {
          transform: scale(1.05);
          filter: drop-shadow(0 0 20px #c770f0);
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        @media (max-width: 768px) {
          .heading {
            font-size: 2rem;
          }

          .heading-name {
            font-size: 2.2rem;
          }

          .type-section {
            text-align: center;
          }
        }

      `}</style>
    </section>
  );
}

export default Home;