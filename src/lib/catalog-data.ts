// =================================================================
// Nursery Supply — catalog data + product metadata
// Single source of truth for products, genera, status labels, and
// helpers used by the Product Detail modal and Lightbox.
// All image URLs are REAL z-cdn.chatglm.cn photos (never picsum).
// =================================================================

export type ProductStatus = "in-stock" | "limited" | "pre-order";

export type Product = {
  id: string;
  name: string;
  variety: string;
  cat: string; // genus slug
  image: string; // real CDN url
  size: string;
  moq: number; // minimum order qty (number)
  price: string; // display string like "$14.50"
  desc: string;
  status: ProductStatus;
  spec?: string;
  featured?: boolean;
  isNew?: boolean;
};

export const CAT_NAMES: Record<string, string> = {
  monstera: "Variegated Monstera",
  philodendron: "Philodendron",
  alocasia: "Alocasia",
  anthurium: "Anthurium",
  syngonium: "Syngonium & Scindapsus",
  caladium: "Caladium",
  aglaonema: "Aglaonema",
  other: "Other Rare Foliage",
};

export const STATUS: Record<
  ProductStatus,
  { label: string; cls: string }
> = {
  "in-stock": { label: "In stock", cls: "in" },
  limited: { label: "Limited stock", cls: "lim" },
  "pre-order": { label: "Pre-order", cls: "pre" },
};

// Real z-cdn images already used across the site (genus category images).
const GENUS_IMG: Record<string, string> = {
  monstera: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/57e903ca3e0f.jpg",
  philodendron: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e44e9e3db623.jpg",
  alocasia: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ca27bab679be.jpg",
  anthurium: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/0ce104af6ef0.jpg",
  syngonium: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/3c1275262dc1.jpg",
  caladium: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d2a8e99635b9.jpg",
  aglaonema: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a9dc6c937398.jpg",
  other: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e9a33928bd82.jpg",
};

