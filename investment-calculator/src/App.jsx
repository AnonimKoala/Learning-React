import Input from "./components/Input.jsx";
import Table from "./components/Table.jsx";
import Header from "./components/Header.jsx";

function App() {
    return (<main>
            <Header title={"React Investment Calculator"}/>

            <div id="user-input">
                <div className="input-group">
                    <Input placeholder={"INITIAL INVESTMENT"}/>
                    <Input placeholder={"ANNUAL INVESTMENT"}/>
                </div>
                <div className="input-group">
                    <Input placeholder={"EXPECTED RETURN"}/>
                    <Input placeholder={"DURATION"}/>
                </div>
            </div>

            <Table/>

        </main>);
}

export default App
