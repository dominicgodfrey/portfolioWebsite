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
    id: "jp-tokyo",
    src: "/images/photo-placeholder.svg",
    lat: 35.6595,
    lon: 139.7005,
    country: "JPN",
    countryName: "Japan",
    place: "Shibuya, Tokyo",
    date: "2025-04-12",
    caption: "Neon and rain over the scramble crossing.",
  },
  {
    id: "is-reykjavik",
    src: "/images/photo-placeholder.svg",
    lat: 64.1466,
    lon: -21.9426,
    country: "ISL",
    countryName: "Iceland",
    place: "Reykjavík",
    date: "2025-02-03",
    caption: "Aurora above the harbour at 2am.",
  },
  {
    id: "it-venice",
    src: "/images/photo-placeholder.svg",
    lat: 45.4408,
    lon: 12.3155,
    country: "ITA",
    countryName: "Italy",
    place: "Venice",
    date: "2024-09-21",
    caption: "First light on the Grand Canal.",
  },
  {
    id: "pe-cusco",
    src: "/images/photo-placeholder.svg",
    lat: -13.1631,
    lon: -72.545,
    country: "PER",
    countryName: "Peru",
    place: "Machu Picchu",
    date: "2024-07-08",
    caption: "Above the clouds at the sun gate.",
  },
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
    id: "au-sydney",
    src: "/images/photo-placeholder.svg",
    lat: -33.8568,
    lon: 151.2153,
    country: "AUS",
    countryName: "Australia",
    place: "Sydney",
    date: "2023-12-15",
    caption: "Sails of the Opera House at dusk.",
  },
  {
    id: "ma-marrakesh",
    src: "/images/photo-placeholder.svg",
    lat: 31.6258,
    lon: -7.9891,
    country: "MAR",
    countryName: "Morocco",
    place: "Marrakesh",
    date: "2023-10-02",
    caption: "Spice stalls in the medina.",
  },
  {
    id: "no-lofoten",
    src: "/images/photo-placeholder.svg",
    lat: 68.0884,
    lon: 13.5604,
    country: "NOR",
    countryName: "Norway",
    place: "Lofoten Islands",
    date: "2023-06-18",
    caption: "Midnight sun over the fjord.",
  },
];
