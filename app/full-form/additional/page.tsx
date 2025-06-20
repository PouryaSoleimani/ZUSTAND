/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import useMultipleFormStore from '@/store/useMultipleFormStore'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const AdditionalDescPage = () => {
    const { setAdditionalDescription } = useMultipleFormStore() as any
    const [Desc, setDesc] = useState('')
    const router = useRouter()
    function submitHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setAdditionalDescription(Desc)
        router.push('/full-form')
    }

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <form className='flex items-center justify-center flex-col gap-4 p-4 rounded-xl bg-neutral-900 border border-neutral-500' onSubmit={(event) => submitHandler(event)}>
                <h2 className='font-black'>ADDITIONAL DESC FORM</h2>
                <input className='w-64 p-2 text-black rounded outline-none border-0 font-bold bg-neutral-400' type="text" placeholder='DESCRIPTION' value={Desc} onChange={(e) => setDesc(e.target.value)} />
                <button className='btn btn-secondary btn-block'>SUBMIT</button>
            </form>
            <div className='bg-neutral-900 px-10 py-3 space-y-5 my-5 text-lg rounded-xl border'>
                <h3>DESC : <span className='font-bold text-pink-500'>{Desc}</span></h3>
            </div>
        </div>
    )
}

export default AdditionalDescPage