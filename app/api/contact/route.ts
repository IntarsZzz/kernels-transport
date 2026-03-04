import { NextResponse } from 'next/server';

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  _honeypot?: string;
  language?: 'lv' | 'en';
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getFormsparkActionUrl(): string {
  const actionUrl = process.env.FORMSPARK_ACTION_URL?.trim();
  if (actionUrl) {
    return actionUrl;
  }

  const formId = process.env.FORMSPARK_FORM_ID?.trim();
  if (formId) {
    return `https://submit-form.com/${formId}`;
  }

  throw new Error('Missing required env var: FORMSPARK_ACTION_URL or FORMSPARK_FORM_ID');
}

export async function POST(req: Request) {
  try {
    const payload = (await req.json()) as ContactPayload;
    const name = payload.name?.trim() ?? '';
    const phone = payload.phone?.trim() ?? '';
    const email = payload.email?.trim() ?? '';
    const message = payload.message?.trim() ?? '';
    const honeypot = payload._honeypot?.trim() ?? '';
    const language = payload.language === 'en' ? 'en' : 'lv';

    // Silently ignore likely bot submissions.
    if (honeypot) {
      return NextResponse.json({ ok: true, spamIgnored: true });
    }

    if (!name || !phone || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ ok: false, error: 'Invalid email format' }, { status: 400 });
    }

    const formsparkActionUrl = getFormsparkActionUrl();
    const subject = language === 'en'
      ? `New contact request | kernels.lv | ${name}`
      : `Jauns pieprasījums | kernels.lv | ${name}`;

    const formsparkResponse = await fetch(formsparkActionUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        message,
        language,
        _email: {
          subject,
          from: 'Kernels Transport Website',
        },
        source: 'kernels.lv contact form',
        _honeypot: '',
      }),
    });

    if (!formsparkResponse.ok) {
      const details = await formsparkResponse.text();
      console.error('Formspark API error:', formsparkResponse.status, details);
      return NextResponse.json(
        {
          ok: false,
          error: `Formspark error (${formsparkResponse.status})`,
          details: details.slice(0, 300),
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form send error:', error);
    const message = error instanceof Error ? error.message : 'Failed to send message';
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
