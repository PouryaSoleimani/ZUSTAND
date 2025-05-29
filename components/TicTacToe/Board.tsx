import React from 'react'
import Square from './Square'
import useGameStore from '@/store/useGameStore'

const Board = () => {
    const squares = useGameStore((state) => state.squares)
    const setSquares = useGameStore((state) => state.setSquares)

    function handleClick(i: number) {
        if (squares[i]) return
        const nextSquares = squares.slice()
        nextSquares[i] = 'X'
        setSquares(nextSquares)
    }

    return (
        <div
            className='grid grid-cols-3 grid-row-3 w-1/2 mx-auto h-1/2 bg-zinc-950 border border-zinc-800 rounded-lg p-4'
        >
            {squares.map((square, squareIndex) => (
                <Square key={squareIndex} value={square} onSquareClick={() => handleClick(squareIndex)} />
            ))}
        </div>
    )
}

export default Board