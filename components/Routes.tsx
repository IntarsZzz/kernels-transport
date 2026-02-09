
import React, { useState, useEffect } from 'react';

const Routes: React.FC = () => {
  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const regions = [
    { country: 'Austrija', label: 'CENTRĀLEIROPA', desc: 'Mūsu pamata maršruts ar iknedēļas pieejamību.' },
    { country: 'Čehija', label: 'TRANZĪTA MEZGLS', desc: 'Regulāras piegādes industriālajiem reģioniem.' },
    { country: 'Ziemeļitālija', label: 'DIENVIDEIROPA', desc: 'Tiešie reisi uz Itālijas ziemeļu ražošanas punktiem.' },
    { country: 'Baltijas Valstis', label: 'MĀJAS REĢIONS', desc: 'Iekšzemes loģistika un kravu konsolidācija.' },
  ];

  return (
    <section id="maršruti" className="py-32 bg-white border-b border-gray-100 scroll-reveal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-brand-orange text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Maršruti</span>
            <h2 className="text-5xl md:text-7xl font-black text-brand-navy tracking-tighter leading-none mb-12 uppercase">
              Ģeogrāfiskais Pārklājums
            </h2>

            <div className="border-t border-gray-100">
              {regions.map((point, idx) => (
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
            <div className="flex-1 relative bg-brand-navy overflow-hidden">
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
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-none mb-4">Efektīvi <br />Maršruti</h3>
                <p className="text-white/40 text-[9px] font-mono uppercase tracking-[0.4em]">Optimāla loģistikas plānošana</p>
              </div>
            </div>

            <div className="bg-brand-navy p-10 mt-[-20px] ml-10 border-l-4 border-brand-orange">
              <p className="text-white text-[11px] font-black uppercase leading-relaxed tracking-widest">
                "Katru nedēļu mūsu transports atrodas ceļā, savienojot Baltiju ar Eiropas ekonomiskajiem centriem."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Routes;
