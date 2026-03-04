import type { Metadata } from 'next';
import { headers } from 'next/headers';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kernels.lv';
const ogImage = '/images/KernelsTransport_OG.png';
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kernels Transport',
  legalName: 'SIA Kernels Transport',
  url: siteUrl,
  logo: `${siteUrl}/images/kernels_Transport_logo.png`,
  email: 'edgars@kernels.lv',
  telephone: '+37126161593',
  sameAs: [
    'https://www.facebook.com/kernelstransport',
    'https://www.instagram.com/kernelstransport_sia',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kooperācijas iela 6',
    addressLocality: 'Dobele',
    postalCode: 'LV-3701',
    addressCountry: 'LV',
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Kernels Transport',
  url: siteUrl,
  image: `${siteUrl}/images/Kernels_Transport_hero.jpg`,
  telephone: '+37126161593',
  email: 'edgars@kernels.lv',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kooperācijas iela 6',
    addressLocality: 'Dobele',
    postalCode: 'LV-3701',
    addressCountry: 'LV',
  },
  areaServed: [
    { '@type': 'Country', name: 'Latvia' },
    { '@type': 'Country', name: 'Lithuania' },
    { '@type': 'Country', name: 'Estonia' },
    { '@type': 'Country', name: 'Austria' },
    { '@type': 'Country', name: 'Czechia' },
    { '@type': 'Country', name: 'Italy' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Kernels Transport',
    template: '%s | Kernels Transport',
  },
  description:
    'Professional logistics services and freight transport between the Baltics and Central Europe.',
  alternates: {
    canonical: '/',
    languages: {
      lv: '/',
      en: '/en',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'lv_LV',
    siteName: 'Kernels Transport',
    title: 'Kernels Transport',
    description:
      'Professional logistics services and freight transport between the Baltics and Central Europe.',
    url: '/',
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
    card: 'summary_large_image',
    title: 'Kernels Transport',
    description:
      'Professional logistics services and freight transport between the Baltics and Central Europe.',
    images: [ogImage],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const pathname = headerList.get('x-pathname') || '/';
  const htmlLang = pathname.startsWith('/en') ? 'en' : 'lv';

  return (
    <html lang={htmlLang}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;700&family=Bricolage+Grotesque:wght@800&family=Sora:wght@700;800&family=Barlow+Condensed:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    brand: {
                      orange: '#FF6B00',
                      navy: '#1F2937',
                      light: '#F9FAFB',
                      gray: '#6B7280'
                    }
                  },
                  fontFamily: {
                    sans: ['Plus Jakarta Sans', 'sans-serif'],
                    display: ['Bricolage Grotesque', 'sans-serif'],
                    title: ['Sora', 'sans-serif'],
                    accent: ['Barlow Condensed', 'sans-serif'],
                    mono: ['JetBrains Mono', 'monospace']
                  },
                  borderRadius: {
                    none: '0',
                    sm: '0',
                    DEFAULT: '0',
                    md: '0',
                    lg: '0',
                    xl: '0',
                    '2xl': '0'
                  }
                }
              }
            };`,
          }}
        />
        <script src="https://cdn.tailwindcss.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className="bg-white text-brand-navy antialiased">{children}</body>
    </html>
  );
}
