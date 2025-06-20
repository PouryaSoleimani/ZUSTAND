/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import useMultiStepFormStore from '@/store/form/useMultiStepForm'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Form1 = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const { setFirstStep } = useMultiStepFormStore() as any
    const router = useRouter()
    function submitHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.info("FORM DATA ===>", firstName, lastName, age)
        const firstStepObject = { firstName, lastName, age }
        setFirstStep(firstStepObject)
        router.push('/multi-step-form/step-2')
    }
    return (
        <form className='fieldset border-2 border-zinc-900 p-5 rounded-xl outline-0' onSubmit={submitHandler}>
            <input type="text" className='input rounded-md' placeholder='First Name ...' value={firstName} onChange={event => setFirstName(event.target.value)} />
            <input type="text" className='input rounded-md' placeholder='Last Name ...' value={lastName} onChange={event => setLastName(event.target.value)} />
            <input type="text" className='input rounded-md' placeholder='Age ...' value={age} onChange={event => setAge(event.target.value)} />
            <button type='submit' className='btn btn-success rounded'>SUBMIT</button>
        </form>
    )
}

export default Form1