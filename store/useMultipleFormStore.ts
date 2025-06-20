import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useMultipleFormStore = create()(
  persist(
    (set) => ({
      color: "",
      setColor: (newColor: string) => set({ color: newColor }),
      gram: "",
      setGram: (newGram: string) => set({ gram: newGram }),
      material: "",
      setMaterial: (newMaterial: string) => set({ material: newMaterial }),
      additionalDesc: "",
      setAdditionalDescription: (desc: string) => set({ additionalDesc: desc }),
    }),
    {
      name: "MULTI__FORM",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
export default useMultipleFormStore;
