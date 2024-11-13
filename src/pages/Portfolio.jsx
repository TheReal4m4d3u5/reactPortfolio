import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Project from '../components/Project';
import '../styles/portfolioStyles.css';
import image1 from '../../src/assets/image1.png'; // Correct import path and file extension
import image2 from '../../src/assets/image2.png'; // Correct import path and file extension
import image3 from '../../src/assets/image3.png'; // Correct import path and file extension
import image4 from '../../src/assets/image4.png'; // Correct import path and file extension
import image5 from '../../src/assets/image5.png'; // Correct import path and file extension
import image6 from '../../src/assets/image6.png'; // Correct import path and file extension
import image7 from '../../src/assets/movieSearch.png';
import image8 from '../../src/assets/candidateSearch.png';

const projects = [
  {
    title: 'Sound Board',
    description: 'A soundboard created using HTML, CSS, JavaScript, and Bootstrap.',
    image: image1,
    gitLink: 'https://github.com/TheReal4m4d3u5/soundBoard',
    deployed: 'https://beautiful-dusk-78e4ee.netlify.app/',
  },
  {
    title: 'Weather App',
    description: 'A custom-built full-stack weather app.',
    image: image2,
    gitLink: 'https://github.com/TheReal4m4d3u5/WeatherAPP',
    deployed: 'https://weatherapp-ew0q.onrender.com',
  },
  {
    title: 'Movie Search',
    description: 'Searches a databas for movies and to add them to a watch or seen list.',
    image: image7,
    gitLink: 'https://github.com/TheReal4m4d3u5/movieSearch',
    deployed: 'https://meek-cassata-691e1b.netlify.app/',
  },
  {
    title: 'Candidate Search',
    description: 'Fetches a querry to githubs API key for potential candidates and alows the user to save them in a potenitial candidate search',
    image: image8,
    gitLink: 'https://github.com/TheReal4m4d3u5/candidateSearch',
    deployed: 'https://funny-biscochitos-9e1673.netlify.app/',
  },
  {
    title: 'Bucket Checklist',
    description: 'Alows user to create a checklist ranking them by priority and alows the user to check them off when completed',
    image: image3,
    link: 'https://github.com/TheReal4m4d3u5/bucketList',
  },
  {
    title: 'Employee Database',
    description: 'A database management system for employee records.',
    image: image3,
    gitLink: 'https://github.com/TheReal4m4d3u5/EmployeeDB',
    deployed: 'https://funny-biscochitos-9e1673.netlify.app/',
  },
  {
    title: 'Vehicle App',
    description: 'An interactive vehicle selection and customization app.',
    image: image4,
    link: 'https://github.com/TheReal4m4d3u5/Create-Vehicle',
  },
  {
    title: 'Readme Generator',
    description: 'A app that generates a readme.md',
    image: image5,
    link: 'https://github.com/TheReal4m4d3u5/Readme-Generator',
  },
  {
    title: 'React Profile',
    description: 'A vite and react application that generates a web profile',
    image: image6,
    link: 'https://github.com/TheReal4m4d3u5/reactPortfolio',
  }

];

const Portfolio = () => {
  return (


    <div className="portfolio-page">

      <section className="portfolio-Wraper">
        <section className="portfolio-Header">
          <h2 className="mb-4">My Portfolio</h2>
        </section>


        <Row className="portfolioCards">
          {projects.map((project, index) => (

            <Col key={index} sm={12} md={6} lg={4} className='cards'>

              <Project
                title={project.title}
                description={project.description}
                image={project.image}
                gitlink={project.gitLink}
                deployedlink={project.deployed}
              />

            </Col>

          ))}
        </Row>
      </section>
    </div>

  );
};

export default Portfolio;
