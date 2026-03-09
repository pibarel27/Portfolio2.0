import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineWhatsApp,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Pibarel Maisnam</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/pibarel27"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://twitter.com/MaisnamPibarel"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://wa.me/+918595089569"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineWhatsApp />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/akash-maisnam-92726224b/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.instagram.com/__cooldude69/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.facebook.com/pibarel1998"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
            </li>
          </ul>
        </Col>
      </Row>

      <style>{`
        .footer-icons {
          display: flex;
          justify-content: center;
          // gap: 5px;
          padding: 0;
          list-style: none;
        }

        .footer-icons .social-icons a {
          font-size: 1.2rem;   /* 🔥 reduced size */
          transition: 0.3s ease;
        }

        .footer-icons .social-icons a:hover {
          transform: scale(1.1);
        }
           .footer-icons {
          display: flex;
          justify-content: center;
          gap: 12px;
          padding: 0;
          list-style: none;
        }

        .footer-icons .social-icons a {
          font-size: 0.9rem;   /* 🔥 smaller icons */
          color: white;
          transition: 0.3s ease;
        }

        .footer-icons .social-icons a:hover {
          transform: scale(1.08);
        }
          .footer-icons {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 0;
    list-style: none;
  }

  /* 🔥 Smaller circle */
  .footer-icons .social-icons a {
    font-size: 0.85rem;        
    width: 32px;               
    height: 32px;              
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(255,255,255,0.08);
    color: white;
    transition: 0.3s ease;
  }

  .footer-icons .social-icons a:hover {
    transform: scale(1.08);
  }
    /* 📱 Mobile Responsive */
@media (max-width: 768px) {

  .footer {
    text-align: center;
    padding: 20px 10px;
  }

  .footer-copywright h3 {
    font-size: 0.9rem;
    margin: 5px 0;
  }

  .footer-body {
    margin-top: 10px;
  }

  .footer-icons {
    gap: 8px;
    margin-top: 8px;
  }

  .footer-icons .social-icons a {
    width: 28px;
    height: 28px;
    font-size: 0.75rem;
  }

}
      `}</style>
    </Container>
  );
}

export default Footer;
