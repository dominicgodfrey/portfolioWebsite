/**
 * ISO 3166-1 alpha-3 codes of visited countries, used to highlight country
 * polygons on the travel map.
 */

/** Deduplicated set of visited country codes. */
export const visitedCountries: string[] = Array.from(
  new Set<string>([
    "BEL", // Belgium
    "CAN", // Canada
    "CUB", // Cuba
    "FIN", // Finland
    "FRA", // France
    "HKG", // Hong Kong
    "MEX", // Mexico
    "NLD", // Netherlands
    "PHL", // Philippines
    "RUS", // Russia
    "SGP", // Singapore
    "KOR", // South Korea
    "GBR", // United Kingdom
    "USA", // United States
  ]),
);
