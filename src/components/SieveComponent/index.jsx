import React, { useEffect, useState } from "react";
import "./style.css";

function SieveComponent({ selectLang }) {
  const [buttonTextBR, setButtonTextBR] = useState("Iniciar");
  const [buttonTextEN, setButtonTextEN] = useState("Start");
  const [finalNumber, setFinalNumber] = useState(0);
  let handleInputEvent = null;

  function handleFinalNumber(event) {
    event.persist();
    clearTimeout(handleFinalNumber);

    handleFinalNumber = setTimeout(() => {
      setFinalNumber(event.target.value);
      console.log("teste", finalNumber);
    }, 500);
  }

  return (
    <>
      <div className="sieveComponentBody">
        <label
          htmlFor="finalNumber"
          className="initialDescription"
          id="labelFinalNumber"
        >
          {!selectLang
            ? "To start, type a number greater than 2."
            : "Para iniciarmos digite um numero maior que 2."}
          <span className="testHint">
            <b>
              {!selectLang
                ? "(For a better presentation I suggest the number 50)"
                : "(Para uma melhor apresentação sugiro o numero 50)"}
            </b>
          </span>
        </label>
        <input
          type="number"
          name="finalNumber"
          className="principalInput"
          id="finalNumber"
          placeholder={
            !selectLang
              ? "Enter a number greater than 2"
              : "Digite um numero maior que 2"
          }
          onInput={handleFinalNumber}
        />
        {/*  */}
        <button className="principalButton">
          {!selectLang ? buttonTextEN : buttonTextBR}
        </button>
      </div>
    </>
  );
}

export default SieveComponent;
