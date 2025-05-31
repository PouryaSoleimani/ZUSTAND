"use client"
import useArrayStore from '@/store/arrayStore';
import React from 'react'

const ArrayShowPage = () => {
    const { array, addToArray, removeFromArray } = useArrayStore();
    console.info("ARRAY ===> ", array)
    const fakeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <div>ArrayShowPage
            <div>
                <button onClick={() => addToArray(fakeArray)}>ADD</button>
                <button onClick={() => removeFromArray}>REMOVE</button>
            </div>
        </div>
    )
}

export default ArrayShowPage