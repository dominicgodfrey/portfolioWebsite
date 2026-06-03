/**
 * Cross-island shared state.
 *
 * The PhotoGallery and TravelMap are separate React islands that never share a
 * React tree, so they coordinate through nanostores instead of props:
 *
 *   - selectedPhotoId: which photo is "open". null = none.
 *   - mapMode: 'all' shows every pin; 'single' shows only the selected pin.
 *
 * Selecting a gallery thumbnail flips the map to single-photo mode and centres
 * it; clicking empty map space finds the nearest photo and selects it.
 */

import { atom } from "nanostores";

export type MapMode = "all" | "single";

export const selectedPhotoId = atom<string | null>(null);
export const mapMode = atom<MapMode>("all");

/** Open a specific photo and focus the map on it. */
export function openPhoto(id: string): void {
  selectedPhotoId.set(id);
  mapMode.set("single");
}

/** Close the open photo and return the map to showing all pins. */
export function clearPhoto(): void {
  selectedPhotoId.set(null);
  mapMode.set("all");
}
