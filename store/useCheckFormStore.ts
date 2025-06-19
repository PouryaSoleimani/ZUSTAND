/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useCheckFormStore = create()(
  persist(
    (set) => ({
      checkedForms: [],
      addCheckedForms: (newCheckForm: any, state: any) =>
        set({
          checkedForms: [...state.checkedForms, ...newCheckForm],
        }),
    }),
    {
      name: "CHECK__FORM__STORAGE",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
export default useCheckFormStore;


