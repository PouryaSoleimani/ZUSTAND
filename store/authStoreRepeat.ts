import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// TYPES
type AuthStoreRepeatType = {
  user: { id: number | string; name: string } | null;
  login: (name: string) => void;
  logout: () => void;
};


// STORE
const useAuthStoreRepeat = create(
  persist<AuthStoreRepeatType>(
    (set) => ({
      user: null,
      login: (name: string) => {
        set({ user: { id: (Math.random() * 100).toString().slice(0, 3), name: name } });
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
