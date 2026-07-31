/**
 * Project showcase data, ordered most-prominent-first. Fully typed — keep the
 * shape, edit the values.
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  /**
   * ISO date (YYYY-MM or YYYY-MM-DD) marking the end / most recent work —
   * rendered as a friendly month/year.
   */
  date: string;
  /**
   * ISO date (YYYY-MM) the work began. When present, the card shows a span
   * ("Apr – May 2026"); otherwise it shows just `date`.
   */
  startDate?: string;
  /**
   * Still actively being built. Renders the time as an open-ended span
   * ("Apr 2026 – Present") plus an "In progress" badge.
   */
  inProgress?: boolean;
  /** Short status/achievement pill shown by the title, e.g. "DeisHacks Winner". */
  badge?: string;
  githubUrl?: string;
  /** A live, hosted demo. */
  liveUrl?: string;
  /** A video walkthrough (YouTube/Vimeo/MP4) for when a live demo isn't viable. */
  videoUrl?: string;
  /** A static PDF demo/preview (in /public) for when a live or video demo isn't viable. */
  pdfUrl?: string;
  /** A Devpost project page. */
  devpostUrl?: string;
  /** Cover image in /public/images. */
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "felton-cards",
    title: "Felton Cards",
    description:
      "Tasked with designing and implementing a system for a nonprofit day shelter that was operating on volunteer memory and scattered notes for data critical for proper management and funding. Led a team of 5 to the overall grand prize, our solution was an NFC-based guest-management system where staff tap a guest's ID card to pull up their profile, log services (showers, laundry, meals, hygiene kits), and deduct clothing purchases from a preexisting per-guest \"Felton Bucks\" budget that mimics real currency. Designed to be offline-first, with a zero-infrastructure Google Sheets backend chosen specifically for easy use by older/technologically uninitiated volunteers.",
    techStack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Redux",
      "NFC",
      "Google Apps Script",
    ],
    badge: "DeisHacks Winner 2026",
    startDate: "2026-01",
    date: "2026-02",
    githubUrl: "https://github.com/dominicgodfrey/FeltonCards-DeisHacks",
    videoUrl: "https://www.youtube.com/watch?v=bvJD9Kr8JYI",
    devpostUrl: "https://devpost.com/software/felton-cards",
    featured: true,
  },
  {
    id: "korlearn",
    title: "korLearn",
    description:
      "I am half Korean, everyone in my family speaks but me which is quite embarrassing. This is my solution, a study tool built around progressive-learning practices across vocabulary, grammar, and conversation. GoLang backend serves a TypeScript/React client for gamified learning/review. Models: (Kokoro/Whisper/Exaone) run locally to help me practice in real-time conversation, only using grammar and vocab I have learned so far.",
    techStack: ["GoLang", "TypeScript", "React", "Ollama", "Kokoro", "Whisper", "Exaone"],
    inProgress: true,
    startDate: "2026-06",
    date: "2026-07",
  },
  {
    id: "wheriz",
    title: "Wheriz",
    description:
      "\"Where-Was-I-When\" or Wheriz was a project I developed after losing my keys for the last time (with any luck). Using passive WiFi-derived dwell data, fallible human memory (mine), and learned per-user habits, Wheriz suggests where you misplaced something. It keeps a probability distribution per item and gets smarter with every confirmed find.",
    techStack: ["Python", "FastAPI", "Ollama", "SQLite", "Jinja2"],
    inProgress: true,
    startDate: "2026-05",
    date: "2026-06",
    githubUrl: "https://github.com/dominicgodfrey/wheriz",
  },
  {
    id: "riplet",
    title: "Riplet",
    description:
      "A study app built around a two-stage multiple-choice → short-answer quiz flow with self-grading, mastery tracking, and checkpoint reviews. In-app subject creation/editing, JSON import/export for sharing sets with other users. Now in production at servsafe.netlify.app with a small but growing user base, with Intro to Psychology (I got a 100% on this final) and ServSafe Manager pre-made sets.",
    techStack: ["React", "Vite", "JavaScript", "PWA", "Netlify"],
    startDate: "2026-04",
    date: "2026-05",
    githubUrl: "https://github.com/dominicgodfrey/riplet",
    liveUrl: "https://servsafe.netlify.app",
    featured: true,
  },
  {
    id: "relationship-wrapped",
    title: "relationshipWrapped",
    description:
      "I wanted to show my girlfriend that I had said goodnight and goodmorning more consistently than she had (I was right), so I set up this pipeline that turns exported message history into a polished, editorial \"year-in-review\" dashboard. Comes complete with message counts, monthly trends, weekday/hour heatmaps, and emoji and phrase tallies. Set up with a local Python + pandas pipeline that renders everything into a single HTML file with embedded fonts, CSS, and data so that no message ever leaves your machine.",
    techStack: ["Python", "pandas", "HTML", "CSS", "JavaScript"],
    date: "2026-05",
    githubUrl: "https://github.com/dominicgodfrey/relationshipWrapped",
    pdfUrl: "/relationship-wrapped-preview.pdf",
  },
  {
    id: "photobook",
    title: "photoBook",
    description:
      "Made to my father's tastes as I used this to make a photobook for Father's Day. The template is a digital photo album with a vintage/physical book aesthetic (leather cover and more). It closes with a gallery where every photo can be viewed and downloaded individually or as a zip. Entirely config-driven so for use you just need to drop in photos, list them with captions in a single config.js, and customize the text.",
    techStack: ["JavaScript", "CSS", "HTML", "ES Modules", "Netlify"],
    date: "2026-06",
    githubUrl: "https://github.com/dominicgodfrey/photoBook",
    liveUrl: "https://photobookdemo.netlify.app",
  },
  {
    id: "portfolio",
    title: "This Portfolio Website",
    description:
      "A glassmorphism + vaporwave portfolio built on Astro with React islands. Designed to be aesthetically pleasing and snappy, it lists my resume + places I have traveled and is likely to change at some point when I get bored of the design (again). Click live demo to see what it looks like.",
    techStack: ["Astro", "React", "Three.js", "MapLibre GL", "TypeScript"],
    date: "2026-06",
    githubUrl: "https://github.com/dominicgodfrey/portfolioWebsite",
    liveUrl: "https://dsolgodfrey.com",
  },
];
