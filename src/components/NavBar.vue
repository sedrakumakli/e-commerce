<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import { RouterLink } from "vue-router";
const cartStore = useCartStore();
</script>

<template>
  <nav>
    <RouterLink to="/"> Products </RouterLink>
    <RouterLink to="/cart"> Cart ({{ cartStore.totalItems }}) </RouterLink>
  </nav>
</template>
<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #ddd;
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;

  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

a {
  text-decoration: none;
  color: #64748b;
  font-size: 16px;
  font-weight: 500;

  padding: 10px 16px;
  border-radius: 8px;

  transition: all 0.2s ease;
}
a:hover {
  color: #4f46e5;
  background: #eef2ff;
}
.router-link-active {
  color: #4f46e5;
  background: #eef2ff;
  font-weight: 600;
}
</style>
