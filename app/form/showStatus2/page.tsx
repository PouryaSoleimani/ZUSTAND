"use client"
import useFormStorage from '@/store/useFormStorage'
import React from 'react'

const ShowStatus2 = () => {
    const { formDatas } = useFormStorage()

    return (
        <div>{formDatas.firstName}/{formDatas.lastName}/{formDatas.age}</div>
    )
}

export default ShowStatus2