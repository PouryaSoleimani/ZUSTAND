/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type firstStepObjectType = { firstName: string; lastName: string; age: string | number; }
type secondStepObjectType = { job: string, wish: string, areYouHappy: boolean }


const useMultiStepFormStore = create()(
    persist(
        (set) => ({
            allFormData: {},

            setFirstStep: (firstStepObject: firstStepObjectType) => set((state: any) => ({ allFormData: { ...state.allFormData, ...firstStepObject }, })),

            setSecondStep: (secondStepObject: secondStepObjectType) => set((state: any) => ({ allFormData: { ...state.allFormData, ...secondStepObject } }))
        }),
        {
            name: "MULTI__STEP__FORM",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
export default useMultiStepFormStore;
