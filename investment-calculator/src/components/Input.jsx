export default function Input({placeholder}) {
    const inputId = placeholder.toLowerCase().replace(/\s+/g, '-')
    return (
            <div>
                <label htmlFor={inputId}>{placeholder.toUpperCase()}</label>
                <input type="number" id={inputId}/>
            </div>
    )
}