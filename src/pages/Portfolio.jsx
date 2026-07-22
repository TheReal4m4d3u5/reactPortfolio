import Carousel from "../components/Carousel";
import "../styles/portfolioStyles.css";

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

import employEase1 from "../../src/assets/employEase/image.png";
import employEase2 from "../../src/assets/employEase/image1.png";
import employEase3 from "../../src/assets/employEase/image2.png";
import employEase4 from "../../src/assets/employEase/image3.png";
import employEase5 from "../../src/assets/employEase/image5.png";

import bookSearch1 from "../../src/assets/bookSearchEngine/image.png";
import bookSearch2 from "../../src/assets/bookSearchEngine/image1.png";



import KanbanBoard1 from "../../src/assets/KanbanBoard/image1.png";
import KanbanBoard2 from "../../src/assets/KanbanBoard/image2.png";
import KanbanBoard3 from "../../src/assets/KanbanBoard/image3.png";
import KanbanBoard4 from "../../src/assets/KanbanBoard/image4.png";


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

import mastermindDomainMoel from "../../src/assets/mastermind/domainModel.png";
import useCaseDiagram from "../../src/assets/mastermind/useCaseDiagram.png";
import createSecretCodeUseCase from "../../src/assets/mastermind/createSecretCodeUseCase.png";
import createCodeRD from "../../src/assets/mastermind/createCodeRD.png";
import createCodeSeq from "../../src/assets/mastermind/createCodeSeq.png";
import mastermindclassDiagram from "../../src/assets/mastermind/classDiagram.png";

