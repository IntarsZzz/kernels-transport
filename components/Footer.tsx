
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white pt-32 pb-16 overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
             <h4 className="text-4xl font-black tracking-tighter mb-8 uppercase">
               KERNELS <br /> <span className="text-brand-orange">TRANSPORT</span>
             </h4>
             <p className="text-white/30 text-xs font-medium leading-relaxed max-w-sm uppercase tracking-wider">
               Profesionāli loģistikas risinājumi un kravu pārvadājumi starp Baltiju un Centrāleiropu kopš 2010. gada. Savs autoparks un pilna procesu kontrole.
             </p>
             <div className="mt-12 flex space-x-6">
                <a href="#" className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 hover:text-brand-orange transition-colors">
                  [Facebook]
                </a>
                <a href="#" className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 hover:text-brand-orange transition-colors">
                  [LinkedIn]
                </a>
             </div>
          </div>
          
          <div className="md:col-span-3">
            <h5 className="text-[11px] font-black uppercase tracking-[0.3em] text-brand-orange mb-10">Birojs</h5>
            <p className="text-white/50 text-[11px] font-bold uppercase tracking-widest leading-loose">
              Uzvaras iela 54A, Dobele,<br />
              LV-3701, Latvija<br />
              <br />
              SIA Kernels Transport<br />
              REĢ: 43603043831
            </p>
          </div>
          
          <div className="md:col-span-2">
            <h5 className="text-[11px] font-black uppercase tracking-[0.3em] text-brand-orange mb-10">Navigācija</h5>
            <ul className="space-y-5 text-white/40 text-[11px] font-black uppercase tracking-[0.2em]">
              <li><a href="#sākums" className="hover:text-white transition-colors">Sākums</a></li>
              <li><a href="#par-mums" className="hover:text-white transition-colors">Par mums</a></li>
              <li><a href="#pakalpojumi" className="hover:text-white transition-colors">Pakalpojumi</a></li>
              <li><a href="#maršruti" className="hover:text-white transition-colors">Maršruti</a></li>
              <li><a href="#kontakti" className="hover:text-white transition-colors">Kontakti</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-[11px] font-black uppercase tracking-[0.3em] text-brand-orange mb-10">Sertifikāti</h5>
            <div className="space-y-2 opacity-30 grayscale">
              <div className="border border-white/20 p-3 text-[9px] font-black uppercase tracking-widest text-center">LTRK Biedrs</div>
              <div className="border border-white/20 p-3 text-[9px] font-black uppercase tracking-widest text-center">EURO 6 Standarts</div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] text-white/20 uppercase tracking-[0.4em] font-black">
          <p>© 2025 KERNELS TRANSPORT // LOGISTICS OPERATIONS CENTER</p>
          <div className="flex space-x-12 mt-6 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Privātums</a>
             <a href="#" className="hover:text-white transition-colors">Noteikumi</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
