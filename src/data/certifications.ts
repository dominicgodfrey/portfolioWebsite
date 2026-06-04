/** Certifications + awards. Set `date` to "" for an in-progress certification. */

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string; // YYYY-MM, or "" if in progress
  credentialUrl?: string;
}

export interface Award {
  id: string;
  title: string;
  context: string;
  date: string; // YYYY-MM
}

export const certifications: Certification[] = [
  {
    id: "gca-querying-data",
    title: "Querying Data",
    issuer: "Intel + Global Career Accelerator",
    date: "",
  },
  {
    id: "gca-ai-professional-skills",
    title: "AI Professional Skills",
    issuer: "OpenAI + Global Career Accelerator",
    date: "",
  },
  {
    id: "gca-python-data",
    title: "Python & Data",
    issuer: "Recording Academy (Grammy Awards) + Global Career Accelerator",
    date: "",
  },
  {
    id: "gca-intercultural-skills",
    title: "Intercultural Skills",
    issuer: "UNESCO + Global Career Accelerator",
    date: "",
  },
];

export const awards: Award[] = [
  {
    id: "deishacks-2026",
    title: "Overall Grand Prize",
    context: "DeisHacks 2026",
    date: "2026-01",
  },
];
