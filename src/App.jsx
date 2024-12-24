import Header from "./components/Header";

function App() {
  return (
    <>
      <Header>Investment Calculator</Header>
      
      <div id="user-input">
        <div className="input-group">
          <label>
            Initial Investment
            <input type="text" name="initial-investment" id="initInvestment" />
          </label>{" "}
          <label>
            Initial Investment
            <input type="text" name="initial-investment" id="initInvestment" />
          </label>{" "}
          <label>
            Initial Investment
            <input type="text" name="initial-investment" id="initInvestment" />
          </label>{" "}
          <label>
            Initial Investment
            <input type="text" name="initial-investment" id="initInvestment" />
          </label>
        </div>
      </div>

      <div id="result">
        <table>
          <thead>
            <th>
              <td>1</td>
            </th>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
