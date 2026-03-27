import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/projectStyles.css';
import Tag from './Tag';

const Project = ({
  title,
  description,
  image,
  gitlink,
  deployedlink,
  staginglink,
  tags,
}) => {
  return (
    <Card className="project-card">
      <div className="myFlexCard">
        {/* Image */}
        {image && (
          <Card.Img
            variant="top"
            src={image}
            alt={`${title} screenshot`}
            className="project-image"
          />
        )}

        {/* Content */}
        <div className="myCard">
          <Card.Body className="d-flex flex-column h-100">
            {/* Title */}
            <Card.Title className="project-title">
              {title}
            </Card.Title>

            {/* Description */}
            <Card.Text className="project-description">
              {description}
            </Card.Text>

            {/* Tags */}
            {tags && (
              <div className="tags-container">
                {tags.map((tag, index) => (
                  <Tag key={index} text={tag} />
                ))}
              </div>
            )}

            {/* Links (always pushed to bottom) */}
            <div className="project-links mt-auto">
              {gitlink && (
                <a
                  href={gitlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary custom-btn"
                >
                  View Github Project
                </a>
              )}

              {deployedlink && (
                <a
                  href={deployedlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary custom-btn mt-2"
                >
                  View Live Project
                </a>
              )}

              {staginglink && (
                <a
                  href={staginglink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary custom-btn mt-2"
                >
                  View Staging
                </a>
              )}
            </div>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default Project;