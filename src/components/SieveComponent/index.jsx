import React from "react";
import "./style.css";
function SieveComponent({ selectLang }) {
  return (
    <>
      <div>
        <label
          htmlFor="finalNumber"
          className="initialDescription"
          id="labelFinalNumber"
        >
          To start, type a number greater than 2.
          <span className="testHint">
            <b>(For a better presentation I suggest the number 50)</b>
          </span>
        </label>
        <input
          type="number"
          name="finalNumber"
          id="finalNumber"
          placeholder="Enter a number greater than 2"
        />
        {/*  */}
        <button>Start</button>
      </div>
    </>
  );
}

export default SieveComponent;
