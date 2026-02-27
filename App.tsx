
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FleetTech from './components/FleetTech';
import Services from './components/Services';
import Routes from './components/Routes';
import Contact from './components/Contact';
import Footer from './components/Footer';
import type { Language } from './types';

import { useScrollReveal } from './services/animations';

const LANG_STORAGE_KEY = 'kernels-language';

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'lv';

  const urlLang = new URLSearchParams(window.location.search).get('lang');
  if (urlLang === 'en' || urlLang === 'lv') return urlLang;

  const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
  if (stored === 'en' || stored === 'lv') return stored;

  return window.navigator.language.toLowerCase().startsWith('en') ? 'en' : 'lv';
};

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(() => getInitialLanguage());
  useScrollReveal();

  useEffect(() => {
    window.localStorage.setItem(LANG_STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="min-h-screen">
      <Navbar language={language} onLanguageChange={setLanguage} />
      <Hero language={language} />

      <About language={language} />
      <FleetTech language={language} />
      <Services language={language} />
      <Routes language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
};

export default App;
