import {calculateInvestmentResults} from "../util/investment.js";
import {formatter} from "../util/investment.js";

export default function Table({dataObj}) {
    const data = calculateInvestmentResults(dataObj)

    return (<table id="result">
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

        {data.map((obj) => {
            return <tr key={obj.year}>
                <td>{obj.year}</td>
                <td>{formatter.format(obj.valueEndOfYear)}</td>
                <td>{formatter.format(obj.interest)}</td>
                <td>{formatter.format(obj.valueEndOfYear - obj.annualInvestment)}</td>
                <td>{formatter.format(obj.annualInvestment)}</td>

            </tr>
        })}

        <tr>

        </tr>
        </tbody>
    </table>)
};