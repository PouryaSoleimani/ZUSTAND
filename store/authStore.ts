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
  accessToken: string;
  refreshToken: string;
  login: (name: string, accessToken: string, refreshToken: string) => void;
  logout: (accessToken: string, refreshToken: string) => void;
};

// STORE ____________________________________________________________________________________________________________________________________________________________________________
const useAuthStore = create<UseAuthStoreType>()(
  persist(
    (set) => ({
      user: null,
      isUserLogin: false,
      accessToken: '',
      refreshToken: '',
      login: (name: string) => set({ user: { id: +crypto.randomUUID(), name: name }, isUserLogin: true, accessToken: 'ACCESS', refreshToken: 'REFRESH' }),
      logout: () => set({ user: null, isUserLogin: false, accessToken: '', refreshToken: '' }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
