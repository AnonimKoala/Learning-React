import Input from "./components/Input.jsx";
import Table from "./components/Table.jsx";
import Header from "./components/Header.jsx";
import {useState} from "react";

function App() {
    const [inputsValue, setInputsValue] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })

    const inputIsValid = inputsValue.duration >= 1

    function handleInputValueChange(symbol, newInputValue) {
        setInputsValue(prevState => {
            return {
                ...prevState,
                [symbol]: parseInt(newInputValue)
            }
        })
    }

    return (<main>
        <Header title={"React Investment Calculator"}/>

        <div id="user-input">
            <div className="input-group">
                <Input placeholder={"INITIAL INVESTMENT"}
                       onChangeInputValue={handleInputValueChange}
                       symbol={"initialInvestment"}
                       initialValue={inputsValue.initialInvestment}
                />
                <Input placeholder={"ANNUAL INVESTMENT"}
                       onChangeInputValue={handleInputValueChange}
                       symbol={"annualInvestment"}
                       initialValue={inputsValue.annualInvestment}
                />
            </div>
            <div className="input-group">
                <Input placeholder={"EXPECTED RETURN"}
                       onChangeInputValue={handleInputValueChange}
                       symbol={"expectedReturn"}
                       initialValue={inputsValue.expectedReturn}
                />
                <Input placeholder={"DURATION"}
                       onChangeInputValue={handleInputValueChange}
                       symbol={"duration"}
                       initialValue={inputsValue.duration}
                />
            </div>
        </div>

        {inputIsValid && <Table dataObj={inputsValue}/>}
        {!inputIsValid && <p className="center">Duration must be greater than 0.</p>}

    </main>);
}

export default App
