// =============================================================
// Catalog data — single source of truth for plant categories + products
// Recovered from original reference (Task 1 worklog).
// All image URLs are real z-cdn.chatglm.cn OSS-hosted photos.
// =============================================================

export type PlantCategory = {
  slug: string;
  name: string;
  image: string;
  size: string;
  moq: string;
  desc: string;
};

export type PlantProduct = {
  id: string;
  name: string;
  variety: string;
  cat: string;
  size: string;
  moq: string;
  price: string;
  status: "in-stock" | "limited" | "preorder";
  isNew?: boolean;
  isHot?: boolean;
  desc: string;
  image: string;
};

const Z = "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/";

// 8 categories — exact same data as original reference (Task 1 worklog)
export const CATS: PlantCategory[] = [
  {
    slug: "monstera",
    name: "Monstera",
    image: Z + "57e903ca3e0f.jpg",
    size: "3–8 cm",
    moq: "20–50",
    desc: "Albo, Thai Constellation, Cream Brulee, mint and aurea lines — stable variegation from indexed cultures, the anchor of any rare-plant program.",
  },
  {
    slug: "philodendron",
    name: "Philodendron",
    image: Z + "e44e9e3db623.jpg",
    size: "4–7 cm",
    moq: "20–25",
    desc: "Pink Princess, White Wizard, gloriosum forms and collector hybrids with dependable variegation.",
  },
  {
    slug: "alocasia",
    name: "Alocasia",
    image: Z + "ca27bab679be.jpg",
    size: "3–6 cm",
    moq: "25–30",
    desc: "Frydek Variegata, Jacklyn, cuprea and dragon-scale types from vetted laboratories.",
  },
  {
    slug: "anthurium",
    name: "Anthurium",
    image: Z + "0ce104af6ef0.jpg",
    size: "3–5 cm",
    moq: "15–20",
    desc: "Crystallinum silver forms, warocqueanum and papillilaminum crosses for premium shelves.",
  },
  {
    slug: "syngonium",
    name: "Syngonium",
    image: Z + "3c1275262dc1.jpg",
    size: "4–6 cm",
    moq: "50",
    desc: "Albo and pink Splash Syngonium plus satin Scindapsus — fast-turn retail staples.",
  },
  {
    slug: "caladium",
    name: "Caladium",
    image: Z + "d2a8e99635b9.jpg",
    size: "5–8 cm",
    moq: "100",
    desc: "Fancy- and strap-leaf cultivars, dormancy-managed to hit U.S. spring windows.",
  },
  {
    slug: "aglaonema",
    name: "Aglaonema",
    image: Z + "a9dc6c937398.jpg",
    size: "5–8 cm",
    moq: "30–50",
    desc: "Pictum Tricolor, Siam lines and rare Chinese breeding stock — tough, colorful, easy retail.",
  },
  {
    slug: "other",
    name: "Other Rare Foliage",
    image: Z + "e9a33928bd82.jpg",
    size: "3–8 cm",
    moq: "Varies",
    desc: "Hoya, Begonia, Amydrium, Rhaphidophora and limited experimental lots — ask what's coming out of the lab this month.",
  },
];

