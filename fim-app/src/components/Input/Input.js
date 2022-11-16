import React from "react";
function Input() {
  return (
    <div className="inputs-container">
      <label for="height">Height</label>
      <input id="height" type="text" />
      <label for="weight">Weight</label>
      <input id="weight" type="text" />
    </div>
  );
}
export default Input;
