import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <>
      <Card className="quote-card-view modern-card">
        <Card.Body>
          <blockquote className="blockquote mb-0">

            <p className="about-text">
              Hi Everyone, I am <span className="purple">Pibarel Maisnam</span>
              from <span className="purple">Imphal, India.</span>
              <br />
              I am a student at <span className="purple">Manipur Technical University</span>.
              <br />
              Apart from coding, some other activities that I love to do!
            </p>

            <ul className="about-list">
              <li className="about-activity">
                <ImPointRight /> Playing Games
              </li>
              <li className="about-activity">
                <ImPointRight /> Playing Guitar
              </li>
              <li className="about-activity">
                <ImPointRight /> Travelling
              </li>
            </ul>

            <p className="quote-text">
              "Embrace the power of technology, for in its evolution lies the blueprint of our future and the potential to transform the world."
            </p>

            <footer className="blockquote-footer modern-footer">
              Pibarel
            </footer>

          </blockquote>
        </Card.Body>
      </Card>

      {/* 🔥 Internal Styling */}
      <style>{`

        .modern-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 20px;
          color: white;
          transition: all 0.4s ease;
          animation: fadeInUp 1s ease forwards;
        }

        .modern-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 25px rgba(199, 112, 240, 0.4);
        }

        .about-text {
          text-align: justify;
          font-size: 1.05rem;
          line-height: 1.8;
        }

        .about-list {
          margin-top: 20px;
          padding-left: 0;
          list-style: none;
        }

        .about-activity {
          margin: 12px 0;
          font-size: 1rem;
          transition: 0.3s ease;
        }

        .about-activity:hover {
          color: #c770f0;
          transform: translateX(8px);
        }

        .quote-text {
          margin-top: 25px;
          font-style: italic;
          font-size: 1.05rem;
          color: #c770f0;
          text-align: center;
        }

        .modern-footer {
          text-align: center;
          margin-top: 10px;
          font-weight: 600;
          color: #aaa;
        }

        /* Animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

      `}</style>
    </>
  );
}

export default AboutCard;