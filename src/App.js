import React, { useState } from "react";
import Header from "./components/HeaderComponent";

function App() {
  const [lang, setLang] = useState(false);

  function langValue(value) {
    setLang(value);
  }

  return (
    <>
      <Header callbackLangValue={langValue} />
    </>
  );
}

export default App;
