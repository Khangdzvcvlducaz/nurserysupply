"use client";

import { ArrowRight } from "lucide-react";
import { useProductStore } from "@/hooks/use-product-store";
import { firstProductIdWithGenus } from "@/lib/catalog-data";

type Cat = {
  slug: string;
  name: string;
  layout: "big" | "wide" | "std";
  image: string;
  size: string;
  moq: string;
  desc: string;
};

const CATS: Cat[] = [
  {
    slug: "monstera",
    name: "Variegated Monstera",
    layout: "big",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/57e903ca3e0f.jpg",
    size: "3–8 cm",
    moq: "20–50",
    desc: "Albo, Thai Constellation, Cream Brulee, mint and aurea lines — stable variegation from indexed cultures, the anchor of any rare-plant program.",
  },
  {
    slug: "philodendron",
    name: "Philodendron",
    layout: "std",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e44e9e3db623.jpg",
    size: "4–7 cm",
    moq: "20–25",
    desc: "Pink Princess, White Wizard, gloriosum forms and collector hybrids with dependable variegation.",
  },
  {
    slug: "alocasia",
    name: "Alocasia",
    layout: "std",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ca27bab679be.jpg",
    size: "3–6 cm",
    moq: "25–30",
    desc: "Frydek Variegata, Jacklyn, cuprea and dragon-scale types from vetted laboratories.",
  },
  {
    slug: "anthurium",
    name: "Anthurium",
    layout: "std",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/0ce104af6ef0.jpg",
    size: "3–5 cm",
    moq: "15–20",
    desc: "Crystallinum silver forms, warocqueanum and papillilaminum crosses for premium shelves.",
  },
  {
    slug: "syngonium",
    name: "Syngonium & Scindapsus",
    layout: "std",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/3c1275262dc1.jpg",
    size: "4–6 cm",
    moq: "50",
    desc: "Albo and pink Splash Syngonium plus satin Scindapsus — fast-turn retail staples.",
  },
  {
    slug: "caladium",
    name: "Caladium",
    layout: "std",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d2a8e99635b9.jpg",
    size: "5–8 cm",
    moq: "100",
    desc: "Fancy- and strap-leaf cultivars, dormancy-managed to hit U.S. spring windows.",
  },
  {
    slug: "aglaonema",
    name: "Aglaonema",
    layout: "std",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a9dc6c937398.jpg",
    size: "5–8 cm",
    moq: "30–50",
    desc: "Pictum Tricolor, Siam lines and rare Chinese breeding stock — tough, colorful, easy retail.",
  },
  {
    slug: "other",
    name: "Other Rare Foliage",
    layout: "wide",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e9a33928bd82.jpg",
    size: "3–8 cm",
    moq: "Varies",
    desc: "Hoya, Begonia, Amydrium, Rhaphidophora and limited experimental lots — ask what's coming out of the lab this month.",
  },
];

export function ShopByGenus() {
  const open = useProductStore((s) => s.open);

  const onClick = (slug: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    open(firstProductIdWithGenus(slug));
  };
  const onKeyDown = (slug: string) => (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      open(firstProductIdWithGenus(slug));
    }
  };

  return (
    <section className="ns-sec" id="catalog">
      <div className="ns-wrap">
        <div className="ns-sec-head ns-reveal">
          <div>
            <span className="ns-eyebrow">Product Categories</span>
            <h2 className="ns-h2">Shop by genus</h2>
            <p className="ns-lead">
              Eight curated families of tissue-culture foliage, sized and priced
              for U.S. wholesale programs.
            </p>
          </div>
          <a href="#catalog" className="ns-btn ns-btn-outline">
            Full catalog <ArrowRight size={16} />
          </a>
        </div>

        <div className="ns-cat-grid">
          {CATS.map((c) => (
            <a
              key={c.slug}
              href="#catalog"
              className={`ns-cat-card ${c.layout}`}
              aria-label={`View ${c.name} varieties`}
              onClick={onClick(c.slug)}
              onKeyDown={onKeyDown(c.slug)}
            >
              <div className="ns-cat-media">
                <img
                  src={c.image}
                  alt={`${c.name} — tissue culture plantlets`}
                  width={c.layout === "big" ? 900 : 600}
                  height={c.layout === "big" ? 900 : 450}
                  loading="lazy"
                />
                <span className="ns-cat-overlay" aria-hidden="true" />
              </div>
              <div className="ns-cat-body">
                <h3>{c.name}</h3>
                <div className="ns-cat-meta">
                  <span>
                    Size: <b>{c.size}</b>
                  </span>
                  <span>
                    MOQ: <b>{c.moq}</b>
                  </span>
                </div>
                <p className="ns-cat-desc">{c.desc}</p>
                <span className="ns-cat-link">
                  View Products <ArrowRight size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
