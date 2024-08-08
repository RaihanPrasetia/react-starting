import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './assets/css/App.css';
import Projek from './components/Projek';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Certificates />
      <Projek />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
