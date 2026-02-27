import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import type { Language } from '../types';

type NavbarProps = {
  language: Language;
};

const Navbar: React.FC<NavbarProps> = ({ language }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = language === 'lv'
    ? [
        { label: 'Sākums', href: '#home' },
        { label: 'Par mums', href: '#about' },
        { label: 'Tehnoloģija', href: '#technology' },
        { label: 'Pakalpojumi', href: '#services' },
        { label: 'Kontakti', href: '#contact' }
      ]
    : [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Technology', href: '#technology' },
        { label: 'Services', href: '#services' },
        { label: 'Contact', href: '#contact' }
      ];

  const ctaLabel = language === 'lv' ? 'Saņemt piedāvājumu' : 'Request a Quote';
  const menuLabel = isMobileMenuOpen
    ? (language === 'lv' ? 'Aizvērt' : 'Close')
    : (language === 'lv' ? 'Izvēlne' : 'Menu');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const getLocaleHref = (nextLanguage: Language) => {
    return nextLanguage === 'en' ? '/en' : '/';
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-white border-b border-gray-200 py-2 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center">
            <a href="#home" aria-label={language === 'lv' ? 'Kernels Transport sākumlapa' : 'Kernels Transport homepage'} className="block">
              <span className={`text-2xl font-black tracking-tight font-title transition-colors ${isScrolled ? 'text-black' : 'text-black'}`}>
                Kernels Transport
              </span>
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy hover:text-brand-orange transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <div className="flex border border-gray-200">
              <Link
                href={getLocaleHref('lv')}
                className={`px-3 py-2 text-[10px] font-black tracking-[0.2em] ${language === 'lv' ? 'bg-brand-navy text-white' : 'text-brand-navy hover:bg-gray-100'}`}
                aria-label="Latviešu valoda"
              >
                LV
              </Link>
              <Link
                href={getLocaleHref('en')}
                className={`px-3 py-2 text-[10px] font-black tracking-[0.2em] ${language === 'en' ? 'bg-brand-navy text-white' : 'text-brand-navy hover:bg-gray-100'}`}
                aria-label="English language"
              >
                EN
              </Link>
            </div>

            <a
              href="#contact"
              className="inline-block bg-brand-orange hover:bg-brand-navy text-white px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all"
            >
              {ctaLabel}
            </a>
          </div>

          <button
            type="button"
            onClick={handleMenuToggle}
            className="lg:hidden bg-brand-orange text-white px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em]"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? (language === 'lv' ? 'Aizvērt navigāciju' : 'Close navigation') : (language === 'lv' ? 'Atvērt navigāciju' : 'Open navigation')}
          >
            {menuLabel}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`lg:hidden fixed inset-0 z-40 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <button
          type="button"
          onClick={handleMenuToggle}
          className="absolute top-6 right-6 h-12 w-12 flex items-center justify-center text-brand-navy text-3xl leading-none font-black"
          aria-label={language === 'lv' ? 'Aizvērt navigāciju' : 'Close navigation'}
        >
          ×
        </button>

        <div className="h-full w-full pt-28 pb-10 px-6 flex flex-col justify-between">
          <div className="mb-10 flex justify-center gap-3">
            <Link
              href={getLocaleHref('lv')}
              onClick={handleMobileLinkClick}
              className={`px-4 py-2 text-xs font-black tracking-[0.2em] border ${language === 'lv' ? 'bg-brand-navy border-brand-navy text-white' : 'border-gray-300 text-brand-navy'}`}
            >
              LV
            </Link>
            <Link
              href={getLocaleHref('en')}
              onClick={handleMobileLinkClick}
              className={`px-4 py-2 text-xs font-black tracking-[0.2em] border ${language === 'en' ? 'bg-brand-navy border-brand-navy text-white' : 'border-gray-300 text-brand-navy'}`}
            >
              EN
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleMobileLinkClick}
                className="text-2xl font-black uppercase tracking-[0.12em] text-brand-navy hover:text-brand-orange transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            onClick={handleMobileLinkClick}
            className="block w-full max-w-md mx-auto bg-brand-orange hover:bg-brand-navy text-white text-center py-5 text-[11px] font-black uppercase tracking-[0.2em] transition-all"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
