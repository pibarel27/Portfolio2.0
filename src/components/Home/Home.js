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
                Hi There! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M <strong className="main-name">Pibarel Maisnam</strong>
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
                  className="home-img"
                />
              </div>
            </Col>

          </Row>
        </Container>
      </Container>

      <Home2 />

      <style>{`

        .home-section {
          position: relative;
          padding-top: 80px;
          padding-bottom: 60px;
          color: white;
          background: transparent;
          overflow-x: hidden;
        }

        .home-header {
          text-align: left;
        }

        @media (max-width: 768px) {
          .home-header {
            text-align: center;
            margin-bottom: 30px;
          }
        }

        .heading {
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          font-weight: 600;
        }

        .heading-name {
          font-size: clamp(2rem, 5vw, 2.8rem);
          margin-top: 10px;
        }

        .main-name {
          background: linear-gradient(45deg, #c770f0, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .type-section {
          padding-top: 30px;
        }

        /* IMAGE FIX */
        .image-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .home-img {
          width: 100%;
          max-width: 420px;   
          height: auto;
          object-fit: contain;
          animation: float 4s ease-in-out infinite;
          transition: 0.4s ease;
        }

        @media (max-width: 992px) {
          .home-img {
            max-width: 350px;
          }
        }

        @media (max-width: 768px) {
          .home-img {
            max-width: 280px;
            margin-top: 20px;
          }
        }

        @media (max-width: 576px) {
          .home-img {
            max-width: 230px;
          }
        }

        .home-img:hover {
          transform: scale(1.05);
          filter: drop-shadow(0 0 20px #c770f0);
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }

      `}</style>
    </section>
  );
}

export default Home;
