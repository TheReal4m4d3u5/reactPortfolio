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
import gitActions from '../../src/assets/gitActions.png';
import selenium from '../../src/assets/selenium.png';
import tDD1 from '../../src/assets/tDD1.png';
import reactTDD from '../../src/assets/reactTDD.png';

import socialMediaVideo from '../../src/assets/socialMediaAPI.mp4';
import vehicleVideo from '../../src/assets/module8.mp4';
import employeeDB from '../../src/assets/employeeDB.mp4';

const seleniumProjects = [
  {
    title: 'My Selenium Test Suite',
    description: `A custom-built Selenium test suite for automated testing.`,
    image: selenium,
    gitLink: 'https://github.com/TheReal4m4d3u5/mySelenium',
    tags: ['Selenium', 'Maven', 'Java', 'Appium', 'BDD', 'Cucumber', 'Chromedriver'],
  },
];


const ciCDProjects = [
  {
    title: 'CI-CD Setup',
    description: `Full stack CI/CD deployment with git protections and staging and production environments.`,
    image: cirlceCI,
    gitLink: 'https://github.com/TheReal4m4d3u5/gitHubActionsCI-CDSetup/tree/main',
    staging: 'https://githubactionsci-cdsetup-staging.onrender.com',
    deployed: 'https://github-actions-ci-cd-setup-9j9z.onrender.com',
    tags: ['CI/CD', 'CircleCI', 'Staging', 'Production Deployment', 'Git Protections'],
  },
  {
    title: 'GitHub Actions CI-CD Setup',
    description: `Full stack deployment pipeline.`,
    image: gitActions,
    gitLink: 'https://github.com/TheReal4m4d3u5/gitHubActionsCI-CDSetup/tree/main',
    staging: 'https://githubactionsci-cdsetup-staging.onrender.com',
    deployed: 'https://github-actions-ci-cd-setup-9j9z.onrender.com',
    tags: ['CI/CD', 'GitHub Actions', 'Git Protections', 'Staging Deployment', 'Production Deployment'],
  },
];


const pythonProjects = [
  {
    title: 'Coin Toss',
    description: `Simulates a coin toss to determine which player starts a two-person game. Players input their guess, and the program compares it to the toss result to decide who starts first.`,
    image: coinToss,
    gitLink: 'https://github.com/TheReal4m4d3u5/coin_toss',
    tags: ['Python', 'Command-Line Application'],
  },
  {
    title: 'Shopping Cart',
    description: 'A system to calculate the total price of items in a shopping cart using composition.',
    image: coinToss,
    gitLink: 'https://github.com/TheReal4m4d3u5/shoppingCart',
    tags: ['Python', 'Composition'],
  },
  {
    title: 'Shopping Cart Polymorphism',
    description: 'A polymorphic shopping cart where different item types calculate prices uniquely.',
    image: coinToss,
    gitLink: 'https://github.com/TheReal4m4d3u5/shoppingCartPolymorphism',
    tags: ['Python', 'Polymorphism'],
  },
  {
    title: 'Customer Room Reservations',
    description: 'A system for hotel management to book rooms, check availability, and manage reservations.',
    image: coinToss,
    gitLink: 'https://github.com/TheReal4m4d3u5/customerRoomReservations',
    tags: ['Python', 'CSV', 'JSON'],
  },
  {
    title: 'Bank Account',
    description: 'A command-line banking application for managing savings account deposits and withdrawals.',
    image: coinToss,
    gitLink: 'https://github.com/TheReal4m4d3u5/bankAccount',
    tags: ['Python', 'Command-Line Application'],
  },

  {
    title: 'Student Profile Creator',
    description: 'A tool for managing student profiles with input validation and CSV storage.',
    image: coinToss,
    gitLink: 'https://github.com/TheReal4m4d3u5/studentProfileCreator',
    tags: ['Python', 'CSV', 'Input Validation'],
  },

  {
    title: 'Write to a File',
    description: 'A tool for managing book sales data stored in a CSV file.',
    image: coinToss,
    gitLink: 'https://github.com/TheReal4m4d3u5/writeToFilePY',
    tags: ['Python', 'CSV', 'File Management'],
  },
  {
    title: 'Exam Averages',
    description: 'A script to read exam scores from a CSV file and calculate average scores.',
    image: coinToss,
    gitLink: 'https://github.com/TheReal4m4d3u5/examAverages',
    tags: ['Python', 'CSV', 'Data Analysis'],
  },

  {
    title: 'Hotel Reservation System',
    description: 'A command-line application for managing hotel room bookings and availability.',
    image: coinToss,
    gitLink: 'https://github.com/TheReal4m4d3u5/hotelReservationSystem',
    tags: ['Python', 'Command-Line Application'],
  },

];



