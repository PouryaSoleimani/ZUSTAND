"use client"
import useTodoStore from '@/store/todoStore'
import React, { useState } from 'react'
import { TodoStoreType } from '@/store/todoStore'
import { FakeTodos } from '@/data/db'
import { FakeTodos2 } from '@/data/db'
import { Trash } from 'lucide-react'
import useSWR from 'swr'
import useAgeStore from '@/store/ageStore'


const TodoForm = () => {
    const [text, setText] = useState('')
    const { addTodo, addSingleTodo } = useTodoStore() as TodoStoreType
    const fetcher = (url: string) => fetch(url).then(res => res.json())
    const { age } = useAgeStore()
    console.log("AGE / TODO FORM", age)
    const { data } = useSWR('https://fakestoreapi.com/products', fetcher)


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!text.trim()) return
        addSingleTodo(text)
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
            <button className='bg-black p-2 rounded mx-1 bg-gradient-to-br from-indigo-900 via-sky-950 to-pink-950 border-2 border-black' onClick={() => addTodo([...FakeTodos])}>ADD FAKE TODOS</button>
            <button className='bg-black p-2 rounded mx-1 bg-gradient-to-br from-green-900 via-emerald-950 to-lime-950 border-2 border-black' onClick={() => addTodo([...FakeTodos2])}>ADD FAKE TODOS 2</button>
            <button className='bg-black p-2 rounded mx-1 bg-gradient-to-br from-rose-900 via-pink-950 to-red-950 border-2 border-black' onClick={() => addTodo([...data])}>ADD FAKE DATA</button>
            <button className='p-2 border-2 border-black rounded mx-1  bg-red-950 inline-flex items-center translate-y-1.5 gap-2' onClick={() => addTodo([])}><Trash />CLEAR TODOS</button>
        </form>
    )
}

export default TodoForm