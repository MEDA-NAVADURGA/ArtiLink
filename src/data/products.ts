export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  featured?: boolean;
}

// Sample products - will be replaced with database later
export const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Radiant Blossom",
    price: 1500,
    image: "https://res.cloudinary.com/dtgc0q1hv/image/upload/v1767875033/WhatsApp_Image_2026-01-08_at_5.46.19_PM_1_pudziy.jpg",
    category: "cotton by Skill",
    description: "A beautifully detailed floral design featuring delicate petals arranged in a harmonious, symmetrical pattern. The intricate lines and curves create a sense of depth and elegance, making the flower appear vibrant and full of life. Its structured yet natural form captures the essence of beauty and growth.",
    featured: true,
  },
  {
    id: "2",
    name: "LaakshaDeepam Saree - Parrot Green",
    price: 3500,
    image: "https://res.cloudinary.com/dtgc0q1hv/image/upload/v1767875043/WhatsApp_Image_2026-01-08_at_5.46.18_PM_1_ghxssz.jpg",
    category: "Dharmavaram Pattu",
    description: "a richly patterned traditional textile (likely a saree or fabric) with a striking combination of deep green and brown fields adorned with intricate golden floral and ornamental motifs. The gold designs form decorative bands and repeat floral patterns that give the fabric a luxurious, classic look, blending vibrant hues with traditional craftsmanship. The symmetrical floral bands and ornamental detailing evoke a sense of elegance and festive charm, typical of decorative floral patterns used in traditional textiles.",
    featured: true,
  },
  {
    id: "3",
    name: "LaakshaDeepam Saree - mango deep Green",
    price: 3500,
    image: "https://res.cloudinary.com/dtgc0q1hv/image/upload/v1767875043/WhatsApp_Image_2026-01-08_at_5.46.18_PM_pce7lc.jpg",
    category: "Dharmavaram Pattu",
    description: "a traditional silk saree laid out flat, featuring a beautiful dual-tone design. One half of the fabric is vibrant green with a subtle check pattern, while the other half displays a rich maroon/purple border section adorned with intricate golden floral and paisley motifs. The saree’s golden zari work along the border enhances its elegance, making it ideal for festive occasions or traditional celebrations. ",
    featured: true,
  },
  {
    id: "4",
    name: "Bridal Blue Pattu Saree",
    price: 4000,
    image: "https://res.cloudinary.com/dtgc0q1hv/image/upload/v1767875046/WhatsApp_Image_2026-01-08_at_5.46.20_PM_egwjix.jpg",
    category: "Bridal",
    description: "Traditional Blue bridal saree with heavy gold work",
    featured: true,
  },
  {
    id: "5",
    name: "Green & Floral Silk Saree Ensemble",
    price: 9500,
    image: "https://res.cloudinary.com/dtgc0q1hv/image/upload/v1767875048/WhatsApp_Image_2026-01-08_at_5.46.21_PM_1_bo3y89.jpg",
    category: "Bridal",
    description: "a traditional Indian silk saree laid out flat, showcasing a beautiful dual-section design. One portion features a vibrant emerald green body with subtle woven patterns and golden zari accents along the border, reminiscent of classic South Indian sarees like Semi Mysore or Maheswari silk styles. The other section displays a deep purple field adorned with multicolored floral motifs, giving the saree a lively and festive look. The combination of the rich green with the floral-printed purple adds a striking contrast, making this piece ideal for weddings, festivals, and special occasions.",
  },
  {
    id: "6",
    name: "Festive Yellow-Green Silk Saree with Floral Pallu",
    price: 2000,
    image: "https://res.cloudinary.com/dtgc0q1hv/image/upload/v1767875047/WhatsApp_Image_2026-01-08_at_5.46.20_PM_2_lg1eca.jpg",
    category: "Soft Silk",
    description: "a traditional Indian silk saree laid out flat, featuring a bright yellow body decorated with small woven motifs and a contrasting green pallu (end piece) rich with intricate floral and paisley designs in golden thread work. The border along the length of the saree features classic zari weaving that enhances its festive appeal. This vibrant color combination of yellow and green with gold accents makes the saree ideal for weddings, celebrations, and cultural events.",
  },
  {
    id: "7",
    name: "Pink & Blue Silk Saree with Golden Zari Border",
    price: 2000,
    image: "https://res.cloudinary.com/dtgc0q1hv/image/upload/v1767875049/WhatsApp_Image_2026-01-08_at_5.46.19_PM_cuapmt.jpg",
    category: "Soft Silk",
    description: "a traditional Indian silk saree laid out flat, featuring a vibrant pink body adorned with small golden butis (motifs) scattered across the fabric. One end (pallu) transitions into a contrasting bright blue section richly woven with intricate golden zari patterns, adding depth and elegance to the design. A golden zari border runs along the edge, enhancing the overall festive and classic appeal of the saree. Such rich color contrasts and detailed zari work are characteristic of traditional Indian sarees often worn for weddings, festivals, and special cultural occasions.",
  },
  {
    id: "8",
    name: "Turquoise Green & Pink Zari Silk Saree",
    price:4000,
    image: "https://res.cloudinary.com/dtgc0q1hv/image/upload/v1767875053/WhatsApp_Image_2026-01-08_at_5.46.22_PM_orbipb.jpg",
    category: "Pure Dharmavaram Pattu",
    description: "a traditional Indian silk saree laid out flat with a rich turquoise green body adorned with delicate golden zari buttas (small woven motifs) scattered throughout. The saree features a striking contrasting pink border and pallu with intricate golden zari weaving, adding an elegant and festive look to the overall design. The combination of the vibrant green base with the bright pink and gold accents gives the saree a classic, celebratory appeal, making it well-suited for weddings, festivals, or special cultural occasions.",
  },
];

export const getAllProducts = (): Product[] => {
  const sampleProductsCopy = [...sampleProducts];
  const stored = localStorage.getItem("customProducts");
  if (stored) {
    const customProducts = JSON.parse(stored);
    return [...sampleProductsCopy, ...customProducts];
  }
  return sampleProductsCopy;
};

export const getWhatsAppLink = (productName: string, price: number) => {
  const message = encodeURIComponent(
    `Hi! I'm interested in the "${productName}" saree priced at ₹${price.toLocaleString("en-IN")}. Is it available?`
  );
  return `https://wa.me/918143858263?text=${message}`;
};
