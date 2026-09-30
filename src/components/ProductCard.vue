<script setup lang="ts">
import type { Product } from "@/types/product";
// import { defineProps } from "vue";
const { product } = defineProps<{
  product: Product;
}>();
const emit = defineEmits<{
  (e: "add-to-cart", product: Product): void;
}>();
const addToCart = () => {
  emit("add-to-cart", product);
};
</script>
<template>
  <div class="card">
    <img :src="product.image" alt="" />
    <div class="info">
      <h2>{{ product.title }}</h2>
      <p>{{ product.description }}</p>
      <p>{{ product.price }} $</p>
      <button @click="addToCart">Add To Cart</button>
    </div>
  </div>
</template>
<style>
.container {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;

  border: 1px solid #e2e8f0;

  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.info {
  padding: 20px;
}

.info h2 {
  margin: 0 0 10px;
  color: #1e293b;
}

.info p {
  color: #64748b;
}

.info p:last-child {
  color: #4f46e5;
  font-size: 20px;
  font-weight: 700;
}
button {
  width: 100%;
  padding: 12px;

  border: none;
  border-radius: 8px;

  background: #6366f1;
  color: white;

  font-size: 15px;
  font-weight: 600;

  cursor: pointer;

  transition: background 0.2s ease;
}

button:hover {
  background: #4f46e5;
}
</style>
