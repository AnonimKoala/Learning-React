import {useState} from "react";


export default function Input({placeholder, onChangeInputValue, initialValue, symbol}) {
    const [inputValue, setInputValue] = useState(initialValue);

    function handleChange(e) {
        setInputValue(e.target.value)
        onChangeInputValue(symbol, inputValue)
    }

    return (
        <div>
            <label htmlFor={symbol}>{placeholder.toUpperCase()}</label>
            <input type="number" id={symbol} value={inputValue} onChange={handleChange}/>
        </div>
    )
}