import { create } from "zustand";

// TYPE
export type CounterStateType = {
    count: number,
    increase: () => void,
    decrease: () => void,
    reset: () => void
}

// COUNTER STORE
const useCounterStore = create<CounterStateType>((set) => ({
    count: 0,
    increase: () => set((state: CounterStateType) => ({ count: state.count + 1 })),
    decrease: () => set((state: CounterStateType) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 })
}))

export default useCounterStore