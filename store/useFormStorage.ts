/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type useFormStorageType = {
  formDatas: { title?: string }
  updateFormDatas: (newDatas: any) => void
}

const useFormStorage = create<useFormStorageType>()(
  persist(
    (set) => ({
      formDatas: {},
      updateFormDatas: (newDatas) =>
        set((state) => ({
          formDatas: { ...state.formDatas, newDatas },
        })),
    }),
    {
      name: 'FORM___STORAGE',
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export default useFormStorage
