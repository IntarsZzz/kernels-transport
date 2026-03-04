'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

type ConsentPreferences = {
  analytics: boolean;
};

const STORAGE_KEY = 'kt_cookie_consent_v2';
const GA_MEASUREMENT_ID = 'G-6ZE9FZN4LF';

function readAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return false;
  }

  try {
    const parsed = JSON.parse(raw) as Partial<ConsentPreferences>;
    return parsed.analytics === true;
  } catch {
    return false;
  }
}

export default function GoogleAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(readAnalyticsConsent());

    const handleConsentUpdate = () => {
      setEnabled(readAnalyticsConsent());
    };

    window.addEventListener('cookie-consent-updated', handleConsentUpdate);
    return () => {
      window.removeEventListener('cookie-consent-updated', handleConsentUpdate);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
