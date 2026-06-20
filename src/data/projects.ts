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
      "DeisHacks 2026 winner. An NFC-based guest-management system for a nonprofit day shelter: staff tap a guest's ID card to pull up their profile, log services (showers, laundry, meals, hygiene kits), and deduct clothing purchases from a per-guest \"Felton Bucks\" budget. Offline-first — actions queue locally and sync when connectivity returns — over a zero-infrastructure Google Sheets backend.",
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
    id: "riplet",
    title: "Riplet",
    description:
      "A study app built around a two-stage multiple-choice → short-answer quiz flow with self-grading, mastery tracking, and checkpoint reviews. In-app subject creation/editing, JSON import/export for sharing sets, per-subject localStorage persistence, and an installable PWA. Now in production at servsafe.netlify.app with a small but growing user base, shipping bundled sets like a 306-term ServSafe Manager deck.",
    techStack: ["React", "Vite", "JavaScript", "PWA", "Netlify"],
    badge: "In production",
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
      "Turns an exported SMS history with one person into a polished, editorial \"year-in-review\" dashboard — message counts, monthly trends, weekday/hour heatmaps, and emoji and phrase tallies (down to \"I love you\" counts). A local Python + pandas pipeline renders everything into a single self-contained HTML file with embedded fonts, CSS, and data, so the conversation never leaves your machine.",
    techStack: ["Python", "pandas", "HTML", "CSS", "JavaScript"],
    date: "2026-05",
    githubUrl: "https://github.com/dominicgodfrey/relationshipWrapped",
    pdfUrl: "/relationship-wrapped-preview.pdf",
  },
  {
    id: "basketeer",
    title: "Basketeer",
    description:
      "An NBA scouting agent that answers open-ended basketball questions by dynamically composing a small set of primitives over a unified player/season/contract dataset — player comp finder, team-fit search, and free-form analytical queries. Built to demonstrate production agentic-systems patterns while staying cheap to run.",
    techStack: ["Python", "FastAPI", "Pydantic", "Gemini", "Vector Search"],
    inProgress: true,
    startDate: "2026-04",
    date: "2026-05",
    githubUrl: "https://github.com/dominicgodfrey/basketeer",
  },
  {
    id: "wheriz",
    title: "Wheriz",
    description:
      "Where-Was-I-When: an ambient item-finding system that suggests where you misplaced something by reasoning over three streams of evidence — passive WiFi-derived dwell data, fallible human memory, and learned per-user habits. It keeps a probability distribution per item and gets visibly smarter with every confirmed find. The sensor-agnostic reasoning layer is the product; the sensing layer is a replaceable input.",
    techStack: ["Python", "FastAPI", "Ollama", "SQLite", "Jinja2"],
    inProgress: true,
    startDate: "2026-05",
    date: "2026-06",
    githubUrl: "https://github.com/dominicgodfrey/wheriz",
  },
  {
    id: "portfolio",
    title: "This Portfolio",
    description:
      "A glassmorphism + vaporwave portfolio built on Astro with React islands — a WebGL grid background, an interactive travel map, and a content-driven project showcase. Near-zero JS shipped by default.",
    techStack: ["Astro", "React", "Three.js", "MapLibre GL", "TypeScript"],
    date: "2026-06",
    githubUrl: "https://github.com/dominicgodfrey/portfolioWebsite",
    liveUrl: "https://dsolgodfrey.com",
    image: "/images/project-portfolio.svg",
  },
];
