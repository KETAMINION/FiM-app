import React from "react";
import Sex from "../Sex/Sex";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Result from "../Result/Result";
import { useState } from "react";

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [sex, setSex] = useState(null);
  const [bmi, setBmi] = useState(null);

  function handleChangeHeight(e) {
    setHeight(e.target.value);
  }
  function handleChangeWeight(e) {
    setWeight(e.target.value);
  }
  function handleChangeSex(e) {
    setSex(e.target.value);
  }
  function calculateBmi() {
    let heightSquare = Math.pow(height / 100, 2);
    setBmi((weight / heightSquare).toFixed(1));
  }
let judgement = ""
  switch(true){
    case bmi < 18.5:
        judgement = "underweight"
        break;
    case bmi >=18.5 && bmi <= 24.9:
        judgement = "normal"
        break;
    case bmi >= 25 && bmi <= 29.9:
        judgement = "overweight"
        break;
    case bmi >= 30:
        judgement = "obese"
  }


  return [
    <Sex handleChange={handleChangeSex} />,
    <Input
      for="height"
      label="Height"
      id="height"
      handleChange={handleChangeHeight}
      placeholder="in CM"
    />,
    <Input
      for="weight"
      label="Weight"
      id="weight"
      handleChange={handleChangeWeight}
      placeholder="in KG"
    />,
    <Button calculate={calculateBmi} />,
    <Result bmi={bmi} judgement={judgement}/>,
  ];
}
export default App;
