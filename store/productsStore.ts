import { create } from "zustand";

// TYPES
export interface SingleProductType {
  id: number | string;
  title: string;
}

export interface ProductsStoreType {
  products: SingleProductType[];
  addProducts: (products: SingleProductType[]) => void;
  deleteProducts: (ID: number | string) => void;
}

// STATE
const useProductsStore = create((set) => ({
  products: [],
  addProducts: (products: SingleProductType[]) =>
    set((state: ProductsStoreType) => ({
      products: [...state.products, ...products],
    })),
  deleteProducts: (ID: number | string) =>
    set((state: ProductsStoreType) => ({
      products: state.products.filter(
        (item: SingleProductType) => item.id !== ID
      ),
    })),
}));

export default useProductsStore;
