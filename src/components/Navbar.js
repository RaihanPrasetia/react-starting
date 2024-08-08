import React, { useState } from 'react';
import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css'; // Pastikan Bootstrap diimpor
import '../assets/css/Navbar.css'; // Import CSS file

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
      <div className="container">
        {/* Logo / Teks di Kiri */}
        <a className="navbar-brand" href="#home">My<span className="nav-text">Portfolio</span></a>

        {/* Toggle button untuk tampilan mobile */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu di Tengah */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}>
              <Link 
                className="nav-link" 
                to="home" 
                smooth={true} 
                duration={200} 
                onSetActive={(to)=> setActiveSection(to)}
              >
                Home
              </Link>
            </li>
            <li className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}>
              <Link 
                className="nav-link" 
                to="about" 
                smooth={true} 
                duration={200} 
                onSetActive={(to)=> setActiveSection(to)}
              >
                About
              </Link>
            </li>
            <li className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}>
              <Link 
                className="nav-link" 
                to="skills" 
                smooth={true} 
                duration={200} 
                onSetActive={(to)=> setActiveSection(to)}
              >
                Skills
              </Link>
            </li>
            <li className={`nav-item ${activeSection === 'certificates' ? 'active' : ''}`}>
              <Link 
                className="nav-link" 
                to="certificates" 
                smooth={true} 
                duration={200} 
                onSetActive={(to)=> setActiveSection(to)}
              >
                Certificates
              </Link>
            </li>
            <li className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}>
              <Link 
                className="nav-link" 
                to="projects" 
                smooth={true} 
                duration={200} 
                onSetActive={(to)=> setActiveSection(to)}
              >
                Projects
              </Link>
            </li>
            <li className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}>
              <Link 
                className="nav-link" 
                to="contact" 
                smooth={true} 
                duration={200} 
                onSetActive={(to)=> setActiveSection(to)}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Tombol Download CV di Kanan */}
        <a className="btn btn-gradient ml-3 py-2 px-4" href="/path/to/your/cv.pdf" download>Download CV</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
