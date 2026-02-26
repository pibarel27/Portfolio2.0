import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineWhatsApp,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section upgraded-section" id="about">
      <Container>
        <Row className="align-items-center">

          {/* LEFT SIDE */}
          <Col md={8} className="home-about-description slide-up">
            <h1 className="about-title">
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>

            <p className="home-about-body">
              I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
              <br /><br />

              I am fluent in classics like
              <b className="purple"> Python, C++, Javascript</b>
              <br /><br />

              My field of Interest's are building new
              <b className="purple"> Web Technologies and Products</b> and also in areas related to
              <b className="purple"> Blockchain.</b>
              <br /><br />

              Whenever possible, I apply my passion using
              <b className="purple"> Node.js</b> and
              <b className="purple"> React.js, Next.js</b>
            </p>
          </Col>

          {/* RIGHT SIDE */}
          <Col md={4} className="myAvtar text-center floating-avatar">
            <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.05}>
              <img src={myImg} className="img-fluid avatar-img" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        {/* SOCIAL SECTION */}
        <Row>
          <Col md={12} className="home-about-social slide-up-delay">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a href="https://github.com/pibarel27" target="_blank" rel="noreferrer">
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a href="https://twitter.com/MaisnamPibarel" target="_blank" rel="noreferrer">
                  <AiOutlineTwitter />
                </a>
              </li>

              <li className="social-icons">
                <a href="https://www.linkedin.com/in/akash-maisnam-92726224b/" target="_blank" rel="noreferrer">
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a href="https://www.instagram.com/__cooldude69/" target="_blank" rel="noreferrer">
                  <AiFillInstagram />
                </a>
              </li>

              <li className="social-icons">
                <a href="https://www.facebook.com/pibarel1998" target="_blank" rel="noreferrer">
                  <AiFillFacebook />
                </a>
              </li>

              <li className="social-icons">
                <a href="https://wa.me/+918595089569" target="_blank" rel="noreferrer">
                  <AiOutlineWhatsApp />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* 🔥 Internal Styling */}
      <style>{`

  .upgraded-section {
    padding: 80px 0;
    background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
    color: white;
  }

  .about-title {
    font-size: 2.6em;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .home-about-body {
    font-size: 1.1rem;
    line-height: 1.8;
    opacity: 0.9;
  }

  .avatar-img {
    max-width: 250px;
    transition: transform 0.3s ease;
  }

  .floating-avatar {
    animation: float 4s ease-in-out infinite;
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
  }

  /* ===================== */
  /* 🔥 SOCIAL ICON GLOW */
  /* ===================== */

  .home-about-social-links {
    list-style: none;
    padding: 0;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap; /* makes responsive */
    gap: 20px;
  }

  .social-icons a {
    font-size: 1.8rem;
    color: white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    transition: all 0.4s ease;
    position: relative;
  }

  /* ✨ Default soft glow */
  .social-icons a::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #c770f0;
    opacity: 0.15;
    filter: blur(15px);
    z-index: -1;
    transition: 0.4s ease;
  }

  /* 🚀 Hover Animation */
  .social-icons a:hover {
    transform: translateY(-8px) scale(1.15);
    color: #fff;
    box-shadow: 0 0 15px #c770f0,
                0 0 30px #c770f0,
                0 0 45px #7c3aed;
  }

  .social-icons a:hover::before {
    opacity: 0.6;
    filter: blur(25px);
  }

  /* 💫 Soft pulse animation */
  .social-icons {
    animation: pulseGlow 3s infinite ease-in-out;
  }

  @keyframes pulseGlow {
    0% {
      filter: drop-shadow(0 0 0px #c770f0);
    }
    50% {
      filter: drop-shadow(0 0 10px #c770f0);
    }
    100% {
      filter: drop-shadow(0 0 0px #c770f0);
    }
  }

  /* 📱 Responsive Improvements */
  @media (max-width: 768px) {
    .home-about-social-links {
      gap: 15px;
    }

    .social-icons a {
      width: 48px;
      height: 48px;
      font-size: 1.5rem;
    }
  }

`}</style>
    </Container>
  );
}

export default Home2;