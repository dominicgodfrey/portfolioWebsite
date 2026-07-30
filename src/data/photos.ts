/**
 * Photo metadata for the travel map + gallery.
 *
 * Each photo carries a lat/lon so the map pins, the "click to find the nearest
 * photo" interaction, and the country highlighting all work. The source files
 * arrived without EXIF, so coordinates are set from the place in the frame and
 * `date` is left off where the trip date isn't known.
 *
 * `country` uses ISO 3166-1 alpha-3 codes to match the country polygons in
 * /public/geo/world-countries.json (see src/data/visited.ts).
 */

export interface Photo {
  id: string;
  /** Image path in /public/images/travel. */
  src: string;
  lat: number;
  lon: number;
  /** ISO 3166-1 alpha-3 country code. */
  country: string;
  countryName: string;
  /** Friendly place label. Revealed in the lightbox, not on the thumbnail. */
  place: string;
  /** YYYY-MM-DD. Omitted when the shot's date isn't known. */
  date?: string;
}

export const photos: Photo[] = [
  {
    id: "us-white-mountains",
    src: "/images/travel/white-mountains.jpg",
    lat: 44.16,
    lon: -71.5,
    country: "USA",
    countryName: "United States",
    place: "White Mountains",
  },
  {
    id: "ca-montreal",
    src: "/images/travel/montreal-old-port.jpg",
    lat: 45.506,
    lon: -73.553,
    country: "CAN",
    countryName: "Canada",
    place: "Montréal",
  },
  {
    id: "cu-havana",
    src: "/images/travel/havana-malecon.jpg",
    lat: 23.1497,
    lon: -82.3563,
    country: "CUB",
    countryName: "Cuba",
    place: "Havana",
  },
  {
    id: "cu-vinales",
    src: "/images/travel/vinales-tobacco-field.jpg",
    lat: 22.6167,
    lon: -83.7167,
    country: "CUB",
    countryName: "Cuba",
    place: "Viñales",
  },
  {
    id: "gb-london-camden",
    src: "/images/travel/london-camden-lock.jpg",
    lat: 51.5414,
    lon: -0.1465,
    country: "GBR",
    countryName: "United Kingdom",
    place: "Camden, London",
  },
  {
    id: "fr-paris-eiffel",
    src: "/images/travel/paris-eiffel-tower.jpg",
    lat: 48.86,
    lon: 2.293,
    country: "FRA",
    countryName: "France",
    place: "Paris",
  },
  {
    id: "fr-paris-from-above",
    src: "/images/travel/paris-from-above.jpg",
    lat: 48.8584,
    lon: 2.2945,
    country: "FRA",
    countryName: "France",
    place: "Paris, from above",
  },
  {
    id: "nl-amsterdam-kings-day",
    src: "/images/travel/amsterdam-kings-day.jpg",
    lat: 52.369,
    lon: 4.8925,
    country: "NLD",
    countryName: "Netherlands",
    place: "Amsterdam",
  },
  {
    id: "nl-amsterdam-rembrandtplein",
    src: "/images/travel/amsterdam-rembrandtplein.jpg",
    lat: 52.3661,
    lon: 4.8957,
    country: "NLD",
    countryName: "Netherlands",
    place: "Rembrandtplein",
  },
  {
    id: "fi-helsinki",
    src: "/images/travel/helsinki-christmas-window.jpg",
    lat: 60.1685,
    lon: 24.9414,
    country: "FIN",
    countryName: "Finland",
    place: "Helsinki",
  },
  {
    id: "ru-spilled-blood",
    src: "/images/travel/spilled-blood-cathedral.jpg",
    lat: 59.94,
    lon: 30.3287,
    country: "RUS",
    countryName: "Russia",
    place: "Saint Petersburg",
  },
  {
    id: "ru-spb-street",
    src: "/images/travel/russia-street.jpg",
    lat: 59.941,
    lon: 30.316,
    country: "RUS",
    countryName: "Russia",
    place: "Saint Petersburg",
  },
  {
    id: "gr-athens-acropolis",
    src: "/images/travel/athens-acropolis.jpg",
    lat: 37.9682,
    lon: 23.7205,
    country: "GRC",
    countryName: "Greece",
    place: "Athens",
  },
  {
    id: "gr-athens-filopappou",
    src: "/images/travel/athens-filopappou.jpg",
    lat: 37.9673,
    lon: 23.7192,
    country: "GRC",
    countryName: "Greece",
    place: "Filopappou Hill",
  },
  {
    id: "kr-seoul",
    src: "/images/travel/korea-cherry-blossoms.jpg",
    lat: 37.5665,
    lon: 126.978,
    country: "KOR",
    countryName: "South Korea",
    place: "Seoul",
  },
];
