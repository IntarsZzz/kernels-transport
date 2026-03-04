import React, { useState } from 'react';
import type { Language } from '../types';

type ContactProps = {
  language: Language;
};

const Contact: React.FC<ContactProps> = ({ language }) => {
  const copy = language === 'lv'
    ? {
        label: 'Kontakti',
        titleA: 'Sazināties ar',
        titleB: 'komandu',
        manager: 'Loģistikas vadītājs',
        adminRole: 'Menedžere',
        accounting: 'Grāmatvedība',
        settlement: 'Norēķini',
        requestTitle: 'Nosūtīt pieprasījumu',
        nameLabel: 'Vārds, uzvārds',
        phoneLabel: 'Tālrunis',
        emailLabel: 'E-pasta adrese',
        messageLabel: 'Ziņojums',
        send: 'Nosūtīt ziņojumu',
        sending: 'Sūta...',
        companyLine: 'SIA "Kernels Transport" // Reģ. nr.: 40203299137',
        address: 'Dobeles nov., Dobele, Kooperācijas iela 6, LV-3701',
        thanks: 'Paldies! Jūsu pieteikums ir nosūtīts.',
        error: 'Neizdevās nosūtīt ziņojumu. Lūdzu, mēģiniet vēlreiz.'
      }
    : {
        label: 'Contact',
        titleA: 'Get in touch with',
        titleB: 'our team',
        manager: 'Logistics manager',
        adminRole: 'Manager',
        accounting: 'Accounting',
        settlement: 'Settlements',
        requestTitle: 'Send request',
        nameLabel: 'Full name',
        phoneLabel: 'Phone',
        emailLabel: 'Email address',
        messageLabel: 'Message',
        send: 'Send message',
        sending: 'Sending...',
        companyLine: 'SIA "Kernels Transport" // Reg. no.: 40203299137',
        address: 'Kooperacijas iela 6, Dobele, Dobeles nov., LV-3701, Latvia',
        thanks: 'Thank you! Your request has been sent.',
        error: 'Could not send your message. Please try again.'
      };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get('name') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      message: String(formData.get('message') || '').trim(),
      language,
    };

    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitError(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      form.reset();
      setSubmitMessage(copy.thanks);
    } catch (error) {
      console.error(error);
      setSubmitError(true);
      setSubmitMessage(copy.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pt-32 pb-0 md:py-32 bg-gray-50 border-b-0 md:border-b border-gray-200 scroll-reveal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <span className="text-brand-orange text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">{copy.label}</span>
          <h2 className="text-5xl md:text-7xl font-black text-brand-navy tracking-tighter leading-none uppercase font-title">
            {copy.titleA} <br /> <span className="text-brand-orange">{copy.titleB}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-px bg-gray-200 border border-b-0 md:border-b border-gray-200 items-stretch -mx-6 md:mx-0">
          <div className="lg:col-span-6 bg-white p-12 space-y-10">
            <div>
              <div className="space-y-8">
                <div className="border-l-0 md:border-l-2 border-gray-100 pl-0 md:pl-6">
                  <h4 className="text-lg font-black text-brand-navy mb-1 uppercase tracking-tighter">Edgars Vinciuns</h4>
                  <p className="text-[10px] text-gray-400 mb-4 uppercase font-black tracking-widest">{copy.manager}</p>
                  <div className="space-y-2">
                    <a href="tel:+37126161593" className="block text-xs font-black uppercase tracking-widest">+371 26 161 593</a>
                    <a href="mailto:edgars@kernels.lv" className="block text-xs font-black uppercase tracking-widest">edgars@kernels.lv</a>
                  </div>
                </div>

                <div className="border-l-0 md:border-l-2 border-gray-100 pl-0 md:pl-6">
                  <h4 className="text-lg font-black text-brand-navy mb-1 uppercase tracking-tighter">Edīte Garda</h4>
                  <p className="text-[10px] text-gray-400 mb-4 uppercase font-black tracking-widest">{copy.adminRole}</p>
                  <div className="space-y-2">
                    <a href="tel:+37126073934" className="block text-xs font-black uppercase tracking-widest">+371 26 073 934</a>
                    <a href="mailto:edite@kernels.lv" className="block text-xs font-black uppercase tracking-widest">edite@kernels.lv</a>
                  </div>
                </div>

                <div className="border-l-0 md:border-l-2 border-gray-100 pl-0 md:pl-6">
                  <h4 className="text-lg font-black text-brand-navy mb-1 uppercase tracking-tighter">{copy.accounting}</h4>
                  <p className="text-[10px] text-gray-400 mb-4 uppercase font-black tracking-widest">{copy.settlement}</p>
                  <div className="space-y-2 mb-5">
                    <a href="mailto:gramatvediba@kernels.lv" className="block text-xs font-black uppercase tracking-widest">gramatvediba@kernels.lv</a>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Bank: AS Citadele banka</p>
                      <p className="text-[10px] font-black text-brand-navy uppercase tracking-wider">SWIFT: PARXLV22</p>
                      <p className="text-[10px] font-black text-brand-navy uppercase tracking-wider">IBAN: LV79PARX0028077000002</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Bank: AS SEB banka</p>
                      <p className="text-[10px] font-black text-brand-navy uppercase tracking-wider">SWIFT: UNLALV2X</p>
                      <p className="text-[10px] font-black text-brand-navy uppercase tracking-wider">IBAN: LV05UNLA0055002147783</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-gray-100">
              <p className="text-xs font-black text-brand-navy uppercase tracking-tighter mb-2">{copy.companyLine}</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest font-accent">{copy.address}</p>
              <div className="mt-4 space-y-1">
                <p className="text-[10px] font-bold text-brand-navy uppercase tracking-[0.08em] leading-tight">Timo ID: 417530</p>
                <p className="text-[10px] font-bold text-brand-navy uppercase tracking-[0.08em] leading-tight">Cargo ID: C90773</p>
                <p className="text-[10px] font-bold text-brand-navy uppercase tracking-[0.08em] leading-tight">Transporeon User ID: 9897428 (639193)</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-brand-navy p-12 h-full">
            <h3 className="text-xs font-black text-white mb-12 uppercase tracking-[0.3em]">{copy.requestTitle}</h3>
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <label className="block text-[9px] font-black text-white/30 uppercase tracking-[0.2em] mb-4">{copy.nameLabel}</label>
                  <input name="name" type="text" required className="w-full bg-white/5 border border-white/10 px-6 py-5 text-xs text-white focus:outline-none focus:border-brand-orange" placeholder={language === 'lv' ? 'JŪSU VĀRDS' : 'YOUR NAME'} />
                </div>
                <div>
                  <label className="block text-[9px] font-black text-white/30 uppercase tracking-[0.2em] mb-4">{copy.phoneLabel}</label>
                  <input name="phone" type="tel" required className="w-full bg-white/5 border border-white/10 px-6 py-5 text-xs text-white focus:outline-none focus:border-brand-orange" placeholder="+371 ..." />
                </div>
              </div>
              <div>
                <label className="block text-[9px] font-black text-white/30 uppercase tracking-[0.2em] mb-4">{copy.emailLabel}</label>
                <input name="email" type="email" required className="w-full bg-white/5 border border-white/10 px-6 py-5 text-xs text-white focus:outline-none focus:border-brand-orange" placeholder={language === 'lv' ? 'PIEMERS@KERNELS.LV' : 'EXAMPLE@KERNELS.LV'} />
              </div>
              <div>
                <label className="block text-[9px] font-black text-white/30 uppercase tracking-[0.2em] mb-4">{copy.messageLabel}</label>
                <textarea name="message" rows={7} required className="w-full bg-white/5 border border-white/10 px-6 py-5 text-xs text-white focus:outline-none focus:border-brand-orange resize-none" placeholder={language === 'lv' ? 'APRAKSTIET SAVU VAJADZĪBU...' : 'DESCRIBE YOUR REQUEST...'}></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-7 bg-brand-orange hover:bg-white disabled:opacity-70 disabled:cursor-not-allowed text-white hover:text-brand-navy font-black text-[10px] uppercase tracking-[0.3em] transition-all"
              >
                {isSubmitting ? copy.sending : copy.send}
              </button>
              {submitMessage && (
                <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${submitError ? 'text-red-300' : 'text-green-300'}`}>
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
