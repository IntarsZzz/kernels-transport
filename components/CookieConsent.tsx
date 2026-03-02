'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import type { Language } from '../types';

type ConsentPreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

type CookieConsentProps = {
  language: Language;
};

const STORAGE_KEY = 'kt_cookie_consent_v1';
const COOKIE_KEY = 'kt_cookie_consent_v1';
const COOKIE_TTL_DAYS = 180;

function readConsentFromStorage(): ConsentPreferences | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw) as Partial<ConsentPreferences>;
    if (typeof parsed.analytics !== 'boolean' || typeof parsed.marketing !== 'boolean') {
      return null;
    }

    return {
      necessary: true,
      analytics: parsed.analytics,
      marketing: parsed.marketing,
      updatedAt: parsed.updatedAt || new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

function persistConsent(preferences: ConsentPreferences) {
  if (typeof window === 'undefined') {
    return;
  }

  const payload = JSON.stringify(preferences);
  window.localStorage.setItem(STORAGE_KEY, payload);

  const expires = new Date();
  expires.setDate(expires.getDate() + COOKIE_TTL_DAYS);
  document.cookie = `${COOKIE_KEY}=${encodeURIComponent(payload)}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;

  window.dispatchEvent(
    new CustomEvent('cookie-consent-updated', {
      detail: preferences,
    }),
  );
}

const CookieConsent: React.FC<CookieConsentProps> = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const copy = useMemo(
    () =>
      language === 'lv'
        ? {
            title: 'Mēs izmantojam sīkdatnes',
            body:
              'Lai nodrošinātu vietnes darbību un uzlabotu pieredzi, izmantojam nepieciešamās un izvēles sīkdatnes.',
            acceptAll: 'Pieņemt visas',
            necessaryOnly: 'Tikai nepieciešamās',
            customize: 'Pielāgot',
            save: 'Saglabāt izvēli',
            policy: 'Privātuma politika',
            necessary: 'Nepieciešamās',
            analytics: 'Analītiskās',
            marketing: 'Mārketinga',
            alwaysOn: 'Vienmēr aktīvas',
          }
        : {
            title: 'We use cookies',
            body:
              'To keep the website working and improve your experience, we use necessary and optional cookies.',
            acceptAll: 'Accept all',
            necessaryOnly: 'Necessary only',
            customize: 'Customize',
            save: 'Save preferences',
            policy: 'Privacy policy',
            necessary: 'Necessary',
            analytics: 'Analytics',
            marketing: 'Marketing',
            alwaysOn: 'Always active',
          },
    [language],
  );

  const policyHref = language === 'lv' ? '/privatuma-politika' : '/en/privacy-policy';

  useEffect(() => {
    const current = readConsentFromStorage();
    if (!current) {
      setIsVisible(true);
    } else {
      setAnalytics(current.analytics);
      setMarketing(current.marketing);
      setIsVisible(false);
    }

    const handleOpenSettings = () => {
      const stored = readConsentFromStorage();
      if (stored) {
        setAnalytics(stored.analytics);
        setMarketing(stored.marketing);
      }
      setShowCustomize(true);
      setIsVisible(true);
    };

    window.addEventListener('open-cookie-settings', handleOpenSettings);
    return () => {
      window.removeEventListener('open-cookie-settings', handleOpenSettings);
    };
  }, []);

  const closeAndPersist = (next: Omit<ConsentPreferences, 'updatedAt'>) => {
    const payload: ConsentPreferences = {
      ...next,
      updatedAt: new Date().toISOString(),
    };
    persistConsent(payload);
    setIsVisible(false);
    setShowCustomize(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <aside className="fixed bottom-0 inset-x-0 z-[70] p-4 sm:p-6">
      <div className="max-w-5xl mx-auto bg-white border border-gray-200 shadow-2xl p-5 sm:p-6">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg sm:text-xl font-black tracking-tight">{copy.title}</h2>
            <p className="text-sm text-brand-navy/70 leading-relaxed">{copy.body}</p>
            <Link
              href={policyHref}
              className="text-xs font-black uppercase tracking-[0.15em] text-brand-orange hover:text-brand-navy transition-colors w-fit"
            >
              {copy.policy}
            </Link>
          </div>

          {showCustomize && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div className="border border-gray-200 p-3">
                <p className="font-black text-brand-navy">{copy.necessary}</p>
                <p className="text-xs uppercase tracking-[0.12em] text-brand-navy/50 mt-1">
                  {copy.alwaysOn}
                </p>
              </div>

              <label className="border border-gray-200 p-3 flex items-center justify-between gap-3 cursor-pointer">
                <span className="font-black text-brand-navy">{copy.analytics}</span>
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-brand-orange"
                  checked={analytics}
                  onChange={(event) => setAnalytics(event.target.checked)}
                />
              </label>

              <label className="border border-gray-200 p-3 flex items-center justify-between gap-3 cursor-pointer">
                <span className="font-black text-brand-navy">{copy.marketing}</span>
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-brand-orange"
                  checked={marketing}
                  onChange={(event) => setMarketing(event.target.checked)}
                />
              </label>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
            {!showCustomize && (
              <button
                type="button"
                onClick={() => setShowCustomize(true)}
                className="px-5 py-3 text-[11px] font-black uppercase tracking-[0.18em] border border-gray-300 text-brand-navy hover:bg-gray-50 transition-colors"
              >
                {copy.customize}
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                if (showCustomize) {
                  closeAndPersist({
                    necessary: true,
                    analytics,
                    marketing,
                  });
                  return;
                }

                closeAndPersist({
                  necessary: true,
                  analytics: false,
                  marketing: false,
                });
              }}
              className="px-5 py-3 text-[11px] font-black uppercase tracking-[0.18em] border border-gray-300 text-brand-navy hover:bg-gray-50 transition-colors"
            >
              {showCustomize ? copy.save : copy.necessaryOnly}
            </button>

            <button
              type="button"
              onClick={() =>
                closeAndPersist({
                  necessary: true,
                  analytics: true,
                  marketing: true,
                })
              }
              className="px-5 py-3 text-[11px] font-black uppercase tracking-[0.18em] bg-brand-orange text-white hover:bg-brand-navy transition-colors"
            >
              {copy.acceptAll}
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CookieConsent;
