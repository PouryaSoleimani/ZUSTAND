/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import useMultipleFormStore from '@/store/useMultipleFormStore'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const CheckPage = () => {
    const { setIsChecked } = useMultipleFormStore() as any
    const [check, setCheck] = useState(false)
    const router = useRouter()
    function submitHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsChecked(check)
        router.push('/full-form')
    }

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <form className='flex items-center justify-center flex-col gap-4 p-4 rounded-xl bg-neutral-900 border border-neutral-500' onSubmit={(event) => submitHandler(event)}>
                <h2 className='font-black'>ADDITIONAL DESC FORM</h2>
                <div className='flex items-center justify-between w-full'>
                    <label htmlFor="check" className='text-emerald-500'>TRUE</label>
                    <input name='check' className='w-64 p-2 text-black rounded outline-none border-0 font-bold bg-neutral-400' type="checkbox" placeholder='DESCRIPTION' value={check as any} onChange={() => setCheck(true)} />
                </div>
                <div className='flex items-center justify-between w-full'>
                    <label htmlFor="check" className='text-rose-500'>FALSE</label>
                    <input name='check' className='w-64 p-2 text-black rounded outline-none border-0 font-bold bg-neutral-400' type="checkbox" placeholder='DESCRIPTION' value={check as any} onChange={() => setCheck(false)} />
                </div>
                <button className='btn btn-secondary btn-block'>SUBMIT</button>
            </form>
            <div className='bg-neutral-900 px-10 py-3 space-y-5 my-5 text-lg rounded-xl border'>
                <h3>DESC : <span className='font-bold text-pink-500'>{!!check}</span></h3>
            </div>
        </div>
    )
}

export default CheckPage