// 16 default products (from reference DEFAULT_PRODUCTS) with REAL CDN images
// mapped per product. The 4 hot-sellers use their distinct photos; the rest
// use a representative real genus/category image so every thumbnail is a
// real photo.
export const PRODUCTS: Product[] = [
  {
    id: "m-cream",
    name: "Monstera deliciosa 'Cream Brulee'",
    variety: "Cream & caramel marbling",
    cat: "monstera",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ca601fef3e71.jpg",
    size: "3–5 cm",
    moq: 20,
    price: "$14.50",
    status: "limited",
    featured: true,
    isNew: true,
    desc: "A rare variegated Monstera with cream and caramel-yellow marbling, suitable for premium indoor plant retailers and collectors.",
  },
  {
    id: "m-albo",
    name: "Monstera deliciosa 'Albo Variegata'",
    variety: "Sectoral white variegation",
    cat: "monstera",
    image: GENUS_IMG.monstera,
    size: "5–8 cm",
    moq: 20,
    price: "$22.00",
    status: "pre-order",
    desc: "The benchmark white variegated Monstera — lab-indexed mother stock keeps sectoring consistent across the whole batch.",
  },
  {
    id: "m-thai",
    name: "Monstera deliciosa 'Thai Constellation'",
    variety: "Cream speckle & splash",
    cat: "monstera",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/750e39fd8e20.jpg",
    size: "5–7 cm",
    moq: 50,
    price: "$9.80",
    status: "in-stock",
    featured: true,
    desc: "Stable speckled variegation from certified culture — the most reliable volume seller for U.S. retail shelves.",
  },
  {
    id: "m-ada",
    name: "Monstera adansonii 'Variegated'",
    variety: "Mint-cream fenestrated form",
    cat: "monstera",
    image: GENUS_IMG.monstera,
    size: "4–6 cm",
    moq: 20,
    price: "$12.50",
    status: "in-stock",
    isNew: true,
    desc: "Fast-growing trailing variety with mint variegation — strong retail margin and quick restock cycles.",
  },
  {
    id: "p-wizard",
    name: "Philodendron 'White Wizard'",
    variety: "Pure white sectoral blocks",
    cat: "philodendron",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b523973032ef.jpg",
    size: "5–7 cm",
    moq: 25,
    price: "$11.00",
    status: "in-stock",
    featured: true,
    desc: "Green-and-white variegation on self-heading stock — ships well and acclimatizes fast for online sellers.",
  },
  {
    id: "p-pink",
    name: "Philodendron 'Pink Princess'",
    variety: "Pink splash on near-black foliage",
    cat: "philodendron",
    image: GENUS_IMG.philodendron,
    size: "4–6 cm",
    moq: 25,
    price: "$8.60",
    status: "in-stock",
    featured: true,
    desc: "Dark leaves with pink variegation — evergreen U.S. demand backed by dependable tissue-culture supply.",
  },
  {
    id: "p-glor",
    name: "Philodendron gloriosum 'Dark Form'",
    variety: "Velvet leaves, pale veins",
    cat: "philodendron",
    image: GENUS_IMG.philodendron,
    size: "2-leaf plantlet",
    moq: 20,
    price: "$13.00",
    status: "limited",
    desc: "Creeping velvet-leaf collector favorite — sourced from a single indexed clone for perfectly uniform batches.",
  },
  {
    id: "a-frydek",
    name: "Alocasia micholitziana 'Frydek Variegata'",
    variety: "White blotch on velvet green",
    cat: "alocasia",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/1544695fef31.jpg",
    size: "3–5 cm",
    moq: 25,
    price: "$16.00",
    status: "limited",
    featured: true,
    isNew: true,
    desc: "High-velocity variegated Alocasia — pre-hardened in community trays to handle shipping stress.",
  },
  {
    id: "a-jack",
    name: "Alocasia 'Jacklyn'",
    variety: "Lacy reticulate foliage",
    cat: "alocasia",
    image: GENUS_IMG.alocasia,
    size: "4–6 cm",
    moq: 25,
    price: "$10.50",
    status: "in-stock",
    desc: "The breakout collector Alocasia of recent seasons — true-to-type from tissue culture, with zero seedling variation.",
  },
  {
    id: "an-crys",
    name: "Anthurium crystallinum 'Silver Blush'",
    variety: "Silver veining on blush juveniles",
    cat: "anthurium",
    image: GENUS_IMG.anthurium,
    size: "3–4 cm",
    moq: 20,
    price: "$15.00",
    status: "pre-order",
    featured: true,
    desc: "Premium veining and blush tone on every plantlet — a reliable anchor for high-end collector listings.",
  },
  {
    id: "an-waro",
    name: "Anthurium warocqueanum",
    variety: "Queen Anthurium, velvet strap leaves",
    cat: "anthurium",
    image: GENUS_IMG.anthurium,
    size: "3–5 cm",
    moq: 15,
    price: "$18.00",
    status: "limited",
    desc: "The velvet queen of aroids — grown under strict humidity protocol and packed in moisture-controlled boxes.",
  },
  {
    id: "s-albo",
    name: "Syngonium podophyllum 'Albo Variegata'",
    variety: "White splash on arrow foliage",
    cat: "syngonium",
    image: GENUS_IMG.syngonium,
    size: "4–6 cm",
    moq: 50,
    price: "$6.20",
    status: "in-stock",
    featured: true,
    desc: "An affordable entry point into variegated plants — a high-turnover staple with excellent survival rates.",
  },
  {
    id: "sc-exo",
    name: "Scindapsus pictus 'Exotica'",
    variety: "Silver-splashed satin leaves",
    cat: "syngonium",
    image: GENUS_IMG.syngonium,
    size: "4–6 cm",
    moq: 50,
    price: "$5.40",
    status: "in-stock",
    desc: "Slow-but-steady seller with forgiving care needs — ideal for mixed pallets and starter collections.",
  },
  {
    id: "c-white",
    name: "Caladium 'White Christmas'",
    variety: "White leaf, fine green veins",
    cat: "caladium",
    image: GENUS_IMG.caladium,
    size: "5–8 cm / No.1 tuber",
    moq: 100,
    price: "$2.90",
    status: "pre-order",
    desc: "Seasonal volume item for spring — book early. Dormancy-managed tubers and plantlets available by window.",
  },
  {
    id: "ag-tri",
    name: "Aglaonema pictum 'Tricolor'",
    variety: "Camouflage green-cream pattern",
    cat: "aglaonema",
    image: GENUS_IMG.aglaonema,
    size: "5–8 cm",
    moq: 30,
    price: "$12.00",
    status: "limited",
    featured: true,
    isNew: true,
    desc: "Military-camo foliage with no two leaves alike — a conversation piece for shop displays and social content.",
  },
  {
    id: "h-krim",
    name: "Hoya carnosa 'Krimson Queen'",
    variety: "Cream-margined wax foliage",
    cat: "other",
    image: GENUS_IMG.other,
    size: "5–8 cm",
    moq: 50,
    price: "$4.80",
    status: "in-stock",
    desc: "A forgiving hanging staple with tricolor foliage — rounds out mixed pallets with a proven seller.",
  },
];