// 16 products — exact same data as original reference (Task 1 worklog)
export const PRODUCTS: PlantProduct[] = [
  {
    id: "m-cream",
    name: "Monstera deliciosa 'Cream Brulee'",
    variety: "Cream Brulee Variegata",
    cat: "monstera",
    size: "Plantlet 6–8 cm",
    moq: "20 plantlets / variety",
    price: "$24.00 / plantlet",
    status: "limited",
    isHot: true,
    desc: "Ultra-rare cream-yellow variegation on stable indexed tissue culture. Limited monthly batches.",
    image: Z + "ca601fef3e71.jpg",
  },
  {
    id: "m-albo",
    name: "Monstera deliciosa 'Albo Variegata'",
    variety: "Albo Borsigiana",
    cat: "monstera",
    size: "Plantlet 5–7 cm",
    moq: "20 plantlets / variety",
    price: "$18.50 / plantlet",
    status: "in-stock",
    isHot: true,
    desc: "Classic pure-white sectoral variegation, indexed mother cultures for predictable chimera ratio.",
    image: Z + "6a88815a0fad.jpg",
  },
  {
    id: "m-thai",
    name: "Monstera deliciosa 'Thai Constellation'",
    variety: "Thai Constellation",
    cat: "monstera",
    size: "Plantlet 6–9 cm",
    moq: "20 plantlets / variety",
    price: "$22.00 / plantlet",
    status: "in-stock",
    isHot: true,
    desc: "Stable cream-yellow speckle across every leaf. The most reliable variegated Monstera at scale.",
    image: Z + "750e39fd8e20.jpg",
  },
  {
    id: "m-ada",
    name: "Monstera adansonii 'Variegata'",
    variety: "Adansonii Variegated",
    cat: "monstera",
    size: "Plantlet 4–6 cm",
    moq: "30 plantlets / variety",
    price: "$14.00 / plantlet",
    status: "in-stock",
    isNew: true,
    desc: "Variegated Swiss cheese vine — fast, full, retail-friendly. White sectoral form on indexed cultures.",
    image: Z + "6bc78cea0b8d.png",
  },
  {
    id: "p-wizard",
    name: "Philodendron 'White Wizard'",
    variety: "White Wizard",
    cat: "philodendron",
    size: "Plantlet 5–7 cm",
    moq: "20 plantlets / variety",
    price: "$19.00 / plantlet",
    status: "in-stock",
    isHot: true,
    desc: "Pure-white variegation on a self-heading Philodendron — stable, slow-growing, collector-grade.",
    image: Z + "b523973032ef.jpg",
  },
  {
    id: "p-pink",
    name: "Philodendron 'Pink Princess'",
    variety: "Pink Princess",
    cat: "philodendron",
    size: "Plantlet 5–7 cm",
    moq: "20 plantlets / variety",
    price: "$26.00 / plantlet",
    status: "limited",
    isHot: true,
    desc: "Highly variegated pink + dark chocolate foliage from verified pink-producing mother cultures.",
    image: Z + "c227a5eee176.jpg",
  },
  {
    id: "p-glor",
    name: "Philodendron gloriosum",
    variety: "Gloriosum",
    cat: "philodendron",
    size: "Plantlet 4–6 cm",
    moq: "20 plantlets / variety",
    price: "$16.00 / plantlet",
    status: "in-stock",
    desc: "Velvet-leaf creeper with pronounced white veining. Tissue-culture stable, no variegation loss.",
    image: Z + "b2c0a63c4d08.png",
  },
  {
    id: "a-fry",
    name: "Alocasia 'Frydek Variegata'",
    variety: "Frydek Variegated",
    cat: "alocasia",
    size: "Plantlet 5–7 cm",
    moq: "25 plantlets / variety",
    price: "$21.00 / plantlet",
    status: "limited",
    isHot: true,
    desc: "White variegation on the velvet-green Frydek — collector demand is high, supply is tight.",
    image: Z + "1544695fef31.jpg",
  },
  {
    id: "a-jack",
    name: "Alocasia 'Jacklyn'",
    variety: "Jacklyn",
    cat: "alocasia",
    size: "Plantlet 4–6 cm",
    moq: "25 plantlets / variety",
    price: "$24.00 / plantlet",
    status: "preorder",
    isHot: true,
    desc: "Rare, deeply lobed Indonesian Alocasia — pre-order from upcoming lab batches.",
    image: Z + "e1fd32c47ff6.jpg",
  },
  {
    id: "an-crys",
    name: "Anthurium crystallinum",
    variety: "Crystallinum Silver",
    cat: "anthurium",
    size: "Plantlet 4–6 cm",
    moq: "15 plantlets / variety",
    price: "$28.00 / plantlet",
    status: "limited",
    isHot: true,
    desc: "Giant velvet silver-veined Anthurium — the centerpiece of any premium collector shelf.",
    image: Z + "428e8711c464.jpg",
  },
  {
    id: "an-war",
    name: "Anthurium warocqueanum",
    variety: "Warocqueanum",
    cat: "anthurium",
    size: "Plantlet 4–6 cm",
    moq: "15 plantlets / variety",
    price: "$32.00 / plantlet",
    status: "preorder",
    desc: "Queen Anthurium — long pendulous velvet leaves with silver veining. Pre-order only.",
    image: Z + "1eb52f31f90d.jpg",
  },
  {
    id: "s-alb",
    name: "Syngonium 'Albo Variegatum'",
    variety: "Albo Variegatum",
    cat: "syngonium",
    size: "Plantlet 4–6 cm",
    moq: "50 plantlets / variety",
    price: "$7.50 / plantlet",
    status: "in-stock",
    isNew: true,
    desc: "Fast-turn white variegated Syngonium — perfect retail staple, generous MOQ headroom.",
    image: Z + "7d7cbab82cf8.jpeg",
  },
  {
    id: "s-ex",
    name: "Scindapsus 'Exotica Variegata'",
    variety: "Exotica Variegated",
    cat: "syngonium",
    size: "Plantlet 4–6 cm",
    moq: "50 plantlets / variety",
    price: "$8.00 / plantlet",
    status: "in-stock",
    isNew: true,
    desc: "Silver-leafed Satin Pothos relative — tough, retail-friendly, stable from indexed cultures.",
    image: Z + "b563e876ef56.jpg",
  },
  {
    id: "c-whi",
    name: "Caladium 'White Christmas'",
    variety: "White Christmas",
    cat: "caladium",
    size: "Plantlet 5–8 cm",
    moq: "100 plantlets / variety",
    price: "$4.50 / plantlet",
    status: "in-stock",
    isNew: true,
    desc: "Dormancy-managed fancy-leaf Caladium timed for U.S. spring sales window.",
    image: Z + "75c80edbaa79.jpg",
  },
  {
    id: "ag-tri",
    name: "Aglaonema 'Pictum Tricolor'",
    variety: "Pictum Tricolor",
    cat: "aglaonema",
    size: "Plantlet 5–8 cm",
    moq: "30 plantlets / variety",
    price: "$16.00 / plantlet",
    status: "limited",
    isNew: true,
    desc: "Camouflage-patterned military-leaf Aglaonema — rare Chinese breeding stock, stable from culture.",
    image: Z + "231524670898.jpg",
  },
  {
    id: "h-krim",
    name: "Hoya kerrii 'Krinkle Kurl Variegata'",
    variety: "Krinkle Kurl Variegated",
    cat: "other",
    size: "Plantlet 3–5 cm",
    moq: "30 plantlets / variety",
    price: "$11.00 / plantlet",
    status: "in-stock",
    isNew: true,
    desc: "Variegated sweetheart Hoya — quirky retail favorite, easy care, fast lab turn.",
    image: Z + "4e3486bee175.jpg",
  },
];

