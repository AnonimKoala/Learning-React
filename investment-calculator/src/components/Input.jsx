import {useState} from "react";


export default function Input({placeholder, onChangeInputValue, initialValue, symbol}) {
    const [inputValue, setInputValue] = useState(initialValue);

    function handleChange(e) {
        const newValue = e.target.value
        setInputValue(newValue)
        onChangeInputValue(symbol, newValue)
    }

    return (
        <div>
            <label htmlFor={symbol}>{placeholder.toUpperCase()}</label>
            <input type="number" id={symbol} value={inputValue} onChange={handleChange}/>
        </div>
    )
}