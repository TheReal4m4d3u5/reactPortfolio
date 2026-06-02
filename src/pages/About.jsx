import { motion } from 'framer-motion';
import profilePhoto from '../assets/myPhoto.jpg';
import '../styles/aboutStyles.css';

const About = () => {
  return (
    <section id="aboutHomeNew">


        <motion.section
          className="photoSection"
          initial={{ opacity: 0, x: -80, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <motion.img
            src={profilePhoto}
            alt="Profile"
            className="profilePhoto mb-4"
            whileHover={{ scale: 1.4, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 250 }}
          />
        </motion.section>

        <motion.section
          className="aboutTextSection"
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
        >
          <motion.div
            className="aboutTextWraper"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 25px 70px rgba(255, 120, 210, 0.35)',
            }}
            transition={{ type: 'spring', stiffness: 180 }}
          >
            <div className="aboutTextHeader">
              Backend & Systems Engineer | Software Design, APIs, Data & Reliability
            </div>

            <div className="aboutText">
              <p>
                Software Engineer with 10+ years of experience designing, building, and testing complex software systems across enterprise, embedded, and cloud-based environments. My background spans full-stack development, backend services, automated testing, and systems engineering, with a strong focus on software quality, reliability, and maintainable architecture.
              </p>

              <p>
                I specialize in backend development using Java, Python, C#, JavaScript, Node.js, REST APIs, PostgreSQL, and MongoDB, while also bringing extensive experience in test automation, CI/CD pipelines, DevOps practices, and distributed application design. Throughout my career, I have worked closely with developers, architects, QA teams, and business stakeholders to deliver scalable solutions in Agile environments.
              </p>

              <p>
                My academic focus in Computer Science and Applied Mathematics has strengthened my analytical approach to software engineering. I have developed experience in Object-Oriented Analysis and Design (OOAD), UML modeling, use case analysis, domain modeling, system decomposition, and the ICONIX Process, emphasizing traceability from requirements through design, implementation, and testing.
              </p>

              <p>
                Currently, I am building ZeroLedger, a platform focused on carbon footprint analysis and data-driven decision support, combining software engineering, mathematical modeling, and data analytics to solve complex real-world problems.
              </p>

              <p>
                I am particularly interested in backend, systems, platform, and distributed systems engineering roles where software architecture, data integrity, reliability, and long-term maintainability are critical to success.
              </p>
            </div>
          </motion.div>
        </motion.section>

  
    </section>
  );
};

export default About;