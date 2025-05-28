"use client"
import useTodoStore from '@/store/todoStore'
import React, { useState } from 'react'
import { TodoStoreType } from '@/store/todoStore'
FakeTodos

const TodoForm = () => {
    const [text, setText] = useState('')
    const { addTodo } = useTodoStore() as TodoStoreType

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!text.trim()) return
        addTodo([{ id: crypto.randomUUID().toString(), title: "HELLO" }])
        setText('')
    }

    return (
        <form onSubmit={handleSubmit} className='bg-zinc-800 p-3 rounded border-b-2 border-white'>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="ADD TODO HERE ..."
                className='border p-2 rounded mx-1 box-border bg-black'
            />
            <button type="submit" className='px-6 py-2 rounded bg-green-800'>ADD</button>
            <button className='bg-black p-2 rounded mx-4 bg-gradient-to-br from-indigo-900 via-sky-950 to-pink-950 border-2 border-black' onClick={() => addTodo([...FakeTodos])}>ADD FAKE TODOS</button>
        </form>
    )
}

export default TodoForm