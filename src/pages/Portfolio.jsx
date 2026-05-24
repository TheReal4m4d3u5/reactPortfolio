import Carousel from "../components/Carousel";
import "../styles/portfolioStyles.css";
import image1 from "../../src/assets/image1.png";
import image2 from "../../src/assets/image2.png";
import image3 from "../../src/assets/image3.png";
// import image4 from "../../src/assets/image4.png";
// import image5 from "../../src/assets/image5.png";
// import image6 from "../../src/assets/image6.png";
// import image7 from "../../src/assets/movieSearch.png";
// import image8 from "../../src/assets/candidateSearch.png";
import image9 from "../../src/assets/image9.png";
// import image10 from "../../src/assets/image10.png";
// import image11 from "../../src/assets/carProgram.png";
// import image12 from "../../src/assets/battleship.png";
// import image13 from "../../src/assets/csci1203A6.png";
// import image14 from "../../src/assets/csci1113A5.png";
// import image15 from "../../src/assets/csci1111A7.png";
// import image16 from "../../src/assets/csci1111A5.png";
// import image17 from "../../src/assets/csci1113A6.png";
// import grocerySytsem from "../../src/assets/grocerySystem.png";
// import bookSearch from "../../src/assets/bookSearch.png";
// import coinToss from "../../src/assets/coinToss.png";
// import hangman from "../../src/assets/hangman.png";
// import blog from "../../src/assets/blog.png";
// import selenium from "../../src/assets/selenium.png";
// import tDD1 from "../../src/assets/tDD1.png";
// import reactTDD from "../../src/assets/reactTDD.png";
// import employease from "../../src/assets/employease.png";
// import monteCarloSimulation from "../../src/assets/monteCarloSimulation.png";

import socialMediaVideo from "../../src/assets/socialMediaAPI.mp4";
// import vehicleVideo from "../../src/assets/module8.mp4";
import employeeDB from "../../src/assets/employeeDB.mp4";









const apiProjects = [
  {
    video: socialMediaVideo,
    title: "Social Media API",
    description:
      "Designed and implemented a RESTful backend system for managing users, posts, and reactions.\n\n• Built modular API architecture with Express and MongoDB\n• Implemented CRUD operations with structured data validation\n• Modeled relationships between users, posts, and reactions\n• Designed scalable API patterns for real-world social platforms",
    gitLink: "https://github.com/TheReal4m4d3u5/socialNetworkAPI",
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "RESTful API"],
  },

  {
    title: "Aline",
    description:
      "A full-stack application that aggregates live event and weather data from multiple external APIs.\n\nImplements backend-driven architecture using Node.js and Express to manage API integrations, data processing, and secure environment configurations. \n\nApplies RESTful design principles with PostgreSQL for data persistence and a responsive React frontend for dynamic user interaction.\n• Live event and weather aggregation\n• RESTful API architecture\n• Backend data processing and integration\n• Responsive frontend design",
    image: [image9, image1, image2, image3],
    gitLink: "https://github.com/TheReal4m4d3u5/Aline-Events",
    deployed: "https://aline-events.onrender.com/",
    tags: [
      "Node.js",
      "Express.js",
      "React",
      "PostgreSQL",
      "Sequelize",
      "RESTful API",
      "JWT",
      "Ticketmaster API",
      "OpenWeather API",
      "Render",
    ],
  },
];

const dataPipelineProjects = [
  {
    title: "Aline",
    description:
      "A full-stack application that aggregates live event and weather data from multiple external APIs.\n\nImplements backend-driven architecture using Node.js and Express to manage API integrations, data processing, and secure environment configurations. \n\nApplies RESTful design principles with PostgreSQL for data persistence and a responsive React frontend for dynamic user interaction.\n• Live event and weather aggregation\n• RESTful API architecture\n• Backend data processing and integration\n• Responsive frontend design",
    image: [image9, image1, image2, image3],
    gitLink: "https://github.com/TheReal4m4d3u5/Aline-Events",
    deployed: "https://aline-events.onrender.com/",
    tags: [
      "Node.js",
      "Express.js",
      "React",
      "PostgreSQL",
      "Sequelize",
      "RESTful API",
      "JWT",
      "Ticketmaster API",
      "OpenWeather API",
      "Render",
    ],
  },

  {
    video: employeeDB,
    videoText: "Click to watch video",
    title: "Employee DB",
    description:
      "A command-line application that allows business owners to manage and organize employee data efficiently.",
    gitLink: "https://github.com/TheReal4m4d3u5/EmployeeDB",
    tags: ["Node.js", "Inquirer", "PostgreSQL", "Command-Line Application"],
  },
];

