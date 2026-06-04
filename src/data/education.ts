/** Education entry. Leave `start` as "" to show only the `end` label. */

export interface EducationEntry {
  id: string;
  school: string;
  degree: string;
  location?: string;
  start: string; // YYYY-MM (or "" for a single-label date)
  end: string; // YYYY-MM or a free-form label (e.g. "Expected Graduation Spring 2027")
  details?: string[];
}

export const education: EducationEntry[] = [
  {
    id: "brandeis",
    school: "Brandeis University",
    degree: "B.S. in Computer Science",
    location: "Waltham, MA",
    start: "",
    end: "Expected Graduation Spring 2027",
    details: [
      "Dean's List Scholar",
      "Sigma Alpha Mu — Treasurer",
      "HAPA — Founder",
      "Poker Power Club",
      "Brandeis Admissions Ambassador",
    ],
  },
];
