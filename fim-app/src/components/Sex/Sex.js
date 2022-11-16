import React from "react";
function Sex(props) {
  return (
    <div className="sex-container">
      <label for="F">Female</label>
      <input
        id="F"
        type="radio"
        value="Female"
        name="sex"
        onChange={props.handleChange}
      />
      <label for="M">Male</label>
      <input
        id="M"
        type="radio"
        value="Male"
        name="sex"
        onChange={props.handleChange}
      />
    </div>
  );
}
export default Sex;
