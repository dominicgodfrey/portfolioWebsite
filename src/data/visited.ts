/**
 * ISO 3166-1 alpha-3 codes of visited countries, used to highlight country
 * polygons on the travel map. Derived from `photos` (so every photographed
 * country lights up) plus any extra countries visited without a pinned photo.
 */

import { photos } from "./photos";

const extraVisited: string[] = [
  "CAN", // Canada
  "GBR", // United Kingdom
  "FRA", // France
  "ESP", // Spain
  "DEU", // Germany
  "PRT", // Portugal
  "GRC", // Greece
  "THA", // Thailand
  "NZL", // New Zealand
];

/** Deduplicated set of visited country codes. */
export const visitedCountries: string[] = Array.from(
  new Set<string>([...photos.map((p) => p.country), ...extraVisited]),
);
