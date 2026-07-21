import Carousel from "../components/Carousel";
import "../styles/portfolioStyles.css";
import image1 from "../../src/assets/image1.png";
import image2 from "../../src/assets/image2.png";
import image3 from "../../src/assets/image3.png";

import image4 from "../../src/assets/mastermind/image copy.png";
import image5 from "../../src/assets/mastermind/image copy 2.png";
import image6 from "../../src/assets/mastermind/image copy 3.png";
import image7 from "../../src/assets/mastermind/image copy 4.png";
import image8 from "../../src/assets/mastermind/image copy 5.png";
import image18 from "../../src/assets/mastermind/image copy 6.png";
import image10 from "../../src/assets/mastermind/image copy 7.png";
import image11 from "../../src/assets/mastermind/image copy 8.png";
import image12 from "../../src/assets/mastermind/image copy 9.png";
import image13 from "../../src/assets/mastermind/image copy 10.png";
import image14 from "../../src/assets/mastermind/image copy 11.png";
import image15 from "../../src/assets/mastermind/image copy 12.png";
import image16 from "../../src/assets/mastermind/image copy 13.png";
import image17 from "../../src/assets/mastermind/image copy 14.png";

import chordFinderDomainModel from "../../src/assets/chordFinder/image2.png";

import image19 from "../../src/assets/chordFinder/image3.png";
import image20 from "../../src/assets/chordFinder/image4.png";
import image21 from "../../src/assets/chordFinder/image5.png";
import image22 from "../../src/assets/chordFinder/image6.png";
import image23 from "../../src/assets/chordFinder/image7.png";
import image24 from "../../src/assets/chordFinder/image8.png";
import image25 from "../../src/assets/chordFinder/image1.png";

import mastermindclassDiagram from "../../src/assets/mastermind/classDiagram.png";
import mastermindDomainMoel from "../../src/assets/mastermind/domainModel.png";
import useCaseDiagram from "../../src/assets/mastermind/useCaseDiagram.png";

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

// import employease from "../../src/assets/employease.png";
// import monteCarloSimulation from "../../src/assets/monteCarloSimulation.png";

// import vehicleVideo from "../../src/assets/module8.mp4";
import employeeDB from "../../src/assets/employeeDB.mp4";

const apiProjects = [
  {
    title: "Master Mind",
    description:
      "Developed a detailed object-oriented system design for a configurable Mastermind game using the ICONIX software methodology. The project emphasized traceability through the full design process, connecting requirements to domain models, use cases, robustness analysis, sequence diagrams, detailed class design, and BDD test scenarios.\n\n      Core system behavior supports configurable player counts, codemaker modes, code-length rules, color-repetition validation, secret-code creation, guess evaluation, feedback generation, role switching, round tracking, win/loss determination, and final result calculation.\n\n",
    image: [
      mastermindDomainMoel,
      image4,
      image5,
      image6,
      image7,
      image8,
      image18,
      image10,
      image11,
      image12,
      image13,
      image14,
      image15,
      image16,
      image17,
    ],
    gitLink: "https://github.com/TheReal4m4d3u5/Mastermind",
    tags: [
      "System Design",
      "Object-Oriented Design",
      "OOAD",
      "ICONIX",
      "UML",
      "BDD",
      "Traceability",
      "Domain Modeling",
      "Use Cases",
      "Robustness Analysis",
      "Sequence Diagrams",
      "Class Diagrams",
      "Test Scenarios",
      "Design Documentation",
    ],
  },

  {
    title: "Chord Finder",
    description:
      "Chord Finder is a Java-based music education application that identifies possible triad names from three notes entered in any order. The system validates note input, supports enharmonic spellings such as D♯ and E♭, calculates musical intervals, and compares the submitted notes against stored chord formulas to recognize major, minor, diminished, and augmented chords. It also includes an administrator workflow for adding, editing, viewing, and deleting chord formulas. The application was designed using object-oriented analysis, UML, GRASP principles, behavior-driven development, and test-driven development.",
    image: [
      chordFinderDomainModel,
      image25,
      image19,
      image20,
      image21,
      image22,
      image23,
      image24,
    ],
    gitLink: "https://github.com/TheReal4m4d3u5/chordFinder",
    tags: [
      "System Design",
      "Object-Oriented Design",
      "OOAD",
      "ICONIX",
      "UML",
      "BDD",
      "Traceability",
      "Domain Modeling",
      "Use Cases",
      "Robustness Analysis",
      "Sequence Diagrams",
      "Class Diagrams",
      "Test Scenarios",
      "Design Documentation",
    ],
  },
];