// const optimizationProjects = [
//   {
//     title: "My Selenium Test Suite",
//     description: `A custom-built Selenium test suite for automated testing.`,
//     image: [image9, image1, image2, image3],
//     gitLink: "https://github.com/TheReal4m4d3u5/mySelenium",
//     tags: [
//       "Selenium",
//       "Maven",
//       "Java",
//       "Appium",
//       "BDD",
//       "Cucumber",
//       "Chromedriver",
//     ],
//   },
// ];

// const simulationProjects = [
//   {
//     title: "My Selenium Test Suite",
//     description: `A custom-built Selenium test suite for automated testing.`,
//     image: [image9, image1, image2, image3],
//     gitLink: "https://github.com/TheReal4m4d3u5/mySelenium",
//     tags: [
//       "Selenium",
//       "Maven",
//       "Java",
//       "Appium",
//       "BDD",
//       "Cucumber",
//       "Chromedriver",
//     ],
//   },
// ];

// const forcastingProjects = [
//   {
//     title: "My Selenium Test Suite",
//     description: `A custom-built Selenium test suite for automated testing.`,
//     image: [image9, image1, image2, image3],
//     gitLink: "https://github.com/TheReal4m4d3u5/mySelenium",
//     tags: [
//       "Selenium",
//       "Maven",
//       "Java",
//       "Appium",
//       "BDD",
//       "Cucumber",
//       "Chromedriver",
//     ],
//   },
// ];



const pythonProjects = [
  {
    title: "Probabilistic Market Engine",
    description:
      "A statistical analysis and Monte Carlo simulation engine that models stock price behavior using historical data. Computes volatility, return distributions, and probabilistic forecasts to estimate future price ranges and risk.",
    image: [image9, image1, image2, image3],
    gitLink: "https://github.com/TheReal4m4d3u5/MarketSim-Lite",
    tags: ["Python", "Statistics", "Simulation", "Forecasting"],
  },

  {
    title: "Shopping Cart Polymorphism",
    description:
      "A polymorphic shopping cart where different item types calculate prices uniquely.",
    image: [image9, image1, image2, image3],
    gitLink: "https://github.com/TheReal4m4d3u5/shoppingCartPolymorphism",
    tags: ["Python", "Polymorphism"],
  },
  {
    title: "Customer Room Reservations",
    description:
      "A system for hotel management to book rooms, check availability, and manage reservations.",
    image: [image9, image1, image2, image3],
    gitLink: "https://github.com/TheReal4m4d3u5/customerRoomReservations",
    tags: ["Python", "CSV", "JSON"],
  },
  {
    title: "Bank Account",
    description:
      "A command-line banking application for managing savings account deposits and withdrawals.",
    image: [image9, image1, image2, image3],
    gitLink: "https://github.com/TheReal4m4d3u5/bankAccount",
    tags: ["Python", "Command-Line Application"],
  },

  {
    title: "Hotel Reservation System",
    description:
      "A command-line application for managing hotel room bookings and availability.",
    image: [image9, image1, image2, image3],
    gitLink: "https://github.com/TheReal4m4d3u5/hotelReservationSystem",
    tags: ["Python", "Command-Line Application"],
  },
];




const matLabProjects = [
  {
    title: "MatDrive",
    description: `A mathematical simulation engine modeling vehicle movement across a graph-based city.

Implements linear algebra transformations, parametric motion, and stochastic decision processes to simulate path selection and orientation.

Applies mathematical modeling within a structured system to produce realistic, state-driven movement.

• Graph-based navigation
• Linear algebra transformations
• Parametric motion modeling
• Stochastic decision-making`,

    image: [image9, image1, image2, image3],
    gitLink: "https://github.com/TheReal4m4d3u5/Calc4_Matlab_Car",
    tags: [
      "MATLAB",
      "Linear Algebra",
      "Graph Theory",
      "Simulation",
      "Systems Design",
    ],
  },
];

