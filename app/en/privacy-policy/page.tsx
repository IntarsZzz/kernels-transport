import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Information about how SIA Kernels Transport processes personal data and protects privacy.',
  alternates: {
    canonical: '/en/privacy-policy',
    languages: {
      lv: '/privatuma-politika',
      en: '/en/privacy-policy',
    },
  },
  openGraph: {
    locale: 'en_US',
    url: '/en/privacy-policy',
    title: 'Privacy Policy',
    description:
      'Information about how SIA Kernels Transport processes personal data and protects privacy.',
  },
  twitter: {
    title: 'Privacy Policy',
    description:
      'Information about how SIA Kernels Transport processes personal data and protects privacy.',
  },
};

export default function PrivacyPolicyEnglishPage() {
  return (
    <main className="min-h-screen bg-white text-brand-navy">
      <section className="max-w-4xl mx-auto px-6 pt-36 pb-20">
        <p className="text-[11px] font-black uppercase tracking-[0.25em] text-brand-orange mb-5">
          Legal Information
        </p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight font-title mb-8">
          Privacy Policy
        </h1>
        <p className="text-sm md:text-base text-brand-navy/70 leading-relaxed mb-12">
          This Privacy Policy explains how SIA Kernels Transport collects, uses,
          and protects personal data received from customers, business partners,
          and website visitors.
        </p>

        <div className="space-y-10 text-brand-navy/80">
          <section>
            <h2 className="text-xl font-black mb-3">1. Data Controller</h2>
            <p className="text-sm md:text-base leading-relaxed">
              The data controller is SIA Kernels Transport, registration
              No. 40203299137, legal address: Kooperacijas iela 6, Dobele,
              LV-3701, Latvia. For any questions, contact: edgars@kernels.lv
              or +371 26161593.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-3">2. Data We Process</h2>
            <p className="text-sm md:text-base leading-relaxed">
              We may process contact details (name, email, phone number),
              company information, communication content, and service-related
              details (order data, delivery routes, billing information).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-3">3. Purposes and Legal Basis</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Personal data is processed to provide transport and logistics
              services, respond to inquiries, perform contractual obligations,
              comply with legal requirements, and protect legitimate interests.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-3">4. Data Retention</h2>
            <p className="text-sm md:text-base leading-relaxed">
              We store data only for as long as needed to fulfill the stated
              purposes or as required by applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-3">5. Sharing with Third Parties</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Data may be shared with service providers or partners when needed
              for service delivery, and with public authorities where required
              by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-3">6. Your Rights</h2>
            <p className="text-sm md:text-base leading-relaxed">
              You may request access to your personal data, correction, deletion,
              restriction of processing, and object to processing where allowed
              by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-3">7. Cookies</h2>
            <p className="text-sm md:text-base leading-relaxed">
              The website may use technical and analytics cookies to ensure
              website functionality and improve user experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black mb-3">8. Policy Updates</h2>
            <p className="text-sm md:text-base leading-relaxed">
              We may update this policy from time to time. The latest version
              will always be available on this page.
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
