/** Placeholder skills, grouped by category. Replace with your real stack. */

export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "C", "SQL", "HTML/CSS"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Astro", "Node.js", "Express", "FastAPI", "Three.js"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Docker", "AWS", "PostgreSQL", "MongoDB", "Linux", "Figma"],
  },
];
