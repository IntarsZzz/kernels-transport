import type { Metadata } from 'next';
import App from '../App';

export const metadata: Metadata = {
  title: 'Kravu pārvadājumi Baltijā un Centrāleiropā',
  description:
    'Kernels Transport nodrošina FTL, LTL un beramkravu loģistikas risinājumus starp Baltijas valstīm un Centrāleiropu.',
  alternates: {
    canonical: '/',
    languages: {
      lv: '/',
      en: '/en',
    },
  },
  openGraph: {
    locale: 'lv_LV',
    url: '/',
    title: 'Kravu pārvadājumi Baltijā un Centrāleiropā',
    description:
      'Kernels Transport nodrošina FTL, LTL un beramkravu loģistikas risinājumus starp Baltijas valstīm un Centrāleiropu.',
  },
  twitter: {
    title: 'Kravu pārvadājumi Baltijā un Centrāleiropā',
    description:
      'Kernels Transport nodrošina FTL, LTL un beramkravu loģistikas risinājumus starp Baltijas valstīm un Centrāleiropu.',
  },
};

export default function LatvianPage() {
  return <App language="lv" />;
}
