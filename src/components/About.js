import React from 'react';
import '../assets/css/App.css';
import '../assets/css/About.css';

const About = () => {
  return (
    <section id="about" className="section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img
              src={require('../assets/images/profile.png').default}
              alt="About Me"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h2 className="text-black font-weight-bold mb-4 text-decoration-none">About Me</h2>
            <p className="lead text-black">
              I am Raihan Prasetia, an active student in the 6th semester of the Informatics Engineering study program from Dinamika Bangsa University Jambi City. I have an interest in IT and technology, and I am eager to develop my skills, especially in Web Development and Mobile Development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
