import { defineStore } from "pinia";
import type { Product } from "@/types/product";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as (Product & { quantity: number })[],
  }),

  actions: {
    addToCart(product: Product) {
      const existingItem = this.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({
          ...product,
          quantity: 1,
        });
      }
    },

    removeFromCart(productId: number) {
      this.items = this.items.filter((item) => item.id !== productId);
    },

    decreaseQuantity(productId: number) {
      const item = this.items.find((item) => item.id === productId);

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.removeFromCart(productId);
      }
    },
  },

  getters: {
    totalPrice: (state) => {
      return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },

    totalItems: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    },
  },
});
