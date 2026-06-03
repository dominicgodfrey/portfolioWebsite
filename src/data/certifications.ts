/** Placeholder certifications + awards. Replace values, keep the shape. */

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string; // YYYY-MM
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
    id: "aws-saa",
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2025-11",
    credentialUrl: "https://www.credly.com/",
  },
  {
    id: "gcp-pca",
    title: "Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "2025-06",
    credentialUrl: "https://www.credential.net/",
  },
  {
    id: "ckad",
    title: "Certified Kubernetes Application Developer",
    issuer: "The Linux Foundation",
    date: "2024-09",
    credentialUrl: "https://www.cncf.io/certification/ckad/",
  },
];

export const awards: Award[] = [
  {
    id: "hackathon-2025",
    title: "1st Place — Best Use of AI",
    context: "RegionalHacks 2025",
    date: "2025-10",
  },
  {
    id: "deans-list",
    title: "Dean's List",
    context: "Faculty of Engineering",
    date: "2025-05",
  },
];
