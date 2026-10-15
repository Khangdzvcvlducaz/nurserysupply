"use client";

import { ArrowRight } from "lucide-react";
import { useProductStore } from "@/hooks/use-product-store";
import { PRODUCTS, STATUS, type Product } from "@/lib/catalog-data";

export function HotProducts() {
  const open = useProductStore((s) => s.open);
  // Show only the 4 featured products that are marked as hot-sellers.
  const HOT = PRODUCTS.filter((p) => p.featured).slice(0, 4);

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
          {HOT.map((p) => (
            <ProductCard key={p.id} product={p} onOpen={() => open(p.id)} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Clickable product card. Whole card is interactive (cursor pointer,
// role=button, Enter / Space triggers open). Hover lift effect preserved.
export function ProductCard({
  product,
  onOpen,
}: {
  product: Product;
  onOpen: () => void;
}) {
  const st = STATUS[product.status] ?? STATUS["in-stock"];
  const statusCls =
    st.cls === "in" ? "" : st.cls === "lim" ? "lim" : "pre";

  return (
    <article
      className="ns-prod-card ns-reveal ns-prod-card-clickable"
      role="button"
      tabIndex={0}
      aria-label={`View details of ${product.name}`}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
    >
      <div className="ns-prod-media">
        <img
          src={product.image}
          alt={`${product.name} — ${product.variety}`}
          width={600}
          height={600}
          loading="lazy"
        />
        <span className={`ns-status-pill ${statusCls}`}>{st.label}</span>
        <span className="ns-prod-view-hint" aria-hidden="true">
          View details <ArrowRight size={13} />
        </span>
      </div>
      <div className="ns-prod-body">
        <span className="ns-prod-variety">{product.variety}</span>
        <span className="ns-prod-name">{product.name}</span>
        <p className="ns-prod-desc">{product.desc}</p>
        <div className="ns-prod-foot">
          <span className="ns-prod-price">
            {product.price}
            <small> / plantlet</small>
          </span>
          <span className="ns-prod-moq">MOQ {product.moq}</span>
        </div>
      </div>
    </article>
  );
}
