/**
 * Skills, grouped by category. Mirrors the LaTeX resume's Skills section, with a
 * few extras the resume omits for space (Java, HTML/CSS).
 */

export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      "TypeScript",
      "JavaScript",
      "Python",
      "GoLang",
      "Java",
      "SQL",
      "Google Apps Script",
      "HTML/CSS",
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "React",
      "Node.js",
      "Express",
      "Django",
      "FastAPI",
      "PyTorch",
      "pandas",
      "Matplotlib",
      "Seaborn",
      "LangChain",
      "Ollama",
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Git/GitHub",
      "PostgreSQL",
      "MongoDB",
      "Vercel",
      "Stripe API",
      "Shopify",
      "Claude/OpenAI/Gemini APIs",
      "OpenWhispr",
    ],
  },
  {
    category: "Soft Skills",
    items: [
      "Team Leadership",
      "Stakeholder Communication",
      "Public Speaking",
      "Operations Management",
    ],
  },
];
