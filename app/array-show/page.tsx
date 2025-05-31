"use client"
import useArrayStore from '@/store/arrayStore';
import Link from 'next/link';
import React from 'react'

const ArrayShowPage = () => {
    const { array, addToArray, removeFromArray } = useArrayStore();
    console.info("ARRAY // ARRAY SHOW ===> ", array)
    const fakeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <div>ArrayShowPage
            <div className='flex flex-wrap gap-5 m-10'>
                {array.length ? array.map((item, index) => (
                    <div key={index} className='badge badge-neutral p-5 border-2 border-warning text-white font-bold text-xl'>{item}</div>
                )) : (
                    <div>No Data</div>
                )}
            </div>
            <div>
                <button className='btn px-2 m-2 btn-success' onClick={() => addToArray(fakeArray)}>ADD</button>
                <button className='btn px-2 m-2 btn-error' onClick={removeFromArray}>REMOVE</button>
                <Link className='btn px-2 m-2 btn-info' href={'/data-show'} >LINK</Link>
            </div>
        </div>
    )
}

export default ArrayShowPage