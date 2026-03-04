import type { Metadata } from 'next';
import Link from 'next/link';

const ogImage = '/images/KernelsTransport_OG.png';

export const metadata: Metadata = {
  title: 'Terms',
  description:
    'Website usage and service terms for Kernels Transport.',
  alternates: {
    canonical: '/en/terms',
    languages: {
      lv: '/noteikumi',
      en: '/en/terms',
      'x-default': '/',
    },
  },
  openGraph: {
    locale: 'en_US',
    url: '/en/terms',
    title: 'Terms',
    description:
      'Website usage and service terms for Kernels Transport.',
    images: [
      {
        url: ogImage,
        width: 1585,
        height: 904,
        alt: 'Kernels Transport',
      },
    ],
  },
  twitter: {
    title: 'Terms',
    description:
      'Website usage and service terms for Kernels Transport.',
    images: [ogImage],
  },
};

export default function TermsEnglishPage() {
  return (
    <main className="min-h-screen bg-white text-brand-navy">
      <section className="max-w-4xl mx-auto px-6 pt-36 pb-20">
        <p className="text-[11px] font-black uppercase tracking-[0.25em] text-brand-orange mb-5">
          Legal Information
        </p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight font-title mb-8">
          Terms
        </h1>
        <p className="text-sm md:text-base text-brand-navy/70 leading-relaxed mb-12">
          These terms govern the use of the Kernels Transport website and
          communication about transport services, which are agreed individually
          by email or other direct communication channels.
        </p>

        <div className="space-y-10 text-brand-navy/80">
          <section>
            <h2 className="text-xl font-black mb-3">1. General</h2>
            <p className="text-sm md:text-base leading-relaxed">
              This website provides informational content about the company and
              its services. Services are not purchased directly through an online
              checkout on this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-3">2. Service Requests</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Service requests are submitted via contact form, email, or phone.
              Specific cooperation terms, pricing, deadlines, and liability
              matters are agreed individually.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-3">3. Information Accuracy</h2>
            <p className="text-sm md:text-base leading-relaxed">
              We aim to provide accurate and up-to-date information, but do not
              accept liability for unintentional errors, technical interruptions,
              or availability of third-party content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-3">4. Intellectual Property</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Website content (texts, visuals, trademarks, design elements)
              belongs to Kernels Transport or its partners. Full or partial
              reproduction for commercial use without written permission is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-3">5. Limitation of Liability</h2>
            <p className="text-sm md:text-base leading-relaxed">
              The company is not liable for indirect damages related to website
              use. Specific transport services are governed by separate contractual
              terms and applicable regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-3">6. Personal Data and Cookies</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Personal data processing and use of cookies are described in the
              Privacy Policy. By using the website, users confirm they have read
              this information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-3">7. Governing Law</h2>
            <p className="text-sm md:text-base leading-relaxed">
              These terms are governed by the laws of the Republic of Latvia.
              Disputes not resolved by negotiation shall be handled in courts of
              the Republic of Latvia according to jurisdiction rules.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-3">8. Updates to Terms</h2>
            <p className="text-sm md:text-base leading-relaxed">
              The company may update these terms from time to time. The latest
              version is always available on this page.
            </p>
          </section>
        </div>

        <div className="mt-14 pt-8 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-navy/40 font-black">
            Last updated: March 2, 2026
          </p>
          <Link
            href="/en"
            className="inline-block bg-brand-orange hover:bg-brand-navy text-white px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all w-fit"
          >
            Back to homepage
          </Link>
        </div>
      </section>
    </main>
  );
}
