"use client";

import { ArrowRight } from "lucide-react";

type Status = "in-stock" | "limited" | "pre-order";

type Product = {
  id: string;
  name: string;
  variety: string;
  image: string;
  price: string;
  moq: string;
  desc: string;
  status: Status;
};

const STATUS_LABEL: Record<Status, string> = {
  "in-stock": "In stock",
  limited: "Limited stock",
  "pre-order": "Pre-order",
};

const PRODUCTS: Product[] = [
  {
    id: "m-cream",
    name: "Monstera deliciosa 'Cream Brulee'",
    variety: "Cream & caramel marbling",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ca601fef3e71.jpg",
    price: "$14.50",
    moq: "MOQ 20",
    desc: "A rare variegated Monstera with cream and caramel-yellow marbling, suitable for premium indoor plant retailers and collectors.",
    status: "limited",
  },
  {
    id: "m-thai",
    name: "Monstera 'Thai Constellation'",
    variety: "Cream speckle & splash",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/750e39fd8e20.jpg",
    price: "$9.80",
    moq: "MOQ 50",
    desc: "Stable speckled variegation from certified culture — the most reliable volume seller for U.S. retail shelves.",
    status: "in-stock",
  },
  {
    id: "p-wizard",
    name: "Philodendron 'White Wizard'",
    variety: "Pure white sectoral blocks",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b523973032ef.jpg",
    price: "$11.00",
    moq: "MOQ 25",
    desc: "Green-and-white variegation on self-heading stock — ships well and acclimatizes fast for online sellers.",
    status: "in-stock",
  },
  {
    id: "a-frydek",
    name: "Alocasia 'Frydek Variegata'",
    variety: "White blotch on velvet green",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/1544695fef31.jpg",
    price: "$16.00",
    moq: "MOQ 25",
    desc: "High-velocity variegated Alocasia — pre-hardened in community trays to handle shipping stress.",
    status: "limited",
  },
];

export function HotProducts() {
  return (
    <section className="ns-sec-tight" id="hot">
      <div className="ns-wrap">
        <div className="ns-sec-head ns-reveal">
          <div>
            <span className="ns-eyebrow caramel">Hot Sellers</span>
            <h2 className="ns-h2">This season&apos;s best movers</h2>
            <p className="ns-lead">
              Updated weekly as lab batches harden off. Availability changes
              fast — quotes lock allocation.
            </p>
          </div>
          <a href="#catalog" className="ns-btn ns-btn-outline">
            All varieties <ArrowRight size={16} />
          </a>
        </div>

        <div className="ns-p-grid">
          {PRODUCTS.map((p) => {
            const statusCls =
              p.status === "in-stock"
                ? ""
                : p.status === "limited"
                ? "lim"
                : "pre";
            return (
              <article key={p.id} className="ns-prod-card ns-reveal">
                <div className="ns-prod-media">
                  <img
                    src={p.image}
                    alt={`${p.name} — ${p.variety}`}
                    width={600}
                    height={600}
                    loading="lazy"
                  />
                  <span className={`ns-status-pill ${statusCls}`}>
                    {STATUS_LABEL[p.status]}
                  </span>
                </div>
                <div className="ns-prod-body">
                  <span className="ns-prod-variety">{p.variety}</span>
                  <span className="ns-prod-name">{p.name}</span>
                  <p className="ns-prod-desc">{p.desc}</p>
                  <div className="ns-prod-foot">
                    <span className="ns-prod-price">
                      {p.price}
                      <small> / plantlet</small>
                    </span>
                    <span className="ns-prod-moq">{p.moq}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
