import React from 'react'
import Square from './Square'

const Board = () => {
    return (
        <div
            className='grid grid-cols-3 grid-row-3 w-1/2 mx-auto h-1/2 bg-zinc-950 border border-zinc-800 rounded-lg p-4'
        >
            <Square value="1" />
            <Square value="2" />
            <Square value="3" />
            <Square value="4" />
            <Square value="5" />
            <Square value="6" />
            <Square value="7" />
            <Square value="8" />
            <Square value="9" />
        </div>
    )
}

export default Board