'use client';

import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';

type ConsentPreferences = {
  analytics: boolean;
};

const STORAGE_KEY = 'kt_cookie_consent_v2';

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

export default function VercelAnalytics() {
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

  return <Analytics />;
}
