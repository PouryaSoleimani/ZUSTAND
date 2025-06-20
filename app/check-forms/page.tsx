/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import useCheckFormStore from '@/store/useCheckFormStore'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const CheckFormsPage = () => {
    const [check1, setCheck1] = useState("")
    const [check2, setCheck2] = useState("")
    const [check3, setCheck3] = useState("")
    const [isDisabled, setIsDisabled] = useState(true)
    const [isShowError, setisShowError] = useState(false)
    const [color, setColor] = useState('')
    const router = useRouter()

    //* STORE
    const { addCheckedForms, SetColor, Color } = useCheckFormStore() as any

    useEffect(() => {
        if (check1 || check2 || check3) { setIsDisabled(false); setisShowError(false) }
        else { setIsDisabled(true); setisShowError(true) }
    }, [check1, check2, check3])

    function submitHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const newCheckFormObj = { a: check1, b: check2, c: check3 }
        console.info(check1, "//", check2, "//", check3)
        addCheckedForms(newCheckFormObj)
    }

    function submitHandler2(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        SetColor(color)
        console.info(color, Color)

    }

    return (
        <div>
            <form className='flex flex-col gap-5 rounded bg-neutral-800 p-5' onSubmit={(event) => { submitHandler(event) }}>
                <div className='flex items-center gap-4 border w-fit p-2 rounded-lg'>
                    <label htmlFor="check1">CHECK 1</label>
                    <input type="checkbox" name="check1" id="check1" value={check1 as any} onClick={() => setCheck1("THIS ")} />
                </div>
                <div className='flex items-center gap-4 border w-fit p-2 rounded-lg'>
                    <label htmlFor="check1">CHECK 2</label>
                    <input type="checkbox" name="check2" id="check2" value={check2 as any} onClick={() => setCheck2("IS A ")} />
                </div>
                <div className='flex items-center gap-4 border w-fit p-2 rounded-lg'>
                    <label htmlFor="check1">CHECK 3</label>
                    <input type="checkbox" name="check3" id="check3" value={check3 as any} onClick={() => setCheck3("TEXT")} />
                </div>
                <button type='submit' className={`w-fit bg-blue-600 px-7 py-1.5 rounded-md text-black font-bold ${isDisabled ? "opacity-25" : ""}`} disabled={isDisabled}>SEND</button>
                {isShowError && <p className='bg-red-900 text-red-100 text-xs font-bold p-2 rounded-md w-fit'>PLEASE SELECT AN OPTION TO CONTINUE</p>}
                <button
                    className={`bg-neutral-700 w-fit p-3 mx-auto rounded-md`}
                    onClick={() => { router.push('/check-forms/check-form-status') }}
                    disabled={isDisabled}
                >
                    SHOW STATUS</button>
            </form>
            <form className='flex flex-col gap-5 rounded bg-neutral-800 p-5' onSubmit={(event) => { submitHandler2(event) }}>
                {itemsArray.map((item) => (
                    <div className='flex' key={item.id}>
                        <label htmlFor="INPUT">{item.title}</label>
                        <input id={`ITEM_${item.id}`} name='INPUT' type='radio' onChange={() => setColor(item.title)} className={`bg-${item.value}-600 mx-3 rounded-xl flex items-center justify-center`} />
                    </div>
                ))}
                <button type='submit' className='bg-rose-500 w-fit px-7 py-3 text-black font-bold rounded-xl'>SUBMIT</button>
                <p>COLOR IS : {color}</p>
                <p>ZUSTAND COLOR IS : {Color}</p>
            </form>
        </div>
    )
}

export default CheckFormsPage

const itemsArray = [
    { id: 1, title: "RED", value: "red" },
    { id: 2, title: "BLUE", value: "blue" },
    { id: 3, title: "GREEN", value: "green" },
]