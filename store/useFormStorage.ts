/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type useFormStorageType = {
  formDatas: { firstName?: string; lastName: string; age: string | number }
  updateFormDatas: (newDatas: any) => void
}

// STORE
const useFormStorage = create<useFormStorageType>()(
  persist(
    (set) => ({
      formDatas: { firstName: '', lastName: '', age: 0 },
      updateFormDatas: (newDatas) => set(() => ({ formDatas: newDatas })),
    }),
    {
      name: 'FORM___STORAGE',
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export default useFormStorage
