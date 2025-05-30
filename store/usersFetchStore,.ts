import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// TYPES
type SingleUserFetchType = {
  id: number;
  username: string;
};

type UsersFetchStoreType = {
  users: SingleUserFetchType[];
  setUsers: () => void;
  clearUsers: () => void;
};

const UseUsersFetchStore = create(
  persist<UsersFetchStoreType>(
    (set) => ({
      users: [],
      setUsers: async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        set({ users: data });
      },

      clearUsers: () => set({ users: [] }),
    }),

    {
      name: '___FETCH__USERS__STORE__',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default UseUsersFetchStore;
