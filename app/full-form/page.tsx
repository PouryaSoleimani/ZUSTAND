/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import useMultipleFormStore from '@/store/useMultipleFormStore'
import React, { useState } from 'react'

const FullFormPage = () => {
    const { color, gram, material, setColor, setGram, setMaterial, additionalDesc, isChecked } = useMultipleFormStore() as any

    const [Color, SetColor] = useState('')
    const [Gram, SetGram] = useState('')
    const [Material, SetMaterial] = useState('')

    function submitHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.info(Color, Gram, Material)
        setColor(Color.toUpperCase())
        setGram(Gram.toUpperCase())
        setMaterial(Material.toUpperCase())
        SetColor(''); SetGram(''); SetMaterial('')
        location.reload()
    }
    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <form className='flex items-center justify-center flex-col gap-4 p-4 rounded-xl bg-neutral-900 border border-neutral-500' onSubmit={(event) => submitHandler(event)}>
                <h2 className='font-black'>MULTIPLE FORM</h2>
                <input className='w-64 p-2 text-black rounded outline-none border-0 font-bold bg-neutral-400' type="text" placeholder='COLOR' value={Color} onChange={(e) => SetColor(e.target.value)} />
                <input className='w-64 p-2 text-black rounded outline-none border-0 font-bold bg-neutral-400' type="text" placeholder='GRAM' value={Gram} onChange={(e) => SetGram(e.target.value)} />
                <input className='w-64 p-2 text-black rounded outline-none border-0 font-bold bg-neutral-400' type="text" placeholder='MATERIAL' value={Material} onChange={(e) => SetMaterial(e.target.value)} />
                <button className='btn btn-secondary btn-block'>SUBMIT</button>
            </form>
            <div className='bg-neutral-900 px-10 py-3 space-y-5 my-5 text-lg rounded-xl border'>
                <h3>COLOR : <span className='font-bold text-pink-500'>{color}</span></h3>
                <h3>GRAM : <span className='font-bold text-emerald-500'>{gram}</span></h3>
                <h3>MATERIAL : <span className='font-bold text-cyan-500'>{material}</span> </h3>
                <h3>DESC : <span className='font-bold text-sky-500'>{additionalDesc}</span></h3>
                <div className={`w-32 h-10 rounded-lg text-xl font-semibold  mx-auto  flex items-center justify-center ${isChecked ? "bg-green-600" : "bg-red-600/50"}`}>
                    <span>{isChecked == true ? "TRUE" : "FALSE"}</span>
                </div>
            </div>
        </div>
    )
}

export default FullFormPage