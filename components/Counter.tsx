"use client"
import React, { useEffect } from 'react'
import useCounterStore from '@/store/counterStore'
import { CounterStateType } from '@/store/counterStore'
import useAgeStore from '@/store/ageStore'

const Counter = () => {

    const { count, increase, decrease, reset, random, plusFifty } = useCounterStore() as CounterStateType
    const { age, setAge } = useAgeStore()
    useEffect(() => {
        console.log("AGE", age)
    }, [age])

    return (
        <div>
            <h1 className='text-5xl font-black text-white'>Count: {count}</h1>
            <button className='border border-zinc-600 m-3 text-2xl font-bold px-6 py-2 rounded bg-zinc-900 ' onClick={increase}>+</button>
            <button className='border border-zinc-600 m-3 text-2xl font-bold px-6 py-2 rounded bg-zinc-900 ' onClick={decrease}>-</button>
            <button className='border border-zinc-600 m-3 text-2xl font-bold px-6 py-2 rounded bg-zinc-900 ' onClick={reset}>Reset</button>
            <button className='border border-zinc-600 m-3 text-2xl font-bold px-6 py-2 rounded bg-sky-900 ' onClick={plusFifty}>+ 50</button>
            <button className='border border-zinc-600 m-3 text-2xl font-bold px-6 py-2 rounded bg-gradient-to-br from-yellow-500 via-red-700 to-purple-700 ' onClick={random}>RANDOM</button>
            <button className='border border-zinc-600 m-3 text-2xl font-bold px-6 py-2 rounded bg-gradient-to-br from-lime-500 via-emerald-700 to-purple-700 ' onClick={() => setAge(30)}>SET AGE TO 30</button>
            <button className='border border-zinc-600 m-3 text-2xl font-bold px-6 py-2 rounded bg-gradient-to-br from-lime-500 via-emerald-700 to-purple-700 ' onClick={() => setAge(20)}>SET AGE TO 20</button>
        </div>
    )
}
export default Counter