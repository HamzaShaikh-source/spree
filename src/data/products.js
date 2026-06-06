// ── Real Products from DummyJSON ──
// 194 products across multiple categories with real matching images

const products = [
  {
    "id": "p-1",
    "name": "Essence Mascara Lash Princess",
    "slug": "essence-mascara-lash-princess-essence",
    "price": 849,
    "originalPrice": 938,
    "category": "Beauty",
    "tags": [
      "beauty",
      "mascara",
      "beauty"
    ],
    "rating": 2.56,
    "reviews": 3,
    "featured": true,
    "image": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    "inStock": true,
    "brand": "Essence"
  },
  {
    "id": "p-2",
    "name": "Eyeshadow Palette with Mirror",
    "slug": "eyeshadow-palette-with-mirror-glamour-beauty",
    "price": 1699,
    "originalPrice": 2008,
    "category": "Beauty",
    "tags": [
      "beauty",
      "eyeshadow",
      "beauty"
    ],
    "rating": 2.86,
    "reviews": 3,
    "featured": true,
    "image": "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
    "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    "inStock": true,
    "brand": "Glamour Beauty"
  },
  {
    "id": "p-3",
    "name": "Powder Canister",
    "slug": "powder-canister-velvet-touch",
    "price": 1274,
    "originalPrice": 1399,
    "category": "Beauty",
    "tags": [
      "beauty",
      "face powder",
      "beauty"
    ],
    "rating": 4.64,
    "reviews": 3,
    "featured": true,
    "image": "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
    "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
    "inStock": true,
    "brand": "Velvet Touch"
  },
  {
    "id": "p-4",
    "name": "Red Lipstick",
    "slug": "red-lipstick-chic-cosmetics",
    "price": 1104,
    "originalPrice": 1238,
    "category": "Beauty",
    "tags": [
      "beauty",
      "lipstick",
      "beauty"
    ],
    "rating": 4.36,
    "reviews": 3,
    "featured": true,
    "image": "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
    "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
    "inStock": true,
    "brand": "Chic Cosmetics"
  },
  {
    "id": "p-5",
    "name": "Red Nail Polish",
    "slug": "red-nail-polish-nail-couture",
    "price": 764,
    "originalPrice": 851,
    "category": "Beauty",
    "tags": [
      "beauty",
      "nail polish",
      "beauty"
    ],
    "rating": 4.32,
    "reviews": 3,
    "featured": true,
    "image": "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp",
    "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
    "inStock": true,
    "brand": "Nail Couture"
  },
  {
    "id": "p-6",
    "name": "Calvin Klein CK One",
    "slug": "calvin-klein-ck-one-calvin-klein",
    "price": 4249,
    "originalPrice": 4329,
    "category": "Beauty",
    "tags": [
      "fragrances",
      "perfumes",
      "fragrances"
    ],
    "rating": 4.37,
    "reviews": 3,
    "featured": true,
    "image": "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp",
    "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
    "inStock": true,
    "brand": "Calvin Klein"
  },
  {
    "id": "p-7",
    "name": "Chanel Coco Noir Eau De",
    "slug": "chanel-coco-noir-eau-de-chanel",
    "price": 11049,
    "originalPrice": 12873,
    "category": "Beauty",
    "tags": [
      "fragrances",
      "perfumes",
      "fragrances"
    ],
    "rating": 4.26,
    "reviews": 3,
    "featured": true,
    "image": "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp",
    "description": "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
    "inStock": true,
    "brand": "Chanel"
  },
  {
    "id": "p-8",
    "name": "Dior J'adore",
    "slug": "dior-j-adore-dior",
    "price": 7649,
    "originalPrice": 8775,
    "category": "Beauty",
    "tags": [
      "fragrances",
      "perfumes",
      "fragrances"
    ],
    "rating": 3.8,
    "reviews": 3,
    "featured": true,
    "image": "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp",
    "description": "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
    "inStock": true,
    "brand": "Dior"
  },
  {
    "id": "p-9",
    "name": "Dolce Shine Eau de",
    "slug": "dolce-shine-eau-de-dolce-gabbana",
    "price": 5949,
    "originalPrice": 5986,
    "category": "Beauty",
    "tags": [
      "fragrances",
      "perfumes",
      "fragrances"
    ],
    "rating": 3.96,
    "reviews": 3,
    "featured": true,
    "image": "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp",
    "description": "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
    "inStock": true,
    "brand": "Dolce & Gabbana"
  },
  {
    "id": "p-10",
    "name": "Gucci Bloom Eau de",
    "slug": "gucci-bloom-eau-de-gucci",
    "price": 6799,
    "originalPrice": 7777,
    "category": "Beauty",
    "tags": [
      "fragrances",
      "perfumes",
      "fragrances"
    ],
    "rating": 2.74,
    "reviews": 3,
    "featured": true,
    "image": "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp",
    "description": "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
    "inStock": true,
    "brand": "Gucci"
  },
  {
    "id": "p-11",
    "name": "Annibale Colombo Bed",
    "slug": "annibale-colombo-bed-annibale-colombo",
    "price": 161499,
    "originalPrice": 175339,
    "category": "Home & Kitchen",
    "tags": [
      "furniture",
      "beds",
      "furniture"
    ],
    "rating": 4.77,
    "reviews": 3,
    "featured": true,
    "image": "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp",
    "description": "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    "inStock": true,
    "brand": "Annibale Colombo"
  },
  {
    "id": "p-12",
    "name": "Annibale Colombo Sofa",
    "slug": "annibale-colombo-sofa-annibale-colombo",
    "price": 212499,
    "originalPrice": 243099,
    "category": "Home & Kitchen",
    "tags": [
      "furniture",
      "sofas",
      "furniture"
    ],
    "rating": 3.92,
    "reviews": 3,
    "featured": true,
    "image": "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp",
    "description": "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
    "inStock": true,
    "brand": "Annibale Colombo"
  },
  {
    "id": "p-13",
    "name": "Bedside Table African Cherry",
    "slug": "bedside-table-african-cherry-furniture-co",
    "price": 25499,
    "originalPrice": 30367,
    "category": "Home & Kitchen",
    "tags": [
      "furniture",
      "bedside tables",
      "furniture"
    ],
    "rating": 2.87,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/thumbnail.webp",
    "description": "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
    "inStock": true,
    "brand": "Furniture Co."
  },
  {
    "id": "p-14",
    "name": "Knoll Saarinen Executive Conference Chair",
    "slug": "knoll-saarinen-executive-conference-chair-knoll",
    "price": 42499,
    "originalPrice": 43353,
    "category": "Home & Kitchen",
    "tags": [
      "furniture",
      "office chairs",
      "furniture"
    ],
    "rating": 4.88,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp",
    "description": "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
    "inStock": true,
    "brand": "Knoll"
  },
  {
    "id": "p-15",
    "name": "Wooden Bathroom Sink With Mirror",
    "slug": "wooden-bathroom-sink-with-mirror-bath-trends",
    "price": 67999,
    "originalPrice": 73983,
    "category": "Home & Kitchen",
    "tags": [
      "furniture",
      "bathroom",
      "furniture"
    ],
    "rating": 3.59,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/thumbnail.webp",
    "description": "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
    "inStock": true,
    "brand": "Bath Trends"
  },
  {
    "id": "p-16",
    "name": "Apple",
    "slug": "apple-undefined",
    "price": 169,
    "originalPrice": 190,
    "category": "Home & Kitchen",
    "tags": [
      "fruits",
      "groceries"
    ],
    "rating": 4.19,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp",
    "description": "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-17",
    "name": "Beef Steak",
    "slug": "beef-steak-undefined",
    "price": 1104,
    "originalPrice": 1210,
    "category": "Home & Kitchen",
    "tags": [
      "meat",
      "groceries"
    ],
    "rating": 4.47,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/groceries/beef-steak/thumbnail.webp",
    "description": "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-18",
    "name": "Cat Food",
    "slug": "cat-food-undefined",
    "price": 764,
    "originalPrice": 837,
    "category": "Home & Kitchen",
    "tags": [
      "pet supplies",
      "cat food",
      "groceries"
    ],
    "rating": 3.13,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/groceries/cat-food/thumbnail.webp",
    "description": "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-19",
    "name": "Chicken Meat",
    "slug": "chicken-meat-undefined",
    "price": 849,
    "originalPrice": 965,
    "category": "Home & Kitchen",
    "tags": [
      "meat",
      "groceries"
    ],
    "rating": 3.19,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/thumbnail.webp",
    "description": "Fresh and tender chicken meat, suitable for various culinary preparations.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-20",
    "name": "Cooking Oil",
    "slug": "cooking-oil-undefined",
    "price": 424,
    "originalPrice": 464,
    "category": "Home & Kitchen",
    "tags": [
      "cooking essentials",
      "groceries"
    ],
    "rating": 4.8,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/thumbnail.webp",
    "description": "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-21",
    "name": "Cucumber",
    "slug": "cucumber-undefined",
    "price": 127,
    "originalPrice": 127,
    "category": "Home & Kitchen",
    "tags": [
      "vegetables",
      "groceries"
    ],
    "rating": 4.07,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/groceries/cucumber/thumbnail.webp",
    "description": "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-22",
    "name": "Dog Food",
    "slug": "dog-food-undefined",
    "price": 934,
    "originalPrice": 1030,
    "category": "Home & Kitchen",
    "tags": [
      "pet supplies",
      "dog food",
      "groceries"
    ],
    "rating": 4.55,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/groceries/dog-food/thumbnail.webp",
    "description": "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-23",
    "name": "Eggs",
    "slug": "eggs-undefined",
    "price": 254,
    "originalPrice": 282,
    "category": "Home & Kitchen",
    "tags": [
      "dairy",
      "groceries"
    ],
    "rating": 2.53,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/groceries/eggs/thumbnail.webp",
    "description": "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-24",
    "name": "Fish Steak",
    "slug": "fish-steak-undefined",
    "price": 1274,
    "originalPrice": 1328,
    "category": "Home & Kitchen",
    "tags": [
      "seafood",
      "groceries"
    ],
    "rating": 3.78,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/groceries/fish-steak/thumbnail.webp",
    "description": "Quality fish steak, suitable for grilling, baking, or pan-searing.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-25",
    "name": "Green Bell Pepper",
    "slug": "green-bell-pepper-undefined",
    "price": 110,
    "originalPrice": 110,
    "category": "Home & Kitchen",
    "tags": [
      "vegetables",
      "groceries"
    ],
    "rating": 3.25,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/thumbnail.webp",
    "description": "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-26",
    "name": "Green Chili Pepper",
    "slug": "green-chili-pepper-undefined",
    "price": 84,
    "originalPrice": 85,
    "category": "Home & Kitchen",
    "tags": [
      "vegetables",
      "groceries"
    ],
    "rating": 3.66,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/thumbnail.webp",
    "description": "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-27",
    "name": "Honey Jar",
    "slug": "honey-jar-undefined",
    "price": 594,
    "originalPrice": 680,
    "category": "Home & Kitchen",
    "tags": [
      "condiments",
      "groceries"
    ],
    "rating": 3.97,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/groceries/honey-jar/thumbnail.webp",
    "description": "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-28",
    "name": "Ice Cream",
    "slug": "ice-cream-undefined",
    "price": 467,
    "originalPrice": 508,
    "category": "Home & Kitchen",
    "tags": [
      "desserts",
      "groceries"
    ],
    "rating": 3.39,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/groceries/ice-cream/thumbnail.webp",
    "description": "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-29",
    "name": "Juice",
    "slug": "juice-undefined",
    "price": 339,
    "originalPrice": 380,
    "category": "Home & Kitchen",
    "tags": [
      "beverages",
      "groceries"
    ],
    "rating": 3.94,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/groceries/juice/thumbnail.webp",
    "description": "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-30",
    "name": "Kiwi",
    "slug": "kiwi-undefined",
    "price": 212,
    "originalPrice": 244,
    "category": "Home & Kitchen",
    "tags": [
      "fruits",
      "groceries"
    ],
    "rating": 4.93,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/groceries/kiwi/thumbnail.webp",
    "description": "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-31",
    "name": "Lemon",
    "slug": "lemon-undefined",
    "price": 67,
    "originalPrice": 73,
    "category": "Home & Kitchen",
    "tags": [
      "fruits",
      "groceries"
    ],
    "rating": 3.53,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/groceries/lemon/thumbnail.webp",
    "description": "Zesty and tangy lemons, versatile for cooking, baking, or making refreshing beverages.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-32",
    "name": "Milk",
    "slug": "milk-undefined",
    "price": 297,
    "originalPrice": 338,
    "category": "Home & Kitchen",
    "tags": [
      "dairy",
      "groceries"
    ],
    "rating": 2.61,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/groceries/milk/thumbnail.webp",
    "description": "Fresh and nutritious milk, a staple for various recipes and daily consumption.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-33",
    "name": "Mulberry",
    "slug": "mulberry-undefined",
    "price": 424,
    "originalPrice": 479,
    "category": "Home & Kitchen",
    "tags": [
      "fruits",
      "groceries"
    ],
    "rating": 4.95,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/groceries/mulberry/thumbnail.webp",
    "description": "Sweet and juicy mulberries, perfect for snacking or adding to desserts and cereals.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-34",
    "name": "Nescafe Coffee",
    "slug": "nescafe-coffee-undefined",
    "price": 679,
    "originalPrice": 690,
    "category": "Home & Kitchen",
    "tags": [
      "beverages",
      "coffee",
      "groceries"
    ],
    "rating": 4.82,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/groceries/nescafe-coffee/thumbnail.webp",
    "description": "Quality coffee from Nescafe, available in various blends for a rich and satisfying cup.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-35",
    "name": "Potatoes",
    "slug": "potatoes-undefined",
    "price": 195,
    "originalPrice": 205,
    "category": "Home & Kitchen",
    "tags": [
      "vegetables",
      "groceries"
    ],
    "rating": 4.81,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/groceries/potatoes/thumbnail.webp",
    "description": "Versatile and starchy potatoes, great for roasting, mashing, or as a side dish.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-36",
    "name": "Protein Powder",
    "slug": "protein-powder-undefined",
    "price": 1699,
    "originalPrice": 1828,
    "category": "Home & Kitchen",
    "tags": [
      "health supplements",
      "groceries"
    ],
    "rating": 4.18,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/groceries/protein-powder/thumbnail.webp",
    "description": "Nutrient-packed protein powder, ideal for supplementing your diet with essential proteins.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-37",
    "name": "Red Onions",
    "slug": "red-onions-undefined",
    "price": 169,
    "originalPrice": 186,
    "category": "Home & Kitchen",
    "tags": [
      "vegetables",
      "groceries"
    ],
    "rating": 4.2,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/groceries/red-onions/thumbnail.webp",
    "description": "Flavorful and aromatic red onions, perfect for adding depth to your savory dishes.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-38",
    "name": "Rice",
    "slug": "rice-undefined",
    "price": 509,
    "originalPrice": 556,
    "category": "Home & Kitchen",
    "tags": [
      "grains",
      "groceries"
    ],
    "rating": 3.18,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/groceries/rice/thumbnail.webp",
    "description": "High-quality rice, a staple for various cuisines and a versatile base for many dishes.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-39",
    "name": "Soft Drinks",
    "slug": "soft-drinks-undefined",
    "price": 169,
    "originalPrice": 199,
    "category": "Home & Kitchen",
    "tags": [
      "beverages",
      "groceries"
    ],
    "rating": 4.75,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/groceries/soft-drinks/thumbnail.webp",
    "description": "Assorted soft drinks in various flavors, perfect for refreshing beverages.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-40",
    "name": "Strawberry",
    "slug": "strawberry-undefined",
    "price": 339,
    "originalPrice": 343,
    "category": "Home & Kitchen",
    "tags": [
      "fruits",
      "groceries"
    ],
    "rating": 3.08,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/groceries/strawberry/thumbnail.webp",
    "description": "Sweet and succulent strawberries, great for snacking, desserts, or blending into smoothies.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-41",
    "name": "Tissue Paper Box",
    "slug": "tissue-paper-box-undefined",
    "price": 212,
    "originalPrice": 240,
    "category": "Home & Kitchen",
    "tags": [
      "household essentials",
      "groceries"
    ],
    "rating": 2.69,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/groceries/tissue-paper-box/thumbnail.webp",
    "description": "Convenient tissue paper box for everyday use, providing soft and absorbent tissues.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-42",
    "name": "Water",
    "slug": "water-undefined",
    "price": 84,
    "originalPrice": 97,
    "category": "Home & Kitchen",
    "tags": [
      "beverages",
      "groceries"
    ],
    "rating": 4.96,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/groceries/water/thumbnail.webp",
    "description": "Pure and refreshing bottled water, essential for staying hydrated throughout the day.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-43",
    "name": "Decoration Swing",
    "slug": "decoration-swing-undefined",
    "price": 5099,
    "originalPrice": 5630,
    "category": "Home & Kitchen",
    "tags": [
      "home decor",
      "swing",
      "home decoration"
    ],
    "rating": 3.16,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/thumbnail.webp",
    "description": "The Decoration Swing is a charming addition to your home decor. Crafted with intricate details, it adds a touch of elegance and whimsy to any room.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-44",
    "name": "Family Tree Photo Frame",
    "slug": "family-tree-photo-frame-undefined",
    "price": 2549,
    "originalPrice": 2928,
    "category": "Home & Kitchen",
    "tags": [
      "home decor",
      "photo frame",
      "home decoration"
    ],
    "rating": 4.53,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/home-decoration/family-tree-photo-frame/thumbnail.webp",
    "description": "The Family Tree Photo Frame is a sentimental and stylish way to display your cherished family memories. With multiple photo slots, it tells the story of your loved ones.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-45",
    "name": "House Showpiece Plant",
    "slug": "house-showpiece-plant-undefined",
    "price": 3399,
    "originalPrice": 3653,
    "category": "Home & Kitchen",
    "tags": [
      "home decor",
      "artificial plants",
      "home decoration"
    ],
    "rating": 4.67,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/home-decoration/house-showpiece-plant/thumbnail.webp",
    "description": "The House Showpiece Plant is an artificial plant that brings a touch of nature to your home without the need for maintenance. It adds greenery and style to any space.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-46",
    "name": "Plant Pot",
    "slug": "plant-pot-undefined",
    "price": 1274,
    "originalPrice": 1361,
    "category": "Home & Kitchen",
    "tags": [
      "home decor",
      "plant accessories",
      "home decoration"
    ],
    "rating": 3.01,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/thumbnail.webp",
    "description": "The Plant Pot is a stylish container for your favorite plants. With a sleek design, it complements your indoor or outdoor garden, adding a modern touch to your plant display.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-47",
    "name": "Table Lamp",
    "slug": "table-lamp-undefined",
    "price": 4249,
    "originalPrice": 4550,
    "category": "Home & Kitchen",
    "tags": [
      "home decor",
      "lighting",
      "home decoration"
    ],
    "rating": 3.55,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/home-decoration/table-lamp/thumbnail.webp",
    "description": "The Table Lamp is a functional and decorative lighting solution for your living space. With a modern design, it provides both ambient and task lighting, enhancing the atmosphere.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-48",
    "name": "Bamboo Spatula",
    "slug": "bamboo-spatula-undefined",
    "price": 679,
    "originalPrice": 698,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen tools",
      "utensils",
      "kitchen accessories"
    ],
    "rating": 3.27,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/bamboo-spatula/thumbnail.webp",
    "description": "The Bamboo Spatula is a versatile kitchen tool made from eco-friendly bamboo. Ideal for flipping, stirring, and serving various dishes.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-49",
    "name": "Black Aluminium Cup",
    "slug": "black-aluminium-cup-undefined",
    "price": 509,
    "originalPrice": 589,
    "category": "Home & Kitchen",
    "tags": [
      "drinkware",
      "cups",
      "kitchen accessories"
    ],
    "rating": 4.46,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-aluminium-cup/thumbnail.webp",
    "description": "The Black Aluminium Cup is a stylish and durable cup suitable for both hot and cold beverages. Its sleek black design adds a modern touch to your drinkware collection.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-50",
    "name": "Black Whisk",
    "slug": "black-whisk-undefined",
    "price": 849,
    "originalPrice": 936,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen tools",
      "utensils",
      "kitchen accessories"
    ],
    "rating": 3.9,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/black-whisk/thumbnail.webp",
    "description": "The Black Whisk is a kitchen essential for whisking and beating ingredients. Its ergonomic handle and sleek design make it a practical and stylish tool.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-51",
    "name": "Boxed Blender",
    "slug": "boxed-blender-undefined",
    "price": 3399,
    "originalPrice": 3646,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen appliances",
      "blenders",
      "kitchen accessories"
    ],
    "rating": 4.56,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/boxed-blender/thumbnail.webp",
    "description": "The Boxed Blender is a powerful and compact blender perfect for smoothies, shakes, and more. Its convenient design and multiple functions make it a versatile kitchen appliance.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-52",
    "name": "Carbon Steel Wok",
    "slug": "carbon-steel-wok-undefined",
    "price": 2549,
    "originalPrice": 2715,
    "category": "Home & Kitchen",
    "tags": [
      "cookware",
      "woks",
      "kitchen accessories"
    ],
    "rating": 4.05,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/carbon-steel-wok/thumbnail.webp",
    "description": "The Carbon Steel Wok is a versatile cooking pan suitable for stir-frying, sautéing, and deep frying. Its sturdy construction ensures even heat distribution for delicious meals.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-53",
    "name": "Chopping Board",
    "slug": "chopping-board-undefined",
    "price": 1104,
    "originalPrice": 1193,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen tools",
      "cutting boards",
      "kitchen accessories"
    ],
    "rating": 3.7,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/chopping-board/thumbnail.webp",
    "description": "The Chopping Board is an essential kitchen accessory for food preparation. Made from durable material, it provides a safe and hygienic surface for cutting and chopping.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-54",
    "name": "Citrus Squeezer Yellow",
    "slug": "citrus-squeezer-yellow-undefined",
    "price": 764,
    "originalPrice": 856,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen tools",
      "juicers",
      "kitchen accessories"
    ],
    "rating": 4.63,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/citrus-squeezer-yellow/thumbnail.webp",
    "description": "The Citrus Squeezer in Yellow is a handy tool for extracting juice from citrus fruits. Its vibrant color adds a cheerful touch to your kitchen gadgets.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-55",
    "name": "Egg Slicer",
    "slug": "egg-slicer-undefined",
    "price": 594,
    "originalPrice": 682,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen tools",
      "slicers",
      "kitchen accessories"
    ],
    "rating": 3.09,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/egg-slicer/thumbnail.webp",
    "description": "The Egg Slicer is a convenient tool for slicing boiled eggs evenly. It's perfect for salads, sandwiches, and other dishes where sliced eggs are desired.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-56",
    "name": "Electric Stove",
    "slug": "electric-stove-undefined",
    "price": 4249,
    "originalPrice": 4846,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen appliances",
      "cooktops",
      "kitchen accessories"
    ],
    "rating": 4.11,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/thumbnail.webp",
    "description": "The Electric Stove provides a portable and efficient cooking solution. Ideal for small kitchens or as an additional cooking surface for various culinary needs.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-57",
    "name": "Fine Mesh Strainer",
    "slug": "fine-mesh-strainer-undefined",
    "price": 849,
    "originalPrice": 879,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen tools",
      "strainers",
      "kitchen accessories"
    ],
    "rating": 3.04,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/fine-mesh-strainer/thumbnail.webp",
    "description": "The Fine Mesh Strainer is a versatile tool for straining liquids and sifting dry ingredients. Its fine mesh ensures efficient filtering for smooth cooking and baking.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-58",
    "name": "Fork",
    "slug": "fork-undefined",
    "price": 339,
    "originalPrice": 366,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen tools",
      "utensils",
      "kitchen accessories"
    ],
    "rating": 3.11,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/fork/thumbnail.webp",
    "description": "The Fork is a classic utensil for various dining and serving purposes. Its durable and ergonomic design makes it a reliable choice for everyday use.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-59",
    "name": "Glass",
    "slug": "glass-undefined",
    "price": 424,
    "originalPrice": 458,
    "category": "Home & Kitchen",
    "tags": [
      "drinkware",
      "glasses",
      "kitchen accessories"
    ],
    "rating": 4.02,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/glass/thumbnail.webp",
    "description": "The Glass is a versatile and elegant drinking vessel suitable for a variety of beverages. Its clear design allows you to enjoy the colors and textures of your drinks.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-60",
    "name": "Grater Black",
    "slug": "grater-black-undefined",
    "price": 934,
    "originalPrice": 967,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen tools",
      "graters",
      "kitchen accessories"
    ],
    "rating": 3.21,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/grater-black/thumbnail.webp",
    "description": "The Grater in Black is a handy kitchen tool for grating cheese, vegetables, and more. Its sleek design and sharp blades make food preparation efficient and easy.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-61",
    "name": "Hand Blender",
    "slug": "hand-blender-undefined",
    "price": 2974,
    "originalPrice": 3480,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen appliances",
      "blenders",
      "kitchen accessories"
    ],
    "rating": 3.86,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/hand-blender/thumbnail.webp",
    "description": "The Hand Blender is a versatile kitchen appliance for blending, pureeing, and mixing. Its compact design and powerful motor make it a convenient tool for various recipes.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-62",
    "name": "Ice Cube Tray",
    "slug": "ice-cube-tray-undefined",
    "price": 509,
    "originalPrice": 512,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen tools",
      "ice cube trays",
      "kitchen accessories"
    ],
    "rating": 4.71,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/ice-cube-tray/thumbnail.webp",
    "description": "The Ice Cube Tray is a practical accessory for making ice cubes in various shapes. Perfect for keeping your drinks cool and adding a fun element to your beverages.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-63",
    "name": "Kitchen Sieve",
    "slug": "kitchen-sieve-undefined",
    "price": 679,
    "originalPrice": 807,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen tools",
      "strainers",
      "kitchen accessories"
    ],
    "rating": 3.09,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/kitchen-sieve/thumbnail.webp",
    "description": "The Kitchen Sieve is a versatile tool for sifting and straining dry and wet ingredients. Its fine mesh design ensures smooth results in your cooking and baking.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-64",
    "name": "Knife",
    "slug": "knife-undefined",
    "price": 1274,
    "originalPrice": 1514,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen tools",
      "cutlery",
      "kitchen accessories"
    ],
    "rating": 3.26,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/knife/thumbnail.webp",
    "description": "The Knife is an essential kitchen tool for chopping, slicing, and dicing. Its sharp blade and ergonomic handle make it a reliable choice for food preparation.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-65",
    "name": "Lunch Box",
    "slug": "lunch-box-undefined",
    "price": 1104,
    "originalPrice": 1218,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen tools",
      "storage",
      "kitchen accessories"
    ],
    "rating": 4.93,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/lunch-box/thumbnail.webp",
    "description": "The Lunch Box is a convenient and portable container for packing and carrying your meals. With compartments for different foods, it's perfect for on-the-go dining.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-66",
    "name": "Microwave Oven",
    "slug": "microwave-oven-undefined",
    "price": 7649,
    "originalPrice": 8577,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen appliances",
      "microwaves",
      "kitchen accessories"
    ],
    "rating": 4.82,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/thumbnail.webp",
    "description": "The Microwave Oven is a versatile kitchen appliance for quick and efficient cooking, reheating, and defrosting. Its compact size makes it suitable for various kitchen setups.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-67",
    "name": "Mug Tree Stand",
    "slug": "mug-tree-stand-undefined",
    "price": 1359,
    "originalPrice": 1485,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen tools",
      "organization",
      "kitchen accessories"
    ],
    "rating": 2.64,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/mug-tree-stand/thumbnail.webp",
    "description": "The Mug Tree Stand is a stylish and space-saving solution for organizing your mugs. Keep your favorite mugs easily accessible and neatly displayed in your kitchen.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-68",
    "name": "Pan",
    "slug": "pan-undefined",
    "price": 2124,
    "originalPrice": 2188,
    "category": "Home & Kitchen",
    "tags": [
      "cookware",
      "pans",
      "kitchen accessories"
    ],
    "rating": 2.79,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/pan/thumbnail.webp",
    "description": "The Pan is a versatile and essential cookware item for frying, sautéing, and cooking various dishes. Its non-stick coating ensures easy food release and cleanup.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-69",
    "name": "Plate",
    "slug": "plate-undefined",
    "price": 339,
    "originalPrice": 364,
    "category": "Home & Kitchen",
    "tags": [
      "dinnerware",
      "plates",
      "kitchen accessories"
    ],
    "rating": 3.65,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/plate/thumbnail.webp",
    "description": "The Plate is a classic and essential dishware item for serving meals. Its durable and stylish design makes it suitable for everyday use or special occasions.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-70",
    "name": "Red Tongs",
    "slug": "red-tongs-undefined",
    "price": 594,
    "originalPrice": 680,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen tools",
      "tongs",
      "kitchen accessories"
    ],
    "rating": 4.42,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/red-tongs/thumbnail.webp",
    "description": "The Red Tongs are versatile kitchen tongs suitable for various cooking and serving tasks. Their vibrant color adds a pop of excitement to your kitchen utensils.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-71",
    "name": "Silver Pot With Glass Cap",
    "slug": "silver-pot-with-glass-cap-undefined",
    "price": 3399,
    "originalPrice": 3593,
    "category": "Home & Kitchen",
    "tags": [
      "cookware",
      "pots",
      "kitchen accessories"
    ],
    "rating": 3.22,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/silver-pot-with-glass-cap/thumbnail.webp",
    "description": "The Silver Pot with Glass Cap is a stylish and functional cookware item for boiling, simmering, and preparing delicious meals. Its glass cap allows you to monitor cooking progress.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-72",
    "name": "Slotted Turner",
    "slug": "slotted-turner-undefined",
    "price": 764,
    "originalPrice": 866,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen tools",
      "turners",
      "kitchen accessories"
    ],
    "rating": 3.4,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/slotted-turner/thumbnail.webp",
    "description": "The Slotted Turner is a kitchen utensil designed for flipping and turning food items. Its slotted design allows excess liquid to drain, making it ideal for frying and sautéing.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-73",
    "name": "Spice Rack",
    "slug": "spice-rack-undefined",
    "price": 1699,
    "originalPrice": 1904,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen tools",
      "organization",
      "kitchen accessories"
    ],
    "rating": 4.87,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/spice-rack/thumbnail.webp",
    "description": "The Spice Rack is a convenient organizer for your spices and seasonings. Keep your kitchen essentials within reach and neatly arranged with this stylish spice rack.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-74",
    "name": "Spoon",
    "slug": "spoon-undefined",
    "price": 424,
    "originalPrice": 430,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen tools",
      "utensils",
      "kitchen accessories"
    ],
    "rating": 4.03,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/spoon/thumbnail.webp",
    "description": "The Spoon is a versatile kitchen utensil for stirring, serving, and tasting. Its ergonomic design and durable construction make it an essential tool for every kitchen.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-75",
    "name": "Tray",
    "slug": "tray-undefined",
    "price": 1444,
    "originalPrice": 1552,
    "category": "Home & Kitchen",
    "tags": [
      "serveware",
      "trays",
      "kitchen accessories"
    ],
    "rating": 4.62,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/tray/thumbnail.webp",
    "description": "The Tray is a functional and decorative item for serving snacks, appetizers, or drinks. Its stylish design makes it a versatile accessory for entertaining guests.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-76",
    "name": "Wooden Rolling Pin",
    "slug": "wooden-rolling-pin-undefined",
    "price": 1019,
    "originalPrice": 1118,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen tools",
      "baking",
      "kitchen accessories"
    ],
    "rating": 2.92,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/wooden-rolling-pin/thumbnail.webp",
    "description": "The Wooden Rolling Pin is a classic kitchen tool for rolling out dough for baking. Its smooth surface and sturdy handles make it easy to achieve uniform thickness.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-77",
    "name": "Yellow Peeler",
    "slug": "yellow-peeler-undefined",
    "price": 509,
    "originalPrice": 573,
    "category": "Home & Kitchen",
    "tags": [
      "kitchen tools",
      "peelers",
      "kitchen accessories"
    ],
    "rating": 4.24,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/kitchen-accessories/yellow-peeler/thumbnail.webp",
    "description": "The Yellow Peeler is a handy tool for peeling fruits and vegetables with ease. Its bright yellow color adds a cheerful touch to your kitchen gadgets.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-78",
    "name": "Apple MacBook Pro 14 Inch Space Grey",
    "slug": "apple-macbook-pro-14-inch-space-grey-apple",
    "price": 169999,
    "originalPrice": 177972,
    "category": "Laptops & Computers",
    "tags": [
      "laptops",
      "apple",
      "laptops"
    ],
    "rating": 3.65,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/thumbnail.webp",
    "description": "The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.",
    "inStock": true,
    "brand": "Apple"
  },
  {
    "id": "p-79",
    "name": "Asus Zenbook Pro Dual Screen Laptop",
    "slug": "asus-zenbook-pro-dual-screen-laptop-asus",
    "price": 152999,
    "originalPrice": 170043,
    "category": "Laptops & Computers",
    "tags": [
      "laptops",
      "laptops"
    ],
    "rating": 3.95,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/thumbnail.webp",
    "description": "The Asus Zenbook Pro Dual Screen Laptop is a high-performance device with dual screens, providing productivity and versatility for creative professionals.",
    "inStock": true,
    "brand": "Asus"
  },
  {
    "id": "p-80",
    "name": "Huawei Matebook X Pro",
    "slug": "huawei-matebook-x-pro-huawei",
    "price": 118999,
    "originalPrice": 130161,
    "category": "Laptops & Computers",
    "tags": [
      "laptops",
      "laptops"
    ],
    "rating": 4.98,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/thumbnail.webp",
    "description": "The Huawei Matebook X Pro is a slim and stylish laptop with a high-resolution touchscreen display, offering a premium experience for users on the go.",
    "inStock": true,
    "brand": "Huawei"
  },
  {
    "id": "p-81",
    "name": "Lenovo Yoga 920",
    "slug": "lenovo-yoga-920-lenovo",
    "price": 93499,
    "originalPrice": 99623,
    "category": "Laptops & Computers",
    "tags": [
      "laptops",
      "laptops"
    ],
    "rating": 2.86,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/thumbnail.webp",
    "description": "The Lenovo Yoga 920 is a 2-in-1 convertible laptop with a flexible hinge, allowing you to use it as a laptop or tablet, offering versatility and portability.",
    "inStock": true,
    "brand": "Lenovo"
  },
  {
    "id": "p-82",
    "name": "New DELL XPS 13 9300 Laptop",
    "slug": "new-dell-xps-13-9300-laptop-dell",
    "price": 127499,
    "originalPrice": 142659,
    "category": "Laptops & Computers",
    "tags": [
      "laptops",
      "laptops"
    ],
    "rating": 2.67,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/laptops/new-dell-xps-13-9300-laptop/thumbnail.webp",
    "description": "The New DELL XPS 13 9300 Laptop is a compact and powerful device, featuring a virtually borderless InfinityEdge display and high-end performance for various tasks.",
    "inStock": true,
    "brand": "Dell"
  },
  {
    "id": "p-83",
    "name": "Blue & Black Check Shirt",
    "slug": "blue-black-check-shirt-fashion-trends",
    "price": 2549,
    "originalPrice": 2940,
    "category": "Fashion",
    "tags": [
      "clothing",
      "men's shirts",
      "mens shirts"
    ],
    "rating": 3.64,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/thumbnail.webp",
    "description": "The Blue & Black Check Shirt is a stylish and comfortable men's shirt featuring a classic check pattern. Made from high-quality fabric, it's suitable for both casual and semi-formal occasions.",
    "inStock": true,
    "brand": "Fashion Trends"
  },
  {
    "id": "p-84",
    "name": "Gigabyte Aorus Men Tshirt",
    "slug": "gigabyte-aorus-men-tshirt-gigabyte",
    "price": 2124,
    "originalPrice": 2144,
    "category": "Fashion",
    "tags": [
      "clothing",
      "men's t-shirts",
      "mens shirts"
    ],
    "rating": 3.18,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/mens-shirts/gigabyte-aorus-men-tshirt/thumbnail.webp",
    "description": "The Gigabyte Aorus Men Tshirt is a cool and casual shirt for gaming enthusiasts. With the Aorus logo and sleek design, it's perfect for expressing your gaming style.",
    "inStock": true,
    "brand": "Gigabyte"
  },
  {
    "id": "p-85",
    "name": "Man Plaid Shirt",
    "slug": "man-plaid-shirt-classic-wear",
    "price": 2974,
    "originalPrice": 3554,
    "category": "Fashion",
    "tags": [
      "clothing",
      "men's shirts",
      "mens shirts"
    ],
    "rating": 3.46,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/mens-shirts/man-plaid-shirt/thumbnail.webp",
    "description": "The Man Plaid Shirt is a timeless and versatile men's shirt with a classic plaid pattern. Its comfortable fit and casual style make it a wardrobe essential for various occasions.",
    "inStock": true,
    "brand": "Classic Wear"
  },
  {
    "id": "p-86",
    "name": "Man Short Sleeve Shirt",
    "slug": "man-short-sleeve-shirt-casual-comfort",
    "price": 1699,
    "originalPrice": 1815,
    "category": "Fashion",
    "tags": [
      "clothing",
      "men's shirts",
      "mens shirts"
    ],
    "rating": 2.9,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/thumbnail.webp",
    "description": "The Man Short Sleeve Shirt is a breezy and stylish option for warm days. With a comfortable fit and short sleeves, it's perfect for a laid-back yet polished look.",
    "inStock": true,
    "brand": "Casual Comfort"
  },
  {
    "id": "p-87",
    "name": "Men Check Shirt",
    "slug": "men-check-shirt-urban-chic",
    "price": 2379,
    "originalPrice": 2650,
    "category": "Fashion",
    "tags": [
      "clothing",
      "men's shirts",
      "mens shirts"
    ],
    "rating": 2.72,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/mens-shirts/men-check-shirt/thumbnail.webp",
    "description": "The Men Check Shirt is a classic and versatile shirt featuring a stylish check pattern. Suitable for various occasions, it adds a smart and polished touch to your wardrobe.",
    "inStock": true,
    "brand": "Urban Chic"
  },
  {
    "id": "p-88",
    "name": "Nike Air Jordan 1 Red And Black",
    "slug": "nike-air-jordan-1-red-and-black-nike",
    "price": 12749,
    "originalPrice": 13274,
    "category": "Fashion",
    "tags": [
      "footwear",
      "athletic shoes",
      "mens shoes"
    ],
    "rating": 4.77,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/thumbnail.webp",
    "description": "The Nike Air Jordan 1 in Red and Black is an iconic basketball sneaker known for its stylish design and high-performance features, making it a favorite among sneaker enthusiasts and athletes.",
    "inStock": true,
    "brand": "Nike"
  },
  {
    "id": "p-89",
    "name": "Nike Baseball Cleats",
    "slug": "nike-baseball-cleats-nike",
    "price": 6799,
    "originalPrice": 8026,
    "category": "Fashion",
    "tags": [
      "footwear",
      "sports cleats",
      "mens shoes"
    ],
    "rating": 3.88,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/mens-shoes/nike-baseball-cleats/thumbnail.webp",
    "description": "Nike Baseball Cleats are designed for maximum traction and performance on the baseball field. They provide stability and support for players during games and practices.",
    "inStock": true,
    "brand": "Nike"
  },
  {
    "id": "p-90",
    "name": "Puma Future Rider Trainers",
    "slug": "puma-future-rider-trainers-puma",
    "price": 7649,
    "originalPrice": 7970,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual shoes",
      "mens shoes"
    ],
    "rating": 4.9,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/thumbnail.webp",
    "description": "The Puma Future Rider Trainers offer a blend of retro style and modern comfort. Perfect for casual wear, these trainers provide a fashionable and comfortable option for everyday use.",
    "inStock": true,
    "brand": "Puma"
  },
  {
    "id": "p-91",
    "name": "Sports Sneakers Off White & Red",
    "slug": "sports-sneakers-off-white-red-off-white",
    "price": 10199,
    "originalPrice": 10706,
    "category": "Fashion",
    "tags": [
      "footwear",
      "athletic shoes",
      "mens shoes"
    ],
    "rating": 4.77,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-&-red/thumbnail.webp",
    "description": "The Sports Sneakers in Off White and Red combine style and functionality, making them a fashionable choice for sports enthusiasts. The red and off-white color combination adds a bold and energetic touch.",
    "inStock": true,
    "brand": "Off White"
  },
  {
    "id": "p-92",
    "name": "Sports Sneakers Off White Red",
    "slug": "sports-sneakers-off-white-red-off-white",
    "price": 9349,
    "originalPrice": 9353,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual shoes",
      "mens shoes"
    ],
    "rating": 4.69,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/thumbnail.webp",
    "description": "Another variant of the Sports Sneakers in Off White Red, featuring a unique design. These sneakers offer style and comfort for casual occasions.",
    "inStock": true,
    "brand": "Off White"
  },
  {
    "id": "p-93",
    "name": "Brown Leather Belt Watch",
    "slug": "brown-leather-belt-watch-fashion-timepieces",
    "price": 7649,
    "originalPrice": 8107,
    "category": "Fashion",
    "tags": [
      "watches",
      "leather watches",
      "mens watches"
    ],
    "rating": 4.19,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/thumbnail.webp",
    "description": "The Brown Leather Belt Watch is a stylish timepiece with a classic design. Featuring a genuine leather strap and a sleek dial, it adds a touch of sophistication to your look.",
    "inStock": true,
    "brand": "Fashion Timepieces"
  },
  {
    "id": "p-94",
    "name": "Longines Master Collection",
    "slug": "longines-master-collection-longines",
    "price": 127499,
    "originalPrice": 149480,
    "category": "Fashion",
    "tags": [
      "watches",
      "luxury watches",
      "mens watches"
    ],
    "rating": 3.87,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/mens-watches/longines-master-collection/thumbnail.webp",
    "description": "The Longines Master Collection is an elegant and refined watch known for its precision and craftsmanship. With a timeless design, it's a symbol of luxury and sophistication.",
    "inStock": true,
    "brand": "Longines"
  },
  {
    "id": "p-95",
    "name": "Rolex Cellini Date Black Dial",
    "slug": "rolex-cellini-date-black-dial-rolex",
    "price": 764999,
    "originalPrice": 832931,
    "category": "Fashion",
    "tags": [
      "watches",
      "luxury watches",
      "mens watches"
    ],
    "rating": 4.97,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-date-black-dial/thumbnail.webp",
    "description": "The Rolex Cellini Date with Black Dial is a classic and prestigious watch. With a black dial and date complication, it exudes sophistication and is a symbol of Rolex's heritage.",
    "inStock": true,
    "brand": "Rolex"
  },
  {
    "id": "p-96",
    "name": "Rolex Cellini Moonphase",
    "slug": "rolex-cellini-moonphase-rolex",
    "price": 1104999,
    "originalPrice": 1298595,
    "category": "Fashion",
    "tags": [
      "watches",
      "luxury watches",
      "mens watches"
    ],
    "rating": 2.58,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-cellini-moonphase/thumbnail.webp",
    "description": "The Rolex Cellini Moonphase is a masterpiece of horology, featuring a moon phase complication and exquisite design. It reflects Rolex's commitment to precision and elegance.",
    "inStock": true,
    "brand": "Rolex"
  },
  {
    "id": "p-97",
    "name": "Rolex Datejust",
    "slug": "rolex-datejust-rolex",
    "price": 934999,
    "originalPrice": 969874,
    "category": "Fashion",
    "tags": [
      "watches",
      "luxury watches",
      "mens watches"
    ],
    "rating": 3.66,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-datejust/thumbnail.webp",
    "description": "The Rolex Datejust is an iconic and versatile timepiece with a date window. Known for its timeless design and reliability, it's a symbol of Rolex's watchmaking excellence.",
    "inStock": true,
    "brand": "Rolex"
  },
  {
    "id": "p-98",
    "name": "Rolex Submariner Watch",
    "slug": "rolex-submariner-watch-rolex",
    "price": 1189999,
    "originalPrice": 1250094,
    "category": "Fashion",
    "tags": [
      "watches",
      "luxury watches",
      "mens watches"
    ],
    "rating": 2.69,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/mens-watches/rolex-submariner-watch/thumbnail.webp",
    "description": "The Rolex Submariner is a legendary dive watch with a rich history. Known for its durability and water resistance, it's a symbol of adventure and exploration.",
    "inStock": true,
    "brand": "Rolex"
  },
  {
    "id": "p-99",
    "name": "Amazon Echo Plus",
    "slug": "amazon-echo-plus-amazon",
    "price": 8499,
    "originalPrice": 9525,
    "category": "Electronics",
    "tags": [
      "electronics",
      "smart speakers",
      "mobile accessories"
    ],
    "rating": 4.99,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/thumbnail.webp",
    "description": "The Amazon Echo Plus is a smart speaker with built-in Alexa voice control. It features premium sound quality and serves as a hub for controlling smart home devices.",
    "inStock": true,
    "brand": "Amazon"
  },
  {
    "id": "p-100",
    "name": "Apple Airpods",
    "slug": "apple-airpods-apple",
    "price": 11049,
    "originalPrice": 12766,
    "category": "Electronics",
    "tags": [
      "electronics",
      "wireless earphones",
      "mobile accessories"
    ],
    "rating": 4.15,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/thumbnail.webp",
    "description": "The Apple Airpods offer a seamless wireless audio experience. With easy pairing, high-quality sound, and Siri integration, they are perfect for on-the-go listening.",
    "inStock": true,
    "brand": "Apple"
  },
  {
    "id": "p-101",
    "name": "Apple AirPods Max Silver",
    "slug": "apple-airpods-max-silver-apple",
    "price": 46749,
    "originalPrice": 53140,
    "category": "Electronics",
    "tags": [
      "electronics",
      "over-ear headphones",
      "mobile accessories"
    ],
    "rating": 3.47,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/thumbnail.webp",
    "description": "The Apple AirPods Max in Silver are premium over-ear headphones with high-fidelity audio, adaptive EQ, and active noise cancellation. Experience immersive sound in style.",
    "inStock": true,
    "brand": "Apple"
  },
  {
    "id": "p-102",
    "name": "Apple Airpower Wireless Charger",
    "slug": "apple-airpower-wireless-charger-apple",
    "price": 6799,
    "originalPrice": 7104,
    "category": "Electronics",
    "tags": [
      "electronics",
      "wireless chargers",
      "mobile accessories"
    ],
    "rating": 3.68,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpower-wireless-charger/thumbnail.webp",
    "description": "The Apple AirPower Wireless Charger provides a convenient way to charge your compatible Apple devices wirelessly. Simply place your devices on the charging mat for effortless charging.",
    "inStock": true,
    "brand": "Apple"
  },
  {
    "id": "p-103",
    "name": "Apple HomePod Mini Cosmic Grey",
    "slug": "apple-homepod-mini-cosmic-grey-apple",
    "price": 8499,
    "originalPrice": 10037,
    "category": "Electronics",
    "tags": [
      "electronics",
      "smart speakers",
      "mobile accessories"
    ],
    "rating": 4.62,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-homepod-mini-cosmic-grey/thumbnail.webp",
    "description": "The Apple HomePod Mini in Cosmic Grey is a compact smart speaker that delivers impressive audio and integrates seamlessly with the Apple ecosystem for a smart home experience.",
    "inStock": true,
    "brand": "Apple"
  },
  {
    "id": "p-104",
    "name": "Apple iPhone Charger",
    "slug": "apple-iphone-charger-apple",
    "price": 1699,
    "originalPrice": 2014,
    "category": "Electronics",
    "tags": [
      "electronics",
      "chargers",
      "mobile accessories"
    ],
    "rating": 4.15,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-iphone-charger/thumbnail.webp",
    "description": "The Apple iPhone Charger is a high-quality charger designed for fast and efficient charging of your iPhone. Ensure your device stays powered up and ready to go.",
    "inStock": true,
    "brand": "Apple"
  },
  {
    "id": "p-105",
    "name": "Apple MagSafe Battery Pack",
    "slug": "apple-magsafe-battery-pack-apple",
    "price": 8499,
    "originalPrice": 9958,
    "category": "Electronics",
    "tags": [
      "electronics",
      "power banks",
      "mobile accessories"
    ],
    "rating": 3.62,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-magsafe-battery-pack/thumbnail.webp",
    "description": "The Apple MagSafe Battery Pack is a portable and convenient way to add extra battery life to your MagSafe-compatible iPhone. Attach it magnetically for a secure connection.",
    "inStock": true,
    "brand": "Apple"
  },
  {
    "id": "p-106",
    "name": "Apple Watch Series 4 Gold",
    "slug": "apple-watch-series-4-gold-apple",
    "price": 29749,
    "originalPrice": 33325,
    "category": "Electronics",
    "tags": [
      "electronics",
      "smartwatches",
      "mobile accessories"
    ],
    "rating": 2.74,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/thumbnail.webp",
    "description": "The Apple Watch Series 4 in Gold is a stylish and advanced smartwatch with features like heart rate monitoring, fitness tracking, and a beautiful Retina display.",
    "inStock": true,
    "brand": "Apple"
  },
  {
    "id": "p-107",
    "name": "Beats Flex Wireless Earphones",
    "slug": "beats-flex-wireless-earphones-beats",
    "price": 4249,
    "originalPrice": 4492,
    "category": "Electronics",
    "tags": [
      "electronics",
      "wireless earphones",
      "mobile accessories"
    ],
    "rating": 4.24,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/beats-flex-wireless-earphones/thumbnail.webp",
    "description": "The Beats Flex Wireless Earphones offer a comfortable and versatile audio experience. With magnetic earbuds and up to 12 hours of battery life, they are ideal for everyday use.",
    "inStock": true,
    "brand": "Beats"
  },
  {
    "id": "p-108",
    "name": "iPhone 12 Silicone Case with MagSafe Plum",
    "slug": "iphone-12-silicone-case-with-magsafe-plum-apple",
    "price": 2549,
    "originalPrice": 2902,
    "category": "Electronics",
    "tags": [
      "electronics",
      "phone accessories",
      "mobile accessories"
    ],
    "rating": 3.62,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/iphone-12-silicone-case-with-magsafe-plum/thumbnail.webp",
    "description": "The iPhone 12 Silicone Case with MagSafe in Plum is a stylish and protective case designed for the iPhone 12. It features MagSafe technology for easy attachment of accessories.",
    "inStock": true,
    "brand": "Apple"
  },
  {
    "id": "p-109",
    "name": "Monopod",
    "slug": "monopod-techgear",
    "price": 1699,
    "originalPrice": 1845,
    "category": "Electronics",
    "tags": [
      "electronics",
      "camera accessories",
      "mobile accessories"
    ],
    "rating": 4.43,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/monopod/thumbnail.webp",
    "description": "The Monopod is a versatile camera accessory for stable and adjustable shooting. Perfect for capturing selfies, group photos, and videos with ease.",
    "inStock": true,
    "brand": "TechGear"
  },
  {
    "id": "p-110",
    "name": "Selfie Lamp with iPhone",
    "slug": "selfie-lamp-with-iphone-gadgetmaster",
    "price": 1274,
    "originalPrice": 1521,
    "category": "Electronics",
    "tags": [
      "electronics",
      "selfie accessories",
      "mobile accessories"
    ],
    "rating": 3.55,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/selfie-lamp-with-iphone/thumbnail.webp",
    "description": "The Selfie Lamp with iPhone is a portable and adjustable LED light designed to enhance your selfies and video calls. Attach it to your iPhone for well-lit photos.",
    "inStock": true,
    "brand": "GadgetMaster"
  },
  {
    "id": "p-111",
    "name": "Selfie Stick Monopod",
    "slug": "selfie-stick-monopod-snaptech",
    "price": 1104,
    "originalPrice": 1315,
    "category": "Electronics",
    "tags": [
      "electronics",
      "selfie accessories",
      "mobile accessories"
    ],
    "rating": 3.88,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/selfie-stick-monopod/thumbnail.webp",
    "description": "The Selfie Stick Monopod is a extendable and foldable device for capturing the perfect selfie or group photo. Compatible with smartphones and cameras.",
    "inStock": true,
    "brand": "SnapTech"
  },
  {
    "id": "p-112",
    "name": "TV Studio Camera Pedestal",
    "slug": "tv-studio-camera-pedestal-provision",
    "price": 42499,
    "originalPrice": 46031,
    "category": "Electronics",
    "tags": [
      "electronics",
      "camera accessories",
      "mobile accessories"
    ],
    "rating": 2.78,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/mobile-accessories/tv-studio-camera-pedestal/thumbnail.webp",
    "description": "The TV Studio Camera Pedestal is a professional-grade camera support system for smooth and precise camera movements in a studio setting. Ideal for broadcast and production.",
    "inStock": true,
    "brand": "ProVision"
  },
  {
    "id": "p-113",
    "name": "Generic Motorcycle",
    "slug": "generic-motorcycle-generic-motors",
    "price": 339999,
    "originalPrice": 381139,
    "category": "Sports & Outdoors",
    "tags": [
      "motorcycles",
      "motorcycle"
    ],
    "rating": 4.91,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/motorcycle/generic-motorcycle/thumbnail.webp",
    "description": "The Generic Motorcycle is a versatile and reliable bike suitable for various riding preferences. With a balanced design, it provides a comfortable and efficient riding experience.",
    "inStock": true,
    "brand": "Generic Motors"
  },
  {
    "id": "p-114",
    "name": "Kawasaki Z800",
    "slug": "kawasaki-z800-kawasaki",
    "price": 764999,
    "originalPrice": 839739,
    "category": "Sports & Outdoors",
    "tags": [
      "motorcycles",
      "sportbikes",
      "motorcycle"
    ],
    "rating": 3.98,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/motorcycle/kawasaki-z800/thumbnail.webp",
    "description": "The Kawasaki Z800 is a powerful and agile sportbike known for its striking design and performance. It's equipped with advanced features, making it a favorite among motorcycle enthusiasts.",
    "inStock": true,
    "brand": "Kawasaki"
  },
  {
    "id": "p-115",
    "name": "MotoGP CI.H1",
    "slug": "motogp-ci-h1-motogp",
    "price": 1274999,
    "originalPrice": 1363229,
    "category": "Sports & Outdoors",
    "tags": [
      "motorcycles",
      "sportbikes",
      "motorcycle"
    ],
    "rating": 2.97,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/motorcycle/motogp-ci.h1/thumbnail.webp",
    "description": "The MotoGP CI.H1 is a high-performance motorcycle inspired by MotoGP racing technology. It offers cutting-edge features and precision engineering for an exhilarating riding experience.",
    "inStock": true,
    "brand": "MotoGP"
  },
  {
    "id": "p-116",
    "name": "Scooter Motorcycle",
    "slug": "scooter-motorcycle-scootmaster",
    "price": 254999,
    "originalPrice": 270987,
    "category": "Sports & Outdoors",
    "tags": [
      "motorcycles",
      "scooters",
      "motorcycle"
    ],
    "rating": 2.53,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/motorcycle/scooter-motorcycle/thumbnail.webp",
    "description": "The Scooter Motorcycle is a practical and fuel-efficient bike ideal for urban commuting. It features a step-through design and user-friendly controls for easy maneuverability.",
    "inStock": true,
    "brand": "ScootMaster"
  },
  {
    "id": "p-117",
    "name": "Sportbike Motorcycle",
    "slug": "sportbike-motorcycle-speedmaster",
    "price": 637499,
    "originalPrice": 711321,
    "category": "Sports & Outdoors",
    "tags": [
      "motorcycles",
      "sportbikes",
      "motorcycle"
    ],
    "rating": 3.94,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/motorcycle/sportbike-motorcycle/thumbnail.webp",
    "description": "The Sportbike Motorcycle is designed for speed and agility, with a sleek and aerodynamic profile. It's suitable for riders looking for a dynamic and thrilling riding experience.",
    "inStock": true,
    "brand": "SpeedMaster"
  },
  {
    "id": "p-118",
    "name": "Attitude Super Leaves Hand Soap",
    "slug": "attitude-super-leaves-hand-soap-attitude",
    "price": 764,
    "originalPrice": 905,
    "category": "Electronics",
    "tags": [
      "personal care",
      "hand soap",
      "skin care"
    ],
    "rating": 3.19,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/thumbnail.webp",
    "description": "Attitude Super Leaves Hand Soap is a natural and nourishing hand soap enriched with the goodness of super leaves. It cleanses and moisturizes your hands, leaving them feeling fresh and soft.",
    "inStock": true,
    "brand": "Attitude"
  },
  {
    "id": "p-119",
    "name": "Olay Ultra Moisture Shea Butter Body Wash",
    "slug": "olay-ultra-moisture-shea-butter-body-wash-olay",
    "price": 1104,
    "originalPrice": 1285,
    "category": "Electronics",
    "tags": [
      "personal care",
      "body wash",
      "skin care"
    ],
    "rating": 4.51,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/skin-care/olay-ultra-moisture-shea-butter-body-wash/thumbnail.webp",
    "description": "Olay Ultra Moisture Shea Butter Body Wash is a luxurious body wash that hydrates and nourishes your skin with the moisturizing power of shea butter. Enjoy a rich lather and silky-smooth skin.",
    "inStock": true,
    "brand": "Olay"
  },
  {
    "id": "p-120",
    "name": "Vaseline Men Body and Face Lotion",
    "slug": "vaseline-men-body-and-face-lotion-vaseline",
    "price": 849,
    "originalPrice": 963,
    "category": "Electronics",
    "tags": [
      "personal care",
      "body lotion",
      "skin care"
    ],
    "rating": 3.16,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/skin-care/vaseline-men-body-and-face-lotion/thumbnail.webp",
    "description": "Vaseline Men Body and Face Lotion is a specially formulated lotion designed to provide long-lasting moisture to men's skin. It absorbs quickly and helps keep the skin hydrated and healthy.",
    "inStock": true,
    "brand": "Vaseline"
  },
  {
    "id": "p-121",
    "name": "iPhone 5s",
    "slug": "iphone-5s-apple",
    "price": 16999,
    "originalPrice": 19194,
    "category": "Electronics",
    "tags": [
      "smartphones",
      "apple",
      "smartphones"
    ],
    "rating": 2.83,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/thumbnail.webp",
    "description": "The iPhone 5s is a classic smartphone known for its compact design and advanced features during its release. While it's an older model, it still provides a reliable user experience.",
    "inStock": true,
    "brand": "Apple"
  },
  {
    "id": "p-122",
    "name": "iPhone 6",
    "slug": "iphone-6-apple",
    "price": 25499,
    "originalPrice": 27205,
    "category": "Electronics",
    "tags": [
      "smartphones",
      "apple",
      "smartphones"
    ],
    "rating": 3.41,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/smartphones/iphone-6/thumbnail.webp",
    "description": "The iPhone 6 is a stylish and capable smartphone with a larger display and improved performance. It introduced new features and design elements, making it a popular choice in its time.",
    "inStock": true,
    "brand": "Apple"
  },
  {
    "id": "p-123",
    "name": "iPhone 13 Pro",
    "slug": "iphone-13-pro-apple",
    "price": 93499,
    "originalPrice": 102260,
    "category": "Electronics",
    "tags": [
      "smartphones",
      "apple",
      "smartphones"
    ],
    "rating": 4.12,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/thumbnail.webp",
    "description": "The iPhone 13 Pro is a cutting-edge smartphone with a powerful camera system, high-performance chip, and stunning display. It offers advanced features for users who demand top-notch technology.",
    "inStock": true,
    "brand": "Apple"
  },
  {
    "id": "p-124",
    "name": "iPhone X",
    "slug": "iphone-x-apple",
    "price": 76499,
    "originalPrice": 91485,
    "category": "Electronics",
    "tags": [
      "smartphones",
      "apple",
      "smartphones"
    ],
    "rating": 2.51,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/smartphones/iphone-x/thumbnail.webp",
    "description": "The iPhone X is a flagship smartphone featuring a bezel-less OLED display, facial recognition technology (Face ID), and impressive performance. It represents a milestone in iPhone design and innovation.",
    "inStock": true,
    "brand": "Apple"
  },
  {
    "id": "p-125",
    "name": "Oppo A57",
    "slug": "oppo-a57-oppo",
    "price": 21249,
    "originalPrice": 21765,
    "category": "Electronics",
    "tags": [
      "smartphones",
      "oppo",
      "smartphones"
    ],
    "rating": 3.94,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/thumbnail.webp",
    "description": "The Oppo A57 is a mid-range smartphone known for its sleek design and capable features. It offers a balance of performance and affordability, making it a popular choice.",
    "inStock": true,
    "brand": "Oppo"
  },
  {
    "id": "p-126",
    "name": "Oppo F19 Pro Plus",
    "slug": "oppo-f19-pro-plus-oppo",
    "price": 33999,
    "originalPrice": 40336,
    "category": "Electronics",
    "tags": [
      "smartphones",
      "oppo",
      "smartphones"
    ],
    "rating": 3.51,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/thumbnail.webp",
    "description": "The Oppo F19 Pro Plus is a feature-rich smartphone with a focus on camera capabilities. It boasts advanced photography features and a powerful performance for a premium user experience.",
    "inStock": true,
    "brand": "Oppo"
  },
  {
    "id": "p-127",
    "name": "Oppo K1",
    "slug": "oppo-k1-oppo",
    "price": 25499,
    "originalPrice": 30163,
    "category": "Electronics",
    "tags": [
      "smartphones",
      "oppo",
      "smartphones"
    ],
    "rating": 4.25,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/thumbnail.webp",
    "description": "The Oppo K1 series offers a range of smartphones with various features and specifications. Known for their stylish design and reliable performance, the Oppo K1 series caters to diverse user preferences.",
    "inStock": true,
    "brand": "Oppo"
  },
  {
    "id": "p-128",
    "name": "Realme C35",
    "slug": "realme-c35-realme",
    "price": 12749,
    "originalPrice": 14700,
    "category": "Electronics",
    "tags": [
      "smartphones",
      "realme",
      "smartphones"
    ],
    "rating": 4.2,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/smartphones/realme-c35/thumbnail.webp",
    "description": "The Realme C35 is a budget-friendly smartphone with a focus on providing essential features for everyday use. It offers a reliable performance and user-friendly experience.",
    "inStock": true,
    "brand": "Realme"
  },
  {
    "id": "p-129",
    "name": "Realme X",
    "slug": "realme-x-realme",
    "price": 25499,
    "originalPrice": 27271,
    "category": "Electronics",
    "tags": [
      "smartphones",
      "realme",
      "smartphones"
    ],
    "rating": 3.7,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/smartphones/realme-x/thumbnail.webp",
    "description": "The Realme X is a mid-range smartphone known for its sleek design and impressive display. It offers a good balance of performance and camera capabilities for users seeking a quality device.",
    "inStock": true,
    "brand": "Realme"
  },
  {
    "id": "p-130",
    "name": "Realme XT",
    "slug": "realme-xt-realme",
    "price": 29749,
    "originalPrice": 33173,
    "category": "Electronics",
    "tags": [
      "smartphones",
      "realme",
      "smartphones"
    ],
    "rating": 4.58,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/smartphones/realme-xt/thumbnail.webp",
    "description": "The Realme XT is a feature-rich smartphone with a focus on camera technology. It comes equipped with advanced camera sensors, delivering high-quality photos and videos for photography enthusiasts.",
    "inStock": true,
    "brand": "Realme"
  },
  {
    "id": "p-131",
    "name": "Samsung Galaxy S7",
    "slug": "samsung-galaxy-s7-samsung",
    "price": 25499,
    "originalPrice": 30484,
    "category": "Electronics",
    "tags": [
      "smartphones",
      "samsung galaxy",
      "smartphones"
    ],
    "rating": 3.3,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s7/thumbnail.webp",
    "description": "The Samsung Galaxy S7 is a flagship smartphone known for its sleek design and advanced features. It features a high-resolution display, powerful camera, and robust performance.",
    "inStock": true,
    "brand": "Samsung"
  },
  {
    "id": "p-132",
    "name": "Samsung Galaxy S8",
    "slug": "samsung-galaxy-s8-samsung",
    "price": 42499,
    "originalPrice": 50765,
    "category": "Electronics",
    "tags": [
      "smartphones",
      "samsung galaxy",
      "smartphones"
    ],
    "rating": 4.4,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/thumbnail.webp",
    "description": "The Samsung Galaxy S8 is a premium smartphone with an Infinity Display, offering a stunning visual experience. It boasts advanced camera capabilities and cutting-edge technology.",
    "inStock": true,
    "brand": "Samsung"
  },
  {
    "id": "p-133",
    "name": "Samsung Galaxy S10",
    "slug": "samsung-galaxy-s10-samsung",
    "price": 59499,
    "originalPrice": 62825,
    "category": "Electronics",
    "tags": [
      "smartphones",
      "samsung galaxy",
      "smartphones"
    ],
    "rating": 3.06,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/thumbnail.webp",
    "description": "The Samsung Galaxy S10 is a flagship device featuring a dynamic AMOLED display, versatile camera system, and powerful performance. It represents innovation and excellence in smartphone technology.",
    "inStock": true,
    "brand": "Samsung"
  },
  {
    "id": "p-134",
    "name": "Vivo S1",
    "slug": "vivo-s1-vivo",
    "price": 21249,
    "originalPrice": 23410,
    "category": "Electronics",
    "tags": [
      "smartphones",
      "vivo",
      "smartphones"
    ],
    "rating": 3.5,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/smartphones/vivo-s1/thumbnail.webp",
    "description": "The Vivo S1 is a stylish and mid-range smartphone offering a blend of design and performance. It features a vibrant display, capable camera system, and reliable functionality.",
    "inStock": true,
    "brand": "Vivo"
  },
  {
    "id": "p-135",
    "name": "Vivo V9",
    "slug": "vivo-v9-vivo",
    "price": 25499,
    "originalPrice": 30005,
    "category": "Electronics",
    "tags": [
      "smartphones",
      "vivo",
      "smartphones"
    ],
    "rating": 3.6,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/smartphones/vivo-v9/thumbnail.webp",
    "description": "The Vivo V9 is a smartphone known for its sleek design and emphasis on capturing high-quality selfies. It features a notch display, dual-camera setup, and a modern design.",
    "inStock": true,
    "brand": "Vivo"
  },
  {
    "id": "p-136",
    "name": "Vivo X21",
    "slug": "vivo-x21-vivo",
    "price": 42499,
    "originalPrice": 49898,
    "category": "Electronics",
    "tags": [
      "smartphones",
      "vivo",
      "smartphones"
    ],
    "rating": 4.26,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/thumbnail.webp",
    "description": "The Vivo X21 is a premium smartphone with a focus on cutting-edge technology. It features an in-display fingerprint sensor, a high-resolution display, and advanced camera capabilities.",
    "inStock": true,
    "brand": "Vivo"
  },
  {
    "id": "p-137",
    "name": "American Football",
    "slug": "american-football-undefined",
    "price": 1699,
    "originalPrice": 1783,
    "category": "Sports & Outdoors",
    "tags": [
      "sports equipment",
      "american football",
      "sports accessories"
    ],
    "rating": 4.91,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/sports-accessories/american-football/thumbnail.webp",
    "description": "The American Football is a classic ball used in American football games. It is designed for throwing and catching, making it an essential piece of equipment for the sport.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-138",
    "name": "Baseball Ball",
    "slug": "baseball-ball-undefined",
    "price": 764,
    "originalPrice": 777,
    "category": "Sports & Outdoors",
    "tags": [
      "sports equipment",
      "baseball",
      "sports accessories"
    ],
    "rating": 2.57,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-ball/thumbnail.webp",
    "description": "The Baseball Ball is a standard baseball used in baseball games. It features a durable leather cover and is designed for pitching, hitting, and fielding in the game of baseball.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-139",
    "name": "Baseball Glove",
    "slug": "baseball-glove-undefined",
    "price": 2124,
    "originalPrice": 2186,
    "category": "Sports & Outdoors",
    "tags": [
      "sports equipment",
      "baseball",
      "sports accessories"
    ],
    "rating": 3.96,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-glove/thumbnail.webp",
    "description": "The Baseball Glove is a protective glove worn by baseball players. It is designed to catch and field the baseball, providing players with comfort and control during the game.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-140",
    "name": "Basketball",
    "slug": "basketball-undefined",
    "price": 1274,
    "originalPrice": 1369,
    "category": "Sports & Outdoors",
    "tags": [
      "sports equipment",
      "basketball",
      "sports accessories"
    ],
    "rating": 4.66,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/sports-accessories/basketball/thumbnail.webp",
    "description": "The Basketball is a standard ball used in basketball games. It is designed for dribbling, shooting, and passing in the game of basketball, suitable for both indoor and outdoor play.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-141",
    "name": "Basketball Rim",
    "slug": "basketball-rim-undefined",
    "price": 3399,
    "originalPrice": 3662,
    "category": "Sports & Outdoors",
    "tags": [
      "sports equipment",
      "basketball",
      "sports accessories"
    ],
    "rating": 4.6,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/sports-accessories/basketball-rim/thumbnail.webp",
    "description": "The Basketball Rim is a sturdy hoop and net assembly mounted on a basketball backboard. It provides a target for shooting and scoring in the game of basketball.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-142",
    "name": "Cricket Ball",
    "slug": "cricket-ball-undefined",
    "price": 1104,
    "originalPrice": 1199,
    "category": "Sports & Outdoors",
    "tags": [
      "sports equipment",
      "cricket",
      "sports accessories"
    ],
    "rating": 3.53,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-ball/thumbnail.webp",
    "description": "The Cricket Ball is a hard leather ball used in the sport of cricket. It is bowled and batted in the game, and its hardness and seam contribute to the dynamics of cricket play.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-143",
    "name": "Cricket Bat",
    "slug": "cricket-bat-undefined",
    "price": 2549,
    "originalPrice": 2633,
    "category": "Sports & Outdoors",
    "tags": [
      "sports equipment",
      "cricket",
      "sports accessories"
    ],
    "rating": 3.17,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-bat/thumbnail.webp",
    "description": "The Cricket Bat is an essential piece of cricket equipment used by batsmen to hit the cricket ball. It is made of wood and comes in various sizes and designs.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-144",
    "name": "Cricket Helmet",
    "slug": "cricket-helmet-undefined",
    "price": 3824,
    "originalPrice": 4193,
    "category": "Sports & Outdoors",
    "tags": [
      "sports equipment",
      "cricket",
      "sports accessories"
    ],
    "rating": 4.69,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-helmet/thumbnail.webp",
    "description": "The Cricket Helmet is a protective headgear worn by cricket players, especially batsmen and wicketkeepers. It provides protection against fast bowling and bouncers.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-145",
    "name": "Cricket Wicket",
    "slug": "cricket-wicket-undefined",
    "price": 2549,
    "originalPrice": 2981,
    "category": "Sports & Outdoors",
    "tags": [
      "sports equipment",
      "cricket",
      "sports accessories"
    ],
    "rating": 4.73,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-wicket/thumbnail.webp",
    "description": "The Cricket Wicket is a set of three stumps and two bails, forming a wicket used in the sport of cricket. Batsmen aim to protect the wicket while scoring runs.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-146",
    "name": "Feather Shuttlecock",
    "slug": "feather-shuttlecock-undefined",
    "price": 509,
    "originalPrice": 524,
    "category": "Sports & Outdoors",
    "tags": [
      "sports equipment",
      "badminton",
      "sports accessories"
    ],
    "rating": 2.85,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/sports-accessories/feather-shuttlecock/thumbnail.webp",
    "description": "The Feather Shuttlecock is used in the sport of badminton. It features natural feathers and is designed for high-speed play, providing stability and accuracy during matches.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-147",
    "name": "Football",
    "slug": "football-undefined",
    "price": 1529,
    "originalPrice": 1608,
    "category": "Sports & Outdoors",
    "tags": [
      "sports equipment",
      "football",
      "sports accessories"
    ],
    "rating": 3.28,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/sports-accessories/football/thumbnail.webp",
    "description": "The Football, also known as a soccer ball, is the standard ball used in the sport of football (soccer). It is designed for kicking and passing in the game.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-148",
    "name": "Golf Ball",
    "slug": "golf-ball-undefined",
    "price": 849,
    "originalPrice": 996,
    "category": "Sports & Outdoors",
    "tags": [
      "sports equipment",
      "golf",
      "sports accessories"
    ],
    "rating": 4.3,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/sports-accessories/golf-ball/thumbnail.webp",
    "description": "The Golf Ball is a small ball used in the sport of golf. It features dimples on its surface, providing aerodynamic lift and distance when struck by a golf club.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-149",
    "name": "Iron Golf",
    "slug": "iron-golf-undefined",
    "price": 4249,
    "originalPrice": 4526,
    "category": "Sports & Outdoors",
    "tags": [
      "sports equipment",
      "golf",
      "sports accessories"
    ],
    "rating": 4.41,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/sports-accessories/iron-golf/thumbnail.webp",
    "description": "The Iron Golf is a type of golf club designed for various golf shots. It features a solid metal head and is used for approach shots, chipping, and other golfing techniques.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-150",
    "name": "Metal Baseball Bat",
    "slug": "metal-baseball-bat-undefined",
    "price": 2549,
    "originalPrice": 3046,
    "category": "Sports & Outdoors",
    "tags": [
      "sports equipment",
      "baseball",
      "sports accessories"
    ],
    "rating": 4.66,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/sports-accessories/metal-baseball-bat/thumbnail.webp",
    "description": "The Metal Baseball Bat is a durable and lightweight baseball bat made from metal alloys. It is commonly used in baseball games for hitting and batting practice.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-151",
    "name": "Tennis Ball",
    "slug": "tennis-ball-undefined",
    "price": 594,
    "originalPrice": 664,
    "category": "Sports & Outdoors",
    "tags": [
      "sports equipment",
      "tennis",
      "sports accessories"
    ],
    "rating": 4.06,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/sports-accessories/tennis-ball/thumbnail.webp",
    "description": "The Tennis Ball is a standard ball used in the sport of tennis. It is designed for bouncing and hitting with tennis rackets during matches or practice sessions.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-152",
    "name": "Tennis Racket",
    "slug": "tennis-racket-undefined",
    "price": 4249,
    "originalPrice": 5082,
    "category": "Sports & Outdoors",
    "tags": [
      "sports equipment",
      "tennis",
      "sports accessories"
    ],
    "rating": 4.03,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/sports-accessories/tennis-racket/thumbnail.webp",
    "description": "The Tennis Racket is an essential piece of equipment used in the sport of tennis. It features a frame with strings and a grip, allowing players to hit the tennis ball.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-153",
    "name": "Volleyball",
    "slug": "volleyball-undefined",
    "price": 1019,
    "originalPrice": 1144,
    "category": "Sports & Outdoors",
    "tags": [
      "sports equipment",
      "volleyball",
      "sports accessories"
    ],
    "rating": 3.84,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/sports-accessories/volleyball/thumbnail.webp",
    "description": "The Volleyball is a standard ball used in the sport of volleyball. It is designed for passing, setting, and spiking over the net during volleyball matches.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-154",
    "name": "Black Sun Glasses",
    "slug": "black-sun-glasses-fashion-shades",
    "price": 2549,
    "originalPrice": 2675,
    "category": "Fashion",
    "tags": [
      "eyewear",
      "sunglasses",
      "sunglasses"
    ],
    "rating": 4.41,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/sunglasses/black-sun-glasses/thumbnail.webp",
    "description": "The Black Sun Glasses are a classic and stylish choice, featuring a sleek black frame and tinted lenses. They provide both UV protection and a fashionable look.",
    "inStock": true,
    "brand": "Fashion Shades"
  },
  {
    "id": "p-155",
    "name": "Classic Sun Glasses",
    "slug": "classic-sun-glasses-fashion-shades",
    "price": 2124,
    "originalPrice": 2229,
    "category": "Fashion",
    "tags": [
      "eyewear",
      "sunglasses",
      "sunglasses"
    ],
    "rating": 3.86,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/sunglasses/classic-sun-glasses/thumbnail.webp",
    "description": "The Classic Sun Glasses offer a timeless design with a neutral frame and UV-protected lenses. These sunglasses are versatile and suitable for various occasions.",
    "inStock": true,
    "brand": "Fashion Shades"
  },
  {
    "id": "p-156",
    "name": "Green and Black Glasses",
    "slug": "green-and-black-glasses-fashion-shades",
    "price": 2974,
    "originalPrice": 3004,
    "category": "Fashion",
    "tags": [
      "eyewear",
      "sunglasses",
      "sunglasses"
    ],
    "rating": 4.55,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/sunglasses/green-and-black-glasses/thumbnail.webp",
    "description": "The Green and Black Glasses feature a bold combination of green and black colors, adding a touch of vibrancy to your eyewear collection. They are both stylish and eye-catching.",
    "inStock": true,
    "brand": "Fashion Shades"
  },
  {
    "id": "p-157",
    "name": "Party Glasses",
    "slug": "party-glasses-fashion-fun",
    "price": 1699,
    "originalPrice": 1890,
    "category": "Fashion",
    "tags": [
      "eyewear",
      "party glasses",
      "sunglasses"
    ],
    "rating": 2.79,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/sunglasses/party-glasses/thumbnail.webp",
    "description": "The Party Glasses are designed to add flair to your party outfit. With unique shapes or colorful frames, they're perfect for adding a playful touch to your look during celebrations.",
    "inStock": true,
    "brand": "Fashion Fun"
  },
  {
    "id": "p-158",
    "name": "Sunglasses",
    "slug": "sunglasses-fashion-shades",
    "price": 1954,
    "originalPrice": 1984,
    "category": "Fashion",
    "tags": [
      "eyewear",
      "sunglasses",
      "sunglasses"
    ],
    "rating": 3.02,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/sunglasses/sunglasses/thumbnail.webp",
    "description": "The Sunglasses offer a classic and simple design with a focus on functionality. These sunglasses provide essential UV protection while maintaining a timeless look.",
    "inStock": true,
    "brand": "Fashion Shades"
  },
  {
    "id": "p-159",
    "name": "iPad Mini 2021 Starlight",
    "slug": "ipad-mini-2021-starlight-apple",
    "price": 42499,
    "originalPrice": 44046,
    "category": "Laptops & Computers",
    "tags": [
      "electronics",
      "tablets",
      "tablets"
    ],
    "rating": 3.18,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/thumbnail.webp",
    "description": "The iPad Mini 2021 in Starlight is a compact and powerful tablet from Apple. Featuring a stunning Retina display, powerful A-series chip, and a sleek design, it offers a premium tablet experience.",
    "inStock": true,
    "brand": "Apple"
  },
  {
    "id": "p-160",
    "name": "Samsung Galaxy Tab S8 Plus Grey",
    "slug": "samsung-galaxy-tab-s8-plus-grey-samsung",
    "price": 50999,
    "originalPrice": 57787,
    "category": "Laptops & Computers",
    "tags": [
      "electronics",
      "tablets",
      "tablets"
    ],
    "rating": 4.68,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/thumbnail.webp",
    "description": "The Samsung Galaxy Tab S8 Plus in Grey is a high-performance Android tablet by Samsung. With a large AMOLED display, powerful processor, and S Pen support, it's ideal for productivity and entertainment.",
    "inStock": true,
    "brand": "Samsung"
  },
  {
    "id": "p-161",
    "name": "Samsung Galaxy Tab White",
    "slug": "samsung-galaxy-tab-white-samsung",
    "price": 29749,
    "originalPrice": 35163,
    "category": "Laptops & Computers",
    "tags": [
      "electronics",
      "tablets",
      "tablets"
    ],
    "rating": 3.72,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/thumbnail.webp",
    "description": "The Samsung Galaxy Tab in White is a sleek and versatile Android tablet. With a vibrant display, long-lasting battery, and a range of features, it offers a great user experience for various tasks.",
    "inStock": true,
    "brand": "Samsung"
  },
  {
    "id": "p-162",
    "name": "Blue Frock",
    "slug": "blue-frock-undefined",
    "price": 2549,
    "originalPrice": 2858,
    "category": "Fashion",
    "tags": [
      "clothing",
      "dresses",
      "tops"
    ],
    "rating": 4.17,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/tops/blue-frock/thumbnail.webp",
    "description": "The Blue Frock is a charming and stylish dress for various occasions. With a vibrant blue color and a comfortable design, it adds a touch of elegance to your wardrobe.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-163",
    "name": "Girl Summer Dress",
    "slug": "girl-summer-dress-undefined",
    "price": 1699,
    "originalPrice": 2025,
    "category": "Fashion",
    "tags": [
      "clothing",
      "girls' dresses",
      "tops"
    ],
    "rating": 4.77,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/tops/girl-summer-dress/thumbnail.webp",
    "description": "The Girl Summer Dress is a cute and breezy dress designed for warm weather. With playful patterns and lightweight fabric, it's perfect for keeping cool and stylish during the summer.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-164",
    "name": "Gray Dress",
    "slug": "gray-dress-undefined",
    "price": 2974,
    "originalPrice": 3399,
    "category": "Fashion",
    "tags": [
      "clothing",
      "dresses",
      "tops"
    ],
    "rating": 2.72,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/tops/gray-dress/thumbnail.webp",
    "description": "The Gray Dress is a versatile and chic option for various occasions. With a neutral gray color, it can be dressed up or down, making it a wardrobe staple for any fashion-forward individual.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-165",
    "name": "Short Frock",
    "slug": "short-frock-undefined",
    "price": 2124,
    "originalPrice": 2410,
    "category": "Fashion",
    "tags": [
      "clothing",
      "dresses",
      "tops"
    ],
    "rating": 3.23,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/tops/short-frock/thumbnail.webp",
    "description": "The Short Frock is a playful and trendy dress with a shorter length. Ideal for casual outings or special occasions, it combines style and comfort for a fashionable look.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-166",
    "name": "Tartan Dress",
    "slug": "tartan-dress-undefined",
    "price": 3399,
    "originalPrice": 3839,
    "category": "Fashion",
    "tags": [
      "clothing",
      "dresses",
      "tops"
    ],
    "rating": 4.05,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/tops/tartan-dress/thumbnail.webp",
    "description": "The Tartan Dress features a classic tartan pattern, bringing a timeless and sophisticated touch to your wardrobe. Perfect for fall and winter, it adds a hint of traditional charm.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-167",
    "name": "300 Touring",
    "slug": "300-touring-chrysler",
    "price": 2464999,
    "originalPrice": 2563106,
    "category": "Sports & Outdoors",
    "tags": [
      "sedans",
      "vehicles",
      "vehicle"
    ],
    "rating": 4.05,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/vehicle/300-touring/thumbnail.webp",
    "description": "The 300 Touring is a stylish and comfortable sedan, known for its luxurious features and smooth performance.",
    "inStock": true,
    "brand": "Chrysler"
  },
  {
    "id": "p-168",
    "name": "Charger SXT RWD",
    "slug": "charger-sxt-rwd-dodge",
    "price": 2804999,
    "originalPrice": 3035850,
    "category": "Sports & Outdoors",
    "tags": [
      "sedans",
      "sports cars",
      "vehicles",
      "vehicle"
    ],
    "rating": 2.58,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/vehicle/charger-sxt-rwd/thumbnail.webp",
    "description": "The Charger SXT RWD is a powerful and sporty rear-wheel-drive sedan, offering a blend of performance and practicality.",
    "inStock": true,
    "brand": "Dodge"
  },
  {
    "id": "p-169",
    "name": "Dodge Hornet GT Plus",
    "slug": "dodge-hornet-gt-plus-dodge",
    "price": 2124999,
    "originalPrice": 2180886,
    "category": "Sports & Outdoors",
    "tags": [
      "hatchbacks",
      "compact cars",
      "vehicles",
      "vehicle"
    ],
    "rating": 2.65,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/vehicle/dodge-hornet-gt-plus/thumbnail.webp",
    "description": "The Dodge Hornet GT Plus is a compact and agile hatchback, perfect for urban driving with a touch of sportiness.",
    "inStock": true,
    "brand": "Dodge"
  },
  {
    "id": "p-170",
    "name": "Durango SXT RWD",
    "slug": "durango-sxt-rwd-dodge",
    "price": 3144999,
    "originalPrice": 3662037,
    "category": "Sports & Outdoors",
    "tags": [
      "suvs",
      "vehicles",
      "vehicle"
    ],
    "rating": 4.07,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/vehicle/durango-sxt-rwd/thumbnail.webp",
    "description": "The Durango SXT RWD is a spacious and versatile SUV, known for its strong performance and family-friendly features.",
    "inStock": true,
    "brand": "Dodge"
  },
  {
    "id": "p-171",
    "name": "Pacifica Touring",
    "slug": "pacifica-touring-chrysler",
    "price": 2719999,
    "originalPrice": 3121471,
    "category": "Sports & Outdoors",
    "tags": [
      "minivans",
      "vehicles",
      "vehicle"
    ],
    "rating": 3.62,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/vehicle/pacifica-touring/thumbnail.webp",
    "description": "The Pacifica Touring is a stylish and well-equipped minivan, offering comfort and convenience for family journeys.",
    "inStock": true,
    "brand": "Chrysler"
  },
  {
    "id": "p-172",
    "name": "Blue Women's Handbag",
    "slug": "blue-women-s-handbag-fashionista",
    "price": 4249,
    "originalPrice": 5009,
    "category": "Fashion",
    "tags": [
      "fashion accessories",
      "handbags",
      "womens bags"
    ],
    "rating": 2.92,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/womens-bags/blue-women's-handbag/thumbnail.webp",
    "description": "The Blue Women's Handbag is a stylish and spacious accessory for everyday use. With a vibrant blue color and multiple compartments, it combines fashion and functionality.",
    "inStock": true,
    "brand": "Fashionista"
  },
  {
    "id": "p-173",
    "name": "Heshe Women's Leather Bag",
    "slug": "heshe-women-s-leather-bag-heshe",
    "price": 11049,
    "originalPrice": 11477,
    "category": "Fashion",
    "tags": [
      "fashion accessories",
      "leather bags",
      "womens bags"
    ],
    "rating": 4.92,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/thumbnail.webp",
    "description": "The Heshe Women's Leather Bag is a luxurious and high-quality leather bag for the sophisticated woman. With a timeless design and durable craftsmanship, it's a versatile accessory.",
    "inStock": true,
    "brand": "Heshe"
  },
  {
    "id": "p-174",
    "name": "Prada Women Bag",
    "slug": "prada-women-bag-prada",
    "price": 50999,
    "originalPrice": 58185,
    "category": "Fashion",
    "tags": [
      "fashion accessories",
      "designer bags",
      "womens bags"
    ],
    "rating": 2.71,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/womens-bags/prada-women-bag/thumbnail.webp",
    "description": "The Prada Women Bag is an iconic designer bag that exudes elegance and luxury. Crafted with precision and featuring the Prada logo, it's a statement piece for fashion enthusiasts.",
    "inStock": true,
    "brand": "Prada"
  },
  {
    "id": "p-175",
    "name": "White Faux Leather Backpack",
    "slug": "white-faux-leather-backpack-urban-chic",
    "price": 3399,
    "originalPrice": 3916,
    "category": "Fashion",
    "tags": [
      "fashion accessories",
      "backpacks",
      "womens bags"
    ],
    "rating": 3.36,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/womens-bags/white-faux-leather-backpack/thumbnail.webp",
    "description": "The White Faux Leather Backpack is a trendy and practical backpack for the modern woman. With a sleek white design and ample storage space, it's perfect for both casual and on-the-go styles.",
    "inStock": true,
    "brand": "Urban Chic"
  },
  {
    "id": "p-176",
    "name": "Women Handbag Black",
    "slug": "women-handbag-black-elegance-collection",
    "price": 5099,
    "originalPrice": 5692,
    "category": "Fashion",
    "tags": [
      "fashion accessories",
      "handbags",
      "womens bags"
    ],
    "rating": 2.89,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/womens-bags/women-handbag-black/thumbnail.webp",
    "description": "The Women Handbag in Black is a classic and versatile accessory that complements various outfits. With a timeless black color and functional design, it's a must-have in every woman's wardrobe.",
    "inStock": true,
    "brand": "Elegance Collection"
  },
  {
    "id": "p-177",
    "name": "Black Women's Gown",
    "slug": "black-women-s-gown-undefined",
    "price": 11049,
    "originalPrice": 12207,
    "category": "Fashion",
    "tags": [
      "clothing",
      "gowns",
      "womens dresses"
    ],
    "rating": 3.64,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/womens-dresses/black-women's-gown/thumbnail.webp",
    "description": "The Black Women's Gown is an elegant and timeless evening gown. With a sleek black design, it's perfect for formal events and special occasions, exuding sophistication and style.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-178",
    "name": "Corset Leather With Skirt",
    "slug": "corset-leather-with-skirt-undefined",
    "price": 7649,
    "originalPrice": 8893,
    "category": "Fashion",
    "tags": [
      "clothing",
      "corsets",
      "skirts",
      "womens dresses"
    ],
    "rating": 3.05,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/womens-dresses/corset-leather-with-skirt/thumbnail.webp",
    "description": "The Corset Leather With Skirt is a bold and edgy ensemble that combines a stylish corset with a matching skirt. Ideal for fashion-forward individuals, it makes a statement at any event.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-179",
    "name": "Corset With Black Skirt",
    "slug": "corset-with-black-skirt-undefined",
    "price": 6799,
    "originalPrice": 7823,
    "category": "Fashion",
    "tags": [
      "clothing",
      "corsets",
      "skirts",
      "womens dresses"
    ],
    "rating": 4.52,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/womens-dresses/corset-with-black-skirt/thumbnail.webp",
    "description": "The Corset With Black Skirt is a chic and versatile outfit that pairs a fashionable corset with a classic black skirt. It offers a trendy and coordinated look for various occasions.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-180",
    "name": "Dress Pea",
    "slug": "dress-pea-undefined",
    "price": 4249,
    "originalPrice": 5000,
    "category": "Fashion",
    "tags": [
      "clothing",
      "dresses",
      "womens dresses"
    ],
    "rating": 4.88,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/womens-dresses/dress-pea/thumbnail.webp",
    "description": "The Dress Pea is a stylish and comfortable dress with a pea pattern. Perfect for casual outings, it adds a playful and fun element to your wardrobe, making it a great choice for day-to-day wear.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-181",
    "name": "Marni Red & Black Suit",
    "slug": "marni-red-black-suit-undefined",
    "price": 15299,
    "originalPrice": 18209,
    "category": "Fashion",
    "tags": [
      "clothing",
      "suits",
      "womens dresses"
    ],
    "rating": 4.48,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/womens-dresses/marni-red-&-black-suit/thumbnail.webp",
    "description": "The Marni Red & Black Suit is a sophisticated and fashion-forward suit ensemble. With a combination of red and black tones, it showcases a modern design for a bold and confident look.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-182",
    "name": "Green Crystal Earring",
    "slug": "green-crystal-earring-undefined",
    "price": 2549,
    "originalPrice": 2937,
    "category": "Fashion",
    "tags": [
      "fashion accessories",
      "earrings",
      "womens jewellery"
    ],
    "rating": 3.96,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/womens-jewellery/green-crystal-earring/thumbnail.webp",
    "description": "The Green Crystal Earring is a dazzling accessory that features a vibrant green crystal. With a classic design, it adds a touch of elegance to your ensemble, perfect for formal or special occasions.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-183",
    "name": "Green Oval Earring",
    "slug": "green-oval-earring-undefined",
    "price": 2124,
    "originalPrice": 2446,
    "category": "Fashion",
    "tags": [
      "fashion accessories",
      "earrings",
      "womens jewellery"
    ],
    "rating": 3.57,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/womens-jewellery/green-oval-earring/thumbnail.webp",
    "description": "The Green Oval Earring is a stylish and versatile accessory with a unique oval shape. Whether for casual or dressy occasions, its green hue and contemporary design make it a standout piece.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-184",
    "name": "Tropical Earring",
    "slug": "tropical-earring-undefined",
    "price": 1699,
    "originalPrice": 1712,
    "category": "Fashion",
    "tags": [
      "fashion accessories",
      "earrings",
      "womens jewellery"
    ],
    "rating": 4.4,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/womens-jewellery/tropical-earring/thumbnail.webp",
    "description": "The Tropical Earring is a fun and playful accessory inspired by tropical elements. Featuring vibrant colors and a lively design, it's perfect for adding a touch of summer to your look.",
    "inStock": true,
    "brand": ""
  },
  {
    "id": "p-185",
    "name": "Black & Brown Slipper",
    "slug": "black-brown-slipper-comfort-trends",
    "price": 1699,
    "originalPrice": 1756,
    "category": "Fashion",
    "tags": [
      "footwear",
      "slippers",
      "womens shoes"
    ],
    "rating": 2.53,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/thumbnail.webp",
    "description": "The Black & Brown Slipper is a comfortable and stylish choice for casual wear. Featuring a blend of black and brown colors, it adds a touch of sophistication to your relaxation.",
    "inStock": true,
    "brand": "Comfort Trends"
  },
  {
    "id": "p-186",
    "name": "Calvin Klein Heel Shoes",
    "slug": "calvin-klein-heel-shoes-calvin-klein",
    "price": 6799,
    "originalPrice": 7016,
    "category": "Fashion",
    "tags": [
      "footwear",
      "heel shoes",
      "womens shoes"
    ],
    "rating": 4.92,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/womens-shoes/calvin-klein-heel-shoes/thumbnail.webp",
    "description": "Calvin Klein Heel Shoes are elegant and sophisticated, designed for formal occasions. With a classic design and high-quality materials, they complement your stylish ensemble.",
    "inStock": true,
    "brand": "Calvin Klein"
  },
  {
    "id": "p-187",
    "name": "Golden Shoes Woman",
    "slug": "golden-shoes-woman-fashion-diva",
    "price": 4249,
    "originalPrice": 4841,
    "category": "Fashion",
    "tags": [
      "footwear",
      "women's shoes",
      "womens shoes"
    ],
    "rating": 3.26,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/womens-shoes/golden-shoes-woman/thumbnail.webp",
    "description": "The Golden Shoes for Women are a glamorous choice for special occasions. Featuring a golden hue and stylish design, they add a touch of luxury to your outfit.",
    "inStock": true,
    "brand": "Fashion Diva"
  },
  {
    "id": "p-188",
    "name": "Pampi Shoes",
    "slug": "pampi-shoes-pampi",
    "price": 2549,
    "originalPrice": 2909,
    "category": "Fashion",
    "tags": [
      "footwear",
      "casual shoes",
      "womens shoes"
    ],
    "rating": 3.05,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/womens-shoes/pampi-shoes/thumbnail.webp",
    "description": "Pampi Shoes offer a blend of comfort and style for everyday use. With a versatile design, they are suitable for various casual occasions, providing a trendy and relaxed look.",
    "inStock": true,
    "brand": "Pampi"
  },
  {
    "id": "p-189",
    "name": "Red Shoes",
    "slug": "red-shoes-fashion-express",
    "price": 2974,
    "originalPrice": 3500,
    "category": "Fashion",
    "tags": [
      "footwear",
      "women's shoes",
      "womens shoes"
    ],
    "rating": 3.25,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/womens-shoes/red-shoes/thumbnail.webp",
    "description": "The Red Shoes make a bold statement with their vibrant red color. Whether for a party or a casual outing, these shoes add a pop of color and style to your wardrobe.",
    "inStock": true,
    "brand": "Fashion Express"
  },
  {
    "id": "p-190",
    "name": "IWC Ingenieur Automatic Steel",
    "slug": "iwc-ingenieur-automatic-steel-iwc",
    "price": 424999,
    "originalPrice": 465161,
    "category": "Fashion",
    "tags": [
      "watches",
      "luxury watches",
      "womens watches"
    ],
    "rating": 2.93,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/womens-watches/iwc-ingenieur-automatic-steel/thumbnail.webp",
    "description": "The IWC Ingenieur Automatic Steel watch is a durable and sophisticated timepiece. With a stainless steel case and automatic movement, it combines precision and style for watch enthusiasts.",
    "inStock": true,
    "brand": "IWC"
  },
  {
    "id": "p-191",
    "name": "Rolex Cellini Moonphase",
    "slug": "rolex-cellini-moonphase-rolex",
    "price": 1359999,
    "originalPrice": 1415895,
    "category": "Fashion",
    "tags": [
      "watches",
      "luxury watches",
      "womens watches"
    ],
    "rating": 3.83,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/womens-watches/rolex-cellini-moonphase/thumbnail.webp",
    "description": "The Rolex Cellini Moonphase watch is a masterpiece of horology. Featuring a moon phase complication, it showcases the craftsmanship and elegance that Rolex is renowned for.",
    "inStock": true,
    "brand": "Rolex"
  },
  {
    "id": "p-192",
    "name": "Rolex Datejust Women",
    "slug": "rolex-datejust-women-rolex",
    "price": 934999,
    "originalPrice": 1084038,
    "category": "Fashion",
    "tags": [
      "watches",
      "luxury watches",
      "women's watches",
      "womens watches"
    ],
    "rating": 2.86,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/womens-watches/rolex-datejust-women/thumbnail.webp",
    "description": "The Rolex Datejust Women's watch is an iconic timepiece designed for women. With a timeless design and a date complication, it offers both elegance and functionality.",
    "inStock": true,
    "brand": "Rolex"
  },
  {
    "id": "p-193",
    "name": "Watch Gold for Women",
    "slug": "watch-gold-for-women-fashion-gold",
    "price": 67999,
    "originalPrice": 80470,
    "category": "Fashion",
    "tags": [
      "watches",
      "women's watches",
      "womens watches"
    ],
    "rating": 4.24,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/womens-watches/watch-gold-for-women/thumbnail.webp",
    "description": "The Gold Women's Watch is a stunning accessory that combines luxury and style. Featuring a gold-plated case and a chic design, it adds a touch of glamour to any outfit.",
    "inStock": true,
    "brand": "Fashion Gold"
  },
  {
    "id": "p-194",
    "name": "Women's Wrist Watch",
    "slug": "women-s-wrist-watch-fashion-co",
    "price": 11049,
    "originalPrice": 12441,
    "category": "Fashion",
    "tags": [
      "watches",
      "women's watches",
      "womens watches"
    ],
    "rating": 3.52,
    "reviews": 3,
    "featured": false,
    "image": "https://cdn.dummyjson.com/product-images/womens-watches/women's-wrist-watch/thumbnail.webp",
    "description": "The Women's Wrist Watch is a versatile and fashionable timepiece for everyday wear. With a comfortable strap and a simple yet elegant design, it complements various styles.",
    "inStock": true,
    "brand": "Fashion Co."
  }
];

