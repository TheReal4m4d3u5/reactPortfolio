import React from 'react';

const About = () => {
  return (
      <section id="projects" className="container mt-5">
          <h2>My Projects</h2>
          <div className="row">
              <div className="col-md-4">
                  <div className="card mb-4">
                      <div className="card-body">
                          <h5 className="card-title">Project Title 1</h5>
                          <p className="card-text">Brief description of the project.</p>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="card mb-4">
                      <div className="card-body">
                          <h5 className="card-title">Project Title 2</h5>
                          <p className="card-text">Brief description of the project.</p>
                      </div>
                  </div>
              </div>
              {/* Add more projects as needed */}
          </div>
      </section>
  );
};

export default About;