const designPatternProjects = [
  {
    title: "Strategy Pattern",
    description:
      "Developed a detailed object-oriented system design for a configurable Mastermind game using the ICONIX software methodology. The project emphasized traceability through the full design process, connecting requirements to domain models, use cases, robustness analysis, sequence diagrams, detailed class design, and BDD test scenarios.\n\n      Core system behavior supports configurable player counts, codemaker modes, code-length rules, color-repetition validation, secret-code creation, guess evaluation, feedback generation, role switching, round tracking, win/loss determination, and final result calculation.\n\n",
    image: [mastermindDomainMoel, useCaseDiagram, mastermindclassDiagram],
    gitLink: "https://github.com/TheReal4m4d3u5/Mastermind",
    tags: [
      "System Design",
      "Object-Oriented Design",
      "OOAD",
      "ICONIX",
      "UML",
      "BDD",
      "Traceability",
      "Domain Modeling",
      "Use Cases",
      "Robustness Analysis",
      "Sequence Diagrams",
      "Class Diagrams",
      "Test Scenarios",
      "Design Documentation",
    ],
  },

  {
    title: "Adapter Pattern",
    description:
      "Developed a detailed object-oriented system design for a configurable Mastermind game using the ICONIX software methodology. The project emphasized traceability through the full design process, connecting requirements to domain models, use cases, robustness analysis, sequence diagrams, detailed class design, and BDD test scenarios.\n\n      Core system behavior supports configurable player counts, codemaker modes, code-length rules, color-repetition validation, secret-code creation, guess evaluation, feedback generation, role switching, round tracking, win/loss determination, and final result calculation.\n\n",
    image: [mastermindDomainMoel, useCaseDiagram, mastermindclassDiagram],
    gitLink: "https://github.com/TheReal4m4d3u5/chordFinder",
    tags: [
      "System Design",
      "Object-Oriented Design",
      "OOAD",
      "ICONIX",
      "UML",
      "BDD",
      "Traceability",
      "Domain Modeling",
      "Use Cases",
      "Robustness Analysis",
      "Sequence Diagrams",
      "Class Diagrams",
      "Test Scenarios",
      "Design Documentation",
    ],
  },

  {
    title: "Observer Pattern",
    description:
      "Developed a detailed object-oriented system design for a configurable Mastermind game using the ICONIX software methodology. The project emphasized traceability through the full design process, connecting requirements to domain models, use cases, robustness analysis, sequence diagrams, detailed class design, and BDD test scenarios.\n\n      Core system behavior supports configurable player counts, codemaker modes, code-length rules, color-repetition validation, secret-code creation, guess evaluation, feedback generation, role switching, round tracking, win/loss determination, and final result calculation.\n\n",
    image: [mastermindDomainMoel, useCaseDiagram, mastermindclassDiagram],
    gitLink: "https://github.com/TheReal4m4d3u5/chordFinder",
    tags: [
      "System Design",
      "Object-Oriented Design",
      "OOAD",
      "ICONIX",
      "UML",
      "BDD",
      "Traceability",
      "Domain Modeling",
      "Use Cases",
      "Robustness Analysis",
      "Sequence Diagrams",
      "Class Diagrams",
      "Test Scenarios",
      "Design Documentation",
    ],
  },

  {
    title: "Decorator Pattern",
    description:
      "Developed a detailed object-oriented system design for a configurable Mastermind game using the ICONIX software methodology. The project emphasized traceability through the full design process, connecting requirements to domain models, use cases, robustness analysis, sequence diagrams, detailed class design, and BDD test scenarios.\n\n      Core system behavior supports configurable player counts, codemaker modes, code-length rules, color-repetition validation, secret-code creation, guess evaluation, feedback generation, role switching, round tracking, win/loss determination, and final result calculation.\n\n",
    image: [mastermindDomainMoel, useCaseDiagram, mastermindclassDiagram],
    gitLink: "https://github.com/TheReal4m4d3u5/chordFinder",
    tags: [
      "System Design",
      "Object-Oriented Design",
      "OOAD",
      "ICONIX",
      "UML",
      "BDD",
      "Traceability",
      "Domain Modeling",
      "Use Cases",
      "Robustness Analysis",
      "Sequence Diagrams",
      "Class Diagrams",
      "Test Scenarios",
      "Design Documentation",
    ],
  },

  {
    title: "Iterator Pattern",
    description:
      "Developed a detailed object-oriented system design for a configurable Mastermind game using the ICONIX software methodology. The project emphasized traceability through the full design process, connecting requirements to domain models, use cases, robustness analysis, sequence diagrams, detailed class design, and BDD test scenarios.\n\n      Core system behavior supports configurable player counts, codemaker modes, code-length rules, color-repetition validation, secret-code creation, guess evaluation, feedback generation, role switching, round tracking, win/loss determination, and final result calculation.\n\n",
    image: [mastermindDomainMoel, useCaseDiagram, mastermindclassDiagram],
    gitLink: "https://github.com/TheReal4m4d3u5/chordFinder",
    tags: [
      "System Design",
      "Object-Oriented Design",
      "OOAD",
      "ICONIX",
      "UML",
      "BDD",
      "Traceability",
      "Domain Modeling",
      "Use Cases",
      "Robustness Analysis",
      "Sequence Diagrams",
      "Class Diagrams",
      "Test Scenarios",
      "Design Documentation",
    ],
  },

  {
    title: "Factory Pattern",
    description:
      "Developed a detailed object-oriented system design for a configurable Mastermind game using the ICONIX software methodology. The project emphasized traceability through the full design process, connecting requirements to domain models, use cases, robustness analysis, sequence diagrams, detailed class design, and BDD test scenarios.\n\n      Core system behavior supports configurable player counts, codemaker modes, code-length rules, color-repetition validation, secret-code creation, guess evaluation, feedback generation, role switching, round tracking, win/loss determination, and final result calculation.\n\n",
    image: [mastermindDomainMoel, useCaseDiagram, mastermindclassDiagram],
    gitLink: "https://github.com/TheReal4m4d3u5/chordFinder",
    tags: [
      "System Design",
      "Object-Oriented Design",
      "OOAD",
      "ICONIX",
      "UML",
      "BDD",
      "Traceability",
      "Domain Modeling",
      "Use Cases",
      "Robustness Analysis",
      "Sequence Diagrams",
      "Class Diagrams",
      "Test Scenarios",
      "Design Documentation",
    ],
  },
];

