/**
 * PhotoGallery — thumbnail grid + lightbox. Selecting a thumbnail drives the
 * shared store (openPhoto), which the TravelMap reacts to. The map clicking a
 * pin / nearest-photo flows back here via the same store, opening the lightbox.
 */

import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { X } from "lucide-react";
import { photos } from "@/data/photos";
import { selectedPhotoId, openPhoto, clearPhoto } from "@/lib/stores";
import { formatFullDate } from "@/lib/format";

export default function PhotoGallery() {
  const selected = useStore(selectedPhotoId);
  const current = photos.find((p) => p.id === selected) ?? null;

  // Escape closes the lightbox.
  useEffect(() => {
    if (!current) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") clearPhoto();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current]);

  return (
    <>
      <ul className="gallery">
        {photos.map((p) => (
          <li key={p.id}>
            <button
              type="button"
              className={`thumb glass${p.id === selected ? " is-active" : ""}`}
              onClick={() => openPhoto(p.id)}
              aria-pressed={p.id === selected}
            >
              <img src={p.src} alt={p.caption} loading="lazy" />
              <span className="thumb-meta">
                <span className="thumb-place">{p.place}</span>
                <span className="thumb-country">{p.countryName}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${current.place}, ${current.countryName}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) clearPhoto();
          }}
        >
          <div className="lightbox-panel glass glass-strong">
            <button
              type="button"
              className="lightbox-close"
              onClick={clearPhoto}
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <img src={current.src} alt={current.caption} />
            <div className="lightbox-info">
              <h3>{current.place}</h3>
              <p className="lightbox-country">
                {current.countryName} · {formatFullDate(current.date)}
              </p>
              <p className="lightbox-caption">{current.caption}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
