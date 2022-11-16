import React from "react";
function Sex() {
  return (
    <div className="sex-container">
      <label for="F">Female</label>
      <input id="F" type="radio" value="Female" name="sex" />
      <label for="M">Male</label>
      <input id="M" type="radio" value="Male" name="sex" />
    </div>
  );
}
export default Sex;
