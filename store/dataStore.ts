import { create } from "zustand";

interface DataType {
  id: number;
  title: string;
}

interface DataStoreState {
  datas: DataType[];
  addDatas: (array: DataType[]) => void;
  deleteDatas: () => void;
}

export const useDataStore = create<DataStoreState>((set) => ({
  datas: [],
  addDatas: (array: DataType[]) => set(() => ({ datas: array })),
  deleteDatas: () => set(() => ({ datas: [] })),
}));
