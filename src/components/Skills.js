import React from 'react';
import '../assets/css/App.css'; // Import CSS file

const Skills = () => {
return (
<section id="skills" className="section">
    <div className="section-content row align-items-center">
        <div className="col-md-12">
            <h2>Skills</h2>
            <p>Here are some of the skills I have acquired over my career:</p>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>CSS/Bootstrap</li>
            </ul>
        </div>
    </div>
</section>
);
};

export default Skills;
