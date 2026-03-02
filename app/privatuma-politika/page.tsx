import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privātuma politika',
  description:
    'Informācija par to, kā SIA Kernels Transport apstrādā personas datus un aizsargā privātumu.',
  alternates: {
    canonical: '/privatuma-politika',
    languages: {
      lv: '/privatuma-politika',
      en: '/en/privacy-policy',
    },
  },
  openGraph: {
    locale: 'lv_LV',
    url: '/privatuma-politika',
    title: 'Privātuma politika',
    description:
      'Informācija par to, kā SIA Kernels Transport apstrādā personas datus un aizsargā privātumu.',
  },
  twitter: {
    title: 'Privātuma politika',
    description:
      'Informācija par to, kā SIA Kernels Transport apstrādā personas datus un aizsargā privātumu.',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-brand-navy">
      <section className="max-w-4xl mx-auto px-6 pt-36 pb-20">
        <p className="text-[11px] font-black uppercase tracking-[0.25em] text-brand-orange mb-5">
          Juridiskā informācija
        </p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight font-title mb-8">
          Privātuma politika
        </h1>
        <p className="text-sm md:text-base text-brand-navy/70 leading-relaxed mb-12">
          Šī privātuma politika skaidro, kā SIA Kernels Transport apkopo, izmanto
          un aizsargā personas datus, ko saņemam no klientiem, sadarbības
          partneriem un vietnes apmeklētājiem.
        </p>

        <div className="space-y-10 text-brand-navy/80">
          <section>
            <h2 className="text-xl font-black mb-3">1. Datu pārzinis</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Datu pārzinis ir SIA Kernels Transport, reģ. Nr. 40203299137,
              juridiskā adrese: Kooperācijas iela 6, Dobele, LV-3701, Latvija.
              Jautājumu gadījumā sazinieties: edgars@kernels.lv vai
              +371 26161593.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-3">2. Kādi dati tiek apstrādāti</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Mēs varam apstrādāt kontaktinformāciju (vārds, e-pasts, tālrunis),
              uzņēmuma datus, saziņas saturu, kā arī ar pakalpojumu sniegšanu
              saistīto informāciju (pasūtījuma dati, piegādes maršruti,
              norēķinu informācija).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-3">3. Datu apstrādes mērķi un pamats</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Personas dati tiek apstrādāti, lai sniegtu transporta un
              loģistikas pakalpojumus, atbildētu uz pieprasījumiem, izpildītu
              līgumsaistības, nodrošinātu normatīvo aktu prasību izpildi un
              aizsargātu uzņēmuma tiesiskās intereses.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-3">4. Datu glabāšanas termiņš</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Datus glabājam tikai tik ilgi, cik nepieciešams apstrādes mērķu
              sasniegšanai vai cik to nosaka piemērojamie normatīvie akti.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-3">5. Datu nodošana trešajām personām</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Dati var tikt nodoti pakalpojumu sniedzējiem vai sadarbības
              partneriem, ja tas nepieciešams pakalpojuma nodrošināšanai,
              kā arī valsts iestādēm normatīvajos aktos noteiktajos gadījumos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-3">6. Jūsu tiesības</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Jums ir tiesības pieprasīt piekļuvi saviem datiem, to labošanu,
              dzēšanu, apstrādes ierobežošanu, kā arī iebilst pret apstrādi
              normatīvajos aktos paredzētajos gadījumos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-3">7. Sīkdatņu politika</h2>
            <div className="space-y-4 text-sm md:text-base leading-relaxed">
              <p>
                Vietnē tiek izmantotas sīkdatnes, lai nodrošinātu pamatfunkcijas,
                atcerētos lietotāja izvēles un analizētu apmeklējumu ar Google
                Analytics.
              </p>
              <p>
                Mēs izmantojam šādas sīkdatņu kategorijas:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Nepieciešamās sīkdatnes</strong>: vajadzīgas vietnes
                  tehniskai darbībai un drošībai.
                </li>
                <li>
                  <strong>Analītiskās sīkdatnes</strong>: palīdz saprast, kā
                  lietotāji izmanto vietni. Šobrīd analītikai izmantojam tikai
                  Google Analytics.
                </li>
              </ul>
              <p>
                Sīkdatņu izvēles varat pārvaldīt, izmantojot sīkdatņu baneri vai
                saiti “Sīkdatnes” vietnes kājenē. Nepieciešamās sīkdatnes nevar
                atspējot, jo tās nodrošina vietnes pamatdarbību.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black mb-3">8. Izmaiņas politikā</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Mēs paturam tiesības periodiski atjaunināt šo politiku.
              Aktuālā versija vienmēr būs pieejama šajā lapā.
            </p>
          </section>
        </div>

        <div className="mt-14 pt-8 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-navy/40 font-black">
            Pēdējo reizi atjaunināta: 2026. gada 2. martā
          </p>
          <Link
            href="/"
            className="inline-block bg-brand-orange hover:bg-brand-navy text-white px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all w-fit"
          >
            Atpakaļ uz sākumlapu
          </Link>
        </div>
      </section>
    </main>
  );
}
