/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { combine } from "zustand/middleware";

const useGameStore = create(
  combine({ squares: Array(9).fill(null) }, (set) => {
    return {
      setSquares: (nextSquares: any) => {
        set((state) => ({
          squares:
            typeof nextSquares === "function"
              ? nextSquares(state.squares)
              : nextSquares,
        }));
      },
    };
  })
);

export default useGameStore;
