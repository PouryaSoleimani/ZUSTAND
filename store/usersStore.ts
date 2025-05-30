import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type SingleUserType = {
  id: number | string;
  name: string;
  age: number | string;
};

export type UsersStoreType = {
  users: SingleUserType[] | [];
  addUser: (user: SingleUserType) => void;
  deleteUser: (ID: number | string) => void;
};

const useUsersStore = create(
  persist<UsersStoreType>(
    (set) => ({
      users: [],

      addUser: (user: SingleUserType) =>
        set((state) => ({
          users: [...state.users, user],
        })),

      deleteUser: (ID: number | string) =>
        set((state: UsersStoreType) => ({
          users: state.users.filter((item: SingleUserType) => item.id !== ID),
        })),
    }),

    { name: "__USERS", storage: createJSONStorage(() => localStorage) }
  )
);

export default useUsersStore;
