import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <>
      <Card className="project-card-view modern-project-card">

        <div className="image-wrapper">
          <Card.Img
            variant="top"
            src={props.imgPath}
            alt="card-img"
            className="project-image"
          />
        </div>

        <Card.Body>
          <Card.Title className="project-title">
            {props.title}
          </Card.Title>

          <Card.Text className="project-description">
            {props.description}
          </Card.Text>

          <div className="button-group">

            <Button
              href={props.ghLink}
              target="_blank"
              className="project-btn"
            >
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>

            {!props.isBlog && props.demoLink && (
              <Button
                href={props.demoLink}
                target="_blank"
                className="project-btn demo-btn"
              >
                <CgWebsite /> &nbsp; Demo
              </Button>
            )}

          </div>
        </Card.Body>
      </Card>

      {/* 🔥 Internal Styling */}
      <style>{`

        .modern-project-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          overflow: hidden;
          transition: all 0.4s ease;
          animation: fadeInUp 0.8s ease forwards;
          color: white;
        }

        .modern-project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 0 25px rgba(199, 112, 240, 0.4);
        }

        .image-wrapper {
          overflow: hidden;
        }

        .project-image {
          transition: transform 0.5s ease;
        }

        .modern-project-card:hover .project-image {
          transform: scale(1.08);
        }

        .project-title {
          font-weight: 600;
          margin-bottom: 15px;
        }

        .project-description {
          text-align: justify;
          font-size: 0.95rem;
          opacity: 0.9;
          min-height: 80px;
        }

        .button-group {
          margin-top: 15px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .project-btn {
          background: linear-gradient(45deg, #c770f0, #7928ca);
          border: none;
          border-radius: 20px;
          padding: 6px 15px;
          transition: 0.3s ease;
        }

        .project-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 15px #c770f0;
        }

        .demo-btn {
          background: linear-gradient(45deg, #00c6ff, #0072ff);
        }

        .demo-btn:hover {
          box-shadow: 0 0 15px #00c6ff;
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

export default ProjectCards;