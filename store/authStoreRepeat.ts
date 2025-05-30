import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// TYPES
type AuthStoreRepeatType = {
  user: { id: number | string; name: string } | null;
  login: (id: number, name: string) => void;
  logout: () => void;
};

// STORE
const useAuthStoreRepeat = create(
  persist<AuthStoreRepeatType>(
    (set) => ({
      user: null,
      login: (id: number, name: string) => {
        set({ user: { id: id, name: name } });
      },
      logout: () => {
        set({ user: null });
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
export default useAuthStoreRepeat;
