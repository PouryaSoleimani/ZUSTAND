import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type checkFormType = {
  a: boolean;
  b: boolean;
  c: boolean;
};

const useCheckFormStore = create()(
  persist(
    (set) => ({
      checkedForms: {},
      addCheckedForms: (newCheckForm: { a: boolean; b: boolean; c: boolean }) =>
        set({
          checkedForms: { ...newCheckForm },
        }),

      Color: "",
      SetColor: (newColor: string) => set({ Color: newColor }),
    }),
    {
      name: "CHECK__FORM__STORAGE",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
export default useCheckFormStore;