const tDDProjects = [

  {
    title: 'Tech Quiz Test Suite',
    description: 'A quiz application with comprehensive component and end-to-end testing.',
    image: tDD1,
    gitLink: 'https://github.com/TheReal4m4d3u5/techQuizTestSuite',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Cypress', 'MERN Stack'],
  },

  {
    title: 'Ensure React Components Render Properly',
    description: 'A project that implements tests to ensure React components render correctly and match snapshots.',
    image: tDD1,
    gitLink: 'https://github.com/TheReal4m4d3u5/ensureReactComponentsRenderProperly',
    tags: ['React', 'Vitest', 'React Testing Library', 'Happy DOM', 'Testing'],
  },
  {
    title: 'Reactify Essentials TDD',
    description: 'A React-based application with reusable components and a robust testing setup.',
    image: reactTDD,
    gitLink: 'https://github.com/TheReal4m4d3u5/reactifyEssentialsTest',
    tags: ['React', 'TypeScript', 'Vitest', 'React Testing Library', 'Happy DOM', 'TDD'],
  },

  {
    title: 'TDD Test Cases',
    description: 'A project focusing on foundational skills in TDD and testing frameworks.',
    image: tDD1,
    gitLink: 'https://github.com/TheReal4m4d3u5/tDDTestCases',
    tags: ['TDD', 'Testing Frameworks', 'JavaScript'],
  },

];


const matLabProjects = [
  {
    title: 'MatDrive',
    description: 'A wireframe of car driving around a city only using linear algebra and Matlab ',
    image: image11,
    gitLink: 'https://github.com/TheReal4m4d3u5/Calc4_Matlab_Car',
    tags: ['Matlab', 'Linear Algebra'],
  },
];


const sqlProjects = [

  {
    video: employeeDB,
    videoText: 'Click to watch video',
    title: 'Employee DB',
    description: 'A command-line application that allows business owners to manage and organize employee data efficiently.',
    gitLink: 'https://github.com/TheReal4m4d3u5/EmployeeDB',
    tags: ['Node.js', 'Inquirer', 'PostgreSQL', 'Command-Line Application'],
  },
];



const mongoProjects = [
  {
    video: socialMediaVideo,
    title: 'Student Statistics',
    description: 'A back-end application to calculate student statistics.',
    videoText: 'Click to watch video',
    gitLink: 'https://github.com/TheReal4m4d3u5/studentStatisticsBack-End',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
  },

  {
    video: socialMediaVideo,
    title: 'Social Media API',
    description: 'A Social Network API with RESTful endpoints for managing users, thoughts, and reactions.',
    videoText: 'Click to watch video',
    gitLink: 'https://github.com/TheReal4m4d3u5/socialNetworkAPI',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'RESTful API'],
  },
  {
    title: 'Tech Matchup App',
    description: 'A full-stack web application that allows users to create matchups and vote for their favorite technologies.',
    image: bookSearch,
    gitLink: 'https://github.com/TheReal4m4d3u5/bookSearchEngine',
    deployed: 'https://booksearchengine-5ikq.onrender.com',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'GraphQL', 'Apollo Server', 'MERN Stack'],
  },
  {
    title: 'Book Search Engine',
    description: 'A full-stack application to search and save books using the Google Books API.',
    image: bookSearch,
    gitLink: 'https://github.com/TheReal4m4d3u5/bookSearchEngine',
    deployed: 'https://booksearchengine-5ikq.onrender.com',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'GraphQL', 'Apollo Server', 'JWT', 'MERN Stack'],
  },
];


const javaProjects = [
  {
    title: 'Battleship',
    description: 'A command-line program that lets two people play battleship.',
    image: image12,
    gitLink: 'https://github.com/TheReal4m4d3u5/csci_1203_assignment_battleship',
    tags: ['Java', 'Command-Line Application', 'Game Simulation'],
  },

  {
    title: 'MiniBot Simulator',
    description: 'A Java class with basic robot behaviors, demonstrated in a simple test program.',
    image: image13,
    gitLink: 'https://github.com/TheReal4m4d3u5/csci_1203_assignment_6/tree/main',
    tags: ['Java', 'Robot Simulation', 'Command-Line Application'],
  },
];

