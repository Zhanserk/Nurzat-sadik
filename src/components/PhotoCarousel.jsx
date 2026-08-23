// src/components/PhotoCarousel.jsx
import { useState, useRef } from "react";
import "./PhotoCarousel.css";

export default function PhotoCarousel({ photos, title }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);

  const total = photos.length;

  const go = (dir) => {
    setIndex((prev) => (prev + dir + total) % total);
  };

  const goTo = (i) => setIndex(i);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const onTouchMove = (e) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const onTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > 50) {
      if (touchDeltaX.current < 0) go(1);
      else go(-1);
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  if (!total) return null;

  return (
    <div className="pcarousel">
      {title && <h3 className="pcarousel-title">{title}</h3>}

      <div
        className="pcarousel-viewport"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="pcarousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {photos.map((src, i) => (
            <div className="pcarousel-slide" key={i}>
              <img src={src} alt={`${title || "Фото"} ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        {total > 1 && (
          <>
            <button
              className="pcarousel-arrow pcarousel-arrow-left"
              onClick={() => go(-1)}
              aria-label="Алдыңғы сурет"
              type="button"
            >
              ‹
            </button>
            <button
              className="pcarousel-arrow pcarousel-arrow-right"
              onClick={() => go(1)}
              aria-label="Келесі сурет"
              type="button"
            >
              ›
            </button>
            <span className="pcarousel-counter">{index + 1} / {total}</span>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="pcarousel-thumbs">
          {photos.map((src, i) => (
            <button
              key={i}
              className={`pcarousel-thumb ${i === index ? "active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`${i + 1}-суретке өту`}
              type="button"
            >
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}