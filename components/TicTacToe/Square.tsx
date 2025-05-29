"use client"
import React from 'react'
interface SquarePropsType {
    value: string | null
    onSquareClick?: () => void
}
const Square: React.FC<SquarePropsType> = ({ value, onSquareClick }) => {

    return (
        <button
            className='bg-zinc-900 px-6 py-4 rounded-lg font-black text-xl m-2 border border-zinc-800'
            onClick={onSquareClick}
        >
            {value}
        </button>
    )
}
export default Square