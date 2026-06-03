/** Placeholder education entry. Replace with your real details. */

export interface EducationEntry {
  id: string;
  school: string;
  degree: string;
  location?: string;
  start: string; // YYYY-MM
  end: string; // YYYY-MM or "Present"
  details?: string[];
}

export const education: EducationEntry[] = [
  {
    id: "brandeis",
    school: "Brandeis University",
    degree: "B.S. in Computer Science",
    location: "Waltham, MA",
    start: "2022-09",
    end: "2026-05",
    details: [
      "Relevant honors, GPA, or scholarships go here.",
      "Clubs, activities, or leadership roles go here.",
    ],
  },
];
