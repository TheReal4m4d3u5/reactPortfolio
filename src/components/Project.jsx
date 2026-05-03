import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import Lightbox from "yet-another-react-lightbox";

import "swiper/css";
import "yet-another-react-lightbox/styles.css";

import "../styles/projectStyles.css";
import Tag from "./Tag";

import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Modal from "react-modal";
Modal.setAppElement("#root");
const Project = ({
  title,
  description,
  image,
  images = [],
  gitlink,
  deployedlink,
  video,
  staginglink,
  tags = [],
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const projectImages = Array.isArray(images) ? images : [];
  const fallbackImages = Array.isArray(image) ? image : image ? [image] : [];
  const galleryImages =
    projectImages.length > 0 ? projectImages : fallbackImages;

  return (
    <Card className="project-card">
      <div className="myFlexCard">
        {(video || galleryImages.length > 0) && (
          <div className="media-container">
            {video ? (
              <>
                <div className="video-wrapper">
                  <video src={video} controls className="project-media" />

                  <button
                    className="custom-fullscreen-btn"
                    onClick={() => setIsVideoOpen(true)}
                  >
                    ⛶
                  </button>
                </div>

                <Modal
                  isOpen={isVideoOpen}
                  onRequestClose={() => setIsVideoOpen(false)}
                  className="video-modal"
                  overlayClassName="video-modal-overlay"
                >
                  <button
                    className="video-modal-close"
                    onClick={() => setIsVideoOpen(false)}
                  >
                    ×
                  </button>

                  <video
                    src={video}
                    controls
                    autoPlay
                    className="video-modal-player"
                  />
                </Modal>
              </>
            ) : (
              <>
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  modules={[Navigation, Pagination]}
                >
                  {galleryImages.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={img}
                        alt={`${title} screenshot ${index + 1}`}
                        className="project-media"
                        onClick={() => {
                          setImageIndex(index);
                          setLightboxOpen(true);
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <Lightbox
                  open={lightboxOpen}
                  close={() => setLightboxOpen(false)}
                  index={imageIndex}
                  slides={galleryImages.map((img) => ({ src: img }))}
                />
              </>
            )}
          </div>
        )}

        {/* ADD THIS HERE */}
        <div className="project-preview-overlay">
          <h3>{title}</h3>
          <p>
            {description
              ? description
                  .split("\n") // split into lines
                  .slice(0, 6) // take first 3 lines
                  .join(" ") // join back into one string
                  .slice(0, 500) + "..." // limit to 300 chars
              : ""}
          </p>
        </div>

        <div className="myCard project-reveal-content">
          <Card.Body className="d-flex flex-column project-reveal-content">
            <Card.Title>{title}</Card.Title>

            <Card.Text className="project-description">{description}</Card.Text>

            {Array.isArray(tags) && tags.length > 0 && (
              <div className="flex flex-wrap">
                {tags.map((tag, index) => (
                  <Tag key={`${tag}-${index}`} name={tag} />
                ))}
              </div>
            )}

            {gitlink && (
              <div className="viewGithubProject">
                <a
                  href={gitlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto btn btn-primary custom-btn"
                >
                  View Github Project
                </a>
              </div>
            )}

            {staginglink && (
              <div className="mt-2">
                <a
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
      </div>
    </Card>
  );
};

export default Project;
