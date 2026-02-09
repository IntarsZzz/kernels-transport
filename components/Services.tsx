
import React from 'react';
import { useScrollReveal } from '../services/animations';

const Services: React.FC = () => {
  useScrollReveal();
  const services = [
    {
      title: 'FTL Loģistika',
      subtitle: 'PILNĀS KRAVAS',
      description: 'Tiešas un operatīvas piegādes no durvīm līdz durvīm visā Centrāleiropā bez starpposmiem.',
      details: ['Nav kravas pārkraušanas', 'Fiksēti piegādes laiki', 'Maršruti: Austrija, Čehija, Itālija', 'CMR apdrošināšana']
    },
    {
      title: 'LTL Serviss',
      subtitle: 'SALIKTĀS KRAVAS',
      description: 'Kravu grupēšana un regulāra izvešana, optimizējot transporta izmaksas mazāka apjoma sūtījumiem.',
      details: ['Iknedēļas grafiki', 'Cenu efektivitāte', 'Kravu konsolidācija', 'Sūtījumu monitorings']
    },
    {
      title: 'Beramkravas',
      subtitle: '92M³ WALKING FLOOR',
      description: 'Specializēts transports liela apjoma beramkravu pārvadājumiem Baltijas valstīs.',
      details: ['Kustīgā grīda', 'Šķelda un koksne', 'Lauksaimniecības produkti', 'Pašizkraušana']
    }
  ];

  return (
    <section id="pakalpojumi" className="py-32 bg-brand-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24 scroll-reveal">
          <span className="text-brand-orange text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Pakalpojumi</span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase font-display">
            Mūsu loģistikas pakalpojumi
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {services.map((s, i) => (
            <div key={i} className="bg-brand-navy p-12 hover:bg-white/5 transition-all group scroll-reveal hover-tilt" style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="mb-12">
                <span className="text-brand-orange text-[10px] font-black uppercase tracking-[0.3em] block mb-4">
                  {s.subtitle}
                </span>
                <h4 className="text-3xl font-black text-white mb-0 tracking-tighter uppercase">{s.title}</h4>
              </div>

              <p className="text-white/40 leading-relaxed mb-12 text-sm font-medium h-20">
                {s.description}
              </p>

              <div className="space-y-4 mb-12 min-h-[140px]">
                {s.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <div className="w-1.5 h-1.5 bg-brand-orange group-hover:scale-150 transition-transform"></div>
                    <span className="text-white/70 text-[10px] font-black uppercase tracking-widest">{detail}</span>
                  </div>
                ))}
              </div>

              <a href="#kontakti" className="inline-block w-full py-5 text-center bg-white text-brand-navy hover:bg-brand-orange hover:text-white text-[11px] font-black uppercase tracking-widest transition-all">
                Pieteikt Pārvadājumu
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
