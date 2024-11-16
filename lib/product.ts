import { faker } from "@faker-js/faker";
import { getRandomElement } from "./utils";

export const categories = [
  { id: "all", name: "All" },
  {
    id: "avatars",
    name: "Avatars",
    subcategories: [
      { id: "human-like", name: "Human-like" },
      { id: "robot-and-cyborgs", name: "Robot & Cyborgs" },
      { id: "anthro-and-furry", name: "Anthro & Furry" },
      { id: "others", name: "Others" },
      { id: "all-in-avatars", name: "All in Avatars" },
    ],
  },
  {
    id: "fashion",
    name: "Fashion",
    subcategories: [
      { id: "clothes", name: "Clothes" },
      { id: "accessories", name: "Accessories" },
      { id: "others", name: "Others" },
      { id: "all-in-fashion", name: "All in Fashion" },
    ],
  },
];

export type Product = {
  id: string;
  name: string;
  creatorName: string;
  rating: number;
  price: number;
  category: string;
  subcategory: string;
};

// Function to generate mock product data
function generateProducts(numProducts: number) {
  const products: Product[] = [];

  for (let i = 0; i < numProducts; i++) {
    const category = getRandomElement(categories.slice(1));
    const subcategory = getRandomElement(category.subcategories!);

    products.push({
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      creatorName: faker.person.fullName(),
      rating: faker.number.int({ min: 1, max: 5 }),
      price: faker.number.float({ min: 0, max: 100, fractionDigits: 2 }),
      category: category.id,
      subcategory: subcategory.id,
    });
  }

  return products;
}

// Generate 100 mock products
export const products = generateProducts(18);
