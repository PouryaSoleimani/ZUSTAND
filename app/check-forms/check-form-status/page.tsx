/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import useCheckFormStore from '@/store/useCheckFormStore'
import React from 'react'

const CheckFormStatusPage = () => {
    const { checkedForms } = useCheckFormStore() as any
    return (
        <div className='font-bold text-3xl p-10'>
            STATUS : <span className='text-emerald-700'>{checkedForms.a}{checkedForms.b}{checkedForms.c}</span>
        </div>
    )
}

export default CheckFormStatusPage