import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// TYPES __________________________________________________________________________________________________________________________________________________________________
type AuthStoreRepeatType = {
  user: { id: number | string; name: string } | null;
  login: (id: number, name: string) => void;
  logout: () => void;
  accessToken: string;
  refreshToken: string;
  loading: boolean;
};

// STORE ______________________________________________________________________________________________________________________________________________________________________________________
const useAuthStoreRepeat = create(
  persist<AuthStoreRepeatType>(
    (set) => ({
      user: null,
      loading: false,
      accessToken: '',
      refreshToken: '',
      login: (id: number, name: string) => {
        set({ user: { id: id, name: name }, accessToken: '123456789', refreshToken: '123456789', loading: false });
      },
      logout: () => {
        set({ loading: true, user: null, accessToken: '', refreshToken: '' });
        console.info('Logout Successfully');
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
export default useAuthStoreRepeat;