const sqlProjects = [
  {
    video: employeeDB,
    videoText: "Click to watch video",
    title: "Employee DB",
    description:
      "A command-line application that allows business owners to manage and organize employee data efficiently.",
    gitLink: "https://github.com/TheReal4m4d3u5/EmployeeDB",
    tags: ["Node.js", "Inquirer", "PostgreSQL", "Command-Line Application"],
  },

  {
    title: "Kanban Board",
    description:
      "A full-stack Kanban board application with JWT-based authentication and PostgreSQL database management.",
    image: [image9, image1, image2, image3],
    gitLink: "https://github.com/TheReal4m4d3u5/kanbanBoard",
    deployed: "https://kanbanboard-552l.onrender.com",
    tags: ["Node.js", "Express.js", "React", "JWT", "PostgreSQL", "Render"],
  },
];

const javaProjects = [
  {
    title: "Grocery Inventory Backend System",
    description:
      "A Java backend system for grocery store workflow modeling, including inventory tracking, cart operations, checkout processing, and purchase history.\n\nBuilt with object-oriented design principles and layered architecture to create a modular, extensible system.\n\n• Inventory tracking\n• Cart and checkout workflows\n• Purchase history\n• OOP-driven design",
    image: [image9, image1, image2, image3],
    gitLink: "https://github.com/TheReal4m4d3u5/GroceryManagementSystem_ICS372",
    tags: ["Java", "OOP", "Backend Systems", "Software Design"],
  },
];





// const fullStackProjects = [
//   {
//     title: "Weather App",
//     description:
//       "A full-stack weather dashboard application that retrieves and displays the current day and the 5-day weather forecast for various cities.",
//     image: [image9, image1, image2, image3],
//     gitLink: "https://github.com/TheReal4m4d3u5/WeatherAPP",
//     deployed: "https://weatherapp-ew0q.onrender.com",
//     tags: [
//       "Node.js",
//       "Express.js",
//       "React",
//       "OpenWeather API",
//       "JSON",
//       "Render",
//     ],
//   },
//   {
//     title: "Candidate Search",
//     description:
//       "A React-based front-end application that interfaces with the GitHub API to display and manage candidate profiles.",
//     image: [image9, image1, image2, image3],
//     gitLink: "https://github.com/TheReal4m4d3u5/candidateSearch",
//     deployed: "https://funny-biscochitos-9e1673.netlify.app/",
//     tags: ["React", "TypeScript", "GitHub API", "Netlify"],
//   },
// ];

// const javaScriptProjects = [
//   {
//     title: "Film Tracker",
//     description:
//       "A full-stack movie database search application where users can add films to a watch or seen list.",
//     image: [image9, image1, image2, image3],
//     gitLink: "https://github.com/TheReal4m4d3u5/movieSearch",
//     deployed: "https://meek-cassata-691e1b.netlify.app/",
//     tags: ["HTML", "CSS", "JavaScript", "Netlify"],
//   },

//   {
//     title: "Bucket Checklist",
//     description:
//       "An application that allows users to create a checklist, rank items by priority, and mark them as completed.",
//     image: [image9, image1, image2, image3],
//     gitLink: "https://github.com/TheReal4m4d3u5/bucketList",
//     tags: ["HTML", "CSS", "JavaScript"],
//   },

//   {
//     title: "React Profile",
//     description:
//       "A React-based single-page portfolio application that showcases a web developer’s skills and projects.",
//     image: [image9, image1, image2, image3],
//     gitLink: "https://github.com/TheReal4m4d3u5/reactPortfolio",
//     deployed: "https://zesty-starlight-a7d6e2.netlify.app/",
//     tags: ["React", "React Router", "Netlify"],
//   },
// ];


  




