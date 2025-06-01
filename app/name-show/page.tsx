'use client'
import useAgeStore from '@/store/ageStore'
import useNameStore from '@/store/nameStore'
import Link from 'next/link'
import React from 'react'

const NameShowPage = () => {
    const { name, setName, removeName } = useNameStore()
    const { age } = useAgeStore()
    console.log("AGE / NAME SHOW PAGE", age)
    
    return (
        <div>NameShowPage
            <h3 className='text-center mx-auto bg-red-900 text-white p-4 border w-96 text-lg font-bold rounded-3xl'>{name.length ? name : "NOTHING HERE"}</h3>
            <div className='bg-black p-4 flex justify-start mt-4'>
                <button className='btn mx-3 btn-neutral border' onClick={() => setName("POURYA")}>SET NAME</button>
                <button className='btn mx-3 btn-error border' onClick={removeName}>DELETE NAME</button>
                <Link className='btn btn-info mx-3 border' href={'/products-show'}>PRODUCTS</Link>
            </div>
        </div>
    )
}

export default NameShowPage