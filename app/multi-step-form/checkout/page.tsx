/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import useMultiStepFormStore from '@/store/form/useMultiStepForm'
import React from 'react'

const CheckOutPage = () => {
    const { allFormData } = useMultiStepFormStore() as any
    return (
        <div>
            {allFormData.firstName}
        </div>
    )
}

export default CheckOutPage