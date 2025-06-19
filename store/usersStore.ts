import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export type SingleUserType = {
  id: number | string
  name: string
  age: number | string
}

export type UsersStoreType = {
  users: SingleUserType[] | []
  addUser: (user: SingleUserType) => void
  deleteUser: (ID: number | string) => void
  fetchUsers: () => void
  resetUsers: () => void
}

const useUsersStore = create(
  persist<UsersStoreType>(
    (set) => ({
      users: [],

      fetchUsers: async () => {
        // ASYNC AND API CALL
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        )
        const data = await response.json()
        set({ users: data })
      },

      addUser: (user: SingleUserType) =>
        set((state) => ({
          users: [...state.users, user],
        })),

      deleteUser: (ID: number | string) =>
        set((state: UsersStoreType) => ({
          users: state.users.filter((item: SingleUserType) => item.id !== ID),
        })),

      resetUsers: () => set({ users: [] }),
    }),

    { name: '__USERS', storage: createJSONStorage(() => localStorage) }
  )
)

export default useUsersStore
