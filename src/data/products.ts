import type { Product } from "@/types/product";

export type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    title: "T-Shirt",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1722310752951-4d459d28c678?auto=format&fit=crop&w=800&q=80",
    description: "A comfortable cotton t-shirt",
  },
  {
    id: 2,
    title: "Sneakers",
    price: 80,
    image:
      "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?auto=format&fit=crop&w=800&q=80",
    description: "Comfortable everyday sneakers",
  },
  {
    id: 3,
    title: "Jeans",
    price: 50,
    image:
      "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&w=800&q=80",
    description: "Classic blue jeans",
  },
];
