"use client";

const ITEMS = [
  "Weekly U.S.-bound air freight",
  "Phytosanitary certificate included",
  "MOQ from 20 plants per variety",
  "140+ varieties in production",
  "38 U.S. states served",
  "98.6% arrival viability",
];

export function Ticker() {
  // Duplicate the track twice for a seamless loop
  const track = [...ITEMS, ...ITEMS];

  return (
    <div className="ns-ticker" aria-label="Wholesale assurances">
      <div className="ns-ticker-track">
        {track.map((item, i) => (
          <span key={i} className="ns-ticker-item">
            {item}
            <span className="dot" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
