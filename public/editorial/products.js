const PRODUCTS = [
  {
    id: "wool-trench",
    name: "The Archetype Trench",
    brand: "L'Atelier Spree",
    price: 1250,
    description: "A definitive outerwear staple, designed with modern tailoring and sculptural volume. Crafted from a heavyweight Italian wool-gabardine blend, it features structured shoulders, deep storm flaps, and an adjustable waist belt that defines the silhouette.",
    details: [
      "Heavyweight Italian wool-gabardine (80% Wool, 20% Polyamide)",
      "Double-breasted front with horn-effect buttons",
      "Removable belt and buckled cuffs",
      "Fully lined in matching viscose silk",
      "Dry clean only",
      "Made in Italy"
    ],
    images: [
      "./assets/product_trench.png",
      "./assets/product_trench.png"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Sand Beige", hex: "#d5c3b1" },
      { name: "Charcoal Slate", hex: "#3a3c3e" }
    ],
    category: "Outerwear",
    rating: 4.9,
    featured: true
  },
  {
    id: "silk-slip-dress",
    name: "The Liquid Silk Slip",
    brand: "Maison d'Art",
    price: 650,
    description: "An elegant bias-cut slip dress that drapes effortlessly over the body. Cut from heavy 22-momme organic mulberry silk, it is detailed with a delicate cowl neckline, adjustable crossover shoulder straps, and a finished raw-edge hem that puddles softly at the ankle.",
    details: [
      "100% Organic Mulberry Silk (22 momme weight)",
      "Bias-cut for a natural, body-contouring drape",
      "Crossover spaghetti straps with gold-tone hardware",
      "Concealed side zipper closure",
      "Hand wash cold or dry clean",
      "Made in France"
    ],
    images: [
      "./assets/product_dress.png",
      "./assets/product_dress.png"
    ],
    sizes: ["XXS", "XS", "S", "M", "L"],
    colors: [
      { name: "Champagne", hex: "#e7dcc4" },
      { name: "Onyx Black", hex: "#151515" }
    ],
    category: "Dresses",
    rating: 4.8,
    featured: true
  },
  {
    id: "leather-bag",
    name: "The Form Handbag",
    brand: "Studio Spree",
    price: 920,
    description: "A sculptural handbag defined by clean architectural lines and an ergonomic curved handle. Hand-stitched in Florence from full-grain vegetable-tanned calfskin, it features a suede-lined interior with card slots and a secure magnetic fold-over flap.",
    details: [
      "100% Full-grain Italian calf leather",
      "Suede-lined interior with dual card pockets",
      "Silver-toned custom hardware with subtle engraving",
      "Magnetic fold-over top closure",
      "Dimensions: 28cm W x 16cm H x 8cm D",
      "Handmade in Florence, Italy"
    ],
    images: [
      "./assets/product_bag.png",
      "./assets/product_bag.png"
    ],
    sizes: ["O/S"],
    colors: [
      { name: "Tan Sienna", hex: "#b87d4b" },
      { name: "Espresso Brown", hex: "#3d2a1c" }
    ],
    category: "Bags",
    rating: 5.0,
    featured: true
  },
  {
    id: "cashmere-sweater",
    name: "The Oversized Cashmere Knit",
    brand: "Nordic Atelier",
    price: 480,
    description: "An ultra-soft, relaxed-fit knit designed for layering through the colder seasons. Sourced from ethically harvested Mongolian cashmere, it boasts a chunky ribbed crew neck, dropped shoulders, and extended ribbed cuffs.",
    details: [
      "100% Sourced Mongolian Cashmere (5-gauge knit)",
      "Ribbed crewneck collar, cuffs, and split hem",
      "Oversized silhouette with dropped shoulders",
      "Naturally insulating and breathable texture",
      "Dry clean or hand wash flat",
      "Made in Nepal"
    ],
    images: [
      "./assets/product_knit.png",
      "./assets/product_knit.png"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Ivory Mist", hex: "#f4f1ea" },
      { name: "Oatmeal Melange", hex: "#d6cfc4" }
    ],
    category: "Knitwear",
    rating: 4.7,
    featured: false
  },
  {
    id: "tailored-trouser",
    name: "The Structured Pleated Trouser",
    brand: "L'Atelier Spree",
    price: 520,
    description: "A modern wardrobe anchor featuring double pleats at the waist and a sharp pressed crease. Cut from high-twist wool-crepe, they offer a flattering high rise and a relaxed wide-leg profile that breaks perfectly over loafers.",
    details: [
      "100% Wool-crepe woven in Biella, Italy",
      "High-rise waist with concealed zip fly and hook closure",
      "Double front pleats and crisp pressed center creases",
      "Slash side pockets and button-through welt back pockets",
      "Dry clean only",
      "Made in Portugal"
    ],
    images: [
      "./assets/product_trouser.png",
      "./assets/product_trouser.png"
    ],
    sizes: ["34", "36", "38", "40", "42"],
    colors: [
      { name: "Off-White", hex: "#f9f8f6" },
      { name: "Noir Black", hex: "#111111" }
    ],
    category: "Tailoring",
    rating: 4.6,
    featured: false
  },
  {
    id: "gold-earring",
    name: "The Sculpted Hoop Earring",
    brand: "Aurum Fine Jewelry",
    price: 280,
    description: "Chunky, sculptural hoops inspired by organic forms and modernist metalwork. Cast from recycled sterling silver and heavily plated in 18-karat yellow gold, they feature a high-polish finish that reflects the light beautifully.",
    details: [
      "Recycled 925 Sterling Silver base",
      "Thick 18k Yellow Gold vermeil plating (3 microns)",
      "Secure post back with butterfly closure",
      "Weight: 8.5g per earring",
      "Sold as a pair",
      "Made in Spain"
    ],
    images: [
      "./assets/product_bag.png"
    ],
    sizes: ["O/S"],
    colors: [
      { name: "18k Yellow Gold", hex: "#e5c060" }
    ],
    category: "Accessories",
    rating: 4.9,
    featured: false
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PRODUCTS;
}
