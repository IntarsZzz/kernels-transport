
import React from 'react';
import { useParallax } from '../services/animations';

const Hero: React.FC = () => {
  const parallaxOffset = useParallax(0.3);

  return (
    <section id="sākums" className="relative min-h-screen flex items-center overflow-hidden bg-gray-100">
      {/* Background Image with Depth Gradients and Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div style={{ transform: `translateY(${parallaxOffset}px)` }} className="w-full h-full transition-transform duration-100 ease-out">
          <img
            src="/images/Hero1.jpg"
            alt="Kernels Transport Cargo"
            className="w-full h-full object-cover scale-110 opacity-60 grayscale brightness-90"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-100/40 to-black/5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-16">
        <div className="max-w-3xl">
          {/* Index & Category */}
          <div className="mb-10 flex items-center space-x-6">
            <div className="reveal-mask">
              <span className="text-brand-navy/40 text-[10px] font-black uppercase tracking-[0.4em] reveal-text">Integrētas loģistikas sistēmas</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-brand-navy leading-[0.9] mb-12 tracking-tighter uppercase font-display">
            <div className="reveal-mask mb-2">
              <span className="reveal-text">Kernels</span>
            </div>
            <div className="reveal-mask mb-2">
              <span className="reveal-text delay-100">Transport</span>
            </div>
            <div className="reveal-mask">
              <span className="text-3xl md:text-5xl block mt-4 reveal-text delay-200">Kravu pārvadājumi</span>
            </div>
            <span className="text-brand-orange text-lg block mt-6 tracking-widest font-mono animate-fade-in-up delay-300">Loģistikas precizitāte katrā kilometrā</span>
          </h1>

          <p className="text-lg text-brand-navy/60 mb-14 leading-relaxed font-medium border-l-2 border-brand-orange pl-8 animate-fade-in-up delay-400">
            Mēs nodrošinām nepārtrauktu, stabilu un drošu kravu kustību starp Baltijas valstīm un Centrāleiropas galvenajiem ekonomiskajiem mezgliem. Mēs garantējam precizitāti katrā veiksmīgi piegādātajā kilometrā.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500">
            <div className="magnetic-wrap">
              <a href="#kontakti" className="group relative overflow-hidden px-14 py-7 bg-brand-orange text-white font-black text-xs uppercase tracking-[0.3em] transition-all block">
                <span className="relative z-10">Pieteikt Pārvadājumu</span>
                <div className="absolute inset-0 bg-brand-navy translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
            </div>
            <a href="#maršruti" className="px-14 py-7 border border-brand-navy/10 hover:border-brand-orange text-brand-navy font-black text-xs uppercase tracking-[0.1em] transition-all bg-white/5 backdrop-blur-sm">
              Mūsu Maršruti
            </a>
          </div>
        </div>
      </div>

      {/* Side Label */}
      <div className="absolute left-10 bottom-10 hidden xl:block animate-fade-in-up delay-500">
        <div className="text-[9px] font-mono text-brand-navy/10 tracking-[0.5em]" style={{ writingMode: 'vertical-rl' }}>
          EST. 2010 // LOGISTICS PRECISION // VOLVO FLEET
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute left-1/2 bottom-12 -translate-x-1/2 hidden md:flex flex-col items-center space-y-4 animate-fade-in-up delay-500">
        <span className="text-[8px] font-mono text-brand-navy/20 tracking-[0.5em] uppercase">Ritiniet</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-brand-orange to-transparent opacity-50"></div>
      </div>
    </section>
  );
};

export default Hero;
