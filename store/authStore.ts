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
  setUser: (user: SingleUserType) => void;
  login: (name: string) => void;
  logout: () => void;
};

// STORE ____________________________________________________________________________________________________________________________________________________________________________
const useAuthStore = create<UseAuthStoreType>()(
  persist(
    (set) => ({
      user: null,
      isUserLogin: false,
      setUser: (user: SingleUserType) => set({ user }),
      login: (name: string) => set({ user: { id: +crypto.randomUUID(), name: name }, isUserLogin: true }),
      logout: () => set({ user: null }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
