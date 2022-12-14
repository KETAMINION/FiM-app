import React from "react";

function Button(props) {
  return (
    <div className="buttons-container">
      <button className="calculate-button" onClick={props.calculate}>
        Calculate
      </button>
      <button className="reset-buton" onClick={props.reset}>
        Reset
      </button>
    </div>
  );
}
export default Button;
