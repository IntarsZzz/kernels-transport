
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white border-b border-gray-200 py-2 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className={`text-xl font-black tracking-tighter transition-colors ${isScrolled ? 'text-brand-navy' : 'text-brand-navy'}`}>
              KERNELS <span className="text-brand-orange">Transport</span>
            </span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-10">
            {['Sākums', 'Par mums', 'Tehnoloģija', 'Pakalpojumi', 'Kontakti'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy hover:text-brand-orange transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href="#kontakti"
            className="bg-brand-orange hover:bg-brand-navy text-white px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all"
          >
            Saņemt Piedāvājumu
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
