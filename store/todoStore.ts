import { create } from "zustand";

// TYPES
export type TodoType = {
    id: number,
    text: string,
    isDone: boolean
}

export type TodoStoreType = {
    todos: TodoType[],
    addTodo: (text: string) => void,
    toggleTodo: (id: number) => void,
    removeTodo: (id: number) => void
}

// USE TODO STORE
const useTodoStore = create((set) => ({
    todos: [],

    addTodo: (text: string) => set((state: TodoStoreType) => ({
        todos: [...state.todos, { id: crypto.randomUUID(), text, done: false }]
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