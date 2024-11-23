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
import image9 from '../../src/assets/image9.png'; // Correct import path and file extension
import image10 from '../../src/assets/image10.png'; // Correct import path and file extension
import image11 from '../../src/assets/carProgram.png'; // Correct import path and file extension
import image12 from '../../src/assets/battleship.png'; // Correct import path and file extension
import image13 from '../../src/assets/csci1203A6.png'; // Correct import path and file extension
import image14 from '../../src/assets/csci1113A5.png'; // Correct import path and file extension
import image15 from '../../src/assets/csci1111A7.png'; // Correct import path and file extension
import image16 from '../../src/assets/csci1111A5.png'; // Correct import path and file extension
import image17 from '../../src/assets/csci1113A6.png'; // Correct import path and file extension
import bookSearch from '../../src/assets/bookSearch.png'; // Correct import path and file extension

import socialMediaVideo from '../../src/assets/socialMediaAPI.mp4'; // Correct import path and file extension



const graphqlProjects = [

];



const matLabProjects = [
  {
    title: 'MatDrive',
    description: 'A wireframe of car driving around a city only using linear algebra and Matlab ',
    image: image11,
    gitLink: 'https://github.com/TheReal4m4d3u5/Calc4_Matlab_Car',
  },
];


const mongoProjects = [
  {
    video: socialMediaVideo,
    title: 'Student Statistics',
    description: 'A back-end application that uses MongoDB, Mongoose, and Express.js to calculate student statistics.',
    videoText: "Click to watch video",
    gitLink: 'https://github.com/TheReal4m4d3u5/studentStatisticsBack-End',
  },

  {
    video: socialMediaVideo,
    title: 'Social Media API',
    description: 'A back-end social media restul application that uses MongoDB. ',
    videoText: "Click to watch video",
    gitLink: 'https://github.com/TheReal4m4d3u5/socialNetworkAPI',
  },
  {
    title: 'Tech Matchup App',
    description: 'a full-stack web application built with the MERN stack. The app allows users to create matchups between two technologies and vote for their favorite. Uses Apollo Client for making GraphQL queries and mutations to interact with the backend.',
    image: bookSearch,
    gitLink: 'https://github.com/TheReal4m4d3u5/bookSearchEngine',
    deployed: 'https://booksearchengine-5ikq.onrender.com',
  },
  {
    title: 'Book Search Engine',
    description: 'lets users search books via the Google Books API, create accounts, and manage personalized book lists. With GraphQL API and JWT authentication, it ensures efficient data handling and secure sessions for a seamless experience.',
    image: bookSearch,
    gitLink: 'https://github.com/TheReal4m4d3u5/bookSearchEngine',
    deployed: 'https://booksearchengine-5ikq.onrender.com',
  },
];


const javaProjects = [
  {
    title: 'Battleshipt',
    description: 'A command line program that lets two people play battleship',
    image: image12,
    gitLink: 'https://github.com/TheReal4m4d3u5/csci_1203_assignment_battleship',
  },

  {
    title: 'MiniBot Simulator',
    description: 'A functioning ur_Robot-like Java class with basic robot behaviors, demonstrated in a simple test program.',
    image: image13,
    gitLink: 'https://github.com/TheReal4m4d3u5/csci_1203_assignment_6/tree/main',
  },
];

const cProjects = [
  {
    title: 'Card Dealer',
    description: 'This program simulates a deck of playing cards, providing functionality to shuffle, deal cards, and display card details.',
    image: image15,
    gitLink: 'https://github.com/TheReal4m4d3u5/csci_1111_assignment_7',
  },

  {
    title: 'Event Probability Simulator',
    description: 'Simulates random events (coin flips and die rolls) and analyzes the distribution of results and determine if the results appear uniformly random.',
    image: image16,
    gitLink: 'https://github.com/TheReal4m4d3u5/csci_1111_assignment_5',
  },

  {
    title: 'Functions and command-line argument',
    description: 'A command line demonstration of command line arguments',
    image: image17,
    gitLink: 'https://github.com/TheReal4m4d3u5/csci_1113_assignment_6',
  },

  {
    title: 'Car Calculator',
    description: 'This program calculates and outputs distances traveled by two cars under constant acceleration.',
    image: image14,
    gitLink: 'https://github.com/TheReal4m4d3u5/csci_1113_assignment_5',
  },

];




