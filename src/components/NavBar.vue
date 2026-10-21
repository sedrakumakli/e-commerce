<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import { RouterLink } from "vue-router";
const cartStore = useCartStore();
</script>

<template>
  <nav class="navbar">
    <RouterLink to="/" class="logo"> ShopEase </RouterLink>
    <div class="nav-links">
      <RouterLink to="/" class="nav-link"> Products </RouterLink>

      <RouterLink to="/cart" class="nav-link">
        Cart
        <span class="cart-count">
          {{ cartStore.totalItems }}
        </span>
      </RouterLink>
    </div>
  </nav>
</template>
<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.logo {
  color: #4f46e5;
  font-size: 25px;
  font-weight: 800;
  text-decoration: none;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 15px;
}
.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  color: #475569;
  text-decoration: none;
  font-weight: 600;
  border-radius: 8px;
  transition: 0.2s;
}
.nav-link:hover,
.nav-link.router-link-active {
  color: #4f46e5;
  background: #eef2ff;
}
.cart-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 23px;
  height: 23px;
  padding: 0 6px;
  border-radius: 50px;
  background: #6366f1;
  color: white;
  font-size: 12px;
}
@media (max-width: 500px) {
  .navbar {
    padding: 0 16px;
  }

  .logo {
    font-size: 20px;
  }

  .nav-links {
    gap: 4px;
  }

  .nav-link {
    padding: 8px;
    font-size: 14px;
  }
}
</style>