// Facility / process images (z-cdn, real)
export const FACILITY_IMAGES = {
  greenhouse: Z + "b1ec3d8a0a49.jpg",
  qcLab: Z + "9cd6bc0d2641.jpg",
  farm: Z + "403bca5cc7bb.jpg",
  pack: Z + "972c93550cf6.jpg",
  roots: Z + "81ef277c529e.jpg",
  shop: Z + "9bacffe6eb50.jpg",
  wholesale: Z + "b6297019e838.jpg",
  heroBg: Z + "b1ec3d8a0a49.jpg",
};

export function statusLabel(s: PlantProduct["status"]): string {
  if (s === "in-stock") return "In stock";
  if (s === "limited") return "Limited";
  return "Pre-order";
}

/** Build the prefilled WhatsApp "Ask Price" URL for a product / category. */
export function waAskPrice(context: string): string {
  const msg = `Hi Nursery Supply! I'd like to ask the price for ${context}. Variety & Quantity: ___`;
  return `https://wa.me/84981848702?text=${encodeURIComponent(msg)}`;
}

export function waGenericQuote(): string {
  const msg = `Hi Nursery Supply! I'd like a wholesale quote for tissue-culture plants. Variety & Quantity: ___`;
  return `https://wa.me/84981848702?text=${encodeURIComponent(msg)}`;
}
