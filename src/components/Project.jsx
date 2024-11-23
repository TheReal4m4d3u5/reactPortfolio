import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../styles/projectStyles.css';

const Project = ({ title, description, image, gitlink, deployedlink, video, videoText }) => {
  return (
    <Card className="project-card h-150">
      <div className="imageVideo">
        {image && (
          <Card.Img
            variant="top"
            src={image}
            alt={`${title} screenshot`}
            className="project-image"
          />
        )}
        {video && (

          <div className="project-video">
            <video controls className="w-100">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
      <Card.Text className="videoText">{videoText}</Card.Text>
      <div className="myCard">
        <Card.Body className="d-flex flex-column">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          {gitlink && (
            <a
              role="button"
              tabIndex="0"
              href={gitlink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto btn btn-primary custom-btn"
            >
              View Github Project
            </a>
          )}
          <div></div>
          {deployedlink && (
            <a
              role="button"
              tabIndex="0"
              href={deployedlink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto btn btn-primary custom-btn"
            >
              View Deployed Project
            </a>
          )}
        </Card.Body>
      </div>
    </Card>
  );
};

export default Project;