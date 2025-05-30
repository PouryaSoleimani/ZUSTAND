import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// TYPES __________________________________________________________________________________________________________________________________________________________
type SingleProductType = {
  id: number;
  image: string;
  title: string;
  price: number | string;
};

type FetchStoreType = {
  products: SingleProductType[];
  fetchProducts: () => void;
  deleteSingleProduct: (ID: number) => void;
  deleteAllProducts: () => void;
  fetchSingleProduct: (ID: number) => void;
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

      fetchSingleProduct: async (ID: number) => {
        const res = await fetch(`https://fakestoreapi.com/products/${ID}`);
        const data = await res.json();
        set((state) => ({ products: [...state.products, data] }));
      },

      deleteSingleProduct: (ID: number) =>
        set((state) => ({
          products: state.products.filter((item) => item.id !== ID),
        })),

      deleteAllProducts: () => set({ products: [] }),
    }),

    { name: "__PRODUCS", storage: createJSONStorage(() => localStorage) }
  )
);

export default useFetchStore;
