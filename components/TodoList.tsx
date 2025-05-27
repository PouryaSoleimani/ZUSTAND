"use client"
import useTodoStore, { TodoStoreType, TodoType } from '../store/todoStore'

function TodoList() {
    const { todos, toggleTodo, removeTodo } = useTodoStore() as TodoStoreType

    return (
        <ul className='bg-zinc-800 p-3 rounded my-3'>
            {todos.map((todo: TodoType) => (
                <li key={todo.id} className='bg-black p-2 rounded space-x-5 my-2 text-xl'>
                    <span
                        style={{ textDecoration: todo.isDone ? 'line-through' : 'none', cursor: 'pointer', }}
                        onClick={() => toggleTodo(todo.id)}
                    >
                        {todo.text}
                    </span>
                    <button onClick={() => removeTodo(todo.id)}>❌</button>
                </li>
            ))}
        </ul>
    )
}

export default TodoList