const cProjects = [
  {
    title: 'Card Dealer',
    description: 'This program simulates a deck of playing cards, providing functionality to shuffle, deal cards, and display card details.',
    image: image15,
    gitLink: 'https://github.com/TheReal4m4d3u5/csci_1111_assignment_7',
    tags: ['C', 'Command-Line Application'],
  },

  {
    title: 'Event Probability Simulator',
    description: 'Simulates random events and analyzes the distribution of results to determine if they appear uniformly random.',
    image: image16,
    gitLink: 'https://github.com/TheReal4m4d3u5/csci_1111_assignment_5',
    tags: ['C', 'Randomness', 'Command-Line Application'],
  },

  {
    title: 'Functions and Command-Line Argument',
    description: 'A demonstration of command-line arguments and functions.',
    image: image17,
    gitLink: 'https://github.com/TheReal4m4d3u5/csci_1113_assignment_6',
    tags: ['C', 'Command-Line Application'],
  },

  {
    title: 'Car Calculator',
    description: 'Calculates and outputs distances traveled by two cars under constant acceleration.',
    image: image14,
    gitLink: 'https://github.com/TheReal4m4d3u5/csci_1113_assignment_5',
    tags: ['C', 'Physics Simulation', 'Command-Line Application'],
  },

];


const pernProjects = [
  {
    title: 'Aline',
    description: 'A full-stack web application that features a RESTful API for retrieving and adding event data. The application integrates with the Ticketmaster API for event information and the OpenWeather API for real-time weather forecasts. The frontend is responsive and interactive, ensuring a polished user experience. Protects sensitive information with environment variables, and all api calls are done on the backend',
    image: image9,
    gitLink: 'https://github.com/TheReal4m4d3u5/Aline-Events',
    deployed: 'https://aline-events.onrender.com/',
    tags: ['Node.js', 'Express.js', 'React', 'PostgreSQL', 'Sequelize', 'RESTful API', 'JWT', 'Ticketmaster API', 'OpenWeather API', 'Render'],
  },
  {
    title: 'Kanban Board',
    description: 'A full-stack Kanban board application with JWT-based authentication and PostgreSQL database management.',
    image: image10,
    gitLink: 'https://github.com/TheReal4m4d3u5/kanbanBoard',
    deployed: 'https://kanbanboard-552l.onrender.com',
    tags: ['Node.js', 'Express.js', 'React', 'JWT', 'PostgreSQL', 'Render'],
  },
];


const fullStackProjects = [
  {
    title: 'Weather App',
    description: 'A full-stack weather dashboard application that retrieves and displays the current day and the 5-day weather forecast for various cities.',
    image: image2,
    gitLink: 'https://github.com/TheReal4m4d3u5/WeatherAPP',
    deployed: 'https://weatherapp-ew0q.onrender.com',
    tags: ['Node.js', 'Express.js', 'React', 'OpenWeather API', 'JSON', 'Render'],
  },
  {
    title: 'Candidate Search',
    description: 'A React-based front-end application that interfaces with the GitHub API to display and manage candidate profiles.',
    image: image8,
    gitLink: 'https://github.com/TheReal4m4d3u5/candidateSearch',
    deployed: 'https://funny-biscochitos-9e1673.netlify.app/',
    tags: ['React', 'TypeScript', 'GitHub API', 'Netlify'],
  },
];

const javaScriptProjects = [


  {
    title: 'Blog',
    description: 'A two-page personal blog application that allows users to submit blog posts via a form and store them in localStorage.',
    image: blog,
    gitLink: 'https://github.com/TheReal4m4d3u5/firstBlog',
    tags: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
  },

  {
    title: 'Film Tracker',
    description: 'A full-stack movie database search application where users can add films to a watch or seen list.',
    image: image7,
    gitLink: 'https://github.com/TheReal4m4d3u5/movieSearch',
    deployed: 'https://meek-cassata-691e1b.netlify.app/',
    tags: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
  },

  {
    title: 'Bucket Checklist',
    description: 'An application that allows users to create a checklist, rank items by priority, and mark them as completed.',
    image: image3,
    gitLink: 'https://github.com/TheReal4m4d3u5/bucketList',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Vehicle App',
    description: 'A TypeScript-based command-line application for creating and interacting with different types of vehicles.',
    video: vehicleVideo,
    videoText: 'Click to watch video',
    gitLink: 'https://github.com/TheReal4m4d3u5/Create-Vehicle',
    tags: ['TypeScript', 'Node.js', 'Inquirer', 'Command-Line'],
  },
  {
    title: 'Readme Generator',
    description: 'An application that generates a README.md file.',
    image: image5,
    gitLink: 'https://github.com/TheReal4m4d3u5/Readme-Generator',
    tags: ['Node.js', 'JavaScript', 'Command-Line'],
  },
  {
    title: 'React Profile',
    description: 'A React-based single-page portfolio application that showcases a web developer’s skills and projects.',
    image: image6,
    gitLink: 'https://github.com/TheReal4m4d3u5/reactPortfolio',
    deployed: 'https://zesty-starlight-a7d6e2.netlify.app/',
    tags: ['React', 'React Router', 'Netlify'],
  },
  {
    title: 'Sound Board',
    description: 'A soundboard application created with HTML, CSS, JavaScript, and Bootstrap.',
    image: image1,
    gitLink: 'https://github.com/TheReal4m4d3u5/soundBoard',
    deployed: 'https://beautiful-dusk-78e4ee.netlify.app/',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Netlify'],
  },
];

