import React from "react";
function Input(props) {
  return (
    <div className="inputs-container">
      <label for={props.for}>{props.label}</label>
      <input
        id={props.id}
        value={props.value}
        type="text"
        onChange={props.handleChange}
        placeholder={props.placeholder}
      />
    </div>
  );
}
export default Input;
