import type { Metadata } from 'next';
import App from '../../App';

const ogImage = '/images/KernelsTransport_OG.png';

export const metadata: Metadata = {
  title: 'Freight transport in the Baltics and Central Europe',
  description:
    'Kernels Transport provides FTL, LTL, and bulk cargo logistics services between the Baltics and Central Europe.',
  alternates: {
    canonical: '/en',
    languages: {
      lv: '/',
      en: '/en',
      'x-default': '/',
    },
  },
  openGraph: {
    locale: 'en_US',
    url: '/en',
    title: 'Freight transport in the Baltics and Central Europe',
    description:
      'Kernels Transport provides FTL, LTL, and bulk cargo logistics services between the Baltics and Central Europe.',
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
    title: 'Freight transport in the Baltics and Central Europe',
    description:
      'Kernels Transport provides FTL, LTL, and bulk cargo logistics services between the Baltics and Central Europe.',
    images: [ogImage],
  },
};

export default function EnglishPage() {
  return <App language="en" />;
}
