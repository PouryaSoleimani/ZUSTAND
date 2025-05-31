import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// TYPES __________________________________________________________________________________________________________________________________________________________________
type ArrayStoreType = {
  array: number[];
  addToArray: (value: number) => void;
  removeFromArray: (index: number) => void;
};

const useArrayStore = create<ArrayStoreType>()(
  persist(
    (set) => ({
      array: [],
      addToArray: (value: number) => {
        set((state) => ({ array: [...state.array, value] }));
      },
      removeFromArray: (index: number) => {
        set((state) => ({ array: state.array.filter((_, i) => i !== index) }));
      },
    }),
    {
      name: 'array-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useArrayStore;
