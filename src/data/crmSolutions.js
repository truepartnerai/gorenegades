// Business-first Renegade CRM scenario directory.
// Scenarios describe configurations or workflows, not pre-enabled automations.
// AI capabilities and communication usage can require additional fees.
export const solutionCategories = [
  {
    "key": "contacts",
    "label": "Contacts & Organization",
    "description": "Bring your people and their history together."
  },
  {
    "key": "leads",
    "label": "Lead Capture",
    "description": "Give every new inquiry somewhere to land."
  },
  {
    "key": "followup",
    "label": "Follow-Up & Speed",
    "description": "Keep conversations moving after the first hello."
  },
  {
    "key": "appointments",
    "label": "Appointments & Scheduling",
    "description": "Make it easy to get on the calendar."
  },
  {
    "key": "campaigns",
    "label": "Email & Text Marketing",
    "description": "Stay in touch with the people who matter."
  },
  {
    "key": "content",
    "label": "Content & Visibility",
    "description": "Get more mileage from your marketing ideas."
  },
  {
    "key": "reviews",
    "label": "Reviews & Referrals",
    "description": "Make the ask part of the process."
  },
  {
    "key": "pipeline",
    "label": "Sales & Pipeline",
    "description": "Know where opportunities stand."
  },
  {
    "key": "web",
    "label": "Websites & Offers",
    "description": "Turn interest into a next step."
  },
  {
    "key": "ai",
    "label": "AI-Assisted Work",
    "description": "Let AI help with the right tasks, when enabled."
  },
  {
    "key": "operations",
    "label": "Business Operations",
    "description": "Give the business fewer loose ends."
  }
];

