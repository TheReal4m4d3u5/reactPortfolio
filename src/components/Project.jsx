import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../.././projectStyles.css';


const Project = ({ title, description, image, link }) => {
  return (
    <Card className="project-card h-100">
      <Card.Img variant="top" src={image} alt={`${title} screenshot`} className="project-image" />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button
          variant="primary"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto"
        >
          View Project
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Project;