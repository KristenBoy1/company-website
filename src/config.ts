// ============================================
// COMPANY WEBSITE CONFIGURATION
// Change these values to customize the site.
// This is the ONLY file you need to edit for branding.
// ============================================

export const config = {
  // Company identity — CHANGE THESE
  companyName: "PROJEKTID",
  tagline: "AI-Powered Software, Automations & Digital Products",
  description: "We build revenue-generating software, automation workflows, APIs, templates, and AI-assisted products.",

  // Contact — CHANGE THESE
  email: "hello@projektid.com",
  location: "Tallinn, Estonia",

  // Domain — CHANGE when custom domain is purchased
  domain: "projektid.com",
  url: "https://projektid.com",

  // Social — ADD as needed
  social: {
    github: "",
    twitter: "",
    linkedin: "",
  },

  // SEO
  ogImage: "/og-image.png",

  // Product categories for the Products page
  products: [
    {
      name: "Data APIs",
      description: "Production-ready REST APIs for business data, emails, domains, companies, and more. Deployed on Railway, listed on RapidAPI.",
      platform: "RapidAPI",
      status: "Live",
      link: "#",
      icon: "api",
    },
    {
      name: "Automation Workflows",
      description: "Pre-built n8n workflow packs for marketing, lead gen, social media, and business automation. Download and import into your n8n instance.",
      platform: "Gumroad",
      status: "Coming Soon",
      link: "#",
      icon: "workflow",
    },
    {
      name: "Fiverr Services",
      description: "Professional automation, API development, data scraping, and AI integration services. Custom solutions built to your spec.",
      platform: "Fiverr",
      status: "Coming Soon",
      link: "#",
      icon: "service",
    },
    {
      name: "Digital Templates",
      description: "40+ professionally designed PDF templates for budgets, planners, trackers, and business documents. Instant download.",
      platform: "Etsy",
      status: "Coming Soon",
      link: "#",
      icon: "template",
    },
    {
      name: "Claude Code Skills",
      description: "Custom skill packs for Claude Code — backtesting, Shopify themes, code review, ML pipelines, and more.",
      platform: "aitmpl.com",
      status: "Coming Soon",
      link: "#",
      icon: "skill",
    },
    {
      name: "Web Applications",
      description: "SaaS micro-tools built with modern frameworks. Productivity apps, calculators, dashboards, and utility tools.",
      platform: "Direct",
      status: "In Development",
      link: "#",
      icon: "app",
    },
  ],
} as const;
