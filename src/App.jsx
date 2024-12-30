import { useState } from "react";
import DataInput from "./components/DataInput";
import Header from "./components/Header";
import Table from "./components/Table";

const initInvestmentObj = {
  initialInvestment: 1000,
  annualInvestment: 100,
  expectedReturn: 5,
  duration: 3,
};

function App() {
  const [investmentObj, setInvestmentObj] = useState(initInvestmentObj);

  const isInputValid = !Object.values(investmentObj).some(i=> i===0);

  function handleChange(value, id) {
    if (!id) return;
    if (!value) value = 0;
    setInvestmentObj((prevObj) => {
      return {
        ...prevObj,
        [id]: parseInt(value),
      };
    });
  }

  return (
    <>
      <Header>Investment Calculator</Header>

      <div id="user-input">
        <div className="input-group">
          <DataInput handleChange={handleChange} baseValue={investmentObj.initialInvestment}>
            Initial Investment
          </DataInput>
          <DataInput handleChange={handleChange} baseValue={investmentObj.annualInvestment}>
            Annual Investment
          </DataInput>
          <DataInput handleChange={handleChange} baseValue={investmentObj.expectedReturn}>
            Expected Return
          </DataInput>
          <DataInput handleChange={handleChange} baseValue={investmentObj.duration}>
            Duration
          </DataInput>
        </div>
      </div>
      {!isInputValid && <p className="center">Values should be greater than zero</p>}
      {isInputValid && <Table investmentObj={investmentObj}></Table>}
    </>
  );
}

export default App;
