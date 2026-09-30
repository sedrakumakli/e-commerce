<script setup lang="ts">
import { products, type Product } from "@/data/products";
import ProductCard from "./ProductCard.vue";
import { useCartStore } from "@/stores/cart.ts";
const cartStore = useCartStore();
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
  <h1>Products</h1>
  <div class="container">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add-to-cart="handleAddToCart"
    />
    <!-- <p>cart item :{{ cartStore.items.length }}</p> -->
  </div>
</template>
<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
</style>
