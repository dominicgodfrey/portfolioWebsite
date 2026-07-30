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
  /** Optional org/site link, rendered under the date. */
  link?: string;
  /** Optional logo image (path under /public), shown left of the title. */
  logo?: string;
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
    link: "https://thinkneuro.org/",
    logo: "/images/logos/thinkneuro.webp",
    bullets: [
      "Architected and implemented the Applicant Tracking System and automated certificate emailing, driving a 99.8% reduction in previously manual labor.",
      "Deployed an internal data analysis tool using full-stack Python technologies, including an in-house resume parser built on the OpenAI API for anonymized business intelligence.",
      "Scaled the pipeline to 2,500+ applications that stream in via webhook and are graded in a serverless Vercel system.",
    ],
  },
  {
    id: "nucifera-labs-swd",
    role: "Software Developer",
    org: "Nucifera Labs",
    location: "Remote",
    start: "2026-06",
    end: "Present",
    link: "https://nuciferalabs.com",
    logo: "/images/logos/nucifera.png",
    bullets: [
      "Founded and developed the Scryline product, enabling top eSports organizations to query competition data in natural language.",
      "Built with the Claude API on a deterministic-first pipeline that decomposes each query into structured JSON before analysis.",
      "Managed maintenance for the NTMR eSports web app, built on a MERN stack with a headless Shopify storefront.",
    ],
  },
  {
    id: "beal-house-swe",
    role: "Software Engineer",
    org: "The Beal House",
    location: "Littleton, NH",
    start: "2025-10",
    end: "2026-01",
    link: "https://thebealhouse.com/",
    logo: "/images/logos/beal-house.png",
    bullets: [
      "Built a GoLang backend and TypeScript/React frontend for an inn and restaurant, with Stripe API payments.",
      "Set up a business intelligence terminal unifying booking, cleaning, and reservations, with built-in guest recognition that saves preferences to promote a positive guest experience.",
      "Synced reservations across Airbnb and Booking.com using temporary tokens for in-progress bookings.",
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
    link: "https://junbishop.com/",
    logo: "/images/logos/junbi.png",
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
    link: "https://sam.org/",
    logo: "/images/logos/sigma-alpha-mu.png",
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
    link: "https://www.brandeis.edu/admissions/",
    logo: "/images/logos/brandeis.png",
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
    logo: "/images/logos/vans.png",
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
    logo: "/images/logos/stony-brook.png",
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
