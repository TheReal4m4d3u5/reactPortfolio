import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../styles/projectStyles.css';
import Tag from './Tag';

const Project = ({ title, description, image, gitlink, deployedlink, video, videoText, staginglink, tags }) => {
  return (
    <Card className="project-card ">


      <div className="myFlexCard">

        {image && (
          <Card.Img
            variant="top"
            src={image}
            alt={`${title} screenshot`}
            className="project-image"
          />
        )}



        <div className="myCard">
          <Card.Body className="d-flex flex-column">
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>

            {tags && (
              <div className="flex flex-wrap">
                {tags.map((tag) => (
                  <Tag key={tag} name={tag} />
                ))}
              </div>
            )}


            <div className="viewGithubProject">
              {gitlink && (
                <a
                  role="button"
                  tabIndex="0"
                  href={gitlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto btn viewGithubProject btn-primary custom-btn"
                >
                  View Github Project
                </a>
              )}
            </div>



            {staginglink && (
              <div className="mt-2">
                <a
                  role="button"
                  tabIndex="0"
                  href={staginglink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary custom-btn"
                >
                  View Staging Project
                </a>
              </div>
            )}
            {deployedlink && (
              <div className="mt-2">
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
              </div>
            )}
          </Card.Body>
        </div>


        <div className="imageVideo">
          {video && (

            <div className="project-video">
              <video controls className="w-100">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}

        </div>



      </div>





    </Card>
  );
};

export default Project;