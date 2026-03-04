import type { Metadata } from 'next';
import App from '../App';

const ogImage = '/images/KernelsTransport_OG.png';

export const metadata: Metadata = {
  title: 'Kravu pārvadājumi Baltijā un Centrāleiropā',
  description:
    'Kernels Transport nodrošina FTL, LTL un beramkravu loģistikas risinājumus starp Baltijas valstīm un Centrāleiropu.',
  alternates: {
    canonical: '/',
    languages: {
      lv: '/',
      en: '/en',
      'x-default': '/',
    },
  },
  openGraph: {
    locale: 'lv_LV',
    url: '/',
    title: 'Kravu pārvadājumi Baltijā un Centrāleiropā',
    description:
      'Kernels Transport nodrošina FTL, LTL un beramkravu loģistikas risinājumus starp Baltijas valstīm un Centrāleiropu.',
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
    title: 'Kravu pārvadājumi Baltijā un Centrāleiropā',
    description:
      'Kernels Transport nodrošina FTL, LTL un beramkravu loģistikas risinājumus starp Baltijas valstīm un Centrāleiropu.',
    images: [ogImage],
  },
};

export default function LatvianPage() {
  return <App language="lv" />;
}
