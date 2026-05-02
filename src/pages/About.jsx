import React from 'react';
import { motion } from 'framer-motion';
import profilePhoto from '../assets/myPhoto.jpg';
import '../styles/aboutStyles.css';

const About = () => {
  return (
    <section id="aboutHome">
      <div className="about">

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
            whileHover={{ scale: 1.08, rotate: 2 }}
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
              scale: 1.02,
              boxShadow: '0 25px 70px rgba(255, 120, 210, 0.35)',
            }}
            transition={{ type: 'spring', stiffness: 180 }}
          >
            <div className="aboutTextHeader">
              Backend & Systems Engineer | APIs, Data, Reliability
            </div>

            <div className="aboutText">
              <p>
                Software Engineer focused on building reliable backend systems and scalable data workflows, with over 10 years of experience delivering high-quality solutions in production environments.
              </p>

              <p>
                My work centers on API design, data validation, system reliability, and performance optimization across large-scale applications. I bring a strong foundation in mathematics and statistics, applying analytical thinking to ensure data integrity and correctness in complex systems.
              </p>

              <p>
                In addition to backend development, I have experience working close to hardware and embedded systems, giving me a systems-level perspective that spans from low-level interactions to distributed application design.
              </p>

              <p>
                Currently, I am building ZeroLedger, a platform focused on modeling and analyzing CO₂ footprint through data-driven workflows, combining backend engineering with applied mathematical modeling.
              </p>

              <p>
                I am particularly interested in backend, platform, and distributed systems roles where reliability, data accuracy, and system design are critical.
              </p>
            </div>
          </motion.div>
        </motion.section>

      </div>
    </section>
  );
};

export default About;