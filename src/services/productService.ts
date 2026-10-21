import type { Product } from "@/types/product";

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetch("https://dummyjson.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data: ProductsResponse = await response.json();

  return data.products;
}
