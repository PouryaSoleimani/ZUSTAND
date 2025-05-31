import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type UseNameStoreType = {
  name: string;
  setName: (name: string) => void;
  removeName: () => void;
};

const useNameStore = create<UseNameStoreType>()(
  persist(
    (set) => ({
      name: '',
      setName: (name) => set({ name }),
      removeName: () => set({ name: '' }),
    }),
    {
      name: '___NAME___STORE',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useNameStore;
