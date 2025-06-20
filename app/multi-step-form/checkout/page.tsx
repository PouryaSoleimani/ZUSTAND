/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import useMultiStepFormStore from '@/store/form/useMultiStepForm'
import React from 'react'

const CheckOutPage = () => {
    const { allFormData } = useMultiStepFormStore() as any
    return (
        <section className='w-screen h-screen flex flex-col gap-5 text-2xl font-bold items-center justify-center'>
            YOUR STATUS
            <div className='bg-zinc-900 p-5 rounded-xl space-y-4'>
                <h2>FIRST NAME : <span className='bg-zinc-950 px-3 py-1.5 rounded-lg font-black '>{allFormData.firstName}</span></h2>
                <h2>LAST NAME : <span className='bg-zinc-950 px-3 py-1.5 rounded-lg font-black '>{allFormData.lastName}</span></h2>
                <h2>AGE : <span className='bg-zinc-950 px-3 py-1.5 rounded-lg font-black '>{allFormData.age}</span></h2>
                <h2>JOB : <span className='bg-zinc-950 px-3 py-1.5 rounded-lg font-black '>{allFormData.job}</span></h2>
                <h2>WISH : <span className='bg-zinc-950 px-3 py-1.5 rounded-lg font-black '>{allFormData.wish}</span></h2>
                <h2>HAPPY ? : <span className={`px-3 py-1.5 rounded-lg font-black ${allFormData.isHappy ? "bg-emerald-950" : "bg-red-950"}`}>{allFormData.isHappy == true ? "☺️" : "☹️"}</span></h2>
            </div>
        </section>
    )
}

export default CheckOutPage