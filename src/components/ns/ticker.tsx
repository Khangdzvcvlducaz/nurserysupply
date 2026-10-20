"use client";

const ITEMS = [
  "Vetted Manufacturers",
  "QC Before Every Shipment",
  "Refund if Not as Described",
  "Fast WhatsApp Support",
];

export function Ticker() {
  // Duplicate the track twice for a seamless loop
  const track = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="ns-ticker" aria-label="Sourcing assurances">
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