const Portfolio = () => {

 
  const projectGroups = [
    {
      groupTitle: "Backend Systems",
      groupId: "apis",
      projects: apiProjects,
    },
    {
      groupTitle: "Infrastructure",
      groupId: "dataPipelines",
      projects: dataPipelineProjects,
    },
    {
      groupTitle: "Platform Engineering",
      groupId: "sql",
      projects: sqlProjects,
    },
    {
      groupTitle: "Cloud & Distributed Systems",
      groupId: "java",
      projects: javaProjects,
    },
    {
      groupTitle: "Computational Modeling",
      groupId: "python",
      projects: pythonProjects,
    },
    {
      groupTitle: "Automation & Reliability",
      groupId: "matlab",
      projects: matLabProjects,
    }
  ];




  return (

      <div className="portfolio-page">
        <section className="portfolio-Wraper">
          <h1 className="portfilioHeaderText">My Portfolio</h1>

          {/* Index Section */}
          {/* <nav className="portfolio-index">
            <div className="top-links">
              <a href="#featured">Featured Projects</a>

              <a href="#backend">Backend Systems</a>

              <a href="#mathModelingSystems">Math & Modeling Systems</a>

              <a href="#embedded">Embedded Systems</a>

              <a href="#apis">APIs</a>
              <a href="#dataPipelines">Data Pipelines</a>
              <a href="#sql">SQL</a>
              <a href="#java">Java</a>
              <a href="#python">Python</a>
              <a href="#matlab">Matlab</a>
              <a href="#simulation">Simulation</a>
              <a href="#optimization">Optimization</a>
              <a href="#forcasting">Forcasting</a>
              <a href="#tdd">TDD</a>
              <a href="#bdd">BDD</a>
              <a href="#cicd">CI/CD DevOps</a>
            </div>
          </nav> */}




   
      <Carousel projectGroups={projectGroups} />








          {/* <div id="dataPipelines" className="mongoDBHeader">
            {"API's"}
          </div>
          <div className="disclaimerWraper">
            <div className="disclaimer">
              {"Some deployments will take 1 to 15 mins to spin up if they haven't been in use"}
            </div>
          </div>

          <Row className="portfolioCards">
            {apiProjects.map((project, index) => (
              <Col key={index} sm={12} md={6} lg={4} className="cards">
                <motion.div
                  className="portfolio-motion-card"
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{
                    once: false,
                    amount: 0.15,
                    margin: "0px 0px -50px 0px",
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.12,
                    boxShadow: "0 25px 70px rgba(255, 120, 210, 0.35)",
                  }}
                >
                  <Project
                    title={project.title}
                    shortDescription={project.shortDescription}
                    description={project.description}
                    image={project.image}
                    video={project.video}
                    videoText={project.videoText}
                    gitlink={project.gitLink}
                    deployedlink={project.deployed}
                    tags={project.tags}
                  />
                </motion.div>
              </Col>
            ))}
          </Row>
 
          <div id="dataPipelines" className="mongoDBHeader">
            Data Pipelines
          </div>
          <div className="disclaimerWraper">
            <div className="disclaimer">
              {"Some deployments will take 1 to 15 mins to spin up if they haven't been in use"}
            </div>
          </div>

          <Row className="portfolioCards">
            {dataPipelineProjects.map((project, index) => (
              <Col key={index} sm={12} md={6} lg={4} className="cards">
                <motion.div
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{
                    once: false,
                    amount: 0.05,
                    margin: "0px 0px -50px 0px",
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.12,
                    boxShadow: "0 25px 70px rgba(255, 120, 210, 0.35)",
                  }}
                >
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
                </motion.div>
              </Col>
            ))}
          </Row>

          <div id="sql" className="mongoDBHeader">
            SQL
          </div>
          <div className="disclaimerWraper">
            <div className="disclaimer">
              {"Some deployments will take 1 to 15 mins to spin up if they haven't been in use"}
            </div>
          </div>

          <Row className="portfolioCards">
            {sqlProjects.map((project, index) => (
              <Col key={index} sm={12} md={6} lg={4} className="cards">
                <motion.div
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{
                    once: false,
                    amount: 0.05,
                    margin: "0px 0px -50px 0px",
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.12,
                    boxShadow: "0 25px 70px rgba(255, 120, 210, 0.35)",
                  }}
                >
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
                </motion.div>
              </Col>
            ))}
          </Row>

          <div id="java" className="mongoDBHeader">
            Java
          </div>

          <Row className="portfolioCards">
            {javaProjects.map((project, index) => (
              <Col key={index} sm={12} md={6} lg={4} className="cards">
                <motion.div
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{
                    once: false,
                    amount: 0.05,
                    margin: "0px 0px -50px 0px",
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.12,
                    boxShadow: "0 25px 70px rgba(255, 120, 210, 0.35)",
                  }}
                >
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
                </motion.div>
              </Col>
            ))}
          </Row>

          <div id="python" className="mongoDBHeader">
            SQL
          </div>

          <Row className="portfolioCards">
            {sqlProjects.map((project, index) => (
              <Col key={index} sm={12} md={6} lg={4} className="cards">
                <motion.div
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{
                    once: false,
                    amount: 0.05,
                    margin: "0px 0px -50px 0px",
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.12,
                    boxShadow: "0 25px 70px rgba(255, 120, 210, 0.35)",
                  }}
                >
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
                </motion.div>
              </Col>
            ))}
          </Row>

          <div id="python" className="mongoDBHeader">
            Python
          </div>

          <Row className="portfolioCards">
            {pythonProjects.map((project, index) => (
              <Col key={index} sm={12} md={6} lg={4} className="cards">
                <motion.div
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{
                    once: false,
                    amount: 0.05,
                    margin: "0px 0px -50px 0px",
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.12,
                    boxShadow: "0 25px 70px rgba(255, 120, 210, 0.35)",
                  }}
                >
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
                </motion.div>
              </Col>
            ))}
          </Row>

          <div id="matlab" className="mongoDBHeader">
            Matlab
          </div>





          <Row className="portfolioCards">
            {matLabProjects.map((project, index) => (
              <Col key={index} sm={12} md={6} lg={4} className="cards">
                <motion.div
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{
                    once: false,
                    amount: 0.05,
                    margin: "0px 0px -50px 0px",
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.12,
                    boxShadow: "0 25px 70px rgba(255, 120, 210, 0.35)",
                  }}
                >
                  <Project
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    gitlink={project.gitLink}
                    deployedlink={project.deployed}
                    tags={project.tags}
                  />
                </motion.div>
              </Col>
            ))}
          </Row>

          <div id="simulation" className="mongoDBHeader">
            Simulation
          </div>

  

          <Row className="portfolioCards">
            {simulationProjects.map((project, index) => (
              <Col key={index} sm={12} md={6} lg={4} className="cards">
                <motion.div
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{
                    once: false,
                    amount: 0.05,
                    margin: "0px 0px -50px 0px",
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.12,
                    boxShadow: "0 25px 70px rgba(255, 120, 210, 0.35)",
                  }}
                >
                  <Project
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    gitlink={project.gitLink}
                    deployedlink={project.deployed}
                    tags={project.tags}
                  />
                </motion.div>
              </Col>
            ))}
          </Row>

          <div id="optimization" className="mongoDBHeader">
            Optimization
          </div>

          <Row className="portfolioCards">
            {optimizationProjects.map((project, index) => (
              <Col key={index} sm={12} md={6} lg={4} className="cards">
                <motion.div
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{
                    once: false,
                    amount: 0.05,
                    margin: "0px 0px -50px 0px",
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.12,
                    boxShadow: "0 25px 70px rgba(255, 120, 210, 0.35)",
                  }}
                >
                  <Project
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    gitlink={project.gitLink}
                    deployedlink={project.deployed}
                    tags={project.tags}
                  />
                </motion.div>
              </Col>
            ))}
          </Row>

          <div id="forcasting" className="mongoDBHeader">
            Forcasting
          </div>

          <Row className="portfolioCards">
            {forcastingProjects.map((project, index) => (
              <Col key={index} sm={12} md={6} lg={4} className="cards">
                <motion.div
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{
                    once: false,
                    amount: 0.05,
                    margin: "0px 0px -50px 0px",
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.12,
                    boxShadow: "0 25px 70px rgba(255, 120, 210, 0.35)",
                  }}
                >
                  <Project
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    gitlink={project.gitLink}
                    deployedlink={project.deployed}
                    tags={project.tags}
                  />
                </motion.div>
              </Col>
            ))}
          </Row>



          <div id="tdd" className="mongoDBHeader">
            TDD
          </div>



          <div id="bdd" className="mongoDBHeader">
            BDD
          </div>


          <div id="cicd" className="mongoDBHeader">
            CI/CD DevOps
          </div>

          <div className="disclaimer">
            {"Some deployments will take 1 to 15 mins to spin up if they haven't been in use"}
          </div>


*/}


        </section>
      </div>

  );
};

export default Portfolio;
