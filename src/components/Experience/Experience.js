import React, { useState } from "react";
import { Container,  Modal } from "react-bootstrap";
import { motion } from "framer-motion";

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
      year: "2024",
      title: "President – Programming & Robotics Club",
      desc: "Led the Programming and Robotics Club, organized events and workshops.",
      cert: prclub
    },
    {
      year: "2023",
      title: "Project Intern – Skillwinner",
      desc: "Worked on frontend UI and real-world project development.",
      cert: skillwinner
    },
    {
      year: "2023",
      title: "Frontend Developer – Codexp",
      desc: "Developed modern UI using React.js and responsive design.",
      cert: codexp
    },
    {
      year: "2022",
      title: "Web Developer – Hex N Bit",
      desc: "Built websites using HTML, CSS, and JavaScript fundamentals.",
      cert: hexnbit
    }
  ];

  return (
    <>
      <Container fluid className="timeline-section">
        <Container>
          <motion.h1
            className="timeline-title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Experience Timeline
          </motion.h1>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="timeline-content">
                  <span className="timeline-year">{exp.year}</span>
                  <h5>{exp.title}</h5>
                  <p>{exp.desc}</p>

                  <button
                    className="timeline-btn"
                    onClick={() => handleShow(exp.cert)}
                  >
                    View Certificate
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Container>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Body className="modal-dark">
          <motion.img
            src={certificate}
            alt="certificate"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="cert-img"
          />
        </Modal.Body>
      </Modal>

      <style>{`
        .timeline-section{
          padding-top:120px;
          padding-bottom:100px;
          background:#0a0a0f;
          color:white;
        }

        .timeline-title{
          text-align:center;
          font-size:2.5rem;
          margin-bottom:60px;
          font-weight:700;
        }

        .timeline{
          position:relative;
          max-width:1000px;
          margin:auto;
        }

        .timeline::after{
          content:"";
          position:absolute;
          width:4px;
          background:#6a5acd;
          top:0;
          bottom:0;
          left:50%;
          transform:translateX(-50%);
        }

        .timeline-item{
          padding:20px 40px;
          position:relative;
          width:50%;
        }

        .timeline-item.left{
          left:0;
        }

        .timeline-item.right{
          left:50%;
        }

        .timeline-content{
          background:#151520;
          padding:20px;
          border-radius:12px;
          box-shadow:0 8px 25px rgba(0,0,0,0.5);
          transition:0.3s;
        }

        .timeline-content:hover{
          transform:scale(1.05);
          box-shadow:0 10px 35px rgba(106,90,205,0.5);
        }

        .timeline-year{
          font-size:14px;
          color:#aaa;
        }

        .timeline-btn{
          margin-top:10px;
          background:#6a5acd;
          border:none;
          padding:6px 14px;
          border-radius:20px;
          color:white;
        }

        .timeline-btn:hover{
          background:#836fff;
        }

        .modal-dark{
          background:#0a0a0f;
        }

        .cert-img{
          width:100%;
          border-radius:10px;
        }

        @media(max-width:768px){
          .timeline::after{
            left:20px;
          }

          .timeline-item{
            width:100%;
            padding-left:60px;
            padding-right:20px;
          }

          .timeline-item.right{
            left:0;
          }
        }
      `}</style>
    </>
  );
}

export default Experience;