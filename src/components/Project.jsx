import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../styles/projectStyles.css';


const Project = ({ title, description, image, link }) => {
  return (
    
    <Card className="project-card h-100">
      <Card.Img variant="top" src={image} alt={`${title} screenshot`} className="project-image" />
      <div className="myCard">
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <a
  role="button"
  tabindex="0"
  href=""
  target="_blank"
  rel="noopener noreferrer"
  className="mt-auto btn btn-primary custom-btn"
>
  View Project
</a>
      </Card.Body>
      </div>
    </Card>
    
  );
};

export default Project;