import {useState} from "react";

export default function Player({initialName, symbol}) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)

    function handleChange(event) {
        setPlayerName(event.target.value)
    }

    function handleEditClick() {
        // setIsEditing(!isEditing) // => schedules a state update to true

        // Change the latest value of state (isEditing is auto pass to editing)
        setIsEditing((editing) => !editing)
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    let btnCaption = "Edit"

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>  // Default value
        btnCaption = "Save"
    }

    return (
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    );
};