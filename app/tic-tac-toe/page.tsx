"use client"
import Board from '@/components/TicTacToe/Board'
import React from 'react'

const TicTacToePage = () => {

    return (
        <div className='w-screen h-screen bg-zinc-950 text-white flex flex-col justify-center items-center'>
            <h1 className='bg-sky-900 px-6 py-4 rounded-xl font-black text-xl m-5 border border-zinc-500'>Tic-Tac-Toe Page</h1>
            <Board />
        </div>
    )
}

export default TicTacToePage