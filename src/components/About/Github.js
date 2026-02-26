import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Container } from "react-bootstrap";

function Github() {
  return (
    <>
      <Container fluid className="github-section">
        <Row className="justify-content-center">

          <h1 className="project-heading modern-heading">
            Days I <span className="gradient-text">Code</span>
          </h1>

          <div className="calendar-wrapper">
            <GitHubCalendar
              username="pibarel27"
              blockSize={15}
              blockMargin={5}
              color="#c084f5"
              fontSize={14}
            />
          </div>

        </Row>
      </Container>

      {/* 🔥 Internal Styling */}
      <style>{`

        .github-section {
          padding: 40px 0;
          animation: fadeInUp 1s ease;
        }

        .modern-heading {
          text-align: center;
          padding-bottom: 30px;
          font-weight: 600;
          color: white;
        }

        .gradient-text {
          background: linear-gradient(45deg, #c084f5, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .calendar-wrapper {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          padding: 25px;
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: center;
          transition: 0.4s ease;
        }

        .calendar-wrapper:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 25px rgba(192, 132, 245, 0.4);
        }

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

        @media (max-width: 768px) {
          .calendar-wrapper {
            padding: 15px;
            overflow-x: auto;
          }
        }

      `}</style>
    </>
  );
}

export default Github;