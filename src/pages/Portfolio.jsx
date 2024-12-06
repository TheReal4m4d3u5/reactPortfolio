import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Project from '../components/Project';
import '../styles/portfolioStyles.css';
import image1 from '../../src/assets/image1.png';
import image2 from '../../src/assets/image2.png';
import image3 from '../../src/assets/image3.png';
import image4 from '../../src/assets/image4.png';
import image5 from '../../src/assets/image5.png';
import image6 from '../../src/assets/image6.png';
import image7 from '../../src/assets/movieSearch.png';
import image8 from '../../src/assets/candidateSearch.png';
import image9 from '../../src/assets/image9.png';
import image10 from '../../src/assets/image10.png';
import image11 from '../../src/assets/carProgram.png';
import image12 from '../../src/assets/battleship.png';
import image13 from '../../src/assets/csci1203A6.png';
import image14 from '../../src/assets/csci1113A5.png';
import image15 from '../../src/assets/csci1111A7.png';
import image16 from '../../src/assets/csci1111A5.png';
import image17 from '../../src/assets/csci1113A6.png';
import bookSearch from '../../src/assets/bookSearch.png';
import cirlceCI from '../../src/assets/cirlceCI.png';
import coinToss from '../../src/assets/coinToss.png';
import blog from '../../src/assets/blog.png';

import selenium from '../../src/assets/selenium.png';


import tDD1 from '../../src/assets/tDD1.png';
import reactTDD from '../../src/assets/reactTDD.png';

import socialMediaVideo from '../../src/assets/socialMediaAPI.mp4';
import vehicleVideo from '../../src/assets/module8.mp4';
import employeeDB from '../../src/assets/employeeDB.mp4';


const seleniumProjects = [
  {
    title: 'My Selenium Test Suite',
    description: `My own custom build Selenium test suite using Maven, Java, Appium, BDD, Cucumber and Chromedriver`,
    image: selenium,
    gitLink: 'https://github.com/TheReal4m4d3u5/mySelenium',
  },
];


const ciCDProjects = [
  {
    title: 'GitHub Actions CI-CD Setup',
    description: `Full stack CI/CD deployment, using git protections and a staging and production deployment using CirlceCI`,
    image: cirlceCI,
    gitLink: 'https://github.com/TheReal4m4d3u5/gitHubActionsCI-CDSetup/tree/main',
    staging: 'https://githubactionsci-cdsetup-staging.onrender.com',
    deployed: 'https://github-actions-ci-cd-setup-9j9z.onrender.com',
  },
  {
    title: 'GitHub Actions CI-CD Setup',
    description: `Full stack CI/CD deployment, using git protections and a staging and production deployment using Git Actions`,
    image: cirlceCI,
    gitLink: 'https://github.com/TheReal4m4d3u5/gitHubActionsCI-CDSetup/tree/main',
    staging: 'https://githubactionsci-cdsetup-staging.onrender.com',
    deployed: 'https://github-actions-ci-cd-setup-9j9z.onrender.com',
  },
];


const pythonProjects = [
  {
    title: 'Coin Toss',
    description: `This program simulates a coin toss to determine which player starts a two-person game. The CoinToss class initializes with no side up and includes a toss method that uses randomness to set the coin's side to "Heads" or "Tails." Players input their guess, and the program compares it to the toss result to decide who starts first. `,
    image: coinToss,
    gitLink: 'https://github.com/TheReal4m4d3u5/coin_toss',
  },
  {
    title: 'Shopping Cart',
    description: `This project involves implementing a Composition Price Calculation system to calculate the total price of items in a shopping cart. The goal is to design a reusable PriceCalculator class with a calculate_total_price method to handle pricing logic. This class is integrated into three item classes PhysicalItem, DigitalItem, and GiftCard through composition. Each item class delegates price calculation to the PriceCalculator, simplifying pricing logic and adhering to separation of concerns.`,
    image: coinToss,
    gitLink: 'https://github.com/TheReal4m4d3u5/shoppingCart',
  },
];



