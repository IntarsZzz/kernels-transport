
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { label: 'Sākums', href: '#sākums' },
    { label: 'Par mums', href: '#par-mums' },
    { label: 'Tehnoloģija', href: '#tehnoloģija' },
    { label: 'Pakalpojumi', href: '#pakalpojumi' },
    { label: 'Kontakti', href: '#kontakti' }
  ];

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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-white border-b border-gray-200 py-2 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#sākums" aria-label="Kernels Transport sākumlapa" className="block">
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

          <a
            href="#kontakti"
            className="hidden lg:inline-block bg-brand-orange hover:bg-brand-navy text-white px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all"
          >
            Saņemt Piedāvājumu
          </a>

          <button
            type="button"
            onClick={handleMenuToggle}
            className="lg:hidden bg-brand-orange text-white px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em]"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? 'Aizvērt navigāciju' : 'Atvērt navigāciju'}
          >
            {isMobileMenuOpen ? 'Aizvērt' : 'Izvēlne'}
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
          aria-label="Aizvērt navigāciju"
        >
          ×
        </button>

        <div className="h-full w-full pt-28 pb-10 px-6 flex flex-col justify-between">
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
            href="#kontakti"
            onClick={handleMobileLinkClick}
            className="block w-full max-w-md mx-auto bg-brand-orange hover:bg-brand-navy text-white text-center py-5 text-[11px] font-black uppercase tracking-[0.2em] transition-all"
          >
            Saņemt Piedāvājumu
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
