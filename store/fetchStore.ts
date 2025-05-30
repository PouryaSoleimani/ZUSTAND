import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// TYPES __________________________________________________________________________________________________________________________________________________________
type SingleProductType = {
  id: number;
  title: string;
  price: number | string;
};

type FetchStoreType = {
  products: SingleProductType[];
  fetchProducts: () => void;
  deleteProduct: (ID: number) => void;
};

// STORE __________________________________________________________________________________________________________________________________________________________
const useFetchStore = create(
  persist<FetchStoreType>(
    (set) => ({
      products: [],
      fetchProducts: async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        set({ products: data });
      },

      deleteProduct: (ID: number) =>
        set((state) => ({
          products: state.products.filter((item) => item.id !== ID),
        })),
    }),

    { name: "__PRODUCS", storage: createJSONStorage(() => localStorage) }
  )
);

export default useFetchStore;
