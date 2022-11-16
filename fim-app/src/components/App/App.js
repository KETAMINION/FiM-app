import React from "react";
import Sex from "../Sex/Sex";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Result from "../Result/Result";

function App() {
  function handleChangeHeight(e) {
    let height = e.target.value;
  }
  function handleChangeWeight(e) {
    let weight = e.target.value;
  }

  function handleChangeSex(e) {
    let sex = e.target.value;
  }

  return [
    <Sex handleChange={handleChangeSex} />,
    <Input
      for="height"
      label="Height"
      id="height"
      handleChange={handleChangeHeight}
    />,
    <Input
      for="weight"
      label="Weight"
      id="weight"
      handleChange={handleChangeWeight}
    />,
    <Button />,
    <Result />
  ];
}
export default App;
