/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import useMultiStepFormStore from '@/store/form/useMultiStepForm'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Form2 = () => {

    const [job, setJob] = useState('')
    const [wish, setWish] = useState('')
    const [isHappy, setIsHappy] = useState(false)
    const { setFirstStep } = useMultiStepFormStore() as any

    const router = useRouter()

    function submitHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.info("FORM DATA ===>", job, wish, isHappy)
        const secondStepObject = { job, wish, isHappy }
        setFirstStep(secondStepObject)
        router.push('/multi-step-form/checkout')
    }

    return (
        <form className='fieldset border-2 border-zinc-900 p-5 rounded-xl outline-0' onSubmit={submitHandler}>
            <input type="text" className='input rounded-md' placeholder='JOB' value={job} onChange={event => setJob(event.target.value)} />
            <input type="text" className='input rounded-md' placeholder='WISH' value={wish} onChange={event => setWish(event.target.value)} />
            <div className='flex gap-3 border border-zinc-900 p-3 rounded items-center justify-between'>
                <label htmlFor="HAPPY__CHECK">ARE YOU HAPPY ?</label>
                <input name="HAPPY__CHECk" type="checkbox" className='checkbox rounded-md' placeholder='Age ...' value={isHappy as any} onClick={() => setIsHappy(!isHappy)} />
            </div>
            <button type='submit' className='btn btn-success rounded'>SUBMIT</button>
        </form>
    )
}

export default Form2