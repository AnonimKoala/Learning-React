function App() {
    return (<main>
        <header id="header">
            <img src="src/assets/investment-calculator-logo.png" alt="logo"/>
            <h1>React Investment Calculator</h1>
        </header>
        <div id="user-input">
            <div className="input-group">
                <div>
                    <label htmlFor="init-investment">INITIAL INVESTMENT</label>
                    <input type="number" id="init-investment"/>
                </div>
                <div>
                    <label htmlFor="annual-investment">ANNUAL INVESTMENT</label>
                    <input type="number" id="annual-investment"/>
                </div>
            </div>

            <div className="input-group">
                <div>
                    <label htmlFor="expected-return">EXPECTED RETURN</label>
                    <input type="number" id="expected-return"/>
                </div>
                <div>
                    <label htmlFor="duration">DURATION</label>
                    <input type="number" id="duration"/>
                </div>
            </div>
        </div>

            <table id="result">
                <thead>
                <tr>
                    <td>Year</td>
                    <td>Investment Value</td>
                    <td>Interest (Year)</td>
                    <td>Total interest</td>
                    <td>Invested capital</td>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>$11,000</td>
                        <td>$600</td>
                        <td>$600</td>
                        <td>$11,200</td>
                    </tr>
                </tbody>
            </table>

    </main>);
}

export default App