export const solutionScenarios = [
  {
    "category": "contacts",
    "title": "My contacts are spread across spreadsheets, phones, and old systems.",
    "how": "Import exported contact lists into one database and organize them using tags and fields.",
    "tools": "Contact imports · CRM",
    "access": "standard"
  },
  {
    "category": "contacts",
    "title": "I have thousands of contacts but no useful way to sort them.",
    "how": "Tag and segment people by relationship, service, location, or interests.",
    "tools": "Tags · Smart lists",
    "access": "standard"
  },
  {
    "category": "contacts",
    "title": "I can't remember when I last talked to somebody.",
    "how": "Use contact records and connected conversation history to see prior communication.",
    "tools": "Contact history · Conversations",
    "access": "standard"
  },
  {
    "category": "contacts",
    "title": "Past customers disappear from view after the job is done.",
    "how": "Create a customer segment and schedule regular, relevant check-ins.",
    "tools": "Contact segmentation · Workflows",
    "access": "standard"
  },
  {
    "category": "contacts",
    "title": "Customers, prospects, and referral partners are all mixed together.",
    "how": "Use distinct tags and pipeline views to keep each relationship organized.",
    "tools": "Tags · Pipelines",
    "access": "standard"
  },
  {
    "category": "contacts",
    "title": "Different team members keep their own separate contact notes.",
    "how": "Keep key records and authorized team activity in a shared workspace.",
    "tools": "CRM · Team access",
    "access": "standard"
  },
  {
    "category": "contacts",
    "title": "I want to email a specific group instead of everyone.",
    "how": "Build targeted lists from tags or contact fields before sending.",
    "tools": "Smart lists · Email",
    "access": "standard"
  },
  {
    "category": "leads",
    "title": "Someone fills out my Facebook lead form and nobody sees it.",
    "how": "Connect supported ad lead forms and alert your team as soon as a submission arrives.",
    "tools": "Lead integration · Notifications",
    "access": "standard"
  },
  {
    "category": "leads",
    "title": "My website doesn't have a simple way to request a quote.",
    "how": "Put a form on your site and route submissions to your CRM.",
    "tools": "Forms · Contact records",
    "access": "standard"
  },
  {
    "category": "leads",
    "title": "A prospect inquires after business hours.",
    "how": "Send a configured acknowledgment and queue a follow-up task or message.",
    "tools": "Forms · Workflows",
    "access": "standard"
  },
  {
    "category": "leads",
    "title": "I need different inquiry forms for different services.",
    "how": "Create dedicated forms that label contacts according to the service requested.",
    "tools": "Forms · Tags",
    "access": "standard"
  },
  {
    "category": "leads",
    "title": "I'm running a workshop and need a registration list.",
    "how": "Collect registrations with a form and send the details and reminders automatically.",
    "tools": "Forms · Email",
    "access": "standard"
  },
  {
    "category": "leads",
    "title": "People call while I'm working and I miss the call.",
    "how": "Use missed-call text-back when a compatible number and messaging service are configured.",
    "tools": "Phone · Workflows",
    "access": "standard"
  },
  {
    "category": "leads",
    "title": "I want to know which campaign a new inquiry came from.",
    "how": "Capture attribution details when supported and pass them into contact records and reports.",
    "tools": "Forms · Attribution",
    "access": "standard"
  },
  {
    "category": "followup",
    "title": "I forget to follow up with people who asked for information.",
    "how": "Set up a follow-up sequence triggered by a new inquiry or tag.",
    "tools": "Workflows · Email/SMS",
    "access": "standard"
  },
  {
    "category": "followup",
    "title": "I want prospects to hear from us while they're still interested.",
    "how": "Trigger an immediate acknowledgment after a form submission.",
    "tools": "Workflows · Messaging",
    "access": "standard"
  },
  {
    "category": "followup",
    "title": "I need to know the moment a valuable lead arrives.",
    "how": "Send an internal alert to the right team member.",
    "tools": "Notifications · Workflows",
    "access": "standard"
  },
  {
    "category": "followup",
    "title": "We send estimates and then lose track of the conversation.",
    "how": "Move estimates through a pipeline and trigger next-step reminders.",
    "tools": "Pipelines · Tasks",
    "access": "standard"
  },
  {
    "category": "followup",
    "title": "Different inquiries need to go to different people.",
    "how": "Assign contacts or opportunities based on routing rules.",
    "tools": "Workflow assignment",
    "access": "standard"
  },
  {
    "category": "followup",
    "title": "Old leads aren't ready today, but they might be later.",
    "how": "Create an appropriately timed nurture sequence for people who opted in.",
    "tools": "Email nurture · Segments",
    "access": "standard"
  },
  {
    "category": "followup",
    "title": "A sale happens and then our customer communication stops.",
    "how": "Trigger a post-purchase welcome or check-in sequence.",
    "tools": "Workflows · Customer follow-up",
    "access": "standard"
  },
  {
    "category": "followup",
    "title": "Someone misses an appointment and we forget to reconnect.",
    "how": "Configure a follow-up step for appointments marked as no-shows.",
    "tools": "Calendars · Workflows",
    "access": "standard"
  },
  {
    "category": "appointments",
    "title": "Booking a call takes six emails back and forth.",
    "how": "Share a scheduling link that shows your available appointment times.",
    "tools": "Calendars · Booking links",
    "access": "standard"
  },
  {
    "category": "appointments",
    "title": "People book appointments and forget.",
    "how": "Send booking confirmations and timed reminders.",
    "tools": "Calendars · Email/SMS",
    "access": "standard"
  },
  {
    "category": "appointments",
    "title": "Each team member needs their own availability.",
    "how": "Set up supported staff calendars and assign bookings appropriately.",
    "tools": "Team calendars",
    "access": "standard"
  },
  {
    "category": "appointments",
    "title": "I offer more than one kind of consultation.",
    "how": "Create different calendars or appointment types for different services.",
    "tools": "Calendars · Booking",
    "access": "standard"
  },
  {
    "category": "appointments",
    "title": "I want a booking option on my website.",
    "how": "Embed or link to a scheduling calendar from your page.",
    "tools": "Calendar embeds",
    "access": "standard"
  },
  {
    "category": "appointments",
    "title": "I need a repeatable reminder process before meetings.",
    "how": "Use calendar-based workflows for reminders and preparation details.",
    "tools": "Calendars · Workflows",
    "access": "standard"
  },
  {
    "category": "campaigns",
    "title": "I've got a contact list but never send an email.",
    "how": "Build and send a simple email campaign to permissioned contacts.",
    "tools": "Email builder · CRM",
    "access": "standard"
  },
  {
    "category": "campaigns",
    "title": "I need to announce a promotion to past customers.",
    "how": "Segment previous customers and send a targeted campaign.",
    "tools": "Email · Smart lists",
    "access": "standard"
  },
  {
    "category": "campaigns",
    "title": "I keep rebuilding the same newsletter from scratch.",
    "how": "Reuse email layouts and create a repeatable publishing process.",
    "tools": "Email templates · Campaigns",
    "access": "standard"
  },
  {
    "category": "campaigns",
    "title": "I need to send reminders to people who opted into a service.",
    "how": "Use a compliant SMS or email sequence tied to the service.",
    "tools": "SMS/Email · Workflows",
    "access": "standard"
  },
  {
    "category": "campaigns",
    "title": "I want to reconnect with customers I haven't seen in a while.",
    "how": "Build a win-back campaign for a defined customer segment.",
    "tools": "Segmentation · Automation",
    "access": "standard"
  },
  {
    "category": "campaigns",
    "title": "Replies get lost between email and text apps.",
    "how": "Review supported connected conversations in one workspace.",
    "tools": "Conversations · Inbox",
    "access": "standard"
  },
  {
    "category": "campaigns",
    "title": "I'd like to follow up on a special offer without resending it manually.",
    "how": "Use time-based workflow steps with an exit when someone responds or buys.",
    "tools": "Workflows · Conditions",
    "access": "standard"
  },
  {
    "category": "content",
    "title": "I don't have time to post something every day.",
    "how": "Batch and schedule social content in advance.",
    "tools": "Social Planner",
    "access": "standard"
  },
  {
    "category": "content",
    "title": "One video should turn into more than one post.",
    "how": "Draft adapted captions and distribute approved posts through connected channels.",
    "tools": "AI-assisted drafting · Social Planner",
    "access": "ai"
  },
  {
    "category": "content",
    "title": "I start marketing every Monday with a blank calendar.",
    "how": "Plan and schedule a week's or month's posts in one view.",
    "tools": "Social Planner · Calendar",
    "access": "standard"
  },
  {
    "category": "content",
    "title": "My posts are inconsistent across my social accounts.",
    "how": "Connect supported social profiles and manage planned publishing centrally.",
    "tools": "Social Planner",
    "access": "standard"
  },
  {
    "category": "content",
    "title": "Writing captions takes me longer than filming the video.",
    "how": "Use AI writing assistance, where enabled, to draft captions for review.",
    "tools": "AI-assisted content",
    "access": "ai"
  },
  {
    "category": "content",
    "title": "I want my emails and social posts to reinforce one campaign.",
    "how": "Plan an email campaign alongside related scheduled social posts.",
    "tools": "Email campaigns · Social Planner",
    "access": "standard"
  },
  {
    "category": "content",
    "title": "I have a great idea but never get it published.",
    "how": "Turn the idea into a draft, assign a date, and schedule the approved content.",
    "tools": "Campaigns · Scheduling",
    "access": "standard"
  },
  {
    "category": "reviews",
    "title": "We forget to ask customers for reviews.",
    "how": "Set up a follow-up step that sends a review invitation at the right point.",
    "tools": "Reputation · Workflows",
    "access": "standard"
  },
  {
    "category": "reviews",
    "title": "I want to make leaving a Google review easier.",
    "how": "Share a connected review link after a completed service.",
    "tools": "Review requests",
    "access": "standard"
  },
  {
    "category": "reviews",
    "title": "Good customer experiences aren't being used to build trust.",
    "how": "Send appropriately timed review requests as part of the customer journey.",
    "tools": "Reputation management",
    "access": "standard"
  },
  {
    "category": "reviews",
    "title": "I want to see incoming reviews without checking everywhere.",
    "how": "Manage reviews from supported connected profiles inside the reputation tools.",
    "tools": "Reputation inbox",
    "access": "standard"
  },
  {
    "category": "reviews",
    "title": "I'd like to showcase reviews on my website.",
    "how": "Use supported review widgets with an appropriate connected source.",
    "tools": "Review widgets",
    "access": "standard"
  },
  {
    "category": "reviews",
    "title": "I want to stay in touch with referral partners consistently.",
    "how": "Schedule partner check-ins and referral-focused outreach.",
    "tools": "Tags · Email · Workflows",
    "access": "standard"
  },
  {
    "category": "pipeline",
    "title": "I can't tell which deals are new, active, or stalled.",
    "how": "Create stages for your sales process and move opportunities through them.",
    "tools": "Pipelines · Opportunities",
    "access": "standard"
  },
  {
    "category": "pipeline",
    "title": "A good lead is sitting in a stage with no next action.",
    "how": "Use tasks or stage-based reminders so someone owns the next step.",
    "tools": "Pipelines · Tasks",
    "access": "standard"
  },
  {
    "category": "pipeline",
    "title": "I need to distribute leads among my team.",
    "how": "Assign new opportunities to team members using configured rules.",
    "tools": "Workflows · Assignment",
    "access": "standard"
  },
  {
    "category": "pipeline",
    "title": "I want a better view of what our team is working on.",
    "how": "Review opportunities by stage, owner, and status.",
    "tools": "Pipeline views",
    "access": "standard"
  },
  {
    "category": "pipeline",
    "title": "I want to know when an opportunity becomes a customer.",
    "how": "Track a won stage and trigger the appropriate handoff or onboarding workflow.",
    "tools": "Opportunities · Workflows",
    "access": "standard"
  },
  {
    "category": "pipeline",
    "title": "We lose track of the next action on a conversation.",
    "how": "Create tasks associated with contacts or opportunities.",
    "tools": "Tasks · CRM",
    "access": "standard"
  },
  {
    "category": "web",
    "title": "I need a landing page for a service or campaign.",
    "how": "Build a focused page using the website or funnel builder.",
    "tools": "Sites · Funnels",
    "access": "standard"
  },
  {
    "category": "web",
    "title": "I need a page that collects leads for a free resource.",
    "how": "Combine an opt-in form, a confirmation page, and delivery automation.",
    "tools": "Forms · Funnels · Workflows",
    "access": "standard"
  },
  {
    "category": "web",
    "title": "I want customers to book from a landing page.",
    "how": "Add a scheduling link or embedded calendar to the page.",
    "tools": "Pages · Calendars",
    "access": "standard"
  },
  {
    "category": "web",
    "title": "I'd like to sell a service through an online checkout.",
    "how": "Use a supported order form and configured payment processor.",
    "tools": "Order forms · Payments",
    "access": "standard"
  },
  {
    "category": "web",
    "title": "I want to test different offers without rebuilding my website.",
    "how": "Create separate landing pages and compare their performance.",
    "tools": "Funnels · Reporting",
    "access": "standard"
  },
  {
    "category": "web",
    "title": "I need a simple request form without building an entire website.",
    "how": "Publish a form and share or embed the link.",
    "tools": "Forms",
    "access": "standard"
  },
  {
    "category": "ai",
    "title": "What if an assistant could help answer common questions?",
    "how": "Explore a configured conversational AI assistant with an approved knowledge base and escalation rules.",
    "tools": "AI conversations · Configuration",
    "access": "ai"
  },
  {
    "category": "ai",
    "title": "Could AI help someone schedule an appointment?",
    "how": "Where supported, configure an AI assistant to guide eligible inquiries toward booking.",
    "tools": "AI booking · Calendars",
    "access": "ai"
  },
  {
    "category": "ai",
    "title": "I want help writing the first draft of a sales email.",
    "how": "Use available AI writing tools to draft copy, then edit and approve it.",
    "tools": "AI-assisted writing",
    "access": "ai"
  },
  {
    "category": "ai",
    "title": "I need better social captions without spending an hour writing.",
    "how": "Generate caption ideas with AI and publish only after reviewing them.",
    "tools": "AI content · Social Planner",
    "access": "ai"
  },
  {
    "category": "ai",
    "title": "Could an AI assistant respond outside office hours?",
    "how": "Configure available assistant tools, business knowledge, and guardrails before enabling responses.",
    "tools": "AI assistant · Messaging",
    "access": "ai"
  },
  {
    "category": "ai",
    "title": "I keep repeating the same administrative actions.",
    "how": "Explore supported agent and workflow capabilities to handle defined repeatable tasks.",
    "tools": "Agent tools · Workflows",
    "access": "ai"
  },
  {
    "category": "operations",
    "title": "Customer messages are scattered across channels.",
    "how": "Bring supported connected email, text, and social conversations into a shared inbox.",
    "tools": "Conversations",
    "access": "standard"
  },
  {
    "category": "operations",
    "title": "I want a repeatable new-customer welcome process.",
    "how": "Trigger a welcome email, task, and onboarding steps when a customer signs up.",
    "tools": "Workflows · Onboarding",
    "access": "standard"
  },
  {
    "category": "operations",
    "title": "I need a heads-up when an important deal changes.",
    "how": "Send an internal notification when a pipeline stage or record meets chosen conditions.",
    "tools": "Notifications · Pipelines",
    "access": "standard"
  },
  {
    "category": "operations",
    "title": "I need to see how many opportunities are in the pipeline.",
    "how": "Use CRM reporting and pipeline views to check volume and movement.",
    "tools": "Dashboards · Opportunities",
    "access": "standard"
  },
  {
    "category": "operations",
    "title": "People drop tasks when responsibilities change.",
    "how": "Assign tasks and handoffs within the CRM instead of relying on memory.",
    "tools": "Tasks · Assignments",
    "access": "standard"
  },
  {
    "category": "operations",
    "title": "New teammates shouldn't have to invent our processes.",
    "how": "Document the first few repeatable workflows using Renegade Playbooks and the CRM.",
    "tools": "Renegade Playbooks · CRM",
    "access": "standard"
  }
];
