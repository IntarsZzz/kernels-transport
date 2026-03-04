
"use client";

import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FleetTech from './components/FleetTech';
import Services from './components/Services';
import Routes from './components/Routes';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import VercelAnalytics from './components/VercelAnalytics';
import GoogleAnalytics from './components/GoogleAnalytics';
import type { Language } from './types';
import { useScrollReveal } from './services/animations';

type AppProps = {
  language: Language;
};

const App: React.FC<AppProps> = ({ language }) => {
  useScrollReveal();

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="min-h-screen">
      <Navbar language={language} />
      <Hero language={language} />
      <About language={language} />
      <FleetTech language={language} />
      <Services language={language} />
      <Routes language={language} />
      <Contact language={language} />
      <Footer language={language} />
      <GoogleAnalytics />
      <VercelAnalytics />
      <CookieConsent language={language} />
    </div>
  );
};

export default App;
