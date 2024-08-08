import React, { useEffect, useState } from 'react';
import '../assets/css/Home.css'; // Import CSS file

const Home = () => {
  const [text, setText] = useState('');
  const fullstackText = 'Fullstack Web Developer';
  const developerText = 'Backend Developer';
  const mobileText = 'Mobile Developer';
  const texts = [fullstackText, developerText , mobileText];

  useEffect(() => {
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let typingInterval;

    const typeText = () => {
      typingInterval = setInterval(() => {
        if (currentCharIndex < texts[currentTextIndex].length) {
          setText(prev => prev + texts[currentTextIndex][currentCharIndex]);
          currentCharIndex += 1;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setText('');
            currentCharIndex = 0;
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            typeText();
          }, 1000); // Pause before typing the next text
        }
      }, 100); // Adjust typing speed
    };

    typeText();

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="section container-fluid py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-decoration-none">
            <h1 className="display-4 text-decoration-none">Welcome to My Portfolio</h1>
            <h2 className="my-4 text-decoration-none">
              Hello! I am a <span className="typing-text text-primary">{text}</span>
            </h2>
            <p className="lead">
              with a passion for creating dynamic and responsive web applications. 
              Explore my portfolio to see my projects and skills.
            </p>
          </div>
          <div className="col-md-6 text-center mt-2">
            <img
              src={require('../assets/images/foto.jpg').default}
              alt="Profile"
              className="img-fluid rounded-circle shadow-lg mb-0"
              style={{ width: '400px', height: '400px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
