import { create } from "zustand";

// TYPES
export type TodoType = {
    id: number,
    title: string,
    isDone?: boolean
}

export interface AddTodoFn {
    (array: { id: number | string, title: string }[]): void;
}

export interface AddSingleFn {
    (text: string): void;
}

export interface ToggleTodoFn {
    (id: number): void;
}

export interface RemoveTodoFn {
    (id: number): void;
}

export interface TodoStoreType {
    todos: TodoType[];
    addTodo: AddTodoFn;
    addSingleTodo: AddSingleFn
    toggleTodo: ToggleTodoFn;
    removeTodo: RemoveTodoFn;
}

// USE TODO STORE
const useTodoStore = create((set) => ({
    todos: [],

    addTodo: (array: { id: number, title: string }[]) => set(() => ({
        todos: [...array]
    })),

    addSingleTodo: (text: string) => set((state: TodoStoreType) => ({
        todos: [...state.todos, { id: Date.now(), title: text }],
    })),

    toggleTodo: (id: number) => set((state: TodoStoreType) => ({
        todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        )
    })),

    removeTodo: (id: number) => set((state: TodoStoreType) => ({
        todos: state.todos.filter((todo) => todo.id !== id)
    }))

}))

export default useTodoStore