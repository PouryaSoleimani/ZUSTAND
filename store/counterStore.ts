import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

// TYPE
export type CounterStateType = {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
  random: () => void;
  plusFifty: () => void;
};

// COUNTER STORE
const useCounterStore = create<CounterStateType>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increase: () => set((state: CounterStateType) => ({ count: state.count + 1 })),
        decrease: () => set((state: CounterStateType) => ({ count: state.count - 1 })),
        reset: () => set({ count: 0 }),
        random: () => set({ count: Number((Math.random() * 100).toFixed()) }),
        plusFifty: () => set((state: CounterStateType) => ({ count: state.count + 50 })),
      }),
      {
        name: '___counter',
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
export default useCounterStore;
