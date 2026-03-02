import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Noteikumi',
  description:
    'Kernels Transport vietnes lietošanas un pakalpojumu sniegšanas noteikumi.',
  alternates: {
    canonical: '/noteikumi',
    languages: {
      lv: '/noteikumi',
      en: '/en/terms',
    },
  },
  openGraph: {
    locale: 'lv_LV',
    url: '/noteikumi',
    title: 'Noteikumi',
    description:
      'Kernels Transport vietnes lietošanas un pakalpojumu sniegšanas noteikumi.',
  },
  twitter: {
    title: 'Noteikumi',
    description:
      'Kernels Transport vietnes lietošanas un pakalpojumu sniegšanas noteikumi.',
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-brand-navy">
      <section className="max-w-4xl mx-auto px-6 pt-36 pb-20">
        <p className="text-[11px] font-black uppercase tracking-[0.25em] text-brand-orange mb-5">
          Juridiskā informācija
        </p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight font-title mb-8">
          Noteikumi
        </h1>
        <p className="text-sm md:text-base text-brand-navy/70 leading-relaxed mb-12">
          Šie noteikumi reglamentē Kernels Transport vietnes lietošanu un saziņu
          par transporta pakalpojumiem, kas tiek noformēti individuāli, izmantojot
          e-pastu vai citu tiešu komunikāciju.
        </p>

        <div className="space-y-10 text-brand-navy/80">
          <section>
            <h2 className="text-xl font-black mb-3">1. Vispārīgie noteikumi</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Vietne sniedz informatīvu saturu par uzņēmumu un tā pakalpojumiem.
              Pakalpojumu pasūtīšana netiek veikta ar tiešsaistes pirkuma funkciju.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-3">2. Pakalpojumu pieprasījumi</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Pakalpojuma pieprasījumi tiek iesniegti, izmantojot kontaktformu,
              e-pastu vai tālruni. Konkrēti sadarbības nosacījumi, cenas,
              termiņi un atbildības jautājumi tiek saskaņoti individuāli.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-3">3. Informācijas precizitāte</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Uzņēmums cenšas nodrošināt aktuālu un precīzu informāciju, tomēr
              neuzņemas atbildību par netīšām kļūdām, tehniskiem traucējumiem
              vai trešo pušu satura pieejamību.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-3">4. Intelektuālais īpašums</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Vietnes saturs (teksti, vizuālie materiāli, zīmoli, dizaina elementi)
              ir Kernels Transport vai tā partneru īpašums. Bez rakstiskas atļaujas
              aizliegta pilnīga vai daļēja reproducēšana komerciāliem mērķiem.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-3">5. Atbildības ierobežojums</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Uzņēmums neatbild par netiešiem zaudējumiem, kas radušies saistībā ar
              vietnes lietošanu. Par konkrētiem pārvadājumiem piemērojami atsevišķi
              līgumiskie nosacījumi un piemērojamie normatīvie akti.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-3">6. Personas dati un sīkdatnes</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Personas datu apstrādes un sīkdatņu lietošanas kārtība ir aprakstīta
              privātuma politikā. Izmantojot vietni, lietotājs apliecina, ka ir
              iepazinies ar šo informāciju.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-3">7. Piemērojamie tiesību akti</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Šiem noteikumiem piemērojami Latvijas Republikas tiesību akti.
              Strīdi, kurus nav iespējams atrisināt pārrunu ceļā, izskatāmi
              Latvijas Republikas tiesā atbilstoši jurisdikcijai.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-3">8. Izmaiņas noteikumos</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Uzņēmums var periodiski atjaunināt noteikumus. Aktuālā versija
              vienmēr ir pieejama šajā lapā.
            </p>
          </section>
        </div>

        <div className="mt-14 pt-8 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-navy/40 font-black">
            Pēdējo reizi atjaunināts: 2026. gada 2. martā
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
