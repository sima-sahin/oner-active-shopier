import { create } from "zustand";

const useCartStore = create((set) => ({
    cart: [],
    addtoCart: (product) => set((state) => ({ cart: [...state.cart, product]})),
    removefromCart: (product) => set((state) => ({ cart: state.cart.filter((item) => item.id !==product.id)})),
    clearCart: () => set([]),
        

})
)

export default useCartStore;