import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type checkFormType = {
  1: boolean;
  2: boolean;
  3: boolean;
};

const useCheckFormStore = create()(
  persist(
    (set) => ({
      checkedForms: {},
      addCheckedForms: (newCheckForm: { 1: boolean; 2: boolean; 3: boolean }) =>
        set({
          checkedForms: { ...newCheckForm },
        }),
    }),
    {
      name: "CHECK__FORM__STORAGE",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
export default useCheckFormStore;