const apiProjects = [
  {
    title: "Master Mind",
    description:
      "Developed a detailed object-oriented system design for a configurable Mastermind game using the OOAD/ICONIX software methodology. The project emphasized traceability through the full design process, connecting requirements to domain models, use cases, robustness analysis, sequence diagrams, detailed class design, and BDD test scenarios.\n\n      Core system behavior supports configurable player counts, codemaker modes, code-length rules, color-repetition validation, secret-code creation, guess evaluation, feedback generation, role switching, round tracking, win/loss determination, and final result calculation.\n\n",
    image: [
      mastermindDomainMoel,
      useCaseDiagram,
      createSecretCodeUseCase,
      createCodeRD,
      createCodeSeq,
      createSecretCodeUseCase,
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
];



const cicdProjects = [
  {
    title: "Production-Ready Social Media API",
    description: `A production-ready RESTful social media backend that supports scalable user, post, and interaction workflows through a structured API architecture. The project was designed for reliable deployment across staging and production environments.

The application includes an end-to-end CI/CD workflow that automates testing, container image creation, infrastructure deployment, and release validation using GitHub Actions, Jenkins, Docker, Kubernetes, and cloud-based deployment environments.

Technical highlights:
• Designed and implemented a production-ready RESTful backend architecture
• Automated build, test, and deployment workflows using GitHub Actions and Jenkins
• Containerized the application with Docker for consistent development and production environments
• Orchestrated application services and deployments using Kubernetes
• Maintained separate staging and production environments for release validation`,
    image: [mastermindDomainMoel],
    gitLink:
      "https://github.com/TheReal4m4d3u5/gitHubActionsCI-CDSetup/tree/main",
    stagingLink: "ADD_STAGING_PROJECT_LINK",
    deployed: "ADD_PRODUCTION_PROJECT_LINK",
    tags: [
      "REST API",
      "Backend Development",
      "CI/CD",
      "GitHub Actions",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "Containerization",
      "Pipeline Automation",
      "Automated Testing",
      "Staging Deployment",
      "Production Deployment",
      "DevOps",
      "Cloud Infrastructure",
    ],
  },

  {
    title: "CI/CD Setup",
    description: `A full-stack application configured with an automated continuous integration and deployment pipeline for reliable delivery across staging and production environments. The project demonstrates how application development, testing, source-control protections, and cloud deployment can be combined into a structured release workflow.

The pipeline uses CircleCI to validate changes before deployment, while protected Git branches and pull-request requirements help prevent unreviewed or failing code from reaching production.

Technical highlights:
• Configured CircleCI workflows for automated building, testing, and deployment
• Established separate staging and production deployment environments
• Implemented protected Git branches and pull-request quality controls
• Required successful CI checks before changes could be merged
• Automated deployments to reduce manual release steps and deployment errors`,
    image: [mastermindDomainMoel],
    gitLink:
      "https://github.com/TheReal4m4d3u5/gitHubActionsCI-CDSetup/tree/main",
    stagingLink: "ADD_STAGING_PROJECT_LINK",
    deployed: "ADD_PRODUCTION_PROJECT_LINK",
    tags: [
      "Full Stack",
      "CI/CD",
      "CircleCI",
      "Pipeline Automation",
      "Automated Testing",
      "Git Protections",
      "Branch Protection",
      "Pull Requests",
      "Staging",
      "Production Deployment",
      "Deployment Automation",
      "DevOps",
    ],
  },

  {
    title: "GitHub Actions CI/CD Setup",
    description: `A full-stack application configured with an automated CI/CD pipeline using GitHub Actions. The project demonstrates a structured release process that validates code changes and promotes successful builds through separate staging and production environments.

Git branch protections and required workflow checks help prevent unreviewed or failing changes from reaching production while automated deployments reduce manual release steps and improve delivery consistency.

Technical highlights:
• Configured GitHub Actions workflows for continuous integration and deployment
• Automated application build, testing, and deployment processes
• Established separate staging and production deployment environments
• Implemented protected branches and required pull-request checks
• Prevented production deployment until required CI checks completed successfully`,
    image: [mastermindDomainMoel],
    gitLink:
      "https://github.com/TheReal4m4d3u5/gitHubActionsCI-CDSetup/tree/main",
    stagingLink: "ADD_STAGING_PROJECT_LINK",
    deployed: "ADD_PRODUCTION_PROJECT_LINK",
    tags: [
      "Full Stack",
      "CI/CD",
      "GitHub Actions",
      "Pipeline Automation",
      "Automated Testing",
      "Git Protections",
      "Branch Protection",
      "Pull Requests",
      "Staging Deployment",
      "Production Deployment",
      "Deployment Automation",
      "DevOps",
    ],
  },
];

const softwareArchitectureProjects = [
  {
    title: "Bike Share Maintenance System",
    description: `An object-oriented maintenance management system designed to help bikeshare operators identify scheduled maintenance needs, respond to detected faults and user complaints, manage repair work, and track each bike throughout its service lifecycle. The system supports condition changes, maintenance issues, work-order assignment, inspections, repairs, service-history records, return-to-service decisions, and bike retirement.

The project applies the ICONIX methodology to maintain traceability from business requirements and user stories through domain modeling, use-case analysis, robustness analysis, sequence diagrams, detailed class design, state modeling, implementation, and iterative refactoring.

Technical highlights:
• Modeled scheduled maintenance using time, mileage, ride-count, and inspection thresholds
• Designed workflows for faults, complaints, work orders, inspections, repairs, and retirement
• Applied BCE, GRASP, SOLID, and object-oriented responsibility-assignment principles
• Refactored the design and Java implementation to improve cohesion, reduce coupling, and clarify class responsibilities
• Created UML domain, use-case, robustness, sequence, state-machine, and class diagrams
• Implemented Java scenarios demonstrating main-success and exception flows`,
    image: [chordFinderDomainModel],
    gitLink:
      "https://github.com/TheReal4m4d3u5/bikeShareMaintenanceSytemInstructions",
    tags: [
      "Java",
      "System Design",
      "Software Architecture",
      "Object-Oriented Design",
      "OOAD",
      "ICONIX",
      "UML",
      "GRASP",
      "SOLID",
      "Refactoring",
      "BDD",
      "Domain Modeling",
      "Use Cases",
      "Robustness Analysis",
      "Sequence Diagrams",
      "State Machines",
      "Class Diagrams",
      "Design Documentation",
    ],
  },
];

const matLabProjects = [
  {
    title: "My Selenium Test Suite",
    description: `A custom-built automated testing framework developed with Java and Selenium WebDriver to validate web application functionality, user workflows, and regression behavior across supported browsers. The project uses Maven for dependency management and test execution, Cucumber for behavior-driven development, ChromeDriver for browser automation, and Appium for mobile testing support. Technical highlights: • Developed automated functional and regression tests with Selenium WebDriver • Created BDD test scenarios using Cucumber and Gherkin • Managed dependencies and test execution through Maven • Automated browser interactions using ChromeDriver • Supported web and mobile automation with Selenium and Appium`,
    image: [image9],
    gitLink: "https://github.com/TheReal4m4d3u5/mySelenium",
    tags: [
      "Selenium",
      "Java",
      "Maven",
      "Appium",
      "BDD",
      "Cucumber",
      "Gherkin",
      "ChromeDriver",
      "Test Automation",
      "Regression Testing",
      "Web Testing",
      "Mobile Testing",
    ],
  },

  {
    title: "React Portfolio",
    description: `A responsive personal portfolio application built to present software engineering projects, technical skills, professional experience, education, and contact information in a centralized web interface.

The portfolio uses React and Vite to deliver a reusable component-based frontend, while Playwright provides end-to-end testing across desktop and mobile viewport configurations.

Technical highlights:
• Built reusable React components for project cards, navigation, skills, and professional content
• Organized projects into full-stack, software architecture, automation, and technical categories
• Implemented responsive layouts for desktop, tablet, and mobile screen sizes
• Created Playwright end-to-end tests for navigation, visibility, layout, and viewport behavior
• Integrated project screenshots, technology tags, GitHub links, and deployed application links`,
    image: [image9],
    gitLink: "https://github.com/TheReal4m4d3u5/reactPortfolio",
    tags: [
      "React",
      "JavaScript",
      "Vite",
      "HTML",
      "CSS",
      "Responsive Design",
      "Playwright",
      "End-to-End Testing",
      "UI Testing",
      "Component-Based Design",
      "Web Development",
      "Git",
      "GitHub",
    ],
  },


{
  title: "Tech Quiz Test Suite",
  description: `A full-stack technical quiz application built with the MERN stack and supported by comprehensive automated component and end-to-end testing. Users can begin a quiz, answer technology-focused questions, move through the complete quiz workflow, and receive a final score.

The project uses Cypress to validate individual React components and complete user journeys while MongoDB, Express, React, and Node.js provide the application’s frontend, API, and data persistence layers.

Technical highlights:
• Developed a full-stack quiz application using the MERN architecture
• Created Cypress component tests for isolated React interface behavior
• Built end-to-end tests covering quiz startup, question progression, and score results
• Validated frontend interactions with backend API and database functionality
• Structured reusable test fixtures, selectors, and automated testing workflows`,
  image: [image9],
  gitLink: "https://github.com/TheReal4m4d3u5/techQuizTestSuite",
  tags: [
    "MongoDB",
    "Express.js",
    "React",
    "Node.js",
    "MERN Stack",
    "Cypress",
    "Component Testing",
    "End-to-End Testing",
    "Test Automation",
    "API Testing",
    "JavaScript",
    "Full Stack",
  ],
},


{
  title: "Ensure React Components Render Properly",
  description: `A React testing project designed to verify that user interface components render correctly, display expected content, and remain consistent as the application evolves.

The project uses Vitest and React Testing Library to render components in a Happy DOM environment, simulate user-facing behavior, and compare rendered output against saved snapshots.

Technical highlights:
• Created automated tests to verify React components render successfully
• Used snapshot testing to detect unexpected interface changes
• Queried rendered elements with React Testing Library
• Configured Happy DOM to provide a browser-like testing environment
• Used Vitest for fast test execution, assertions, and test organization`,
  image: [image9],
  gitLink:
    "https://github.com/TheReal4m4d3u5/ensureReactComponentsRenderProperly",
  tags: [
    "React",
    "Vitest",
    "React Testing Library",
    "Happy DOM",
    "Snapshot Testing",
    "Component Testing",
    "Unit Testing",
    "Test Automation",
    "JavaScript",
    "Frontend Testing",
  ],
},



{
  title: "Reactify Essentials TDD",
  description: `A React and TypeScript application built using test-driven development to create reliable, reusable, and maintainable interface components. The project demonstrates how automated tests can guide component implementation and verify expected behavior throughout development.

The testing environment uses Vitest, React Testing Library, and Happy DOM to render components, simulate user interactions, validate displayed content, and detect regressions.

Technical highlights:
• Developed reusable React components with TypeScript
• Applied test-driven development throughout component implementation
• Created unit and component tests with Vitest
• Tested user-facing behavior using React Testing Library
• Configured Happy DOM to provide a browser-like testing environment
• Used automated tests to support refactoring and prevent regressions`,
  image: [image9],
  gitLink: "https://github.com/TheReal4m4d3u5/reactifyEssentialsTest",
  tags: [
    "React",
    "TypeScript",
    "Vitest",
    "React Testing Library",
    "Happy DOM",
    "TDD",
    "Component Testing",
    "Unit Testing",
    "Test Automation",
    "Frontend Testing",
    "Reusable Components",
    "Refactoring",
  ],
},


{
  title: "TDD Test Cases",
  description: `A JavaScript testing project focused on developing foundational test-driven development skills and gaining practical experience with automated testing frameworks. The project demonstrates how tests can define expected behavior before implementation and guide the development of reliable application logic.

The test cases cover common functions, expected results, edge conditions, and failure scenarios while reinforcing the red-green-refactor development cycle.

Technical highlights:
• Applied the red-green-refactor test-driven development workflow
• Wrote automated tests before implementing application functionality
• Created test cases for expected behavior, edge cases, and invalid inputs
• Used assertions to verify outputs and identify regressions
• Refactored implementation code while maintaining passing test coverage`,
  image: [image9],
  gitLink: "https://github.com/TheReal4m4d3u5/tDDTestCases",
  tags: [
    "JavaScript",
    "TDD",
    "Test-Driven Development",
    "Testing Frameworks",
    "Unit Testing",
    "Automated Testing",
    "Assertions",
    "Edge-Case Testing",
    "Regression Testing",
    "Refactoring",
  ],
},


];

const fullStackProjects = [
  {
    title: "EmployEase",
    description: `A full-stack job search and application tracking platform that helps users discover opportunities, save relevant positions, and organize their job search from one centralized dashboard.

The application integrates The Muse API with secure authentication, persistent user data, and GraphQL-based client-server communication.

Technical highlights:\n• Integrated The Muse API for job discovery and filtering
• Implemented JWT authentication and protected user sessions
• Built GraphQL queries and mutations with Apollo Client and Apollo Server
• Created persistent saved-job and application-tracking workflows
• Stored user and job data with MongoDB Atlas and Mongoose`,
    image: [
      employEase4,
      employEase3,
      employEase2,
      employEase5,
      employEase1,
      employEase4,
    ],
    gitLink: "https://github.com/TheReal4m4d3u5/EmployEase",
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
    description: `A full-stack book discovery and collection management application that allows users to search the Google Books catalog, create a secure account, and maintain a personalized library.

The application integrates the Google Books API with JWT authentication, persistent user data, and GraphQL-based client-server communication.

Technical highlights:
• Integrated the Google Books API for book search and discovery
• Implemented JWT authentication and protected user sessions
• Built GraphQL queries and mutations with Apollo Client and Apollo Server
• Created persistent save-and-remove book workflows
• Stored user and book data with MongoDB and Mongoose`,
    image: [bookSearch2, bookSearch1],
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
    description: `A full-stack event discovery platform that helps users find local entertainment, compare event details and ticket pricing, save events of interest, dismiss unwanted results, and review location-specific weather conditions.

The application integrates Ticketmaster, OpenWeather, and LocationIQ with a React frontend, Node.js and Express backend, PostgreSQL persistence, and Supabase-based data management.

Technical highlights:
• Integrated the Ticketmaster API for event discovery and ticket information
• Added location search and geocoding through the LocationIQ API
• Displayed event-specific weather forecasts using the OpenWeather API
• Created persistent save-and-dismiss event workflows
• Stored application data with PostgreSQL and Supabase`,
    image: [image9],
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
    description: `A full-stack project management application that allows authenticated users to create tickets, assign tasks, update ticket details, move work through different stages, and monitor progress from a visual Kanban board.

The application uses JWT authentication, protected REST API routes, PostgreSQL persistence, and a React and TypeScript frontend backed by Node.js, Express, and Sequelize.

Technical highlights:
• Implemented JWT authentication and protected application routes
• Built REST API endpoints for users, tickets, and task assignments
• Created ticket creation, editing, assignment, and deletion workflows
• Added status-based task organization across a visual Kanban board
• Stored user and ticket data with PostgreSQL and Sequelize`,
    image: [KanbanBoard1 , KanbanBoard2, KanbanBoard3, KanbanBoard4],
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

const computationalModelingProjects = [
  {
    video: employeeDB,
    videoText: "Click to watch video",
    title: "Grocery Inventory Backend System",
    description:
      "A Java backend system for grocery store workflow modeling, including inventory tracking, cart operations, checkout processing, and purchase history.\n\nBuilt with object-oriented design principles and layered architecture to create a modular, extensible system.\n\n• Inventory tracking\n• Cart and checkout workflows\n• Purchase history\n• OOP-driven design",
    image: [image9],
    gitLink: "https://github.com/TheReal4m4d3u5/GroceryManagementSystem_ICS372",
    tags: ["Java", "OOP", "Backend Systems", "Software Design"],
  },
];

const javaProjects = [
  {
    title: "Grocery Inventory Backend System",
    description:
      "A Java backend system for grocery store workflow modeling, including inventory tracking, cart operations, checkout processing, and purchase history.\n\nBuilt with object-oriented design principles and layered architecture to create a modular, extensible system.\n\n• Inventory tracking\n• Cart and checkout workflows\n• Purchase history\n• OOP-driven design",
    image: [image9],
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
      groupTitle: "Object-Oriented Analysis & Design",
      groupId: "apis",
      projects: apiProjects,
    },
    {
      groupTitle: "Design Patterns & Refactoring",
      groupId: "designPatterns",
      projects: designPatternProjects,
    },

    {
      groupTitle: "Architecture & System Modeling",
      groupId: "softwareArchitecture",
      projects: softwareArchitectureProjects,
    },

    {
      groupTitle: "Full-Stack",
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
      projects: computationalModelingProjects,
    },
    {
      groupTitle: "Automation & Reliability",
      groupId: "matlab",
      projects: matLabProjects,
    },

    {
      groupTitle: "CI/CD & DevOps",
      groupId: "cicd",
      projects: cicdProjects,
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
