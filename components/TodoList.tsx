"use client"
import { Trash } from 'lucide-react'
import useTodoStore, { TodoStoreType, TodoType } from '../store/todoStore'


function TodoList() {

    const { todos, toggleTodo, removeTodo } = useTodoStore() as TodoStoreType


    return (
        <ul className='bg-zinc-800 p-3 rounded my-3'>
            <h2 className='font-black tracking-wide text-green-600'>TODO LIST :</h2>

            {todos.map((todo: TodoType) => (
                <li key={todo.id} className='bg-black p-2 rounded space-x-5 my-2 text-xl flex items-center justify-between w-1/3 font-black border border-zinc-500'>
                    <span
                        style={{ textDecoration: todo.isDone ? 'line-through' : 'none', cursor: 'pointer', opacity: todo.isDone ? "0.3" : "1" }}
                        onClick={() => toggleTodo(todo.id)}
                    >
                        {todo.title.slice(0, 25)}
                    </span>
                    <button onClick={() => removeTodo(todo.id)}>
                        <Trash className='text-red-500 translate-y-0.5 size-4 hover:rotate-12 duration-200' />
                    </button>
                </li>
            ))}
        </ul>

    )
}

export default TodoList
