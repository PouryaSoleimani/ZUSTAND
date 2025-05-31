import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// TYPES __________________________________________________________________________________________________________________________________________________________________
type ArrayStoreType = {
  array: number[];
  addToArray: (array: number[]) => void;
  removeFromArray: (index: number) => void;
};

const useArrayStore = create<ArrayStoreType>()(
  persist(
    (set) => ({
      array: [],
      addToArray: (array: number[]) => {
        set(() => ({ array: array }));
      },
      removeFromArray: () => {
        set(() => ({ array: [] }));
      },
    }),
    {
      name: 'array-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useArrayStore;
