/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import useFormStorage from '@/store/useFormStorage'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const FormPage = () => {
    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [age, setAge] = useState("")
    const { formDatas, updateFormDatas } = useFormStorage()
    const router = useRouter()

    function submitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const dataObject = { firstName: name, lastName: lastname, age: age }
        updateFormDatas(dataObject)
        setName('')
        setLastname('')
        setAge('')
        router.push('/form/showStatus')
    }

    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <form className='bg-zinc-900 p-6 rounded flex flex-col gap-y-5 border text-lg' onSubmit={(e) => submitHandler(e)}>
                <input type="text" placeholder='FIRST_NAME' className='px-6 py-2 rounded font-bold border-2 border-neutral-600' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='LAST_NAME' className='px-6 py-2 rounded font-bold border-2 border-neutral-600' value={lastname} onChange={(e) => setLastname(e.target.value)} />
                <input type="text" placeholder='AGE' className='px-6 py-2 rounded font-bold border-2 border-neutral-600' value={age} onChange={(e) => setAge(e.target.value)} />
                <button className='p-4 rounded-lg bg-emerald-800 cursor-pointer hover:emerald-600 duration-300 border-none'>SEND</button>
            </form>
        </div>
    )
}

export default FormPage