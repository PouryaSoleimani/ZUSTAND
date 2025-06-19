/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import useCheckFormStore from '@/store/useCheckFormStore'
import React from 'react'

const CheckFormStatusPage = () => {
    const { checkedForms } = useCheckFormStore() as any
    return (
        <div>
            STATUS : {JSON.stringify(checkedForms)}
        </div>
    )
}

export default CheckFormStatusPage