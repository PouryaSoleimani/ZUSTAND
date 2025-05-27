"use client"
import { Delete, DeleteIcon, LucideDelete } from 'lucide-react'
import useTodoStore, { TodoStoreType, TodoType } from '../store/todoStore'

function TodoList() {

    const { todos, toggleTodo, removeTodo } = useTodoStore() as TodoStoreType

    return (
        <ul className='bg-zinc-800 p-3 rounded my-3'>
            <h2 className='font-black tracking-wide text-green-600'>TODO LIST :</h2>
            {todos.map((todo: TodoType) => (
                <li key={todo.id} className='bg-black p-2 rounded space-x-5 my-2 text-xl'>
                    <span
                        style={{ textDecoration: todo.isDone ? 'line-through' : 'none', cursor: 'pointer', }}
                        onClick={() => toggleTodo(todo.id)}
                    >
                        {todo.text}
                    </span>
                    <button onClick={() => removeTodo(todo.id)}><DeleteIcon className='text-red-500 translate-y-1' /></button>
                </li>
            ))}
        </ul>

    )
}

export default TodoList
