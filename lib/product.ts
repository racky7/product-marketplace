type Subcategory = {
  id: string;
  name: string;
};

export type Category = {
  id: string;
  name: string;
  subcategories?: Subcategory[];
};

export const CATEGORIES_DATA: Category[] = [
  { id: "all", name: "All", subcategories: [] },
  {
    id: "avatars",
    name: "Avatars",
    subcategories: [
      { id: "human-like", name: "Human-like" },
      { id: "robot-and-cyborgs", name: "Robot & Cyborgs" },
      { id: "anthro-and-furry", name: "Anthro & Furry" },
      { id: "others", name: "Others" },
      { id: "", name: "All in Avatars" },
    ],
  },
  {
    id: "fashion",
    name: "Fashion",
    subcategories: [
      { id: "clothes", name: "Clothes" },
      { id: "accessories", name: "Accessories" },
      { id: "others", name: "Others" },
      { id: "", name: "All in Fashion" },
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

export const products = [
  {
    id: "60d26a4b-a8a5-48d3-9136-705f4627b20a",
    name: "Recycled Soft Fish",
    creatorName: "Benjamin Satterfield",
    rating: 2,
    price: 71.11,
    category: "fashion",
    subcategory: "",
  },
  {
    id: "9dec23c9-8ee2-4102-a228-7d5720111310",
    name: "Refined Concrete Sausages",
    creatorName: "Annie Harris",
    rating: 3,
    price: 98.59,
    category: "fashion",
    subcategory: "",
  },
  {
    id: "50f94eb6-1a36-436f-a3a2-0ba0b319bd79",
    name: "Electronic Steel Computer",
    creatorName: "Miss Penny Mills",
    rating: 4,
    price: 53.18,
    category: "fashion",
    subcategory: "accessories",
  },
  {
    id: "df2ae4d0-489d-4c74-9cd2-52b88666faa6",
    name: "Luxurious Granite Table",
    creatorName: "Herbert Cronin-Smitham",
    rating: 5,
    price: 30.89,
    category: "fashion",
    subcategory: "others",
  },
  {
    id: "cb539d4c-1922-49d0-b0ad-c63f31e0bf0c",
    name: "Luxurious Steel Gloves",
    creatorName: "Isaac Davis V",
    rating: 4,
    price: 99.17,
    category: "fashion",
    subcategory: "accessories",
  },
  {
    id: "256c80c9-0593-4d9c-8af9-ef304f0484e4",
    name: "Rustic Granite Shirt",
    creatorName: "Ruby DuBuque",
    rating: 3,
    price: 63.35,
    category: "avatars",
    subcategory: "robot-and-cyborgs",
  },
  {
    id: "e164cb7d-3a2f-4e16-80e1-71d4c027df26",
    name: "Modern Bronze Shirt",
    creatorName: "Elaine Konopelski",
    rating: 1,
    price: 25.99,
    category: "fashion",
    subcategory: "clothes",
  },
  {
    id: "2b44bd19-b8c1-4600-8b70-75d51e10b6bb",
    name: "Fantastic Rubber Keyboard",
    creatorName: "Dr. Emmett Rolfson",
    rating: 4,
    price: 20.21,
    category: "avatars",
    subcategory: "robot-and-cyborgs",
  },
  {
    id: "9cb7f7ca-fe8b-4ec0-8bc5-f8637f7d0ee4",
    name: "Rustic Rubber Gloves",
    creatorName: "Ira Lowe",
    rating: 3,
    price: 15.93,
    category: "avatars",
    subcategory: "",
  },
  {
    id: "a58ac24a-12d0-45ea-9894-7bb05d918f49",
    name: "Practical Rubber Chicken",
    creatorName: "Corey Lynch",
    rating: 4,
    price: 36.03,
    category: "fashion",
    subcategory: "",
  },
  {
    id: "4120291f-e87f-487e-b318-414cfb0b67e7",
    name: "Fantastic Wooden Chicken",
    creatorName: "Lillie Murphy",
    rating: 3,
    price: 71.93,
    category: "avatars",
    subcategory: "",
  },
  {
    id: "ba7488bf-107d-4851-a72d-7b9613d49554",
    name: "Rustic Wooden Bacon",
    creatorName: "Corey Cremin",
    rating: 1,
    price: 89.98,
    category: "avatars",
    subcategory: "human-like",
  },
  {
    id: "f697049e-6df1-4c97-9983-d3916a013578",
    name: "Oriental Rubber Hat",
    creatorName: "Robert Rippin",
    rating: 5,
    price: 70.74,
    category: "avatars",
    subcategory: "human-like",
  },
  {
    id: "0326ec0c-b111-465c-9783-1811e5d42ece",
    name: "Practical Cotton Soap",
    creatorName: "Natalie Hintz",
    rating: 3,
    price: 53.4,
    category: "avatars",
    subcategory: "anthro-and-furry",
  },
  {
    id: "d48109da-da7f-4a0d-aa3d-720f74c405ae",
    name: "Electronic Plastic Hat",
    creatorName: "Miriam Graham",
    rating: 3,
    price: 72.96,
    category: "fashion",
    subcategory: "accessories",
  },
  {
    id: "e123ad2c-21f6-4ea0-9f14-160c3d73cbc8",
    name: "Handmade Fresh Tuna",
    creatorName: "Laura Trantow",
    rating: 3,
    price: 31.17,
    category: "fashion",
    subcategory: "accessories",
  },
  {
    id: "020f62bd-441f-4c5c-98d3-1b933e744d11",
    name: "Generic Steel Shoes",
    creatorName: "Felicia Moore",
    rating: 5,
    price: 77.16,
    category: "avatars",
    subcategory: "robot-and-cyborgs",
  },
  {
    id: "5fd44aed-c1d8-4c3b-b567-aa91dacf3d1c",
    name: "Refined Rubber Chips",
    creatorName: "Ramona Littel",
    rating: 2,
    price: 72.86,
    category: "fashion",
    subcategory: "",
  },
];