// Verbatim from reference GENUS_INFO block.
export const GENUS_INFO: Record<
  string,
  { family: string; growth: string; climate: string; foliage: string }
> = {
  monstera: {
    family: "Araceae (Monstera)",
    growth: "Climbing vining aroid, grows upright with moss pole support",
    climate: "Warm tropical, high humidity, 18 to 30 degrees Celsius",
    foliage: "Large glossy split leaves with signature variegation",
  },
  philodendron: {
    family: "Araceae (Philodendron)",
    growth: "Self-heading or climbing aroid depending on cultivar",
    climate: "Warm tropical, high humidity, 18 to 30 degrees Celsius",
    foliage: "Lush tropical foliage with cultivar-specific coloration",
  },
  alocasia: {
    family: "Araceae (Alocasia)",
    growth: "Upright tuberous aroid with architectural leaf stance",
    climate: "Warm tropical, high humidity, 20 to 32 degrees Celsius",
    foliage: "Arrow-shaped leaves with prominent venation",
  },
  anthurium: {
    family: "Araceae (Anthurium)",
    growth: "Terrestrial epiphytic aroid, slow clumping habit",
    climate: "Warm tropical, very high humidity, 20 to 30 degrees Celsius",
    foliage: "Velvet strap leaves with silvery venation",
  },
  syngonium: {
    family: "Araceae (Syngonium / Scindapsus)",
    growth: "Compact vining aroid, trails or climbs",
    climate:
      "Warm tropical, moderate to high humidity, 18 to 30 degrees Celsius",
    foliage: "Arrow-shaped leaves with variegated splash",
  },
  caladium: {
    family: "Araceae (Caladium)",
    growth: "Tuberous seasonal foliage, upright habit",
    climate: "Warm tropical, high humidity, 21 to 32 degrees Celsius",
    foliage: "Heart-shaped leaves with contrasting vein patterns",
  },
  aglaonema: {
    family: "Araceae (Aglaonema)",
    growth: "Compact bushy habit, excellent low-light tolerance",
    climate: "Warm tropical, moderate humidity, 18 to 30 degrees Celsius",
    foliage: "Patterned lance leaves in bold color combinations",
  },
  other: {
    family: "Varies by genus",
    growth: "Per genus — see lot details",
    climate:
      "Warm tropical, moderate to high humidity, 18 to 30 degrees Celsius",
    foliage: "Per cultivar — see photos of the current lot",
  },
};

// All the real z-cdn image URLs we know about — used by galleryFor() to
// build a 6-photo thumbnail gallery of REAL photos (no picsum).
const ALL_REAL_IMAGES: string[] = [
  // 4 hot-seller hero shots
  "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ca601fef3e71.jpg",
  "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/750e39fd8e20.jpg",
  "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b523973032ef.jpg",
  "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/1544695fef31.jpg",
  // 8 genus category images
  ...Object.values(GENUS_IMG),
];

/** Return all products in a given genus (in declared order). */
export function productsByGenus(slug: string): Product[] {
  return PRODUCTS.filter((p) => p.cat === slug);
}

/**
 * Build a 6-image gallery (de-duped) of REAL CDN photos for a product.
 * Slot 0 is always the product's own image. Slots 1..5 are drawn from
 * other same-genus product images, then the genus category image, then
 * other real images until we have 6 unique URLs.
 */
export function galleryFor(product: Product): string[] {
  const out: string[] = [product.image];
  const seen = new Set<string>([product.image]);

  // (a) other same-genus product images
  for (const p of productsByGenus(product.cat)) {
    if (p.id === product.id) continue;
    if (!seen.has(p.image)) {
      seen.add(p.image);
      out.push(p.image);
      if (out.length >= 6) break;
    }
  }
  // (b) the genus category image
  const genus = GENUS_IMG[product.cat];
  if (genus && !seen.has(genus)) {
    seen.add(genus);
    out.push(genus);
  }
  // (c) any other real image until we reach 6
  for (const url of ALL_REAL_IMAGES) {
    if (out.length >= 6) break;
    if (!seen.has(url)) {
      seen.add(url);
      out.push(url);
    }
  }
  return out.slice(0, 6);
}

/** Lookup product by id (returns undefined if not found). */
export function findProduct(id: string | null): Product | undefined {
  if (!id) return undefined;
  return PRODUCTS.find((p) => p.id === id);
}

/** First product id in a genus (used by shop-by-genus cards). */
export function firstProductIdWithGenus(slug: string): string {
  const list = productsByGenus(slug);
  if (list.length > 0) return list[0].id;
  // Fallback to the monstera cream product (anchor of the catalog).
  return "m-cream";
}
