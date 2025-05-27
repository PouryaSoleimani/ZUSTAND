"use client"
import useCounterStore from '@/store/counterStore'
import React from 'react'
import { CounterStateType } from '@/store/counterStore'

const Counter = () => {

    const { count, increase, decrease, reset } = useCounterStore() as CounterStateType

    return (
        <div>
            <h1 className='text-5xl font-black text-white'>Count: {count}</h1>
            <button className='border border-zinc-600 m-3 text-2xl font-bold px-6 py-2 rounded bg-zinc-900 ' onClick={increase}>+</button>
            <button className='border border-zinc-600 m-3 text-2xl font-bold px-6 py-2 rounded bg-zinc-900 ' onClick={decrease}>-</button>
            <button className='border border-zinc-600 m-3 text-2xl font-bold px-6 py-2 rounded bg-zinc-900 ' onClick={reset}>Reset</button>
        </div>
    )
}
export default Counter