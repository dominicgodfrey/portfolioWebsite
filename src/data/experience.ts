/**
 * Experience entries (technical + non-technical).
 * Dates are "YYYY-MM"; use "Present" for an ongoing end date. Leave `start`
 * as "" to render only the end label (used for education's expected-grad line).
 */

export interface ExperienceEntry {
  id: string;
  role: string;
  org: string;
  location?: string;
  start: string; // YYYY-MM (or "" for a single-label date)
  end: string; // YYYY-MM or "Present"
  bullets: string[];
}

export const technicalExperience: ExperienceEntry[] = [
  {
    id: "thinkneuro-swe-staff",
    role: "Software Engineer, Staff",
    org: "ThinkNeuro, LLC",
    location: "Sacramento, CA",
    start: "2026-04",
    end: "Present",
    bullets: [
      "Built an application screening tool integrating LLM and deterministic evaluation to assist in candidate review — designing a review interface that surfaced actionable signal from unstructured applicant data.",
      "Engineered an end-to-end certificate automation platform (Flask, PostgreSQL, Render) with auth, configurable preset management, and bulk generation/sending.",
      "Designed and consumed RESTful APIs with production-grade patterns including environment-based configuration, session management, and cloud deployment pipelines.",
      "Applied prompt engineering best practices to ensure consistent, reliable, and efficient LLM output across varied applicant inputs at scale.",
      "Collaborated with non-technical staff to translate operational requirements into maintainable, deployed software.",
    ],
  },
  {
    id: "cdcw-swe",
    role: "Software Engineer",
    org: "Community Day Center of Waltham",
    location: "Waltham, MA",
    start: "2026-01",
    end: "2026-02",
    bullets: [
      'Won the Overall Grand Prize at DeisHacks, a 48-hour social impact hackathon, by architecting a "privacy-first" data infrastructure for the Community Day Center of Waltham (CDCW).',
      "Engineered a contactless logging system using pseudo-anonymous NFC cards and mobile devices to replace fragmented paper logs, enabling real-time service tracking for meals, laundry, and clothing.",
      "Developed a live analytics dashboard via Google Sheets and Apps Script, automating the data aggregation required for grant applications and service coordination.",
      "Integrated Natural Language Processing (NLP) to allow non-technical staff to query complex datasets using plain English.",
      'Optimized for a "Low-Barrier Card" by designing a registration system that tracks unique IDs without mandatory personally identifiable information, protecting guest dignity while securing vital data.',
      "Architected future-state predictive models to forecast service demand based on weather patterns and historical usage trends.",
    ],
  },
  {
    id: "beal-house-swe",
    role: "Software Engineer",
    org: "The Beal House",
    location: "Littleton, NH",
    start: "2025-10",
    end: "2026-01",
    bullets: [
      "Architected a full-stack hospitality management system for The Beal House, integrating WordPress/MotoPress with a custom Google Apps Script + Google Sheets backend to centralize property operations.",
      "Engineered a multi-channel synchronization engine using API integrations to harmonize bookings across a proprietary website, Airbnb, Booking.com, and other OTAs to eliminate overbooking risks.",
      "Developed a custom Business Intelligence (BI) layer within Google Sheets, utilizing scripts to automate weekly analytics reports and executive summaries for inn administration.",
      "Implemented automated lifecycle communication via Stripe and SMTP integrations, handling the entire guest journey from payment processing to check-in/check-out workflows.",
      "Established system redundancy by mapping the MotoPress database to the Google Calendar API, ensuring 24/7 admin visibility into occupancy and scheduling.",
    ],
  },
];

export const nonTechnicalExperience: ExperienceEntry[] = [
  {
    id: "junbi-ops-manager",
    role: "Barista → Operations Manager",
    org: "Junbi Matcha",
    location: "Princeton, NJ",
    start: "2021-02",
    end: "2025-08",
    bullets: [
      "Interviewed candidates, trained and supervised employees.",
      "Counted cash receipts and reconciled them with the general ledger.",
      "Assisted in inventory management and business future planning.",
      "Consulted with customers about teas, prepared the teas, and served them.",
      "Independently opened the shop and prepped ingredients for the day.",
      "Trained the replacement manager when leaving.",
    ],
  },
  {
    id: "sammy-treasurer",
    role: "Treasurer",
    org: "Sigma Alpha Mu (Gamma Chi Chapter)",
    location: "Waltham, MA",
    start: "2023-11",
    end: "2024-12",
    bullets: [
      "Reduced chapter debt by 41% without increasing individual member financial responsibility.",
      "Removed new-member payment, increasing enrollment by 80% compared to the previous year.",
      "Created new philanthropic event policies, which increased incentive to host charitable events, leading to a 20% increase in donations.",
    ],
  },
  {
    id: "brandeis-ambassador",
    role: "Admissions Ambassador",
    org: "Brandeis University",
    location: "Waltham, MA",
    start: "2022-09",
    end: "2024-12",
    bullets: [
      "Interviewed prospective domestic and international students for admission.",
      "Guided campus tours of 5–40 visitors.",
      "Answered calls and emails directed toward Brandeis Admissions.",
      "Made social media contributions for Brandeis' media team to support public image.",
      "Individually led Q&A sessions for prospective and admitted students and family members.",
      "Provided a welcoming environment for anxious potential students.",
    ],
  },
  {
    id: "vans-sales",
    role: "Sales Associate",
    org: "Vans",
    location: "Hightstown, NJ",
    start: "2024-05",
    end: "2024-08",
    bullets: [
      "Led store sales in multiple KPIs during all months of employment.",
      "Opened the store and set up displays.",
      "Maintained 20% higher Units Per Transaction (UPT) compared to the next most successful employee.",
      "Drove Average Dollars per Sale (ADS) up 10% compared to the next most successful employee.",
    ],
  },
  {
    id: "custom-pc",
    role: "Custom PC Sales & Engineer",
    org: "Self-Employed",
    location: "Princeton, NJ",
    start: "2016-08",
    end: "2022-07",
    bullets: [
      "Consulted with clients to ascertain system requirements.",
      "Prepared component options with budgets, redesigned PC builds accordingly.",
      "Sourced parts, built computers, and tested upon delivery.",
    ],
  },
  {
    id: "stony-brook-editor",
    role: "Editor",
    org: "Stony Brook University",
    location: "Remote",
    start: "2018-09",
    end: "2022-01",
    bullets: [
      "Transcribed and edited publications for a SUNY Stony Brook professor.",
      "Prepared layout and design of pages and covers.",
      "Organized and published a poetry book.",
    ],
  },
  {
    id: "plainsboro-tutor",
    role: "Tutor",
    org: "Township of Plainsboro",
    location: "Plainsboro, NJ",
    start: "2018-09",
    end: "2019-06",
    bullets: [
      "Volunteered to teach elementary school students English and Mathematics.",
    ],
  },
];
