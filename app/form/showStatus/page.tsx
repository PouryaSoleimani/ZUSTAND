"use client"
import useFormStorage from '@/store/useFormStorage'
import { useRouter } from 'next/navigation'
import React from 'react'

const ShowStatusPage = () => {
    const { formDatas } = useFormStorage()
    const router = useRouter()

    function backHandler() {
        router.back()
    }

    return (
        <div className='w-screen h-screen flex flex-col gap-6 items-center justify-center'>
            <div className='flex flex-col gap-y-6 bg-zinc-800 p-5 border rounded-xl font-semibold tracking-tighter'>
                <p>YOUR FIRST NAME  : <span className='text-sky-800 font-extrabold text-xl'> {formDatas?.firstName}</span></p>
                <p>YOUR LAST NAME : <span className='text-sky-800 font-extrabold text-xl'>{formDatas.lastName}</span></p>
                <p>YOUR AGE : <span className='text-sky-800 font-extrabold text-xl'>{formDatas.age}</span></p>
            </div>
            <button className='bg-zinc-700 px-4 py-2 rounded-lg' onClick={backHandler}>BACK</button>
        </div>
    )
}

export default ShowStatusPage