
import React, { useRef, useState, useEffect } from 'react';
import { useScrollReveal } from '../services/animations';

const StatCard: React.FC<{ value: string; label: string; desc: string; index: number }> = ({ value, label, desc, index }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = parseInt(value) || 0;
  const cardRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        let start = 0;
        const duration = 2000;
        const increment = numericValue / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= numericValue) {
            setDisplayValue(numericValue);
            clearInterval(timer);
          } else {
            setDisplayValue(Math.floor(start));
          }
        }, 16);
      }
    }, { threshold: 0.5 });

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [numericValue, hasAnimated]);

  return (
    <div ref={cardRef} className="bg-white p-12 transition-all hover:bg-gray-50 group scroll-reveal" style={{ transitionDelay: `${index * 100}ms` }}>
      <span className="text-[10px] font-mono opacity-30 block mb-10 text-brand-navy">0{index + 1}</span>
      <p className="text-6xl font-black mb-4 tracking-tighter text-brand-navy group-hover:text-brand-orange transition-colors">
        {value.includes('+') ? `${displayValue}+` : /^[0-9]+$/.test(value) ? displayValue : value}
      </p>
      <h4 className="text-sm font-black mb-4 uppercase tracking-widest text-brand-navy">
        {label}
      </h4>
      <p className="text-xs text-brand-gray/60 font-bold uppercase tracking-wider leading-relaxed">
        {desc}
      </p>
    </div>
  );
};

const About: React.FC = () => {
  useScrollReveal();
  const stats = [
    { value: '14+', label: 'Gadi Nozarē', desc: 'Darbība uzsākta 2010. gadā Dobelē, nodrošinot nepārtrauktu izaugsmi.' },
    { value: '6', label: 'Volvo Vilcēji', desc: 'Mūsdienīgs autoparks, kas pilnībā atbilst EURO 6 ekoloģijas standartiem.' },
    { value: '92', label: 'M³ Ietilpība', desc: 'Liela apjoma beramkravu pārvadājumi ar specializētām šķeldveža piekabēm.' },
    { value: 'LTRK', label: 'Biedrs', desc: 'Aktīva līdzdalība Latvijas Tirdzniecības un rūpniecības kamerā.' }
  ];

  return (
    <section id="par-mums" className="py-32 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-7 scroll-reveal">
            <span className="text-brand-orange text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Par Uzņēmumu</span>
            <h2 className="text-brand-orange font-black text-4xl md:text-6xl mb-8 tracking-tighter uppercase leading-tight font-display">
              Kernel Transport loģistikas risinājumi
            </h2>
          </div>
          <div className="lg:col-span-5 text-gray-500 font-medium leading-relaxed pt-4 scroll-reveal delay-200">
            <p className="mb-6">
              Uzņēmums "Kernels Transport" savu darbību uzsāka 2010. gadā Dobelē. Vairāk nekā 14 gadu laikā uzkrātā pieredze starptautiskajā loģistikā ir ļāvusi mums izveidot noslīpētu un uzticamu sistēmu.
            </p>
            <p className="text-brand-navy font-black text-xs uppercase tracking-widest border-l-2 border-brand-orange pl-6">
              Garantēta kvalitāte un individuāla pieeja katram pasūtījumam.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200 mx-[-24px] md:mx-0">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
