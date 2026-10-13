// POST endpoint for HighLevel "Order Form Submitted" webhooks.
// Forwards a hashed Purchase event to Meta's Conversions API (server-side tracking).
//
// Required Vercel environment variables (set in the Vercel dashboard, never in git):
//   META_CAPI_TOKEN – Conversions API access token
//                     (Events Manager → pixel 764446858889673 → Settings → Conversions API)
//   META_CAPI_KEY   – shared secret; must match the ?key= value on the webhook URL
//
// HighLevel workflow → Webhook action → POST to:
//   https://www.gorenegades.com/api/meta-capi?key=YOUR_META_CAPI_KEY
// with a JSON body like:
//   {
//     "email": "{{ contact.email }}",
//     "phone": "{{ contact.phone }}",
//     "first_name": "{{ contact.first_name }}",
//     "last_name": "{{ contact.last_name }}",
//     "value": "99"
//   }

const crypto = require('node:crypto');

const PIXEL_ID = '764446858889673';
const API_VERSION = 'v21.0';

const sha256 = (v) =>
  crypto.createHash('sha256').update(String(v).trim().toLowerCase()).digest('hex');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'POST only' });
    return;
  }

  // Shared-secret check so random POSTs can't fake purchases.
  const expected = process.env.META_CAPI_KEY;
  const provided = (req.query && req.query.key) || '';
  if (!expected || provided !== expected) {
    res.status(401).json({ error: 'unauthorized' });
    return;
  }

  const token = process.env.META_CAPI_TOKEN;
  if (!token) {
    res.status(500).json({ error: 'server not configured' });
    return;
  }

  const b = req.body || {};
  const pick = (...names) => {
    for (const n of names) {
      const v = b[n];
      if (v !== undefined && v !== null && String(v).trim() !== '') return String(v);
    }
    return '';
  };

  const email = pick('email', 'Email', 'contact_email');
  const phoneRaw = pick('phone', 'Phone', 'contact_phone', 'phone_number');
  const first = pick('first_name', 'firstName', 'firstname', 'contact_first_name');
  const last = pick('last_name', 'lastName', 'lastname', 'contact_last_name');
  const value = parseFloat(pick('value', 'amount', 'total', 'order_total')) || 99;

  // Meta requires PII hashed with SHA-256 (lowercased, trimmed).
  const user_data = {};
  if (email) user_data.em = [sha256(email)];
  const digits = phoneRaw.replace(/\D/g, '');
  if (digits) user_data.ph = [sha256(digits)];
  if (first) user_data.fn = [sha256(first)];
  if (last) user_data.ln = [sha256(last)];

  const event = {
    event_name: 'Purchase',
    event_time: Math.floor(Date.now() / 1000),
    action_source: 'website',
    user_data,
    custom_data: { value, currency: 'USD' },
  };

  try {
    const r = await fetch(
      `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: [event], access_token: token }),
      }
    );
    const text = await r.text();
    if (!r.ok) {
      res.status(502).json({ error: 'meta rejected event', detail: text.slice(0, 300) });
      return;
    }
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(502).json({ error: 'meta request failed', detail: String(err).slice(0, 200) });
  }
};
