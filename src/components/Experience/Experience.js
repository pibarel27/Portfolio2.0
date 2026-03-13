import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import Particle from "../Particle";

import skillwinner from "../../Assets/experience/skillwinner.png";
import codexp from "../../Assets/experience/codexp.png";
import hexnbit from "../../Assets/experience/hexnbit.png";
import prclub from "../../Assets/experience/prclub.png";



function Experience() {

  const [show, setShow] = useState(false);
  const [certificate, setCertificate] = useState("");

  const handleShow = (cert) => {
    setCertificate(cert);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const experiences = [
    {
      img: prclub,
      title: "President – Programming & Robotics Club",
      desc: "Led the Programming and Robotics Club at university, organizing coding workshops and technical events.",
      cert: prclub
    },
    {
      img: skillwinner,
      title: "Project Intern – Skillwinner",
      desc: "Worked as a Project Intern remotely, contributing to frontend web development tasks.",
      cert: skillwinner
    },
    {
      img: codexp,
      title: "Frontend Web Developer – Codexp",
      desc: "Developed responsive frontend interfaces using React.js and JavaScript.",
      cert: codexp
    },
    {
      img: hexnbit,
      title: "Web Developer – Hex N Bit",
      desc: "Completed a web development internship focusing on HTML, CSS, and JavaScript.",
      cert: hexnbit
    }
  ];

  return (
    <>
      <style>
        {`
        .experience-card{
          background:#151515;
          border-radius:15px;
          transition:0.4s;
          box-shadow:0 6px 20px rgba(0,0,0,0.3);
        }

        .experience-card:hover{
          transform:translateY(-10px) scale(1.03);
          box-shadow:0 12px 35px rgba(138,43,226,0.4);
        }

        .experience-card img{
          height:200px;
          object-fit:cover;
        }

        .experience-title{
          color:white;
          font-weight:600;
        }

        .experience-desc{
          color:#cfcfcf;
          font-size:14px;
        }

        .certificate-btn{
          background:linear-gradient(45deg,#8a2be2,#6a5acd);
          border:none;
          margin-top:10px;
        }

        .certificate-btn:hover{
          background:linear-gradient(45deg,#6a5acd,#8a2be2);
        }

        .certificate-img{
          width:100%;
          border-radius:10px;
        }
        `}
      </style>

      <Container fluid className="project-section">
        <Particle />

        <Container>

          <h1 className="project-heading">
            My <strong className="purple">Experience</strong>
          </h1>

          <p style={{ color: "white" }}>
            Here are some professional roles and internships I have completed.
          </p>

          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

            {experiences.map((exp, index) => (
              <Col md={4} key={index} className="project-card">

                <Card className="experience-card">

                  <Card.Img variant="top" src={exp.img} />

                  <Card.Body>

                    <Card.Title className="experience-title">
                      {exp.title}
                    </Card.Title>

                    <Card.Text className="experience-desc">
                      {exp.desc}
                    </Card.Text>

                    <Button
                      className="certificate-btn"
                      onClick={() => handleShow(exp.cert)}
                    >
                      View Certificate
                    </Button>

                  </Card.Body>

                </Card>

              </Col>
            ))}

          </Row>

        </Container>
      </Container>

      {/* Certificate Modal */}

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Body>
          <img src={certificate} alt="certificate" className="certificate-img" />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Experience;