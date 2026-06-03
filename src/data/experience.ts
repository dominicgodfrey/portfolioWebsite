/**
 * Placeholder experience entries (technical + non-technical). Replace values,
 * keep the shape. Dates are "YYYY-MM"; use "Present" for an ongoing end date.
 */

export interface ExperienceEntry {
  id: string;
  role: string;
  org: string;
  location?: string;
  start: string; // YYYY-MM
  end: string; // YYYY-MM or "Present"
  bullets: string[];
}

export const technicalExperience: ExperienceEntry[] = [
  {
    id: "swe-intern",
    role: "Software Engineering Intern",
    org: "Acme Technologies",
    location: "Boston, MA",
    start: "2025-06",
    end: "2025-08",
    bullets: [
      "Shipped customer-facing features across a React + Node.js stack, owning work from design through deploy.",
      "Cut a key API endpoint's p95 latency ~40% by adding caching and tightening database queries.",
      "Added end-to-end tests that caught regressions before release and raised coverage on core flows.",
    ],
  },
  {
    id: "research-assistant",
    role: "Undergraduate Research Assistant",
    org: "Brandeis University — Systems Lab",
    location: "Waltham, MA",
    start: "2024-09",
    end: "Present",
    bullets: [
      "Built tooling in Python to collect and visualize experiment data for an ongoing distributed-systems project.",
      "Automated a manual data pipeline, saving the team several hours per week.",
    ],
  },
  {
    id: "teaching-assistant",
    role: "Teaching Assistant — Data Structures",
    org: "Brandeis University",
    location: "Waltham, MA",
    start: "2024-01",
    end: "2024-05",
    bullets: [
      "Led weekly lab sections and held office hours for ~30 students.",
      "Wrote and graded assignments covering trees, graphs, and algorithmic complexity.",
    ],
  },
];

export const nonTechnicalExperience: ExperienceEntry[] = [
  {
    id: "resident-advisor",
    role: "Resident Advisor",
    org: "Brandeis University — Residence Life",
    location: "Waltham, MA",
    start: "2024-08",
    end: "Present",
    bullets: [
      "Support a community of ~40 residents, mediating conflicts and running events.",
      "Respond to after-hours situations calmly and coordinate with campus staff.",
    ],
  },
  {
    id: "barista",
    role: "Barista",
    org: "Local Coffee Co.",
    location: "Waltham, MA",
    start: "2023-06",
    end: "2024-05",
    bullets: [
      "Handled high-volume service while keeping accuracy and a friendly pace.",
      "Trained two new hires on workflow and point-of-sale systems.",
    ],
  },
];
