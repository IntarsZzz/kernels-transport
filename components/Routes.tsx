import React, { useState, useEffect } from 'react';
import type { Language } from '../types';

type RoutesProps = {
  language: Language;
};

const Routes: React.FC<RoutesProps> = ({ language }) => {
  const images = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const copy = language === 'lv'
    ? {
        label: 'Maršruti',
        title: 'Ģeogrāfiskais pārklājums',
        cardTitle: 'Efektīvi maršruti',
        cardSub: 'Optimāla loģistikas plānošana',
        quote: 'Katru nedēļu mūsu transports atrodas ceļā, savienojot Baltiju ar Eiropas ekonomiskajiem centriem.',
        regions: [
          { country: 'Austrija', label: 'Centrāleiropa', desc: 'Mūsu pamata maršruts ar iknedēļas pieejamību.' },
          { country: 'Čehija', label: 'Tranzīta mezgls', desc: 'Regulāras piegādes industriālajiem reģioniem.' },
          { country: 'Ziemeļitālija', label: 'Dienvideiropa', desc: 'Tiešie reisi uz Itālijas ziemeļu ražošanas punktiem.' },
          { country: 'Baltijas valstis', label: 'Mājas reģions', desc: 'Iekšzemes loģistika un kravu konsolidācija.' }
        ]
      }
    : {
        label: 'Routes',
        title: 'Geographical coverage',
        cardTitle: 'Efficient routes',
        cardSub: 'Optimized logistics planning',
        quote: 'Every week our fleet is on the road, connecting the Baltics with Europe\'s economic centers.',
        regions: [
          { country: 'Austria', label: 'Central Europe', desc: 'Our core route with weekly availability.' },
          { country: 'Czechia', label: 'Transit hub', desc: 'Regular deliveries to industrial regions.' },
          { country: 'Northern Italy', label: 'Southern Europe', desc: 'Direct trips to production hubs in northern Italy.' },
          { country: 'Baltic States', label: 'Home region', desc: 'Domestic logistics and cargo consolidation.' }
        ]
      };

  return (
    <section id="routes" className="py-32 bg-white border-b border-gray-100 scroll-reveal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-brand-orange text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">{copy.label}</span>
            <h2 className="text-4xl md:text-6xl font-black text-brand-navy tracking-tighter leading-none mb-12 uppercase font-title">
              {copy.title}
            </h2>

            <div className="border-t border-gray-100">
              {copy.regions.map((point, idx) => (
                <div key={idx} className="flex items-center p-8 border-b border-gray-100 hover:bg-gray-50 transition-all group">
                  <div className="flex-1">
                    <p className="text-[9px] font-mono font-bold text-brand-orange uppercase tracking-[0.2em] mb-1">{point.label}</p>
                    <h4 className="text-2xl font-black text-brand-navy uppercase tracking-tighter">{point.country}</h4>
                  </div>
                  <p className="hidden md:block text-[10px] text-gray-400 font-bold uppercase tracking-widest max-w-[200px] text-right">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div className="flex-1 relative bg-brand-navy overflow-hidden min-h-[520px] lg:min-h-0">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ${currentImage === idx ? 'opacity-50' : 'opacity-0'}`}
                >
                  <img src={img} className="w-full h-full object-cover grayscale contrast-125" alt="Volvo Truck" />
                </div>
              ))}
              <div className="absolute inset-0 border-[30px] border-white/5"></div>

              <div className="absolute bottom-16 left-16 right-16 z-20">
                <div className="h-[3px] w-12 bg-brand-orange mb-8"></div>
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-none mb-4">{copy.cardTitle}</h3>
                <p className="text-white/40 text-[9px] font-mono uppercase tracking-[0.4em]">{copy.cardSub}</p>
              </div>
            </div>

            <div className="bg-brand-navy p-8 md:p-10 mt-[-20px] w-full md:w-auto mx-0 md:ml-10 border-l-4 border-brand-orange">
              <p className="text-white text-[11px] font-black uppercase leading-relaxed tracking-widest text-center md:text-left">
                {`"${copy.quote}"`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Routes;