const Portfolio = () => {
  return (


    <div className="portfolio-page">
      <section className="portfolio-Wraper">
        <h1 className="portfilioHeaderText">My Portfolio</h1>


        {/* Index Section */}
        <nav className="portfolio-index">

          <a href="#pern">Full Stack PERN</a>
          <a href="#mern">Full Stack MERN</a>
          <a href="#javascript">React.js / JavaScript / TypeScript</a>
          <a href="#sql">SQL</a>
          <a href="#matlab">Matlab</a>
          <a href="#java">Java</a>
          <a href="#python">Python</a>
          <a href="#c">C</a>
          <a href="#tdd">TDD</a>
          <a href="#bdd">BDD</a>
          <a href="#cicd">CI/CD DevOps</a>

        </nav>


        <Row className="portfolioCards">

          <div id="pern" className="monHeader">Full Stack PERN</div>
          <div className="disclaimerWraper">
            <div className="disclaimer">Some deployments will take 1 to 15 mins to spin up if they haven't been in use</div>
          </div>

          {pernProjects.map((project, index) => (
            <Col key={index} sm={12} md={6} lg={4} className='cards'>
              <Project
                title={project.title}
                description={project.description}
                image={project.image}
                video={project.video}
                videoText={project.videoText}
                gitlink={project.gitLink}
                deployedlink={project.deployed}
                tags={project.tags}
              />

            </Col>
          ))}


          <div id="mern" className="mongoDBHeader">Full Stack MERN</div>
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
                tags={project.tags}
              />

            </Col>

          ))}


          <div id="pern" className="mongoDBHeader">Full Stack</div>
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
                tags={project.tags}
              />

            </Col>
          ))}



          <div id="javascript" className="mongoDBHeader">React.js / Javascript / Typescript</div>
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
                tags={project.tags}
              />

            </Col>
          ))}


          <div id="sql" className="mongoDBHeader">SQL</div>
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
                tags={project.tags}
              />

            </Col>

          ))}


          <div id="matlab" className="mongoDBHeader">Matlab</div>
          {matLabProjects.map((project, index) => (
            <Col key={index} sm={12} md={6} lg={4} className='cards'>

              <Project
                title={project.title}
                description={project.description}
                image={project.image}
                gitlink={project.gitLink}
                deployedlink={project.deployed}
                tags={project.tags}
              />

            </Col>

          ))}



          <div id="java" className="mongoDBHeader">Java</div>

          {javaProjects.map((project, index) => (

            <Col key={index} sm={12} md={6} lg={4} className='cards'>

              <Project
                title={project.title}
                description={project.description}
                image={project.image}
                gitlink={project.gitLink}
                deployedlink={project.deployed}
                tags={project.tags}
              />

            </Col>

          ))}


          <div id="python" className="mongoDBHeader">Python</div>

          {pythonProjects.map((project, index) => (

            <Col key={index} sm={12} md={6} lg={4} className='cards'>

              <Project
                title={project.title}
                description={project.description}
                image={project.image}
                gitlink={project.gitLink}
                deployedlink={project.deployed}
                tags={project.tags}
              />

            </Col>

          ))}


          <div id="c" className="mongoDBHeader">C</div>

          {cProjects.map((project, index) => (

            <Col key={index} sm={12} md={6} lg={4} className='cards'>

              <Project
                title={project.title}
                description={project.description}
                image={project.image}
                gitlink={project.gitLink}
                deployedlink={project.deployed}
                tags={project.tags}
              />

            </Col>

          ))}

          <div id="tdd" className="mongoDBHeader">TDD</div>

          {tDDProjects.map((project, index) => (

            <Col key={index} sm={12} md={6} lg={4} className='cards'>

              <Project
                title={project.title}
                description={project.description}
                image={project.image}
                gitlink={project.gitLink}
                tags={project.tags}
              />

            </Col>

          ))}

          <div id="bdd" className="mongoDBHeader">BDD</div>

          {seleniumProjects.map((project, index) => (

            <Col key={index} sm={12} md={6} lg={4} className='cards'>

              <Project
                title={project.title}
                description={project.description}
                image={project.image}
                gitlink={project.gitLink}
                tags={project.tags}
              />

            </Col>

          ))}


          <div id="cicd" className="mongoDBHeader">CI/CD Devops</div>
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
                tags={project.tags}
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
