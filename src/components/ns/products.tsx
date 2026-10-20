"use client";

import { ArrowRight, Leaf, MessageCircle, Camera } from "lucide-react";

type Cat = {
  slug: string;
  name: string;
  image: string;
  desc: string;
};

const CATS: Cat[] = [
  {
    slug: "pots",
    name: "Nursery Pots & Planters",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/8154c61356b0.jpg",
    desc:
      "Plastic & terracotta pots, decorative planters, hanging baskets and saucers — across many sizes and finishes.",
  },
  {
    slug: "lights",
    name: "Grow Lights & Greenhouse Equipment",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ce3cc8689cc2.jpg",
    desc:
      "LED grow bars and panels, timers, propagation domes, shelving and benching for indoor and greenhouse setups.",
  },
  {
    slug: "tools",
    name: "Garden Tools",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/677c5c4b23dc.jpg",
    desc:
      "Pruners, shears, hand trowels, rakes, sprayers and ergonomic long-handle tools for retail and pro use.",
  },
  {
    slug: "irrig",
    name: "Irrigation & Watering",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/966ff55771b5.jpg",
    desc:
      "Drip kits, connectors, drippers, sprayers, hoses, timers and fittings — assemble any watering system.",
  },
  {
    slug: "media",
    name: "Potting Media & Fertilizer",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/8e24371967e4.jpg",
    desc:
      "Coco coir, perlite, pumice, orchid bark, slow-release and water-soluble fertilizers in bulk packaging.",
  },
  {
    slug: "supports",
    name: "Plant Supports & Trellises",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/2500cebb82a8.jpg",
    desc:
      "Stakes, moss poles, trellises, tomato cages and clips — bamboo, metal, and coated wire options.",
  },
  {
    slug: "props",
    name: "Propagation Supplies",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/62e7d4f28761.jpg",
    desc:
      "Seed trays, plug trays, humidity domes, propagation cubes and heat mats for nurseries and tissue culture.",
  },
  {
    slug: "labels",
    name: "Labels, Tags & Packaging",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/0eb7fa6f0dca.jpg",
    desc:
      "Plant labels, care tags, sleeves, retail-ready cartons and custom-branded packaging for your shelves.",
  },
];

function waLinkFor(name: string): string {
  const msg = `Hi Nursery Supply! I'd like a quote for ${name}. Quantity: ___`;
  return `https://wa.me/84981848702?text=${encodeURIComponent(msg)}`;
}

export function Products() {
  return (
    <section className="ns-sec ns-catalog" id="products">
      <div className="ns-wrap">
        <div className="ns-sec-head ns-reveal">
          <div>
            <span className="ns-eyebrow">Products</span>
            <h2 className="ns-h2">What we source</h2>
            <p className="ns-lead">
              A short list of what buyers ask us to source most often. Don&apos;t
              see your product? Ask us — if a vetted factory makes it, we can
              source it.
            </p>
          </div>
          <a
            href="#quote"
            className="ns-btn ns-btn-outline"
          >
            Request a quote <ArrowRight size={16} />
          </a>
        </div>

        <div className="ns-cat-grid ns-products-grid">
          {CATS.map((c, i) => (
            <article key={c.slug} className="ns-cat-card std" aria-label={c.name}>
              <div className="ns-cat-media">
                <img
                  src={c.image}
                  alt={`${c.name} — sourced from vetted manufacturers`}
                  width={600}
                  height={600}
                  loading="lazy"
                />
              </div>
              <span className="ns-cat-shade" aria-hidden="true" />
              <span className="ns-cat-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="ns-cat-leaf" aria-hidden="true">
                <Leaf size={15} strokeWidth={1.8} />
              </span>
              <span className="ns-photo-badge">
                <Camera size={11} /> Needs your real photo
              </span>

              <div className="ns-cat-panel">
                <h3>{c.name}</h3>
                <div className="ns-cat-meta">
                  <span>Sourced to order</span>
                  <i className="ns-dot" />
                  <span>MOQ varies</span>
                </div>
                <div className="ns-cat-reveal">
                  <p>{c.desc}</p>
                </div>
                <a
                  className="ns-ask"
                  href={waLinkFor(c.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ask price for ${c.name} on WhatsApp`}
                >
                  <MessageCircle size={14} /> Ask Price
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