const tDDProjects = [

  {
    title: 'Tech Quiz Test Suite',
    description: `Built with a MERN stack (MongoDB, Express.js, React, Node.js), by adding comprehensive testing using Cypress. The app allows users to take a 10-question quiz, answer questions sequentially, view their final score, and start a new quiz. Component tests focus on the Quiz component's behavior, while end-to-end tests simulate the full user journey, from starting the quiz to viewing the score and restarting.`,
    image: tDD1,
    gitLink: 'https://github.com/TheReal4m4d3u5/techQuizTestSuite',
  },

  {
    title: 'Ensure React Components Render Properly ',
    description: 'Focuses on implementing tests to ensure React components render properly and match snapshots. This requires setting up testing environment with tools like @testing-library/react, vitest, and happy-dom, importing the necessary components into test files, and writing tests to verify components render without errors and match snapshots.',
    image: tDD1,
    gitLink: 'https://github.com/TheReal4m4d3u5/ensureReactComponentsRenderProperly',
  },
  {
    title: 'Reactify Essentials TDD',
    description: 'This program is a React-based application built with TypeScript, focusing on creating reusable components and maintaining high-quality standards through robust testing. It features a Calculator component that supports arithmetic operations, a potential Advertisement component for displaying promotional content, and a modern testing setup using Vitest and React Testing Library. The testing environment is enhanced with Happy DOM for DOM simulation.',
    image: reactTDD,
    gitLink: 'https://github.com/TheReal4m4d3u5/reactifyEssentialsTest',
  },

  {
    title: 'TDD Test Cases',
    description: 'This project emphasizes strong foundational skills in TDD, testing frameworks, and building robust, validated code.',
    image: tDD1,
    gitLink: 'https://github.com/TheReal4m4d3u5/tDDTestCases',
  },

];


const matLabProjects = [
  {
    title: 'MatDrive',
    description: 'A wireframe of car driving around a city only using linear algebra and Matlab ',
    image: image11,
    gitLink: 'https://github.com/TheReal4m4d3u5/Calc4_Matlab_Car',
  },
];


const sqlProjects = [

  {
    video: employeeDB,
    videoText: "Click to watch video",
    title: 'Employee DB',
    description: `Sql employee database `,
    gitLink: 'https://github.com/TheReal4m4d3u5/EmployeeDB',
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
    title: 'Blog',
    description: 'A custom build blog',
    image: blog,
    gitLink: 'https://github.com/TheReal4m4d3u5/firstBlog',
  },

  {
    title: 'Kanban Board',
    description: 'A full stack custom built kanban board',
    image: image10,
    gitLink: 'https://github.com/TheReal4m4d3u5/Aline-Events',
    deployed: 'https://kanbanboard-552l.onrender.com',
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
    video: vehicleVideo,
    videoText: "Click to watch video",
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
                videoText={project.videoText}
                gitlink={project.gitLink}
                deployedlink={project.deployed}
              />

            </Col>

          ))}



          <div className="mongoDBHeader">SQL</div>


          {sqlProjects.map((project, index) => (

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


          <div className="javaHeader">Python</div>

          {pythonProjects.map((project, index) => (

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

          <div className="cHeader">TDD</div>

          {tDDProjects.map((project, index) => (

            <Col key={index} sm={12} md={6} lg={4} className='cards'>

              <Project
                title={project.title}
                description={project.description}
                image={project.image}
                gitlink={project.gitLink}
              />

            </Col>

          ))}

          <div className="cHeader">BDD</div>

          {seleniumProjects.map((project, index) => (

            <Col key={index} sm={12} md={6} lg={4} className='cards'>

              <Project
                title={project.title}
                description={project.description}
                image={project.image}
                gitlink={project.gitLink}
              />

            </Col>

          ))}


          <div className="cHeader">CI/CD Devops</div>
          <div className="disclaimer">Some deployments will take 1 to 15 mins to spin up if they haven't been in use</div>
          {ciCDProjects.map((project, index) => (

            <Col key={index} sm={12} md={6} lg={4} className='cards'>

              <Project
                title={project.title}
                description={project.description}
                image={project.image}
                gitlink={project.gitLink}
                staginglink={project.staging}
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

        </Row>
      </section>
    </div>

  );
};

export default Portfolio;
