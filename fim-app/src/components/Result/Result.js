import React from "react";
function Result(props) {
  return (
    <div className="result-container">
      <p>Your BMI is:{props.bmi}.</p>
      <p>You are {props.judgement}.</p>
    </div>
  );
}
export default Result;
