import React, { useRef, useState, useEffect } from 'react';
import { useScrollReveal } from '../services/animations';
import type { Language } from '../types';

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
    <div
      ref={cardRef}
      className={`bg-white p-12 transition-all hover:bg-gray-50 group scroll-reveal ${index > 0 ? 'lg:border-l lg:border-gray-200' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
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

type AboutProps = {
  language: Language;
};

const About: React.FC<AboutProps> = ({ language }) => {
  useScrollReveal();

  const copy = language === 'lv'
    ? {
        label: 'Par uzņēmumu',
        title: 'Kernels Transport loģistikas risinājumi',
        bodyA: 'Uzņēmums "Kernels Transport" savu darbību uzsāka 2010. gadā Dobelē. Vairāk nekā 14 gadu laikā uzkrātā pieredze starptautiskajā loģistikā ir ļāvusi mums izveidot noslīpētu un uzticamu sistēmu.',
        bodyB: 'Garantēta kvalitāte un individuāla pieeja katram pasūtījumam.',
        stats: [
          { value: '14+', label: 'Gadi nozarē', desc: 'Darbība uzsākta 2010. gadā Dobelē, nodrošinot nepārtrauktu izaugsmi.' },
          { value: '11', label: 'Volvo vilcēji', desc: 'Mūsdienīgs autoparks, kas pilnībā atbilst EURO 6 ekoloģijas standartiem.' },
          { value: '92', label: 'M³ ietilpība', desc: 'Liela apjoma beramkravu pārvadājumi ar specializētām šķeldveža piekabēm.' },
          { value: 'LTRK', label: 'Biedrs', desc: 'Aktīva līdzdalība Latvijas Tirdzniecības un rūpniecības kamerā.' }
        ]
      }
    : {
        label: 'About company',
        title: 'Kernels Transport logistics solutions',
        bodyA: 'Kernels Transport started operations in Dobele in 2010. Over more than 14 years, our international logistics experience has enabled us to build a reliable and efficient operating system.',
        bodyB: 'Guaranteed quality and an individual approach for every shipment.',
        stats: [
          { value: '14+', label: 'Years in industry', desc: 'Operating since 2010 in Dobele with continuous growth.' },
          { value: '11', label: 'Volvo trucks', desc: 'Modern fleet fully compliant with EURO 6 environmental standards.' },
          { value: '92', label: 'M3 capacity', desc: 'High-volume bulk cargo transport with specialized trailer equipment.' },
          { value: 'LTRK', label: 'Member', desc: 'Active member of the Latvian Chamber of Commerce and Industry.' }
        ]
      };

  return (
    <section id="about" className="py-32 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-7 scroll-reveal">
            <span className="text-brand-orange text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">{copy.label}</span>
            <h2 className="text-brand-orange font-black text-4xl md:text-6xl mb-8 tracking-tighter uppercase leading-tight font-title">
              {copy.title}
            </h2>
          </div>
          <div className="lg:col-span-5 text-gray-500 font-medium leading-relaxed pt-4 scroll-reveal delay-200">
            <p className="mb-6">
              {copy.bodyA}
            </p>
            <p className="text-brand-navy font-black text-xs uppercase tracking-widest border-l-2 border-brand-orange pl-6">
              {copy.bodyB}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200 mx-[-24px] md:mx-0">
          {copy.stats.map((stat, i) => (
            <StatCard key={i} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
