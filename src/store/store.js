import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useCartStore = create(   
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],

      addToCart: (product) => set((state) => {
        const existingItem = state.cart.find((item) => item.id === product.id && item.size === product.size);
        const discountedPrice = product.discountRate > 10  
          ? product.price * (100 - product.discountRate) / 100 
          : product.price;
        const formattedPrice = `€${discountedPrice.toFixed(2)}`;
        const onerPoints = discountedPrice * 100;
        
        if (existingItem) {
          return {
            cart: state.cart.map((item) =>
              item.id === product.id && item.size === product.size 
                ? { ...item, quantity: item.quantity + 1 } 
                : item
            ),
          };
        } else {
          return {
            cart: [...state.cart, { ...product, quantity: 1, discountedPrice, formattedPrice, onerPoints }],
          };
        }
      }),

      removeFromCart: (id) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== id),
      })),

      clearCart: () => set({ cart: [] }),

      increment: (id, size) => set((state) => ({
        cart: state.cart.map((item) =>
          item.id === id && item.selectedSize === size ? { ...item, quantity: item.quantity + 1 } : item
        ),
      })),

      decrement: (id, size) => set((state) => ({
        cart: state.cart.map((item) =>
          item.id === id && item.selectedSize === size && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ),
      })),

      addToWishlist: (product) => set((state) => {
        const exists = state.wishlist.some((item) => item.id === product.id);
        return exists ? state : { wishlist: [...state.wishlist, product] };
      }),

      removeFromWishlist: (id) => set((state) => ({
        wishlist: state.wishlist.filter((item) => item.id !== id),
      })),

      isProductInWishlist: (productId) => get().wishlist.some((item) => item.id === productId),

      clearWishlist: () => set({ wishlist: [] }),

      saveForLater: (productId) => set((state) => {
        const itemToSave = state.cart.find((item) => item.id === productId);
        if (!itemToSave) return {};

        const isExistInWishlist = state.wishlist.some((wishItem) => wishItem.id === productId);

        let updatedWishlist = state.wishlist;
        if (!isExistInWishlist) {
          updatedWishlist = [...state.wishlist, itemToSave];
        }

        const updatedCart = state.cart.filter((cartItem) => cartItem.id !== productId);

        return {
          wishlist: updatedWishlist,
          cart: updatedCart
        };
      }),

      shippingCost: () => {
        const total = get().totalPrice();
        return total > 99 ? 0 : 20;
      },

      cartCount: () => get().cart.reduce((total, item) => total + item.quantity, 0),
      wishlistCount: () => get().wishlist.length,

      totalPrice: () => get().cart.reduce((total, item) => total + (item.discountedPrice * item.quantity), 0),
      totalOnerPoints: () => get().cart.reduce((total, item) => total + item.onerPoints * item.quantity, 0),
    }),

    {
      name: "cart-storage-oner-active",
      version: 3,
      storage: createJSONStorage(() => localStorage),

      migrate: (persistedState, version) => {
        if (version < 2) {
          return {
            ...persistedState,
            wishlist: persistedState.wishlist || [],
          };
        }

        if (version < 3) {
          return {
            ...persistedState,
            cart: persistedState.cart.map(item => ({
              ...item,
              discountedPrice: item.discountedPrice || (item.isDiscount ? item.price * (100 - item.discountRate) / 100 : item.price),
              formattedPrice: item.formattedPrice || `€${item.price.toFixed(2)}`,
              onerPoints: item.onerPoints || (item.price * 100),
            })),
          };
        }

        return persistedState;
      },
    }
  )
);

export default useCartStore;