import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import Project from "./Project";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = ({ projectGroups }) => {
  const outerSwiperRef = useRef(null);
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  const handleGroupClick = (index) => {
    if (outerSwiperRef.current) {
      outerSwiperRef.current.slideTo(index);
    }
  };

  return (
    <>
      <div className="portfolio-nav-buttons">
        {projectGroups.map((group, index) => (
          <button
            key={group.groupId}
            className={`portfolio-nav-btn ${
              activeGroupIndex === index ? "active" : ""
            }`}
            onClick={() => handleGroupClick(index)}
          >
            {group.groupTitle}
          </button>
        ))}

        <a
          href="https://averyfullportfolio.netlify.app/"
          className="portfolio-nav-btn archive-nav-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Archive
        </a>
      </div>

      <Swiper
        slidesPerView={1}
        onSwiper={(swiper) => {
          outerSwiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveGroupIndex(swiper.activeIndex);
        }}
        modules={[Navigation, Pagination]}
        className="outerCarousel"
      >
        {projectGroups.map((group) => (
          <SwiperSlide key={group.groupId}>
            <section className="projectGroupSlide">
              <h2>{group.groupTitle}</h2>

              <Swiper
                slidesPerView={1}
                spaceBetween={24}
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                className="innerCarousel"
              >
                {group.projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <Project {...project} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
