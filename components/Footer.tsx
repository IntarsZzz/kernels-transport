import React from 'react';
import type { Language } from '../types';

type FooterProps = {
  language: Language;
};

const Footer: React.FC<FooterProps> = ({ language }) => {
  const privacyHref = language === 'lv' ? '/privatuma-politika' : '/en/privacy-policy';

  const copy = language === 'lv'
    ? {
        description: 'Profesionāli loģistikas risinājumi un kravu pārvadājumi starp Baltiju un Centrāleiropu kopš 2010. gada. Savs autoparks un pilna procesu kontrole.',
        office: 'Birojs',
        navigation: 'Navigācija',
        certificates: 'Sertifikāti',
        member: 'LTRK biedrs',
        standard: 'EURO 6 standarts',
        privacy: 'Privātums',
        cookies: 'Sīkdatnes',
        terms: 'Noteikumi',
        nav: [
          { label: 'Sākums', href: '#home' },
          { label: 'Par mums', href: '#about' },
          { label: 'Pakalpojumi', href: '#services' },
          { label: 'Maršruti', href: '#routes' },
          { label: 'Kontakti', href: '#contact' }
        ]
      }
    : {
        description: 'Professional logistics services and freight transport between the Baltics and Central Europe since 2010. Dedicated fleet and full process control.',
        office: 'Office',
        navigation: 'Navigation',
        certificates: 'Certificates',
        member: 'LTRK member',
        standard: 'EURO 6 standard',
        privacy: 'Privacy',
        cookies: 'Cookies',
        terms: 'Terms',
        nav: [
          { label: 'Home', href: '#home' },
          { label: 'About', href: '#about' },
          { label: 'Services', href: '#services' },
          { label: 'Routes', href: '#routes' },
          { label: 'Contact', href: '#contact' }
        ]
      };

  return (
    <footer className="bg-brand-navy text-white pt-32 pb-16 overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <h4 className="text-2xl font-black tracking-tight font-title text-white mb-8">
              Kernels Transport
            </h4>
            <p className="text-white/30 text-xs font-medium leading-relaxed max-w-sm uppercase tracking-wider">
              {copy.description}
            </p>
            <div className="mt-12 flex space-x-6">
              <a href="https://www.facebook.com/kernelstransport" target="_blank" rel="noreferrer" className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 hover:text-brand-orange transition-colors">
                [Facebook]
              </a>
              <a href="https://www.instagram.com/kernelstransport_sia" target="_blank" rel="noreferrer" className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 hover:text-brand-orange transition-colors">
                [Instagram]
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h5 className="text-[11px] font-black uppercase tracking-[0.3em] text-brand-orange mb-10">{copy.office}</h5>
            <p className="text-white/50 text-[11px] font-bold uppercase tracking-widest leading-loose font-accent">
              Dobeles nov., Dobele,<br />
              Kooperācijas iela 6,<br />
              LV-3701, Latvia<br />
              <br />
              SIA Kernels Transport<br />
              REG: 40203299137
            </p>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-[11px] font-black uppercase tracking-[0.3em] text-brand-orange mb-10">{copy.navigation}</h5>
            <ul className="space-y-5 text-white/40 text-[11px] font-black uppercase tracking-[0.2em]">
              {copy.nav.map((item) => (
                <li key={item.href}><a href={item.href} className="hover:text-white transition-colors">{item.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-[11px] font-black uppercase tracking-[0.3em] text-brand-orange mb-10">{copy.certificates}</h5>
            <div className="space-y-2 opacity-30 grayscale">
              <div className="border border-white/20 p-3 text-[9px] font-black uppercase tracking-widest text-center">{copy.member}</div>
              <div className="border border-white/20 p-3 text-[9px] font-black uppercase tracking-widest text-center">{copy.standard}</div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] text-white/20 uppercase tracking-[0.4em] font-black">
          <p>© 2026 KERNELS TRANSPORT // LOGISTICS OPERATIONS CENTER</p>
          <div className="flex space-x-12 mt-6 md:mt-0">
            <a href={privacyHref} className="hover:text-white transition-colors">{copy.privacy}</a>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                window.dispatchEvent(new CustomEvent('open-cookie-settings'));
              }}
              className="hover:text-white transition-colors"
            >
              {copy.cookies}
            </a>
            <a href="#" className="hover:text-white transition-colors">{copy.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
