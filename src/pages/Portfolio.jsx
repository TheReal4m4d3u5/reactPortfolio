import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Project from '../components/Project';
import '../.././portfolioStyles.css';
import image1 from '../../src/assets/image1.png'; // Correct import path and file extension
import image2 from '../../src/assets/image2.png'; // Correct import path and file extension
import image3 from '../../src/assets/image3.png'; // Correct import path and file extension
import image4 from '../../src/assets/image4.png'; // Correct import path and file extension
import image5 from '../../src/assets/image4.png'; // Correct import path and file extension
import image6 from '../../src/assets/image4.png'; // Correct import path and file extension

const projects = [
  {
    title: 'Sound Board',
    description: 'A soundboard created using HTML, CSS, JavaScript, and Bootstrap.',
    image: image1,
    link: 'https://github.com/TheReal4m4d3u5/soundBoard',
  },
  {
    title: 'Weather App',
    description: 'A custom-built full-stack weather app.',
    image: image2,
    link: 'https://github.com/TheReal4m4d3u5/WeatherAPP',
  },
  {
    title: 'Employee Database',
    description: 'A database management system for employee records.',
    image: image2,
    link: 'https://github.com/TheReal4m4d3u5/EmployeeDB',
  },
  {
    title: 'Vehicle App',
    description: 'An interactive vehicle selection and customization app.',
    image: image2,
    link: 'https://github.com/TheReal4m4d3u5/Create-Vehicle',
  },
  {
    title: 'Task Manager',
    image: image2,
    link: 'https://github.com/TheReal4m4d3u5/TaskManager',
  },
  {
    title: 'Recipe Finder',
    description: 'An app to find and organize recipes by ingredients.',
    image: image2,
    link: 'https://github.com/TheReal4m4d3u5/RecipeFinder',
  }
];

const Portfolio = () => {
  return (
    <Container className="portfolio-page text-center mt-5">
      <h2 className="mb-4">My Portfolio</h2>
      <Row className="g-4">
        {projects.map((project, index) => (
          <Col key={index} sm={12} md={6} lg={4}>
            <Project
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;
