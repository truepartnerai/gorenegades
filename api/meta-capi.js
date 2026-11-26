// POST endpoint for HighLevel purchase webhooks.
// Sends a hashed Purchase event to Meta's Conversions API (server-side tracking).
// This is the ONLY place Renegade CRM purchases are reported to Meta.
//
// Vercel environment variables (Vercel dashboard -> Settings -> Environment Variables):
//   META_CAPI_TOKEN  - Conversions API access token
//                      (Events Manager -> pixel 764446858889673 -> Settings -> Conversions API -> Generate access token)
//   META_CAPI_KEY    - any long random string; must match ?key= on the webhook URL
//   META_TEST_CODE   - OPTIONAL. Paste the "Test events" code from Events Manager while
//                      testing; events then show in the Test Events tab. Delete when live.
//
// HighLevel workflow -> trigger "Order Submitted" (or "Payment Received") for the
// Renegade CRM order form -> action "Custom Webhook", Method POST, URL:
//   https://www.gorenegades.com/api/meta-capi?key=YOUR_META_CAPI_KEY
// Body (JSON):
//   {
//     "email": "{{contact.email}}",
//     "phone": "{{contact.phone}}",
//     "first_name": "{{contact.first_name}}",
//     "last_name": "{{contact.last_name}}",
//     "value": "<order amount, e.g. 99 or 1149>",
//     "order_id": "<order / transaction id if available>"
//   }

import crypto from 'node:crypto';

const PIXEL_ID = '764446858889673';
const API_VERSION = 'v21.0';
const SOURCE_URL = 'https://www.gorenegades.com/crm/start';

const sha256 = (v) =>
  crypto.createHash('sha256').update(String(v).trim().toLowerCase()).digest('hex');

export default async function handler(req, res) {
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

  let b = req.body || {};
  if (typeof b === 'string') {
    try { b = JSON.parse(b); } catch { b = {}; }
  }
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
  const orderId = pick('order_id', 'orderId', 'transaction_id', 'payment_id', 'invoice_id');
  const fbc = pick('fbc');
  const fbp = pick('fbp');

  // Amount: accept "99", "$1,149.00", etc. Anything unreadable falls back to 99.
  const value = parseFloat(pick('value', 'amount', 'total', 'order_total').replace(/[^0-9.]/g, '')) || 99;

  // Meta requires PII hashed with SHA-256 (lowercased, trimmed).
  // Phone must include the country code: a 10-digit US number gets a leading 1.
  const user_data = {};
  if (email) user_data.em = [sha256(email)];
  let digits = phoneRaw.replace(/\D/g, '');
  if (digits.length === 10) digits = '1' + digits;
  if (digits) user_data.ph = [sha256(digits)];
  if (first) user_data.fn = [sha256(first)];
  if (last) user_data.ln = [sha256(last)];
  if (email) user_data.external_id = [sha256(email)];
  if (fbc) user_data.fbc = fbc;
  if (fbp) user_data.fbp = fbp;

  if (!user_data.em && !user_data.ph) {
    res.status(400).json({ error: 'need at least an email or phone to match the buyer' });
    return;
  }

  // event_id lets Meta drop duplicates if HighLevel ever sends the same order twice.
  const eventId = orderId
    ? `rcrm-${orderId}`
    : `rcrm-${sha256((email || digits) + '|' + new Date().toISOString().slice(0, 10)).slice(0, 32)}`;

  const event = {
    event_name: 'Purchase',
    event_time: Math.floor(Date.now() / 1000),
    event_id: eventId,
    action_source: 'website',
    event_source_url: SOURCE_URL,
    user_data,
    custom_data: {
      value,
      currency: 'USD',
      content_name: value >= 500 ? 'Renegade CRM Annual' : 'Renegade CRM Monthly',
    },
  };

  const payload = { data: [event], access_token: token };
  if (process.env.META_TEST_CODE) payload.test_event_code = process.env.META_TEST_CODE;

  try {
    const r = await fetch(`https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const text = await r.text();
    if (!r.ok) {
      res.status(502).json({ error: 'meta rejected event', detail: text.slice(0, 300) });
      return;
    }
    res.status(200).json({ ok: true, event_id: eventId, value, test: Boolean(process.env.META_TEST_CODE) });
  } catch (err) {
    res.status(502).json({ error: 'meta request failed', detail: String(err).slice(0, 200) });
  }
}
