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
  {
    title: 'Shopping Cart Polymorphism',
    description: `This project implements a polymorphic shopping cart in JavaScript, where different item types—PhysicalItem, DigitalItem, and GiftCard—calculate their prices uniquely. Each item extends a base class CartItem and overrides the calculatePrice method to apply specific pricing logic: adding shipping fees for physical items, applying no fees for digital items, and applying discounts for gift cards. The ShoppingCart class aggregates these items, allowing users to add items and compute the total price dynamically. This design demonstrates polymorphism by treating all items uniformly while preserving their individual behaviors.`,
    image: coinToss,
    gitLink: 'https://github.com/TheReal4m4d3u5/shoppingCartPolymorphism',
  },

  {
    title: 'Customer Room Reservations',
    description: `This project is a Python-based room reservation system for hotel management, allowing customers to book rooms, check availability, and manage reservations. It features a Customer class that inherits from a Reservation class, enabling room validation, booking, and updating room availability stored in a JSON file. Reservation details, including customer information and total cost, are saved in a CSV file for record-keeping. The system ensures efficient room management and handles errors gracefully during the booking process.`,
    image: coinToss,
    gitLink: 'https://github.com/TheReal4m4d3u5/shoppingCartPolymorphism',
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
    description: `
The Employee Tracker is a command-line application built with Node.js, Inquirer, and PostgreSQL that allows business owners to manage and organize employee data efficiently. It provides a menu-driven interface to view and manage departments, roles, and employees, enabling users to add new entries, update employee roles, and display formatted tables of company information. The application connects to a PostgreSQL database to store and retrieve data dynamically, offering a streamlined solution for internal company resource management.`,
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
    description: `This project is a Social Network API built using Express.js for routing, MongoDB for the NoSQL database, and Mongoose as the ODM. The API enables users to create, update, and delete profiles, share thoughts, react to friends' thoughts, and manage friend lists. The project includes RESTful endpoints to handle CRUD operations for users, thoughts, and reactions, demonstrating the ability to manage large amounts of unstructured data efficiently.`,
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
    description: 'This project is a full-stack MERN (MongoDB, Express.js, React, Node.js) application that allows users to search for books using the Google Books API and save their favorite books. The RESTful API has been refactored to a GraphQL API using Apollo Server to handle queries and mutations for user authentication, book searching, and saving or removing books. The front end integrates Apollo Client for GraphQL requests and supports user authentication with JWT. The app is deployed on Render with a MongoDB Atlas database, providing a seamless and efficient experience for managing personalized book lists.',
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

const fullStackProjects = [
  {
    title: 'Aline',
    description: 'Aline-Events is a full-stack web application built with Node.js, Express.js, React, and PostgreSQL using the Sequelize ORM. It features a RESTful API for retrieving and adding event data, with JWT authentication for secure access. The application integrates with the Ticketmaster API for event information and the OpenWeather API for real-time weather forecasts. The frontend is responsive and interactive, ensuring a polished user experience. The project follows the separation of concerns design principle, protects sensitive information with environment variables, and is deployed on Render for seamless access.',
    image: image9,
    gitLink: 'https://github.com/TheReal4m4d3u5/Aline-Events',
    deployed: 'https://aline-events.onrender.com/',
  },
  {
    title: 'Weather App',
    description: 'This project is a full-stack weather dashboard application that retrieves and displays the 5-day weather forecast for various cities using the OpenWeather API. The front end provides a search interface where users can input city names and view current and future weather conditions, including temperature, humidity, wind speed, and weather icons. The back end, built with Node.js and Express, handles API calls, stores search history in a JSON file, and serves data to the client. The application is deployed on Render for live use and integrates features like search history persistence and optional city deletion functionality.',
    image: image2,
    gitLink: 'https://github.com/TheReal4m4d3u5/WeatherAPP',
    deployed: 'https://weatherapp-ew0q.onrender.com',
  },
  {
    title: 'Candidate Search',
    description: 'The Candidate Search application is a React-based front-end project written in TypeScript that interfaces with the GitHub API to display user profiles. It allows employers to review candidates by fetching their GitHub data (name, location, avatar, and more), save potential candidates to local storage, and reject others. The project provides dynamic navigation between candidate review and a saved candidates list, ensuring data persistence across sessions. The application is deployed on Render and includes clean UI components, responsive design, and best practices for maintainability and scalability.',
    image: image8,
    gitLink: 'https://github.com/TheReal4m4d3u5/candidateSearch',
    deployed: 'https://funny-biscochitos-9e1673.netlify.app/',
  },
  {
    title: 'Kanban Board',
    description: 'This project is a full-stack Kanban board application that incorporates JWT-based authentication to secure user access. The application includes a login page where users provide credentials, which are verified on the server. Upon successful authentication, a JWT is issued and stored in local storage, allowing users to manage their tasks securely. Protected routes ensure that only authenticated users can access the Kanban board, and JWTs are validated for each request to maintain security. The app is deployed on Render, integrating PostgreSQL for database management.',
    image: image10,
    gitLink: 'https://github.com/TheReal4m4d3u5/kanbanBoard',
    deployed: 'https://kanbanboard-552l.onrender.com',
  },
];

const javaScriptProjects = [


  {
    title: 'Blog',
    description: `This project is a two-page personal blog application built with HTML, CSS, and JavaScript. It allows users to submit blog posts via a form containing fields for username, blog title, and content. Submitted posts are stored in localStorage and displayed on a separate blog page. The blog page features a light/dark mode toggle to switch themes dynamically and a "Back" button to return to the form. The application includes validation to ensure all fields are filled before submission and displays a list of blog posts with the author's username, title, and content.`,
    image: blog,
    gitLink: 'https://github.com/TheReal4m4d3u5/firstBlog',
  },

  {
    title: 'Film Tracker',
    description: 'Full stack movies database search and alows user to add them to a watch or seen list.',
    image: image7,
    gitLink: 'https://github.com/TheReal4m4d3u5/movieSearch',
    deployed: 'https://meek-cassata-691e1b.netlify.app/',
  },

  {
    title: 'Bucket Checklist',
    description: 'Alows user to create a checklist ranking them by priority and alows the user to check them off when completed',
    image: image3,
    gitLink: 'https://github.com/TheReal4m4d3u5/bucketList',
  },
  {
    title: 'Vehicle App',
    description: 'The Vehicle Builder is a TypeScript-based command-line application that allows users to create and interact with different types of vehicles: cars, trucks, and motorbikes. Using the Inquirer package for user prompts, the application lets users input vehicle details, perform vehicle-specific actions (e.g., driving a car, loading cargo in a truck, or performing stunts with a motorbike), and manage existing vehicles. The project demonstrates effective use of classes, TypeScript interfaces, and user-driven workflows.',
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
    description: `This project is a React-based single-page portfolio application that showcases a web developer's skills and projects. It features dynamic navigation with React Router to seamlessly switch between sections like About Me, Portfolio, Contact, and Resume without reloading the page. The Portfolio section highlights six projects using a reusable Project component, each with links to deployed applications and GitHub repositories. The Contact section includes a form with validation for user inputs. The application is styled with a custom design, responsive for mobile-first use, and deployed on Netlify for accessibility.`,
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

          <div className="mongoDBHeader">Full Stack PERN</div>
          <div className="disclaimerWraper">
            <div className="disclaimer">Some deployments will take 1 to 15 mins to spin up if they haven't been in use</div>
          </div>

          {fullStackProjects.map((project, index) => (
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


          <div className="mongoDBHeader">Full Stack MERN</div>
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



          <div className="javaScriptHeader">React.js / Javascript / Typescript</div>
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
