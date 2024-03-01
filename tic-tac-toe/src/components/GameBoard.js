

export default function GameBoard({ onSelectField, board }) {



    return (<ol id="game-board">
        {board.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((symbol, colIndex) => <li key={colIndex}>
                    <button onClick={()=> onSelectField(rowIndex, colIndex)} disabled={symbol !== null}>{symbol}</button>
                </li>)}
            </ol>

        </li>)}
    </ol>)

};