const dataPipelineProjects = [
  {
    title: "Aline",
    description:
      "A full-stack application that aggregates live event and weather data from multiple external APIs.\n\nImplements backend-driven architecture using Node.js and Express to manage API integrations, data processing, and secure environment configurations. \n\nApplies RESTful design principles with PostgreSQL for data persistence and a responsive React frontend for dynamic user interaction.\n\n• Live event and weather aggregation\n• RESTful API architecture\n• Backend data processing and integration\n• Responsive frontend design",
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

const fullStackProjects = [
  {
    title: "EmployEase",
    description:
      "A full-stack job search and application tracking platform that helps users discover opportunities through The Muse API, save relevant positions, and organize their job search in one centralized dashboard. EmployEase features secure authentication, GraphQL-based data operations, persistent job tracking, and a responsive React interface.",
    image: [image9, image1, image2, image3],
    gitLink: "https://github.com/ChristopherP-C/EmployEase",
    deployed: "https://employease-hubi.onrender.com/",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "GraphQL",
      "Apollo Client",
      "Apollo Server",
      "MongoDB Atlas",
      "Mongoose",
      "JWT",
      "Bootstrap",
      "The Muse API",
      "Vitest",
      "Render",
    ],
  },

  {
    title: "Book Search Engine",
    description:
      "A full-stack Google Books search application that allows users to create an account, securely log in, search for books, save titles to a personal collection, and remove saved books. The application uses React and TypeScript on the frontend, a Node.js and Express backend, GraphQL with Apollo Client and Apollo Server, MongoDB with Mongoose, and JWT authentication.",
    image: [image9, image1, image2, image3],
    gitLink: "https://github.com/TheReal4m4d3u5/bookSearchEngine",
    deployed: "https://booksearchengine-5ikq.onrender.com/",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "GraphQL",
      "Apollo Client",
      "Apollo Server",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Google Books API",
      "Bootstrap",
      "Vite",
      "Render",
    ],
  },

  {
    title: "Aline Events",
    description:
      "A full-stack event discovery platform that helps users find local entertainment, evaluate ticket availability and pricing, save events of interest, dismiss unwanted results, and check location-specific weather forecasts. Aline Events combines a responsive React interface with a Node.js and Express backend, PostgreSQL persistence, and real-time data from Ticketmaster, OpenWeather, and LocationIQ.",
    image: [image9, image1, image2, image3],
    gitLink: "https://github.com/TheReal4m4d3u5/Aline-Events",
    deployed: "ADD_YOUR_ALINE_EVENTS_DEPLOYED_LINK_HERE",
    tags: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Chakra UI",
      "Ticketmaster API",
      "OpenWeather API",
      "LocationIQ API",
      "Supabase",
      "Render",
    ],
  },

{
  title: "Kanban Board",
  description:
    "A full-stack project management application that allows authenticated users to organize work, create tickets, assign tasks, update ticket details and status, and track progress across a visual Kanban workflow. The application features JWT-based authentication, protected API routes, persistent PostgreSQL storage, and a React and TypeScript interface.",
  image: [image9, image1, image2, image3],
  gitLink: "https://github.com/TheReal4m4d3u5/kanbanBoard",
  deployed: "https://kanbanboard-552l.onrender.com/",
  tags: [
    "React",
    "TypeScript",
    "Vite",
    "Node.js",
    "Express",
    "REST API",
    "PostgreSQL",
    "Sequelize",
    "JWT",
    "bcrypt",
    "Render",
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
      groupTitle: "Systems Design & Development",
      groupId: "apis",
      projects: apiProjects,
    },
    {
      groupTitle: "Design Patterns",
      groupId: "designPatterns",
      projects: designPatternProjects,
    },

    {
      groupTitle: "Full-Stack Development",
      groupId: "fullStackID",
      projects: fullStackProjects,
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
    },
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
