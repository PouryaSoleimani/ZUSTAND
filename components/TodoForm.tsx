"use client"
import useTodoStore from '@/store/todoStore'
import React, { useState } from 'react'
import { TodoStoreType } from '@/store/todoStore'

const TodoForm = () => {
    const [text, setText] = useState('')
    const { addTodo } = useTodoStore() as TodoStoreType

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!text.trim()) return
        addTodo(text)
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
        </form>
    )
}

export default TodoForm