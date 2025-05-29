import { create } from "zustand";

// TYPES
export interface SingleProductType {
  id: number;
  title: string;
}

export interface ProductsStoreType {
  products: SingleProductType[];
  addProducts: (products: SingleProductType[]) => void;
  deleteProducts: () => void;
}

// STATE
const useProductsStore = create((set) => ({
  products: [],
  addProducts: (products: SingleProductType[]) => set({ products }),
  deleteProducts: () => set({ products: [] }),
}));

export default useProductsStore;
