/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useMultiStepFormStore = create()(
    persist(
        (set) => ({
            allFormData: {},
            setFirstStep: (firstStepObject: { firstName: string; lastName: string; age: string | number; }) => set((state: any) => ({ allFormData: { ...state.allFormData, ...firstStepObject }, })),
            setSecondStep: (secondStepObject: { job: string, wish: string, areYouHappy: boolean }) => set((state: any) => ({ allFormData: { ...state.allFormData, ...secondStepObject } }))
        }),
        {
            name: "MULTI__STEP__FORM",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
export default useMultiStepFormStore;
