import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";

function ProjectCards(props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="experience-card">
        <Card.Img variant="top" src={props.imgPath} alt="experience-img" />

        <Card.Body>
          <Card.Title>{props.title}</Card.Title>

          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>

          <Button
            variant="primary"
            href={props.certificateLink}
            target="_blank"
          >
            View Certificate
          </Button>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default ProjectCards;