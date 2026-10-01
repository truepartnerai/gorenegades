// One place for every outbound offer link on the site.
// Change a checkout URL here and every page picks it up.
// All ordering runs through the GHL funnel (Stripe). The CRM order form
// offers both the $99/mo and $999/yr options, so both links go there.
export const links = {
  crmMonthly: 'https://enroll.gorenegades.com/rcc99',
  crmAnnual: 'https://enroll.gorenegades.com/rcc99',
  academy: 'https://enroll.gorenegades.com/enroll',
  community: 'https://community.gorenegades.com',
  powerHour: 'https://powerhour.gorenegades.com'
};
