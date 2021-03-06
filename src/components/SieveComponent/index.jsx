import React, { useEffect, useState } from "react";
import "./style.css";
import DynamicExampleComponent from "../DynamicExampleComponent";
import sieveOfEratosthenesService from "../../services/sieveOfEratosthenesService";

function SieveComponent({ selectLang }) {
  const [finalNumber, setFinalNumber] = useState();
  const [stage, setStage] = useState(0);
  const [nextStep, setNextStep] = useState(0);
  const [primeArray, setPrimeArray] = useState([]);
  const [resetDynamicComponent, setResetDynamicComponent] = useState(false);

  const [buttonTextBR, setButtonTextBR] = useState("Iniciar");
  const [buttonTextEN, setButtonTextEN] = useState("Start");
  let handleInputEvent = null;

  useEffect(() => {
    if (!selectLang) {
      setButtonTextEN(
        nextStep === 0
          ? "Start"
          : nextStep >= 1 && nextStep < 3
          ? "Next"
          : nextStep === 3 && "Reset"
      );
    } else {
      setButtonTextBR(
        nextStep === 0
          ? "Iniciar"
          : nextStep >= 1 && nextStep < 3
          ? "Próximo passo"
          : nextStep === 3 && "Reiniciar"
      );
    }
  }, [selectLang, nextStep]);

  useEffect(() => {
    function generateInitialArray() {
      const temp = sieveOfEratosthenesService.generateInitialArray(finalNumber);
      let resultArray = [];
      resultArray.push(temp);
      handlePrimeArray(resultArray);
      setStage(stage + 1);
    }

    if (stage === 1) {
      generateInitialArray();
    }
  }, [stage, finalNumber]);

  useEffect(() => {
    function divisibleByTwo() {
      const temp = sieveOfEratosthenesService.divisibleByTwo(
        primeArray[stage - 2]
      );
      let resultArray = [];
      resultArray.push(primeArray[stage - 2]);
      resultArray.push(temp);
      handlePrimeArray(resultArray);
    }

    if (stage === 2) {
      divisibleByTwo();
      setStage(stage + 1);
    }
  }, [stage, primeArray]);

  useEffect(() => {
    function handleMultiples() {
      const temp = sieveOfEratosthenesService.handleMultiples(
        primeArray[stage - 2],
        finalNumber
      );
      let resultArray = primeArray.concat([temp]);
      handlePrimeArray(resultArray);
    }

    if (stage === 3) {
      handleMultiples();
      setStage(stage + 1);
    }
  }, [stage, primeArray, finalNumber]);

  useEffect(() => {
    if (primeArray.length !== 0 && nextStep === 0) {
      setNextStep(nextStep + 1);
    }
  }, [primeArray, nextStep]);

  function handleFinalNumber(event) {
    event.persist();
    clearTimeout(handleFinalNumber);

    handleFinalNumber = setTimeout(() => {
      setFinalNumber(event.target.value);
    }, 500);
  }

  function startExemple() {
    if (stage === 0) {
      if (finalNumber !== 0) {
        setStage(stage + 1);
      }
    }
  }

  function showNextStep() {
    if (nextStep < 3) {
      setNextStep(nextStep + 1);
    } else if (nextStep === 3) {
      resetSieveComponent();
    }
  }

  function resetSieveComponent() {
    setFinalNumber("");
    document.getElementById("finalNumber").value = "";
    setStage(0);
    setNextStep(0);
    setPrimeArray([]);
    setResetDynamicComponent(true);
    setTimeout(() => {
      setResetDynamicComponent(false);
    }, 500);
  }

  function handlePrimeArray(newArray) {
    setPrimeArray(newArray);
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
            : "Para iniciarmos digite um número maior que 2."}
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
          readOnly={nextStep !== 0}
          placeholder={
            !selectLang
              ? "Enter a number greater than 2"
              : "Digite um numero maior que 2"
          }
          onInput={handleFinalNumber}
        />
        {!resetDynamicComponent && (
          <DynamicExampleComponent
            selectLang={selectLang}
            step={nextStep}
            currentPrimeArray={primeArray[nextStep - 1]}
          />
        )}
        <button
          className={`principalButton ${
            (nextStep < 3) & (nextStep !== 0) && "positionCorrection"
          }`}
          disabled={stage !== 3 ? false : true}
          onClick={() => (stage === 0 ? startExemple() : showNextStep())}
        >
          {!selectLang ? buttonTextEN : buttonTextBR}
        </button>
      </div>
    </>
  );
}

export default SieveComponent;