// ── Helpers ──
export function getProductById(id) { return products.find(p => p.id === id) || null; }
export function getProductBySlug(slug) { return products.find(p => p.slug === slug) || null; }
export function getFeaturedProducts() { return products.filter(p => p.featured); }
export function getProductsByCategory(category) { return products.filter(p => p.category === category); }
export function getCategories() { return [...new Set(products.map(p => p.category))]; }
export function getBrands() { return [...new Set(products.filter(p => p.brand).map(p => p.brand))].slice(0, 20).map(name => ({ name })); }
export function getPriceRange() {
  const prices = products.map(p => p.price);
  return { min: Math.min(...prices), max: Math.max(...prices) };
}

export function getRelatedProducts(product, limit = 4) {
  if (!product) return [];
  return products
    .filter(p => p.id !== product.id)
    .map(p => ({ ...p, _score: p.tags.filter(t => product.tags.includes(t)).length }))
    .sort((a, b) => b._score - a._score)
    .slice(0, limit);
}

export function getPersonalizedRecommendations(limit = 8) {
  // Combine data from multiple sources for better personalization
  const viewedIds = JSON.parse(localStorage?.getItem('recentlyViewed') || '[]');
  const searchHistory = JSON.parse(localStorage?.getItem('searchHistory') || '[]');
  const orders = JSON.parse(localStorage?.getItem('spree-orders') || '[]');
  
  const tagScores = {};
  
  // Score from viewed products
  products.filter(p => viewedIds.includes(p.id)).forEach(p =>
    p.tags.forEach(t => { tagScores[t] = (tagScores[t] || 0) + 2; })
  );
  
  // Score from search history (matches product names/tags/categories)
  searchHistory.forEach(term => {
    const q = term.toLowerCase();
    products.forEach(p => {
      if (p.name.toLowerCase().includes(q)) tagScores[p.category] = (tagScores[p.category] || 0) + 1;
      p.tags.forEach(t => { if (t.includes(q)) tagScores[t] = (tagScores[t] || 0) + 1; });
    });
  });
  
  // Score from previously ordered items
  orders.forEach(order => {
    (order.items || []).forEach(item => {
      const p = products.find(pr => pr.id === item.id);
      if (p) p.tags.forEach(t => { tagScores[t] = (tagScores[t] || 0) + 3; });
    });
  });

  if (Object.keys(tagScores).length === 0) return getFeaturedProducts().slice(0, limit);
  
  return products
    .filter(p => !viewedIds.includes(p.id))
    .map(p => ({ ...p, _score: p.tags.reduce((sum, t) => sum + (tagScores[t] || 0), 0) }))
    .sort((a, b) => b._score - a._score)
    .slice(0, limit);
}

export function getRecommendations(viewedIds = [], limit = 6) {
  const viewedProducts = products.filter(p => viewedIds.includes(p.id));
  const tagScores = {};
  viewedProducts.forEach(p => p.tags.forEach(t => { tagScores[t] = (tagScores[t] || 0) + 1; }));
  if (viewedIds.length === 0) return getFeaturedProducts().slice(0, limit);
  return products
    .filter(p => !viewedIds.includes(p.id))
    .map(p => ({ ...p, _score: p.tags.reduce((sum, t) => sum + (tagScores[t] || 0), 0) }))
    .sort((a, b) => b._score - a._score)
    .slice(0, limit);
}

export function formatPrice(price) {
  return `₹${price.toLocaleString('en-IN')}`;
}

export default products;

