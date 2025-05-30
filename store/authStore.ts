import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
//TYPES ______________________________________________________________________________________________________________________________________________________________________________
type SingleUserType = {
  id: number;
  name: string;
};

type UseAuthStoreType = {
  user: SingleUserType | null;
  isUserLogin: boolean;
  login: (name: string) => void;
  logout: () => void;
};

// STORE ____________________________________________________________________________________________________________________________________________________________________________
const useAuthStore = create<UseAuthStoreType>()(
  persist(
    (set) => ({
      user: null,
      isUserLogin: false,
      login: (name: string) => set({ user: { id: +crypto.randomUUID(), name: name }, isUserLogin: true }),
      logout: () => set({ user: null, isUserLogin: false }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
