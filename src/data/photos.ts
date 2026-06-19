/**
 * Placeholder photo metadata for the travel map + gallery.
 *
 * Each photo carries a real lat/lon so the map pins, the "click to find the
 * nearest photo" interaction, and the country highlighting all work today.
 * When real photos arrive (with EXIF GPS), only the `src` + coords change.
 *
 * `country` uses ISO 3166-1 alpha-3 codes to match the country polygons in
 * /public/geo/world-countries.json (see src/data/visited.ts).
 */

export interface Photo {
  id: string;
  /** Image path in /public/images (placeholder SVGs for now). */
  src: string;
  lat: number;
  lon: number;
  /** ISO 3166-1 alpha-3 country code. */
  country: string;
  countryName: string;
  /** Friendly place label shown in the lightbox. */
  place: string;
  date: string; // YYYY-MM-DD
  caption: string;
}

export const photos: Photo[] = [
  {
    id: "us-nyc",
    src: "/images/photo-placeholder.svg",
    lat: 40.7484,
    lon: -73.9857,
    country: "USA",
    countryName: "United States",
    place: "New York City",
    date: "2024-05-30",
    caption: "Looking up from the Flatiron.",
  },
  {
    id: "fr-paris",
    src: "/images/photo-placeholder.svg",
    lat: 48.8584,
    lon: 2.2945,
    country: "FRA",
    countryName: "France",
    place: "Paris",
    date: "2024-09-21",
    caption: "Golden hour beneath the Eiffel Tower.",
  },
];
