import React from 'react';
import { useScrollReveal } from '../services/animations';
import type { Language } from '../types';

type FleetTechProps = {
  language: Language;
};

const FleetTech: React.FC<FleetTechProps> = ({ language }) => {
  useScrollReveal();

  const copy = language === 'lv'
    ? {
        label: 'Autoparks',
        title: 'Tehniskais aprīkojums',
        description: 'Mēs pastāvīgi investējam jaunākajās transporta tehnoloģijās, lai nodrošinātu nepārtrauktu servisu.',
        footer: 'Profesionāls loģistikas aprīkojums',
        features: [
          {
            code: '01',
            title: 'EURO 6 vilcēji',
            desc: 'Viss mūsu autoparks sastāv no jaunākās paaudzes Volvo vilcējiem, kas nodrošina minimālu ietekmi uz vidi un maksimālu efektivitāti.'
          },
          {
            code: '02',
            title: 'GPS monitorings',
            desc: 'Reāllaika kravas izsekojamība un telemātikas dati ļauj mums sniegt precīzu informāciju par sūtījuma statusu jebkurā brīdī.'
          },
          {
            code: '03',
            title: 'Aktīvā drošība',
            desc: 'Volvo I-See un aktīvās bremzēšanas sistēmas nodrošina drošu transportēšanu pat vissarežģītākajos laikapstākļos un maršrutos.'
          },
          {
            code: '04',
            title: '92m³ puspiekabes',
            desc: 'Specializētās Walking Floor sistēmas ļauj mums efektīvi pārvadāt liela apjoma beramkravas ar automatizētu izkraušanas procesu.'
          }
        ]
      }
    : {
        label: 'Fleet',
        title: 'Technical equipment',
        description: 'We continuously invest in modern transport technologies to ensure consistent and uninterrupted service.',
        footer: 'Professional logistics equipment',
        features: [
          {
            code: '01',
            title: 'EURO 6 trucks',
            desc: 'Our entire fleet consists of the latest Volvo truck generation, ensuring minimal environmental impact and maximum efficiency.'
          },
          {
            code: '02',
            title: 'GPS monitoring',
            desc: 'Real-time cargo tracking and telematics data allow us to provide accurate shipment status at any moment.'
          },
          {
            code: '03',
            title: 'Active safety',
            desc: 'Volvo I-See and active braking systems support safe transport even in complex weather and route conditions.'
          },
          {
            code: '04',
            title: '92m3 trailers',
            desc: 'Specialized walking floor systems let us handle high-volume bulk cargo with efficient automated unloading.'
          }
        ]
      };

  return (
    <section id="technology" className="py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 scroll-reveal">
          <div className="max-w-2xl">
            <span className="text-brand-orange text-xs font-black uppercase tracking-[0.4em] mb-4 block">{copy.label}</span>
            <h2 className="text-5xl md:text-7xl font-black text-brand-orange tracking-tighter leading-[0.9] uppercase font-title">
              {copy.title}
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-sm leading-relaxed font-bold uppercase tracking-wider border-l-2 border-brand-orange/20 pl-6">
            {copy.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {copy.features.map((f, i) => (
            <div key={i} className="bg-white p-12 border border-gray-200 hover:border-brand-orange transition-all duration-300 group flex flex-col h-full shadow-sm hover:shadow-xl scroll-reveal hover-tilt" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="mb-10 flex justify-between items-start">
                <span className="text-[10px] font-mono font-bold text-gray-300">{f.code}</span>
              </div>
              <h4 className="text-xl font-black text-brand-navy mb-6 tracking-tight uppercase leading-tight group-hover:text-brand-orange transition-colors">{f.title}</h4>
              <p className="text-gray-400 leading-relaxed text-sm font-medium">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-center space-x-4 opacity-20 scroll-reveal delay-500">
          <div className="h-[1px] flex-1 bg-brand-navy"></div>
          <span className="text-[10px] font-mono uppercase tracking-[0.5em] font-black italic">{copy.footer}</span>
          <div className="h-[1px] flex-1 bg-brand-navy"></div>
        </div>
      </div>
    </section>
  );
};

export default FleetTech;
