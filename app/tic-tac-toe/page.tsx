"use client"
import Square from '@/components/TicTacToe/Square'
import React from 'react'

const TicTacToePage = () => {
    const onSquareClick = () => { console.log("SQUARE CLICK") }

    return (
        <div>
            <h1>TicTacToePage</h1>
            <Square value={0} onSquareClick={onSquareClick} />
        </div>
    )
}

export default TicTacToePage