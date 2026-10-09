// Feature-level comparisons are directional and plan-scoped (October 2026).
// c: native on compared plan/platform; u: higher plan or add-on; x: separate application/integration;
// l: limited or conditional; q: not sufficiently verified.
// These are not head-to-head equivalence tests. Usage fees and limits vary.
export const comparisonGroups=[
  {
    "key": "organize",
    "label": "Contacts & organization",
    "description": "Make your existing relationships usable."
  },
  {
    "key": "capture",
    "label": "Lead capture & booking",
    "description": "Turn interest into a tracked conversation."
  },
  {
    "key": "followup",
    "label": "Follow-up & automation",
    "description": "Reduce dropped handoffs and manual chasing."
  },
  {
    "key": "marketing",
    "label": "Marketing & visibility",
    "description": "Stay in front of the right people."
  },
  {
    "key": "sales",
    "label": "Sales & payments",
    "description": "Move opportunities through to purchase."
  },
  {
    "key": "ai",
    "label": "AI & assistance",
    "description": "Use intelligent tools when supported and configured."
  }
];
export const comparisonProviders=[
  {
    "key": "renegade",
    "label": "Renegade CRM",
    "plan": "$99/month subscription",
    "description": "GoHighLevel-based business command center. Messaging and AI usage can cost extra.",
    "url": "/crm/start"
  },
  {
    "key": "hubspot",
    "label": "HubSpot",
    "plan": "Starter Customer Platform",
    "description": "Entry-level bundle; Professional features and additional usage can cost more.",
    "url": "https://www.hubspot.com/pricing/suite"
  },
  {
    "key": "pipedrive",
    "label": "Pipedrive",
    "plan": "Growth",
    "description": "Sales-focused per-seat plan; add-ons are priced separately.",
    "url": "https://www.pipedrive.com/en/pricing"
  },
  {
    "key": "zoho",
    "label": "Zoho CRM",
    "plan": "Standard",
    "description": "Per-user sales CRM; many adjacent apps have separate plans.",
    "url": "https://www.zoho.com/crm/zohocrm-pricing-calculator.html"
  },
  {
    "key": "keap",
    "label": "Keap",
    "plan": "Full platform",
    "description": "Bundled small-business CRM and automation; pricing varies by contacts and users.",
    "url": "https://keap.com/pricing"
  }
];
export const comparisonFeatures=[
  {
    "group": "organize",
    "label": "Import contacts from a spreadsheet",
    "description": "Bring a scattered database into one home.",
    "availability": {
      "renegade": "c",
      "hubspot": "c",
      "pipedrive": "c",
      "zoho": "c",
      "keap": "c"
    }
  },
  {
    "group": "organize",
    "label": "Contact tags, lists & segmentation",
    "description": "Organize customers, prospects and referral partners.",
    "availability": {
      "renegade": "c",
      "hubspot": "c",
      "pipedrive": "c",
      "zoho": "c",
      "keap": "c"
    }
  },
  {
    "group": "organize",
    "label": "Custom fields",
    "description": "Track details specific to your business.",
    "availability": {
      "renegade": "c",
      "hubspot": "c",
      "pipedrive": "c",
      "zoho": "c",
      "keap": "c"
    }
  },
  {
    "group": "organize",
    "label": "Contact activity & communication history",
    "description": "See recent conversations and important interactions.",
    "availability": {
      "renegade": "c",
      "hubspot": "c",
      "pipedrive": "c",
      "zoho": "c",
      "keap": "c"
    }
  },
  {
    "group": "organize",
    "label": "Visual sales pipelines",
    "description": "Know where each opportunity sits.",
    "availability": {
      "renegade": "c",
      "hubspot": "c",
      "pipedrive": "c",
      "zoho": "c",
      "keap": "c"
    }
  },
  {
    "group": "organize",
    "label": "Tasks & assigned next steps",
    "description": "Give each lead a specific owner and action.",
    "availability": {
      "renegade": "c",
      "hubspot": "c",
      "pipedrive": "c",
      "zoho": "c",
      "keap": "c"
    }
  },
  {
    "group": "organize",
    "label": "Reporting & dashboards",
    "description": "Track the health of marketing and sales.",
    "availability": {
      "renegade": "c",
      "hubspot": "c",
      "pipedrive": "c",
      "zoho": "c",
      "keap": "c"
    }
  },
  {
    "group": "capture",
    "label": "Native lead capture forms",
    "description": "Collect website inquiries without manual re-entry.",
    "availability": {
      "renegade": "c",
      "hubspot": "c",
      "pipedrive": "u",
      "zoho": "c",
      "keap": "c"
    }
  },
  {
    "group": "capture",
    "label": "Landing page builder",
    "description": "Create a page for an offer or campaign.",
    "availability": {
      "renegade": "c",
      "hubspot": "c",
      "pipedrive": "x",
      "zoho": "x",
      "keap": "c"
    }
  },
  {
    "group": "capture",
    "label": "Full website builder",
    "description": "Publish multiple pages for a business website.",
    "availability": {
      "renegade": "c",
      "hubspot": "l",
      "pipedrive": "x",
      "zoho": "x",
      "keap": "x"
    }
  },
  {
    "group": "capture",
    "label": "Appointment booking links",
    "description": "Let customers select an available meeting time.",
    "availability": {
      "renegade": "c",
      "hubspot": "c",
      "pipedrive": "c",
      "zoho": "x",
      "keap": "c"
    }
  },
  {
    "group": "capture",
    "label": "Built-in website chat widget",
    "description": "Give website visitors a way to start a conversation.",
    "availability": {
      "renegade": "c",
      "hubspot": "u",
      "pipedrive": "l",
      "zoho": "x",
      "keap": "c"
    }
  },
  {
    "group": "capture",
    "label": "Missed-call automatic text response",
    "description": "Text eligible callers after a missed business call.",
    "availability": {
      "renegade": "c",
      "hubspot": "u",
      "pipedrive": "x",
      "zoho": "x",
      "keap": "x"
    }
  },
  {
    "group": "capture",
    "label": "Automated notifications for new inquiries",
    "description": "Notify your team as soon as a lead arrives.",
    "availability": {
      "renegade": "c",
      "hubspot": "c",
      "pipedrive": "c",
      "zoho": "c",
      "keap": "c"
    }
  },
  {
    "group": "followup",
    "label": "Custom multi-step workflows",
    "description": "Automate a sequence of actions and decisions.",
    "availability": {
      "renegade": "c",
      "hubspot": "u",
      "pipedrive": "c",
      "zoho": "c",
      "keap": "c"
    }
  },
  {
    "group": "followup",
    "label": "Automated email follow-up",
    "description": "Nurture opted-in leads through repeatable emails.",
    "availability": {
      "renegade": "c",
      "hubspot": "l",
      "pipedrive": "c",
      "zoho": "c",
      "keap": "c"
    }
  },
  {
    "group": "followup",
    "label": "Automated SMS follow-up",
    "description": "Reach eligible contacts by text using configured triggers.",
    "availability": {
      "renegade": "c",
      "hubspot": "u",
      "pipedrive": "x",
      "zoho": "x",
      "keap": "c"
    }
  },
  {
    "group": "followup",
    "label": "Opportunity-stage automations",
    "description": "Trigger tasks or messages when pipeline stages change.",
    "availability": {
      "renegade": "c",
      "hubspot": "u",
      "pipedrive": "c",
      "zoho": "c",
      "keap": "c"
    }
  },
  {
    "group": "followup",
    "label": "Appointment confirmations & reminders",
    "description": "Reduce manual scheduling follow-up.",
    "availability": {
      "renegade": "c",
      "hubspot": "c",
      "pipedrive": "c",
      "zoho": "l",
      "keap": "c"
    }
  },
  {
    "group": "followup",
    "label": "Automated lead assignment",
    "description": "Send incoming leads to the right team member.",
    "availability": {
      "renegade": "c",
      "hubspot": "l",
      "pipedrive": "c",
      "zoho": "c",
      "keap": "c"
    }
  },
  {
    "group": "marketing",
    "label": "Email broadcasts & newsletters",
    "description": "Send a campaign to a permissioned contact list.",
    "availability": {
      "renegade": "c",
      "hubspot": "c",
      "pipedrive": "l",
      "zoho": "c",
      "keap": "c"
    }
  },
  {
    "group": "marketing",
    "label": "Reusable email templates",
    "description": "Keep campaign design and messaging consistent.",
    "availability": {
      "renegade": "c",
      "hubspot": "c",
      "pipedrive": "c",
      "zoho": "c",
      "keap": "c"
    }
  },
  {
    "group": "marketing",
    "label": "Native social post scheduler",
    "description": "Schedule content on supported social accounts.",
    "availability": {
      "renegade": "c",
      "hubspot": "u",
      "pipedrive": "x",
      "zoho": "x",
      "keap": "x"
    }
  },
  {
    "group": "marketing",
    "label": "Multi-channel social content calendar",
    "description": "Manage upcoming posts across social networks.",
    "availability": {
      "renegade": "c",
      "hubspot": "u",
      "pipedrive": "x",
      "zoho": "x",
      "keap": "x"
    }
  },
  {
    "group": "marketing",
    "label": "Automated review requests",
    "description": "Request public reviews after completed work.",
    "availability": {
      "renegade": "c",
      "hubspot": "u",
      "pipedrive": "x",
      "zoho": "x",
      "keap": "c"
    }
  },
  {
    "group": "marketing",
    "label": "Review widgets & reputation display",
    "description": "Show customer reviews on owned pages.",
    "availability": {
      "renegade": "c",
      "hubspot": "u",
      "pipedrive": "x",
      "zoho": "x",
      "keap": "x"
    }
  },
  {
    "group": "marketing",
    "label": "SMS promotional broadcasts",
    "description": "Send permission-based text campaigns.",
    "availability": {
      "renegade": "c",
      "hubspot": "u",
      "pipedrive": "x",
      "zoho": "x",
      "keap": "c"
    }
  },
  {
    "group": "sales",
    "label": "Online payment or checkout forms",
    "description": "Collect payments from a landing page or form.",
    "availability": {
      "renegade": "c",
      "hubspot": "c",
      "pipedrive": "x",
      "zoho": "x",
      "keap": "c"
    }
  },
  {
    "group": "sales",
    "label": "Recurring customer billing",
    "description": "Charge subscription customers on a schedule.",
    "availability": {
      "renegade": "c",
      "hubspot": "l",
      "pipedrive": "x",
      "zoho": "x",
      "keap": "c"
    }
  },
  {
    "group": "sales",
    "label": "Order bumps & checkout upsells",
    "description": "Offer relevant add-ons during checkout.",
    "availability": {
      "renegade": "c",
      "hubspot": "x",
      "pipedrive": "x",
      "zoho": "x",
      "keap": "x"
    }
  },
  {
    "group": "sales",
    "label": "Invoices & payment links",
    "description": "Collect payments for products and services.",
    "availability": {
      "renegade": "c",
      "hubspot": "c",
      "pipedrive": "x",
      "zoho": "x",
      "keap": "c"
    }
  },
  {
    "group": "ai",
    "label": "AI-assisted marketing copy",
    "description": "Draft text for emails, campaigns and posts.",
    "availability": {
      "renegade": "u",
      "hubspot": "l",
      "pipedrive": "l",
      "zoho": "l",
      "keap": "c"
    }
  },
  {
    "group": "ai",
    "label": "AI conversation assistant",
    "description": "Assist with questions and lead conversations.",
    "availability": {
      "renegade": "u",
      "hubspot": "u",
      "pipedrive": "x",
      "zoho": "x",
      "keap": "x"
    }
  },
  {
    "group": "ai",
    "label": "AI appointment-booking conversations",
    "description": "Help qualified leads find an available time.",
    "availability": {
      "renegade": "u",
      "hubspot": "u",
      "pipedrive": "x",
      "zoho": "x",
      "keap": "x"
    }
  },
  {
    "group": "ai",
    "label": "AI voice receptionist",
    "description": "Handle supported phone conversations with configured AI.",
    "availability": {
      "renegade": "u",
      "hubspot": "x",
      "pipedrive": "x",
      "zoho": "x",
      "keap": "x"
    }
  },
  {
    "group": "ai",
    "label": "AI agent / advanced workflow tools",
    "description": "Configure intelligent steps or agents for defined work.",
    "availability": {
      "renegade": "u",
      "hubspot": "u",
      "pipedrive": "u",
      "zoho": "x",
      "keap": "l"
    }
  }
];
export const comparisonSources=[
  {
    "label": "HighLevel Social Planner",
    "url": "https://help.gohighlevel.com/support/solutions/articles/155000005063"
  },
  {
    "label": "HighLevel review requests",
    "url": "https://help.gohighlevel.com/support/solutions/articles/48000980328-reviews-review-requests-and-the-highlevel-review-widget"
  },
  {
    "label": "HighLevel missed-call text-back",
    "url": "https://help.gohighlevel.com/support/solutions/articles/48001239140-where-and-how-to-configure-the-missed-call-text-back-feature"
  },
  {
    "label": "HighLevel AI features and pricing",
    "url": "https://help.gohighlevel.com/support/solutions/articles/155000002166"
  },
  {
    "label": "HubSpot pricing",
    "url": "https://www.hubspot.com/pricing/suite"
  },
  {
    "label": "HubSpot social tool requirements",
    "url": "https://knowledge.hubspot.com/social/create-and-publish-social-posts"
  },
  {
    "label": "HubSpot workflow requirements",
    "url": "https://knowledge.hubspot.com/workflows/create-workflows"
  },
  {
    "label": "HubSpot SMS requirements",
    "url": "https://knowledge.hubspot.com/sms/create-and-send-sms-messages"
  },
  {
    "label": "Pipedrive pricing",
    "url": "https://www.pipedrive.com/en/pricing"
  },
  {
    "label": "Pipedrive add-on guide",
    "url": "https://support.pipedrive.com/en/article/how-does-pricing-work-in-pipedrive"
  },
  {
    "label": "Pipedrive web forms",
    "url": "https://support.pipedrive.com/en/article/web-forms"
  },
  {
    "label": "Zoho CRM Standard plan",
    "url": "https://www.zoho.com/crm/zohocrm-pricing-standard.html"
  },
  {
    "label": "Zoho Social pricing",
    "url": "https://www.zoho.com/social/pricing.html"
  },
  {
    "label": "Zoho Bookings integration",
    "url": "https://www.zoho.com/bookings/integrations/zoho-crm.html"
  },
  {
    "label": "Keap pricing and plan features",
    "url": "https://keap.com/pricing"
  }
];
