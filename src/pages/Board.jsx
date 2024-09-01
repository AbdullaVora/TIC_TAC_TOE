import React, { useState } from 'react'
import Square from '../components/square'

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [players, setPlayers] = useState(true);
    const [winner, setWinner] = useState(null);

    const handleFill = (index) => {
        let fill = [...squares];

        if (fill[index] || winner) {
            return;
        } else {
            fill[index] = players ? 'O' : 'X';
        }

        setSquares(fill);
        setPlayers(!players);
        winnerCheck(fill);
        checkDraw(fill);
    }

    const winnerCheck = (fill) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6]             // diagonals
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (fill[a] && fill[a] === fill[b] && fill[a] === fill[c]) {
                setWinner(fill[a]);
                return;
            }
        }
    }

    const checkDraw = (fill) => {
        if (fill.every(square => square !== null) && !winner) {
            setWinner('Draw...');
        }
    }

    const handleRepaly = () => {
        window.location.reload();
    }

    return (
        <>
            <div className="board">
                {squares.map((value, index) => {
                    return (
                        <Square key={index} props={value} onClick={() => handleFill(index)} />
                    )
                })}
            </div>
            <div className="winner">
                {winner && <div className="winner" style={{marginTop: '20px', fontSize: '32px' }}>Winner : {winner}</div>}
                {winner && <button onClick={handleRepaly} style={{marginTop:'25px', marginLeft:'30px'}}>RePlaying Game</button>}
            </div>
        </>
    )
}

export default Board
