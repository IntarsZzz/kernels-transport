import type { Metadata } from 'next';
import App from '../../App';

export const metadata: Metadata = {
  title: 'Freight transport in the Baltics and Central Europe',
  description:
    'Kernels Transport provides FTL, LTL, and bulk cargo logistics services between the Baltics and Central Europe.',
  alternates: {
    canonical: '/en',
    languages: {
      lv: '/',
      en: '/en',
    },
  },
  openGraph: {
    locale: 'en_US',
    url: '/en',
    title: 'Freight transport in the Baltics and Central Europe',
    description:
      'Kernels Transport provides FTL, LTL, and bulk cargo logistics services between the Baltics and Central Europe.',
  },
  twitter: {
    title: 'Freight transport in the Baltics and Central Europe',
    description:
      'Kernels Transport provides FTL, LTL, and bulk cargo logistics services between the Baltics and Central Europe.',
  },
};

export default function EnglishPage() {
  return <App language="en" />;
}
