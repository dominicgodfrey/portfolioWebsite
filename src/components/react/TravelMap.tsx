/**
 * TravelMap — MapLibre GL map with:
 *   - visited countries highlighted (GeoJSON fill + glow outline)
 *   - a pin per photo
 *   - click empty space → fly to & open the nearest photo
 *   - click a pin → open that photo
 *   - "single" mode (driven by the shared store) shows only the active pin
 *
 * Talks to PhotoGallery purely through the nanostore in src/lib/stores.ts.
 * No API token: uses OpenFreeMap's hosted dark style, with MapLibre's demo
 * tiles as a fallback so the map is never blank.
 */

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { photos } from "@/data/photos";
import { visitedCountries } from "@/data/visited";
import { nearestPhoto } from "@/lib/geo";
import { selectedPhotoId, mapMode, openPhoto } from "@/lib/stores";

// Light minimal basemap to match the pearlescent theme (no API token).
const STYLE_URL = "https://tiles.openfreemap.org/styles/positron";
const FALLBACK_STYLE = "https://demotiles.maplibre.org/style.json";
const WORLD_VIEW = { center: [10, 25] as [number, number], zoom: 1.4 };

const RED = "#e11d48"; // pins + outlines (vibrant warm scheme)
const PURPLE = "#9333ea"; // visited-country fill

const photoFeatures: GeoJSON.FeatureCollection = {
  type: "FeatureCollection",
  features: photos.map((p) => ({
    type: "Feature",
    properties: { id: p.id, place: p.place, countryName: p.countryName },
    geometry: { type: "Point", coordinates: [p.lon, p.lat] },
  })),
};

export default function TravelMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: STYLE_URL,
      center: WORLD_VIEW.center,
      zoom: WORLD_VIEW.zoom,
      attributionControl: { compact: true },
    });
    map.addControl(
      new maplibregl.NavigationControl({ showCompass: false }),
      "top-right",
    );

    let popup: maplibregl.Popup | null = null;
    let fellBack = false;

    // The base style references a few sprite icons we don't ship; supply a 1x1
    // transparent placeholder so it doesn't spam the console. (Our pins are
    // circle layers, unaffected by this.)
    map.on("styleimagemissing", (e) => {
      if (!map.hasImage(e.id)) {
        map.addImage(e.id, { width: 1, height: 1, data: new Uint8Array(4) });
      }
    });

    // --- add our sources + layers on top of whatever base style loaded ------
    const addOverlays = () => {
      if (!map.isStyleLoaded() || map.getSource("photos")) return;

      map.addSource("countries", {
        type: "geojson",
        data: "/geo/world-countries.json",
      });
      map.addSource("photos", { type: "geojson", data: photoFeatures });

      const visitedFilter: maplibregl.FilterSpecification = [
        "in",
        ["get", "ADM0_A3"],
        ["literal", visitedCountries],
      ];

      // Insert country layers beneath the first label so place names stay legible.
      const firstSymbol = map
        .getStyle()
        .layers?.find((l) => l.type === "symbol")?.id;

      map.addLayer(
        {
          id: "visited-fill",
          type: "fill",
          source: "countries",
          filter: visitedFilter,
          paint: { "fill-color": PURPLE, "fill-opacity": 0.22 },
        },
        firstSymbol,
      );
      map.addLayer(
        {
          id: "visited-line",
          type: "line",
          source: "countries",
          filter: visitedFilter,
          paint: { "line-color": RED, "line-opacity": 0.5, "line-width": 1 },
        },
        firstSymbol,
      );

      // Soft glow behind each pin.
      map.addLayer({
        id: "photo-glow",
        type: "circle",
        source: "photos",
        paint: {
          "circle-radius": 15,
          "circle-color": RED,
          "circle-blur": 1,
          "circle-opacity": 0.4,
        },
      });
      map.addLayer({
        id: "photo-pins",
        type: "circle",
        source: "photos",
        paint: {
          "circle-radius": 6,
          "circle-color": RED,
          "circle-stroke-color": PURPLE,
          "circle-stroke-width": 2,
        },
      });

      syncState();
    };

    // --- reflect the shared store onto the map ------------------------------
    const syncState = () => {
      if (!map.getLayer("photo-pins")) return;
      const id = selectedPhotoId.get();
      const single = mapMode.get() === "single" && id;

      const filter: maplibregl.FilterSpecification | null = single
        ? ["==", ["get", "id"], id]
        : null;
      map.setFilter("photo-pins", filter);
      map.setFilter("photo-glow", filter);

      popup?.remove();
      if (id) {
        const p = photos.find((x) => x.id === id);
        if (p) {
          map.flyTo({ center: [p.lon, p.lat], zoom: 4.2, speed: 0.8 });
          popup = new maplibregl.Popup({
            closeButton: false,
            offset: 16,
            className: "map-popup",
          })
            .setLngLat([p.lon, p.lat])
            .setHTML(
              `<strong>${p.place}</strong><span>${p.countryName}</span>`,
            )
            .addTo(map);
        }
      } else {
        map.flyTo({ ...WORLD_VIEW, speed: 0.8 });
      }
    };

    // --- interactions -------------------------------------------------------
    map.on("click", (e) => {
      const hit = map.queryRenderedFeatures(e.point, { layers: ["photo-pins"] });
      const id = hit[0]?.properties?.id;
      if (id) {
        openPhoto(String(id));
      } else {
        const np = nearestPhoto(e.lngLat.lat, e.lngLat.lng, photos);
        if (np) openPhoto(np.id);
      }
    });
    map.on("mouseenter", "photo-pins", () => {
      map.getCanvas().style.cursor = "pointer";
    });
    map.on("mouseleave", "photo-pins", () => {
      map.getCanvas().style.cursor = "";
    });

    map.on("load", addOverlays);
    map.on("styledata", addOverlays); // re-add after a style swap
    map.on("error", (ev) => {
      const url = (ev as { error?: { url?: string } })?.error?.url ?? "";
      if (!fellBack && url.includes("openfreemap")) {
        fellBack = true;
        map.setStyle(FALLBACK_STYLE);
      }
    });

    const unsubSel = selectedPhotoId.subscribe(syncState);
    const unsubMode = mapMode.subscribe(syncState);

    return () => {
      unsubSel();
      unsubMode();
      popup?.remove();
      map.remove();
    };
  }, []);

  return <div ref={containerRef} className="travel-map" />;
}
