import { create } from "zustand";

// TYPES
export type SingleProductType = {
  id: number | string;
  title: string;
};

export type ProductsStoreType = {
  products: SingleProductType[];
  addProducts: (products: SingleProductType[]) => void;
  deleteProducts: (ID: number | string) => void;
};

// STATE
const useProductsStore = create<ProductsStoreType>((set) => ({
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
