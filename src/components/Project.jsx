import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/projectStyles.css';
import Tag from './Tag';

const Project = ({
  title,
  description,
  image = null,
  video = null,
  videoText = null,
  gitlink = null,
  staginglink = null,
  deployedlink = null,
  tags = [],
}) => {

  if (!title || !description) {
    console.warn("Project requires title and description");
    return null;
  }

  return (
    <Card className="project-card">

      <div className="myFlexCard">

        {/* MEDIA */}
        {(video || image) && (
          <div className="media-container">

            {video && (
              <video
                src={video}
                controls
                className="project-media"
              />
            )}

            {!video && image && (
              <img
                src={image}
                alt={title}
                className="project-media"
              />
            )}

          </div>
        )}

        <div className="myCard">

          <Card.Body className="d-flex flex-column">

            {/* REQUIRED */}
            <Card.Title>{title}</Card.Title>
            <Card.Text className="project-description">
              {description}
            </Card.Text>

            {/* TAGS */}
            {tags.length > 0 && (
              <div className="flex flex-wrap">
                {tags.map((tag) => (
                  <Tag key={tag} name={tag} />
                ))}
              </div>
            )}

            {/* LINKS */}
            {(gitlink || staginglink || deployedlink) && (
              <div className="mt-auto d-flex flex-column gap-2">

                {gitlink && (
                  <a
                    href={gitlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary custom-btn"
                  >
                    GitHub
                  </a>
                )}

                {staginglink && (
                  <a
                    href={staginglink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary custom-btn"
                  >
                    Staging
                  </a>
                )}

                {deployedlink && (
                  <a
                    href={deployedlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success custom-btn"
                  >
                    Live
                  </a>
                )}

              </div>
            )}

          </Card.Body>
        </div>

      </div>

    </Card>
  );
};

export default Project;