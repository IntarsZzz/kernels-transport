
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Paldies! Jūsu pieteikums ir saņemts.');
  };

  return (
    <section id="kontakti" className="py-32 bg-gray-50 border-b border-gray-200 scroll-reveal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <span className="text-brand-orange text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Kontakti</span>
          <h2 className="text-5xl md:text-7xl font-black text-brand-navy tracking-tighter leading-none uppercase">
            Sazināties ar <br /> <span className="text-brand-orange">komandu</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-px bg-gray-200 border border-gray-200">
          <div className="lg:col-span-6 bg-white p-12 space-y-16">
            <div>
              <h3 className="text-xs font-black text-brand-navy mb-12 uppercase tracking-[0.3em] flex items-center">
                <span className="w-8 h-[3px] bg-brand-orange mr-4"></span>
                Operatīvie Kontakti
              </h3>

              <div className="space-y-12">
                <div className="border-l-2 border-gray-100 pl-8">
                  <p className="text-[9px] font-mono font-bold text-brand-orange uppercase mb-4 tracking-widest">// VADĪBA</p>
                  <h4 className="text-xl font-black text-brand-navy mb-1 uppercase tracking-tighter">Edgars Vinciuns</h4>
                  <p className="text-[10px] text-gray-400 mb-6 uppercase font-black tracking-widest">Īpašnieks</p>
                  <div className="space-y-3">
                    <a href="tel:+37126161593" className="block text-xs font-black uppercase tracking-widest">+371 26 161 593</a>
                    <a href="mailto:edgars@kernels.lv" className="block text-xs font-black uppercase tracking-widest">edgars@kernels.lv</a>
                  </div>
                </div>

                <div className="border-l-2 border-gray-100 pl-8">
                  <p className="text-[9px] font-mono font-bold text-brand-orange uppercase mb-4 tracking-widest">// LOĢISTIKA</p>
                  <h4 className="text-xl font-black text-brand-navy mb-1 uppercase tracking-tighter">Edīte Garda</h4>
                  <p className="text-[10px] text-gray-400 mb-6 uppercase font-black tracking-widest">Menedžere</p>
                  <div className="space-y-3">
                    <a href="tel:+37126073934" className="block text-xs font-black uppercase tracking-widest">+371 26 073 934</a>
                    <a href="mailto:edite@kernels.lv" className="block text-xs font-black uppercase tracking-widest">edite@kernels.lv</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-16 border-t border-gray-100">
              <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-4">Uzņēmuma informācija</p>
              <p className="text-xs font-black text-brand-navy uppercase tracking-tighter mb-2">SIA "Kernels Transport" // Reģ. nr.: 43603043831</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Uzvaras iela 54A, Dobele, LV-3701</p>
            </div>
          </div>

          <div className="lg:col-span-6 bg-brand-navy p-12">
            <h3 className="text-xs font-black text-white mb-12 uppercase tracking-[0.3em]">Nosūtīt Pieprasījumu</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[9px] font-black text-white/30 uppercase tracking-[0.2em] mb-3">Vārds, Uzvārds</label>
                  <input type="text" required className="w-full bg-white/5 border border-white/10 px-6 py-4 text-xs text-white focus:outline-none focus:border-brand-orange" placeholder="JŪSU VĀRDS" />
                </div>
                <div>
                  <label className="block text-[9px] font-black text-white/30 uppercase tracking-[0.2em] mb-3">Tālrunis</label>
                  <input type="tel" required className="w-full bg-white/5 border border-white/10 px-6 py-4 text-xs text-white focus:outline-none focus:border-brand-orange" placeholder="+371 ..." />
                </div>
              </div>
              <div>
                <label className="block text-[9px] font-black text-white/30 uppercase tracking-[0.2em] mb-3">E-pasta Adrese</label>
                <input type="email" required className="w-full bg-white/5 border border-white/10 px-6 py-4 text-xs text-white focus:outline-none focus:border-brand-orange" placeholder="PIEMERS@KERNELS.LV" />
              </div>
              <div>
                <label className="block text-[9px] font-black text-white/30 uppercase tracking-[0.2em] mb-3">Ziņojums</label>
                <textarea rows={5} required className="w-full bg-white/5 border border-white/10 px-6 py-4 text-xs text-white focus:outline-none focus:border-brand-orange resize-none" placeholder="APRAKSTIET SAVU VAJADZĪBU..."></textarea>
              </div>
              <button className="w-full py-6 bg-brand-orange hover:bg-white text-white hover:text-brand-navy font-black text-[10px] uppercase tracking-[0.3em] transition-all">
                Nosūtīt ziņojumu
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
