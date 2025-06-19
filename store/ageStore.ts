import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type UseAgeStoreType = {
  age: number
  setAge: (age: number) => void
}

const useAgeStore = create<UseAgeStoreType>()(
  persist(
    (set) => ({
      age: 0,
      setAge: (age) => set({ age }),
    }),
    {
      name: 'age-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
export default useAgeStore
