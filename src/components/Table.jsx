import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Table({ investmentObj }) {
  const resultData = calculateInvestmentResults(investmentObj);

  return (
    <div id="result">
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>

        <tbody>
          {resultData.map((row) => {
            const investedCapital = investmentObj.initialInvestment + row.annualInvestment * row.year;
            return (
              <tr key={row.year}>
                <td>{row.year}</td>
                <td>{formatter.format(row.valueEndOfYear)}</td>
                <td>{formatter.format(row.interest)}</td>
                <td>{formatter.format(row.valueEndOfYear - investedCapital)}</td>
                <td>{formatter.format(investedCapital)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
