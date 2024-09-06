import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import MTU from "../../Assets/MTU.png";
import JohnstoneLogo from "../../Assets/JHSS.png"; 

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pibarel Maisnam </span>
            from <span className="purple"> Imphal, India.</span>
            <br />
            I am a student at Manipur Technical University.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
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

          <p style={{ color: "rgb(155 126 172)" }}>
            "Embrace the power of technology, for in its evolution lies the blueprint of our future and the potential to transform the world."
          </p>
          <footer className="blockquote-footer">Pibarel</footer>
        </blockquote>
      </Card.Body>

      
      <Card.Body className="education-section">
        <h3 className="education-heading">Education</h3>
        <div className="education-item">
          <img src={MTU} alt="University Logo" className="education-logo-img" />
          <div className="education-text">
            <h4 className="education-title">
                Manipur Technical University
           </h4>
            <p>Bachelor of Technology in Computer Science and Engineering</p>
          </div>
          <a href="https://www.mtu.ac.in" target="_blank" rel="noopener noreferrer" className="education-button">
            Visit
          </a>
        </div>
        <div className="education-item">
          <img src={JohnstoneLogo} alt="Johnstone Logo" className="education-logo-img" />
          <div className="education-text">
            <h4 className="education-title">
                Johnstone Higher Secondary School
              
            </h4>
            <p>Secondary School Education</p>
          </div>
          <a href="https://en.wikipedia.org/wiki/Johnstone_Higher_Secondary_School,_Imphal" target="_blank" rel="noopener noreferrer" className="education-button">
            Visit
          </a>
        </div>
        <div className="education-item">
          <div className="education-text">
            <h4 className="education-title">
                Kelian Memorial School   
            </h4>
            <p>High School Education</p>
          </div>
          <a href="https://schools.org.in/east-khasi-hills/17060900506/kelian-memorial-secondary-school.html" target="_blank" rel="noopener noreferrer" className="education-button">
            Visit
          </a>
        </div>
      </Card.Body>

      <style jsx>{`
        .quote-card-view {
          margin: 20px;
          padding: 30px;
          background-color: #f8f9fa;
          border-radius: 10px;
          box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
        }

        .purple {
          color: #6c63ff;
        }

        .education-section {
          display: flex;
          flex-direction: column;
          margin-top: 20px;
        }

        .education-heading {
          font-size: 24px;
          color: #6c63ff; 
          margin-bottom: 20px; 
          font-weight: bold; 
          text-align: left; 
        }

        .education-item {
          display: flex;
          align-items: flex-start;
          width: 100%; 
          padding: 20px;
          border: 2px solid #6c63ff;
          border-radius: 10px;
          background-color: transparent;
          transition: box-shadow 0.3s ease;
          box-sizing: border-box; 
          justify-content: space-between; 
          margin-bottom: 20px; 
        }

        .education-item:hover {
          box-shadow: 0 0 15px rgba(108, 99, 255, 0.7);
        }

        .education-logo-img {
          width: 120px;
          height: auto;
          margin-right: 20px; 
        }

        .education-text {
          flex-grow: 1;
        }

        .education-title {
          margin: 0;
          color: #6c63ff;
        }

        .education-title a {
          text-decoration: none;
          color: #6c63ff;
        }

        .education-title a:hover {
          text-decoration: underline;
        }

        .education-button {
          background-color: #6c63ff;
          color: #ffffff;
          padding: 8px 15px;
          border: none;
          border-radius: 5px;
          text-decoration: none;
          font-size: 14px;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
          margin-left: 20px; 
          align-self: flex-end; 
        }

        .education-button:hover {
          background-color: #5a54e0;
          box-shadow: 0 0 5px rgba(108, 99, 255, 0.7);
        }

        /* Responsive Styles */
        @media (min-width: 768px) {
          .education-section {
            flex-direction: column;
          }
        }

        @media (min-width: 992px) {
          .education-item {
            flex-direction: row;
          }

          .education-logo-img {
            margin-right: 30px; 
          }

          .education-text {
            margin-left: 30px;
          }
        }
      `}</style>
    </Card>
  );
}

export default AboutCard;
