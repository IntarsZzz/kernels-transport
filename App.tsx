
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FleetTech from './components/FleetTech';
import Services from './components/Services';
import Routes from './components/Routes';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { useScrollReveal } from './services/animations';

const App: React.FC = () => {
  useScrollReveal();
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      <About />
      <FleetTech />
      <Services />
      <Routes />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
