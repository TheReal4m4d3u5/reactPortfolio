import React from 'react';
import '../styles/resumeStyles.css';
import resume from '../assets/Avery Jacobson.pdf'

const Resume = () => {
  return (


    <div className="resume-page">
      <section className='mainResumeContent'>

        <div className="resumeLinks">
          <a href={resume} download="Avery_Jacobson_Resume.pdf" className="link-button">
            Downlaod Resume
          </a>
        </div>



        <section className="professional-section">

          <h3 className='resumeHeaders'>Professional Summary</h3>

          <section className='professinalText'>
            <p>Accomplished Full Stack Developer and SDET with over 10 years of experience delivering high-quality software solutions. Proficient in full-stack development, automation, and quality assurance, with expertise in C, C++, Java, JavaScript, React, TypeScript, and Python. Skilled in Test-Driven Development (TDD) using Jest, Cypress, Git Actions, and CircleCI to enhance code quality and streamline development pipelines. Extensive experience with RESTful and GraphQL APIs, SQL/NoSQL databases, and CI/CD pipelines. Adept at cloud-native development and leveraging frameworks like Selenium, Appium, Cucumber, and BDD to optimize testing. Known for a results-driven approach, innovative problem-solving, and delivering robust, scalable solutions.</p>

          </section>
        </section>
        <div className="skill-item">Core Skills</div>
        <div className="skills">
  <li><span style={{ fontWeight: "bold" }}>Languages:</span> C, C++, Java, Python, JavaScript, React, Typescript, Visual Basic .NET, LISP, Assembly Language, OpenGL(libraries), HTML, CSS, VB Script</li>
  <li><span style={{ fontWeight: "bold" }}>Database Technologies:</span> SQL, PostgresSQL, MongoDB</li>
  <li><span style={{ fontWeight: "bold" }}>Testing & Automation:</span> Selenium, Cucumber, Appium, TestComplete, Maven</li>
  <li><span style={{ fontWeight: "bold" }}>CI/CD & DevOps:</span> Jenkins, Bamboo, Docker, Jest, Cypress, Git Actions, CircleCI</li>
  <li><span style={{ fontWeight: "bold" }}>Tools & Platforms:</span> JIRA, TestRail, Git, GitHub, GraphQL, RESTful APIs</li>
  <li><span style={{ fontWeight: "bold" }}>Methodologies:</span> Agile, SDLC, BDD, TDD</li>
  <li><span style={{ fontWeight: "bold" }}>Cloud Technologies:</span> Azur, AWS</li>
</div>


        <div className="skill-item">Tools & Technologies</div>
        <li><strong>Operating Systems:</strong> Linux, Unix, RTOS, Avionics RTOS</li>
        <li><strong>Programming & Scripting:</strong> Python 2.7x, Matlab, Labview, EASy68k, DrRacket</li>
        <li><strong>Development Tools:</strong> GCC, Visual Studio, Eclipse, Xilinx, IAR Systems, Apache Subversion, Cygwin, MinGW</li>
        <li><strong>Version Control:</strong> GitHub, GIT, Harvest, Subversion</li>
        <li><strong>Testing & Collaboration:</strong> Jira, Testlink, Test Rail, TestComplete, Redmine, IBM Notes, Microsoft Office, MS Teams</li>
        <li><strong>Embedded Systems:</strong> ARM Cortex, AVR ATMega, Arduino, Raspberry Pi, Basys2</li>
        <li><strong>Protocols & Interfaces:</strong> Arinc 664, Arinc 429, RS-232, ZigBee, UART, TCP/IP</li>
        <li><strong>Instrumentation:</strong> Oscilloscope, frequency generator, spectrum analyzer, digital multimeter, D/C power supply</li>

        <div className="skill-item">Hardware</div>
        <li><strong>Components & Microcontrollers:</strong> Accelerometer, GSM, CDMA, GPS, Ublocks, ICs, Infrared</li>
        <li><strong>Peripherals & Boards:</strong> Raspberry Pi, Arduino, Basys2, JTAG</li>
        <li><strong>Tools & Software:</strong> FPGA, Digital Logic, Virtual Box, ADE, Doors, Hercules</li>


        <div className="skill-item">Education</div>

            <li>Associates from Normandale Community College in Computer Science</li>
            <li>Associates from Normandale Community College in Foundations of Engineering in Electrical Engineering</li>
            <li>Associates from ITT Tech in Computer Science</li>
            <li>Certifications: SQL certificate from Normandale, Developer Certificate from the University of Minnesota.</li>
            <li>Ongoing Learning: Taking classes at Metro State in Computer Science.</li>


        <section className="professional-section">
          <h3 className='resumeHeaders'>Professoinal Experience</h3>
          <ul>
            <li>Senior Software Engineer
              Wells Fargo, Minneapolis, MN
              8/21 – 4/24
              •	Developed and executed integration and regression testing scripts using Java, Selenium, and BDD (Cucumber) for Wells Fargo’s brokerage platform.
              •	Built CI/CD pipelines with Jenkins and Maven, reducing manual testing time by 80%.
              •	Collaborated with cross-functional teams to troubleshoot defects, enhancing application stability.


              •	Helped with the development of Wells Fargo’s brokerage website and app.
              •	Actively involved in various phases of Software Development Life Cycle (SDLC).
              •	Java, Selenium, Appium, Maven, BDD, Cucumber, Eclipse, Jenkins.
              •	Planned, developed, documented, scheduled and executed integration and regression testing scripts using CI/CD tools.

            </li>
            <div></div>
            <li>Wells Fargo Eden Prairie, MN  							  3/20 -8/21
              Application System Engineer
              •	a team to select a version control tool and research plug-ins needed to work with our automation tool.
              •	Designed workflow of software automation development and set up the workflow tool Jira.
              •	Working in Core, Well’s Fargo’s Home Lending tool. Usuring that there are not defect, all products are returning and that the tool is working correctly in the Sales Consultation space.
              •	Scrum, Agile team
              •	Functional UI testing, creating unit tests for front UI development work.
              •	Develop Java Selenium code for automation.
              •	Create testing documentation in the APplciation Lifecycle Management tool.
              •	Work with the Rules and GAIP team to make sure products are returning correctly.
              •	Work on End to End testing teams to seed loans to test from start to finish.
            </li>
            <div></div>

            <li>Stratasys Eden Prairie, MN 							  9/17 – 12/19
              Senior Software Technician
              •	Helped consult and set up a test case management tool TestRail. Led the drive to work with a team to select a version control tool and research plug-ins needed to work with our automation tool.
              •	Designed workflow of software automation development and set up the workflow tool Jira.
              •	Set up Jira using simple issue language and REST API.
              •	Consulted on software languages being used for automation development.
              •	Wrote new and updated old test cases for a variety of industrial 3D printers.
              •	Worked with engineers on upcoming projects on tools needed for systems, and to diagnose failures and change requests on current projects.
              •	Set up new automation suites and architecture for new projects, taking written test cases and automating them using the scripting tool TestComplete and writing test scripts using Javascript.
              •	Writing automated tools using Batch, Bash and Python scripts to execute backend commands along with TestComplete.
              •	Set up automation hardware to be ran remotely.
              •	Created a virtual machine for automation to run on. Used a programmer to flash and test firmware.
              •	Use RS-232 to look at serial data from the processor.
              •	Execute manual software tests for specific change request, analyzing system logs to diagnose failures. Train summer interns and be their main point of contact.
              •	Train in new employees to the team.
              •	Created dashboards in Jira for data mining for all automation projects to report progress.
              •	Won a spark award by the company for going above and beyond the call of my job.
              Created Summary:  3D printers, Automated/Manuel, Bash, Batch, Cygwin, Embedded Systems, Linux, JavaScript, Jira, Python, Scripting, Spark Award, TestComplete, TestRail, Unit/Regression testing, Virtual Machine, WSL.
            </li>

            <li>Rockwell Collins Cedar Rapids, IA  							       1/17 – 8/17
              Software Technician
              •	Helped design, test, and develop multiple proprietary critical flight systems for aircraft industry.
              •	Worked in an agile team environment holding scrum meetings allocating and executing tasks. Tasks included:
              •	Assist systems engineer in development of buses on proprietary bus management software.
              •	Helped add features to proprietary aviation software tools in PHP.
              •	Set up automation scripts using python and fixing broken automation scripts.
              •	Set up Bamboo in Atlassian to launch batch scripts I created to automate the execution of automation and logs.
              •	Set up aviation hardware and software for testing on flight critical systems.
            </li>


            <div>Remote Technologies Inc Shakopee, MN  					3/16 – 9/16
              Lead Test Engineer
              •	Created and executed Automated and  tests on home automation hardware and software that was integrated with OEM, third party hardware and software.
              •	Set up a test case management server that integrated  with the bug reporting tool Redmine.
              •	Set up different A/C Z-Wave light switches and create test cases, testing the automaton software that accompanied the hardware.
              •	Test remotes, control processors, wired in wall and mounted control touch display interfaces, Z-Wave, audio and video distribution matrices.
              •	Set up professional home theater, audio systems and streaming interfaces (Apple TV, Google TV, Amazon TV, 4K, etc.), understanding the protocols and interfaces.
              •	Created scripts from proprietary home automation software to test systems.
            </div>

            <li>Carestream Oakdale, MN 						05/18/15 – 11/19/15
              Software Quality Assurance Technician
              •	Tested, maintained and serviced different radiology printers for quality control with new hardware and software.
              •	Follow FDA documentation regulations. Creating and maintained servers for printer interface. Followed test procedures and did verification testing with production image quality control.
              •	Made sure that everything was shipped correctly and worked out of the box according to manuals. Tested prototype film for quality control and meeting of standards, including measuring film for correct density of darkness and followed image quality test procedures for quality inspection of film.
              •	If an engineer made new hardware, I would put it in the machine and test that the X-ray imager was working properly, and that film met quality specifications.
            </li>

            <li>Xirgo, Technologies Inc Edina, MN                                                                           09/18/14 – 3/30/15
              Software Test Engineer
              •	Using the C programming language and Windows’ libraries, I created a test script to perform regression tests on positive and negative test cases; created a serial connection using the window's libraries.
              •	A file handle was created, the baud rate was set, and the data was parsed.
              •	Given a user manual and created test cases based on the device.
              •	A time stamp was created at the beginning and end of every test case, results went to a HTML document.
            </li>
          </ul>
        </section>

        <section className="contact-section">
          <h3 className='resumeHeaders'>Contact</h3>
          <div className="contactInfo">
            <li>Email Address:</li>
            <div>averyajacobson@gmail.com</div>
            <li>Phone Number: 952-594-9290</li>
            <li>Location: Minneapolis Minnesota or Remote</li>
          </div>
        </section>

        <section className="hobbies-section">
          <h3 className='resumeHeaders'>Interests and Hobbies</h3>
          <div className="hobbiesText">
            <li>I like to play guitar and walk my dog.</li>
          </div>
        </section>
      </section>


    </div>
  );
};

export default Resume;