<script setup lang="ts">
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();
</script>

<template>
  <div class="cart-page">
    <div class="cart-container">
      <h1>Shopping Cart</h1>

      <div v-if="cartStore.items.length > 0" class="cart-layout">
        <!-- Products -->
        <div class="cart-items">
          <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
            <img :src="item.image" :alt="item.title" class="product-image" />

            <div class="product-info">
              <h2>{{ item.title }}</h2>

              <p class="description">
                {{ item.description }}
              </p>

              <p class="price">${{ item.price }}</p>

              <div class="quantity">
                <button class="quantity-btn" @click="cartStore.decreaseQuantity(item.id)">−</button>

                <span>{{ item.quantity }}</span>

                <button class="quantity-btn" @click="cartStore.addToCart(item)">+</button>
              </div>
            </div>

            <button class="remove-btn" @click="cartStore.removeFromCart(item.id)">Remove</button>
          </div>
        </div>

        <div class="summary">
          <h2>Order Summary</h2>

          <div class="summary-row">
            <span>Items</span>
            <span>{{ cartStore.totalItems }}</span>
          </div>

          <div class="summary-row">
            <span>Subtotal</span>
            <span>${{ cartStore.totalPrice }}</span>
          </div>

          <div class="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <hr />

          <div class="total">
            <span>Total</span>
            <span>${{ cartStore.totalPrice }}</span>
          </div>

          <button class="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>

      <div v-else class="empty-cart">
        <h2>Your cart is empty</h2>
        <p>Add some products to your cart.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-page {
  min-height: calc(100vh - 70px);
  padding: 40px 20px;
  background: #f8fafc;
}

.cart-container {
  max-width: 1200px;
  margin: 0 auto;
}

.cart-container h1 {
  margin-bottom: 30px;
  color: #1e293b;
}

.cart-layout {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 30px;
  align-items: start;
}

/* Cart Items */

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
}

.product-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
}

.product-info {
  flex: 1;
}

.product-info h2 {
  margin: 0 0 8px;
  font-size: 20px;
  color: #1e293b;
}

.description {
  margin: 0 0 10px;
  color: #64748b;
}

.price {
  margin: 0 0 15px;
  font-size: 18px;
  font-weight: 700;
  color: #4f46e5;
}

.quantity {
  display: flex;
  align-items: center;
  gap: 12px;
}

.quantity span {
  min-width: 25px;
  text-align: center;
  font-weight: 600;
}

.quantity-btn {
  width: 32px;
  height: 32px;
  padding: 0;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  background: white;
  color: #334155;
  cursor: pointer;
}

.quantity-btn:hover {
  background: #eef2ff;
}

/* Remove */

.remove-btn {
  width: auto;
  padding: 8px 12px;
  border: none;
  background: transparent;
  color: #ef4444;
  cursor: pointer;
}

.remove-btn:hover {
  color: #b91c1c;
}

.summary {
  padding: 25px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
}

.summary h2 {
  margin-top: 0;
  margin-bottom: 25px;
  color: #1e293b;
}

.summary-row,
.total {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  color: #64748b;
}

.summary hr {
  border: none;
  border-top: 1px solid #e2e8f0;
  margin: 20px 0;
}

.total {
  color: #1e293b;
  font-size: 20px;
  font-weight: 700;
}

.checkout-btn {
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 8px;
  background: #6366f1;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}

.checkout-btn:hover {
  background: #4f46e5;
}

.empty-cart {
  padding: 80px 20px;
  text-align: center;
  background: white;
  border-radius: 14px;
  border: 1px solid #e2e8f0;
}

.empty-cart h2 {
  color: #1e293b;
}

.empty-cart p {
  color: #64748b;
}

/* Responsive */

@media (max-width: 800px) {
  .cart-layout {
    grid-template-columns: 1fr;
  }

  .cart-item {
    flex-wrap: wrap;
  }

  .remove-btn {
    margin-left: auto;
  }
}
</style>
