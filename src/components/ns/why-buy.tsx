"use client";

const BENEFITS = [
  {
    num: "01",
    title: "U.S.-focused export experience",
    body: "We ship to the United States every week. Our team knows the paperwork, the plant inspection stations, and the seasonal pitfalls — so your first order feels like your tenth.",
  },
  {
    num: "02",
    title: "Tissue-culture consistency, true to type",
    body: "Every lot comes from indexed mother stock in the lab. The variegation you approve is the variegation that arrives — across hundreds of plantlets, not just the display tray.",
  },
  {
    num: "03",
    title: "Rare and high-demand varieties",
    body: "From albo Monsteras to Frydek Variegata, we track U.S. demand signals and keep the varieties your customers actually ask for in continuous production.",
  },
  {
    num: "04",
    title: "Professional phytosanitary documentation",
    body: "Certificates, invoices, and packing lists prepared correctly the first time, with direct support for your customs broker when questions come up.",
  },
  {
    num: "05",
    title: "Secure moisture-controlled packaging",
    body: "Insulated boxes, sterile hydrated media, barrier film, and winter heat packs — a system designed and tested for 10+ days of international live-plant transit.",
  },
  {
    num: "06",
    title: "Flexible quantities and repeat-order support",
    body: "Start at MOQ and scale by season. Your account manager tracks your sell-through and reserves production slots before you run out.",
  },
];

const STATS = [
  { v: "9+", label: "Years in propagation & export" },
  { v: "140+", label: "Varieties in production" },
  { v: "38", label: "U.S. states served" },
  { v: "98.6%", label: "Arrival viability, trailing 12 mo." },
];

export function WhyBuy() {
  return (
    <section className="ns-sec ns-why" id="why">
      {/* Decorative leaf background */}
      <svg
        className="ns-why-leaf"
        viewBox="0 0 340 420"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M214 246 C186 262 148 258 122 232 C100 210 96 182 110 162 C86 148 78 116 94 94 C88 72 100 50 124 46 C126 24 148 10 172 16 C186 2 214 4 226 20 C250 12 274 24 278 48 C300 58 308 84 296 104 C316 120 318 148 302 164 C316 184 312 212 292 222 C304 244 296 268 272 272 C252 276 230 262 214 246 Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>

      <div className="ns-wrap">
        <div className="ns-why-grid">
          <div className="ns-why-left ns-reveal">
            <span className="ns-eyebrow">Why Buy From Us</span>
            <h2 className="ns-h2" style={{ color: "#f2eee0" }}>
              A supplier that behaves like a partner
            </h2>
            <p>
              We built Nursery Supply around one observation: U.S. buyers
              don&apos;t lose money on rare plants — they lose money on
              surprises. So we removed the surprises.
            </p>
          </div>

          <div>
            <div className="ns-benefits">
              {BENEFITS.map((b, i) => (
                <div
                  key={b.num}
                  className="ns-benefit ns-reveal"
                  style={{ transitionDelay: `${i * 0.05}s` }}
                >
                  <span className="num">{b.num}</span>
                  <div>
                    <h3>{b.title}</h3>
                    <p>{b.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ns-stats ns-reveal">
          {STATS.map((s) => (
            <div className="ns-stat" key={s.label}>
              <b>{s.v}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
