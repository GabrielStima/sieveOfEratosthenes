import React, { useState, useEffect } from "react";
import "./style.css";

function HeaderComponent({ callbackLangValue }) {
  const [lang, setLang] = useState(false);

  useEffect(() => {
    callbackLangValue(lang);
  }, [lang, callbackLangValue]);

  function handleChangeLang() {
    setLang(!lang);
  }

  return (
    <header className="backgroundHeader">
      <div className="principalTitle">
        {!lang ? <h1>Sieve of Eratosthenes</h1> : <h1>Crivo de Eratóstenes</h1>}
      </div>
      <div className="translateOption">
        <span className="extendMouseArea">
          <p>EN</p>
          <input
            type="checkbox"
            className="checkboxLang"
            id="checkboxLang"
            onChange={handleChangeLang}
            defaultChecked={lang}
          />
          <label htmlFor="checkboxLang" className="buttonLang">
            <span>{`Traduzir para ${!lang ? "pt-BR" : "EN"}`}</span>
          </label>
          <p>BR</p>
        </span>
      </div>
    </header>
  );
}

export default HeaderComponent;
