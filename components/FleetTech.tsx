
import React from 'react';
import { useScrollReveal } from '../services/animations';

const FleetTech: React.FC = () => {
  useScrollReveal();
  const features = [
    {
      code: '01',
      title: 'EURO 6 Vilcēji',
      desc: 'Viss mūsu autoparks sastāv no jaunākās paaudzes Volvo vilcējiem, kas nodrošina minimālu ietekmi uz vidi un maksimālu efektivitāti.'
    },
    {
      code: '02',
      title: 'GPS Monitorings',
      desc: 'Reāllaika kravas izsekojamība un telemātikas dati ļauj mums sniegt precīzu informāciju par sūtījuma statusu jebkurā brīdī.'
    },
    {
      code: '03',
      title: 'Aktīvā Drošība',
      desc: 'Volvo I-See un aktīvās bremzēšanas sistēmas nodrošina drošu transportēšanu pat vissarežģītākajos laikapstākļos un maršrutos.'
    },
    {
      code: '04',
      title: '92m³ Puspiekabes',
      desc: 'Specializētās Walking Floor sistēmas ļauj mums efektīvi pārvadāt liela apjoma beramkravas ar automatizētu izkraušanas procesu.'
    }
  ];

  return (
    <section id="tehnoloģija" className="py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 scroll-reveal">
          <div className="max-w-2xl">
            <span className="text-brand-orange text-xs font-black uppercase tracking-[0.4em] mb-4 block">Autoparks</span>
            <h2 className="text-5xl md:text-7xl font-black text-brand-orange tracking-tighter leading-[0.9] uppercase font-display">
              Tehniskais Aprīkojums
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-sm leading-relaxed font-bold uppercase tracking-wider border-l-2 border-brand-orange/20 pl-6">
            Mēs pastāvīgi investējam jaunākajās transporta tehnoloģijās, lai nodrošinātu nepārtrauktu servisu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
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
          <span className="text-[10px] font-mono uppercase tracking-[0.5em] font-black italic">Profesionāls loģistikas aprīkojums</span>
          <div className="h-[1px] flex-1 bg-brand-navy"></div>
        </div>
      </div>
    </section>
  );
};

export default FleetTech;
