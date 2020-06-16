import React, { useState } from "react";
import Header from "./components/HeaderComponent";
import InfoComponent from "./components/InfoComponent";

function App() {
  const [lang, setLang] = useState(false);

  function langValue(value) {
    setLang(value);
  }

  return (
    <>
      <Header callbackLangValue={langValue} />
      <main>
        <InfoComponent selectLang={lang} />
      </main>
    </>
  );
}

export default App;