const javaScriptProjects = [
  {
    title: 'Aline',
    description: 'A full stack website that allows you to search for events and save your events',
    image: image9,
    gitLink: 'https://github.com/TheReal4m4d3u5/Aline-Events',
    deployed: 'https://aline-events.onrender.com/',
  },
  {
    title: 'Kanban Board',
    description: 'A full stack custom built kanban board',
    image: image10,
    gitLink: 'https://github.com/TheReal4m4d3u5/Aline-Events',
    deployed: 'https://github.com/TheReal4m4d3u5/kanbanBoard',
  },
  {
    title: 'Weather App',
    description: 'A custom-built full-stack weather app.',
    image: image2,
    gitLink: 'https://github.com/TheReal4m4d3u5/WeatherAPP',
    deployed: 'https://weatherapp-ew0q.onrender.com',
  },
  {
    title: 'Film Tracker',
    description: 'Full stack movies database search and alows user to add them to a watch or seen list.',
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
    gitLink: 'https://github.com/TheReal4m4d3u5/bucketList',
  },
  {
    title: 'Employee Database',
    description: 'A database management system for employee records.',
    image: image3,
    gitLink: 'https://github.com/TheReal4m4d3u5/EmployeeDB',
  },
  {
    title: 'Vehicle App',
    description: 'An interactive vehicle selection and customization app.',
    image: image4,
    gitLink: 'https://github.com/TheReal4m4d3u5/Create-Vehicle',
  },
  {
    title: 'Readme Generator',
    description: 'A app that generates a readme.md',
    image: image5,
    gitLink: 'https://github.com/TheReal4m4d3u5/Readme-Generator',
  },
  {
    title: 'React Profile',
    description: 'A vite and react application that generates a web profile',
    image: image6,
    gitLink: 'https://github.com/TheReal4m4d3u5/reactPortfolio',
    deployed: 'https://zesty-starlight-a7d6e2.netlify.app/',
  },
  {
    title: 'Sound Board',
    description: 'A soundboard created using HTML, CSS, JavaScript, and Bootstrap.',
    image: image1,
    gitLink: 'https://github.com/TheReal4m4d3u5/soundBoard',
    deployed: 'https://beautiful-dusk-78e4ee.netlify.app/',
  },
];

const Portfolio = () => {
  return (


    <div className="portfolio-page">



      <section className="portfolio-Wraper">

        <h1 className="portfilioHeaderText">My Portfolio</h1>




        <Row className="portfolioCards">

          <div className="javaScriptHeader">React Javascript</div>

          <div className="disclaimerWraper">
            <div className="disclaimer">Some deployments will take 1 to 15 mins to spin up if they haven't been in use</div>
          </div>

          {javaScriptProjects.map((project, index) => (

            <Col key={index} sm={12} md={6} lg={4} className='cards'>

              <Project
                title={project.title}
                description={project.description}
                image={project.image}
                video={project.video}
                gitlink={project.gitLink}
                deployedlink={project.deployed}
              />

            </Col>

          ))}


          <div className="mongoDBHeader">MongoDB</div>
          <div className="disclaimerWraper">
            <div className="disclaimer">Some deployments will take 1 to 15 mins to spin up if they haven't been in use</div>
          </div>

          {mongoProjects.map((project, index) => (

            <Col key={index} sm={12} md={6} lg={4} className='cards'>

              <Project
                title={project.title}
                description={project.description}
                image={project.image}
                video={project.video}
                videoText={project.videoText}
                gitlink={project.gitLink}
                deployedlink={project.deployed}
              />

            </Col>

          ))}


          <div className="matLabHeader">Matlab</div>

          {matLabProjects.map((project, index) => (

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



          <div className="javaHeader">Java</div>

          {javaProjects.map((project, index) => (

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


          <div className="cHeader">C</div>

          {cProjects.map((project, index) => (

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


          {/* <div className="">Open GL</div>

          {javaProjects.map((project, index) => (

            <Col key={index} sm={12} md={6} lg={4} className='cards'>

              <Project
                title={project.title}
                description={project.description}
                image={project.image}
                gitlink={project.gitLink}
                deployedlink={project.deployed}
              />

            </Col>

          ))} */}


          {/* <div className="">C++</div>

          {javaProjects.map((project, index) => (

            <Col key={index} sm={12} md={6} lg={4} className='cards'>

              <Project
                title={project.title}
                description={project.description}
                image={project.image}
                gitlink={project.gitLink}
                deployedlink={project.deployed}
              />

            </Col>

          ))} */}


          {/* <div className="">Python Projects</div>

          {javaProjects.map((project, index) => (

            <Col key={index} sm={12} md={6} lg={4} className='cards'>

              <Project
                title={project.title}
                description={project.description}
                image={project.image}
                gitlink={project.gitLink}
                deployedlink={project.deployed}
              />

            </Col>

          ))} */}






        </Row>
      </section>
    </div>

  );
};

export default Portfolio;
