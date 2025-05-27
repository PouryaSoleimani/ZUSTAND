import { create } from "zustand";
export type CounterStateType = {
    count: number,
    increase: () => void,
    decrease: () => void,
    reset: () => void
}

const useCounterStore = create((set) => ({
    count: 0,
    increase: () => set((state: CounterStateType) => ({ count: state.count + 1 })),
    decrease: () => set((state: CounterStateType) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),
}))


export default useCounterStore