import React from "react";
function Input(props) {
  return (
    <div className="inputs-container">
      <label for={props.for}>{props.label}</label>
      <input id={props.id} type="text" onChange={props.handleChange} />
    </div>
  );
}
export default Input;
