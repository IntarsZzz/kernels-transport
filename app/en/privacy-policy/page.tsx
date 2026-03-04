import type { Metadata } from 'next';
import Link from 'next/link';

const ogImage = '/images/KernelsTransport_OG.png';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Information about how SIA Kernels Transport processes personal data and protects privacy.',
  alternates: {
    canonical: '/en/privacy-policy',
    languages: {
      lv: '/privatuma-politika',
      en: '/en/privacy-policy',
      'x-default': '/',
    },
  },
  openGraph: {
    locale: 'en_US',
    url: '/en/privacy-policy',
    title: 'Privacy Policy',
    description:
      'Information about how SIA Kernels Transport processes personal data and protects privacy.',
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
    title: 'Privacy Policy',
    description:
      'Information about how SIA Kernels Transport processes personal data and protects privacy.',
    images: [ogImage],
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
            <h2 className="text-xl font-black mb-3">7. Cookie Policy</h2>
            <div className="space-y-4 text-sm md:text-base leading-relaxed">
              <p>
                This website uses cookies to ensure core functionality, remember
                user choices, and measure traffic with analytics cookies.
              </p>
              <p>
                We use the following cookie categories:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Necessary cookies</strong>: required for technical
                  website operation and security.
                </li>
                <li>
                  <strong>Analytics cookies</strong>: help us understand how
                  users interact with the website.
                </li>
              </ul>
              <p>
                You can manage your cookie preferences using the cookie banner
                or the “Cookies” link in the website footer. Necessary cookies
                cannot be disabled because they are essential for core operation.
              </p>
            </div>
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
