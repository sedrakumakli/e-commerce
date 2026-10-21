<script setup lang="ts">
// import { products, type Product } from "@/data/products";
import ProductCard from "./ProductCard.vue";
import { useCartStore } from "@/stores/cart.ts";
import { onMounted, ref } from "vue";
import { getProducts } from "@/services/productService.ts";
import type { Product } from "@/types/product.ts";

const products = ref<Product[]>([]);
const loading = ref(false);
const error = ref("");
const cartStore = useCartStore();

onMounted(async () => {
  loading.value = true;
  try {
    products.value = await getProducts();
  } catch {
    error.value = " Failed to load products.";
  } finally {
    loading.value = false;
  }
});

const handleAddToCart = (product: Product) => {
  console.log(product);
  {
    {
      cartStore.addToCart(product);
    }
  }
};
</script>
<template>
  <div class="container">
    <h1>Products</h1>
    <p v-if="loading">Loading products...</p>
    <p v-else-if="error">{{ error }}</p>
    <div v-else class="products-grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="handleAddToCart"
      />
    </div>

    <!-- <p>cart item :{{ cartStore.items.length }}</p> -->
  </div>
</template>
<style scoped>
.container {
  margin: 40px auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
}
.container h1 {
  text-align: center;
}
.products-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}
@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
