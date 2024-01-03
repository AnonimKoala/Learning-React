import {useState} from "react";

const initialGameBoard = [[null, null, null], [null, null, null], [null, null, null]]

export default function GameBoard({ onSelectField, activePlayerSymbol }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard)

    function handleSelectField(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArr => [...innerArr])]

            updatedBoard[rowIndex][colIndex] = activePlayerSymbol
            return updatedBoard
        })

        onSelectField()
    }


    return (<ol id="game-board">
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((symbol, colIndex) => <li key={colIndex}>
                    <button onClick={()=>{handleSelectField(rowIndex, colIndex)}}>{symbol}</button>
                </li>)}
            </ol>

        </li>)}
    </ol>)

};