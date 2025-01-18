import { useState } from "react";
import Button from "./Button";
import SelectPercentage from "./SelectPercentage";
import BillInput from "./BillInput";
import Amount from "./Amount";
import "./styles.css";

function App() {
  const [price, setPrice] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const avPercentage = (percentage1 + percentage2) / 2;

  return (
    <div>
      <BillInput price={price} onPrice={setPrice} />
      <SelectPercentage percentage={percentage1} onPercentage={setPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onPercentage={setPercentage2}>
        How did your friend like the service?
      </SelectPercentage>
      <Amount price={price} avPercentage={avPercentage}></Amount>
      <Button setPrice={setPrice}>Reset</Button>
    </div>
  );
}

export default App;
