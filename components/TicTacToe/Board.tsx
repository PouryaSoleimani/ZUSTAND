import React from 'react'
import Square from './Square'

const Board = () => {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: 'repeat(3, 1fr)',
                width: 'calc(3 * 2.5rem)',
                height: 'calc(3 * 2.5rem)',
                border: '1px solid #999',
            }}
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