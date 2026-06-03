/**
 * Tiny geo helpers — no turf.js dependency needed for what the map does.
 */

import type { Photo } from "@/data/photos";

const EARTH_RADIUS_KM = 6371;

const toRad = (deg: number): number => (deg * Math.PI) / 180;

/** Great-circle distance between two lat/lon points, in kilometres. */
export function haversineKm(
  aLat: number,
  aLon: number,
  bLat: number,
  bLon: number,
): number {
  const dLat = toRad(bLat - aLat);
  const dLon = toRad(bLon - aLon);
  const lat1 = toRad(aLat);
  const lat2 = toRad(bLat);

  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 2 * EARTH_RADIUS_KM * Math.asin(Math.sqrt(h));
}

/** The photo nearest to a clicked lat/lon. Returns null for an empty list. */
export function nearestPhoto(
  lat: number,
  lon: number,
  candidates: Photo[],
): Photo | null {
  let best: Photo | null = null;
  let bestDist = Infinity;
  for (const p of candidates) {
    const d = haversineKm(lat, lon, p.lat, p.lon);
    if (d < bestDist) {
      bestDist = d;
      best = p;
    }
  }
  return best;
}
