/**
 * Placeholder project data. Fully typed so swapping in real content later is
 * mechanical — keep the shape, replace the values.
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  /** ISO date (YYYY-MM or YYYY-MM-DD) — rendered as a friendly month/year. */
  date: string;
  githubUrl?: string;
  /** A live, hosted demo. */
  liveUrl?: string;
  /** A video walkthrough (YouTube/Vimeo/MP4) for when a live demo isn't viable. */
  videoUrl?: string;
  /** Cover image in /public/images. */
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "cognitive-engine",
    title: "Cognitive Engine",
    description:
      "A personal cognitive architecture modeling goal-directed decision-making over a unified graph. Spreading activation surfaces relevance; a dual-process engine balances a fast cached response against slow deliberative reasoning.",
    techStack: ["Python", "NetworkX", "Chroma", "Ollama", "Anthropic API"],
    date: "2026-05",
    githubUrl: "https://github.com/dominicgodfrey/cognitive-engine",
    liveUrl: undefined,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    image: "/images/project-cognitive.svg",
    featured: true,
  },
  {
    id: "vaporwave-portfolio",
    title: "This Portfolio",
    description:
      "A glassmorphism + vaporwave portfolio built on Astro with React islands — a WebGL grid background, an interactive travel map, and a content-driven project showcase. Near-zero JS shipped by default.",
    techStack: ["Astro", "React", "Three.js", "MapLibre GL", "TypeScript"],
    date: "2026-06",
    githubUrl: "https://github.com/dominicgodfrey/portfolio",
    liveUrl: "https://dominicgodfrey.com",
    image: "/images/project-portfolio.svg",
    featured: true,
  },
  {
    id: "trailmark",
    title: "TrailMark",
    description:
      "A geo-tagged photo journal that clusters images by location and renders a heatmap of where you've shot. EXIF-driven, offline-first, with a tile-server-agnostic map layer.",
    techStack: ["TypeScript", "React", "IndexedDB", "MapLibre GL", "exifr"],
    date: "2026-02",
    githubUrl: "https://github.com/dominicgodfrey/trailmark",
    liveUrl: "https://trailmark.example.com",
    image: "/images/project-trailmark.svg",
  },
];
