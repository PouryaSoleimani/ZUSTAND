'use client'
import useNameStore from '@/store/nameStore'
import Link from 'next/link'
import React from 'react'

const NameShowPage = () => {
    const { name, setName, removeName } = useNameStore()

    return (
        <div>NameShowPage
            <h3 className='text-center mx-auto bg-red-900 text-white p-4 border w-96 text-lg font-bold rounded-3xl'>{name.length ? name : "NOTHING HERE"}</h3>
            <div>
                <button className='btn mx-3 btn-neutral' onClick={() => setName("POURYA")}>SET NAME</button>
                <button className='btn mx-3 btn-error' onClick={removeName}>DELETE NAME</button>
                <Link className='link-neutral' href={'/products-show'}>PRODUCTS</Link>
            </div>
        </div>
    )
}

export default NameShowPage