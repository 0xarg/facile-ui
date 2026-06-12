export type ProductCategory = "nfc" | "metal" | "bands" | "bundles";

export type Product = {
  /** Maps to a CATALOG id in checkout-data.ts for the cart. */
  id: string;
  name: string;
  tagline: string;
  price: string;
  features: string[];
  category: ProductCategory;
  image: { src: string; alt: string };
};

export type CategoryTab = {
  id: "all" | ProductCategory;
  label: string;
  thumb: string;
};

export const categoryTabs: CategoryTab[] = [
  { id: "all", label: "All Products", thumb: "/products/tab-all.png" },
  { id: "nfc", label: "NFC Cards", thumb: "/products/tab-nfc.png" },
  { id: "metal", label: "Metal Cards", thumb: "/products/tab-metal.png" },
  { id: "bands", label: "Smart Bands", thumb: "/products/tab-bands.png" },
  { id: "bundles", label: "Bundles", thumb: "/products/tab-all.png" },
];

export const categoryInfo: Record<
  CategoryTab["id"],
  { title: string; description: string }
> = {
  all: {
    title: "All Products",
    description: "The full Facile lineup — cards, accessories, and bundles.",
  },
  nfc: {
    title: "NFC Cards",
    description: "Tap-to-share cards in matte PVC and recycled finishes.",
  },
  metal: {
    title: "Metal Cards",
    description: "Premium engraved metal for a lasting first impression.",
  },
  bands: {
    title: "Smart Bands",
    description: "Wearable NFC for events, gyms, and on-the-go networking.",
  },
  bundles: {
    title: "Bundles",
    description: "Mix finishes and save — built for teams and gifting.",
  },
};

export const products: Product[] = [
  {
    id: "standard",
    name: "Standard Card",
    tagline: "Matte PVC. NFC and QR.",
    price: "From $29",
    category: "nfc",
    features: ["Embedded NFC chip", "Laser QR backup", "Free digital profile"],
    image: { src: "/products/standard-card.png", alt: "Standard matte PVC NFC card" },
  },
  {
    id: "eco",
    name: "Eco Card",
    tagline: "Recycled stock. Same tap.",
    price: "From $34",
    category: "nfc",
    features: ["100% recycled PVC", "Embedded NFC chip", "Soft-touch finish"],
    image: { src: "/products/standard-card.png", alt: "Recycled eco NFC card" },
  },
  {
    id: "metal",
    name: "Metal Card",
    tagline: "Brushed metal. Heavy. Lasting.",
    price: "From $49",
    category: "metal",
    features: ["Brushed aluminum finish", "Laser-engraved QR", "Unlimited profile pages"],
    image: { src: "/products/metal-card.png", alt: "Brushed metal NFC card" },
  },
  {
    id: "black-metal",
    name: "Black Metal Card",
    tagline: "Matte black. Stealth edge.",
    price: "From $59",
    category: "metal",
    features: ["PVD black coating", "Laser-engraved QR", "Weighted & durable"],
    image: { src: "/products/metal-card.png", alt: "Matte black metal NFC card" },
  },
  {
    id: "band",
    name: "Smart Band",
    tagline: "Wearable NFC for events.",
    price: "From $39",
    category: "bands",
    features: ["Silicone comfort fit", "Tap-to-share NFC", "Laser-engraved QR code"],
    image: { src: "/products/band.png", alt: "Black silicone NFC smart band" },
  },
  {
    id: "premium-band",
    name: "Premium Band",
    tagline: "Brushed metal. Heavy. Lasting.",
    price: "From $79",
    category: "bands",
    features: ["Brushed steel finish", "Weighted & durable", "Laser-engraved QR code"],
    image: { src: "/products/band.png", alt: "Brushed metal NFC smart band" },
  },
  {
    id: "premium-bundle",
    name: "Premium Bundle",
    tagline: "Two cards. Every finish.",
    price: "From $79",
    category: "bundles",
    features: ["Two cards included", "All finishes available", "Priority support"],
    image: { src: "/products/premium-bundle.png", alt: "Premium bundle of two metal cards" },
  },
  {
    id: "team-pack",
    name: "Team Pack",
    tagline: "Five cards. One profile hub.",
    price: "From $129",
    category: "bundles",
    features: ["Five cards included", "Shared team dashboard", "Bulk QR engraving"],
    image: { src: "/products/premium-bundle.png", alt: "Team pack of Facile cards" },
  },
];
