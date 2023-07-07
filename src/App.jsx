import React from "react";
import { useState } from "react";
import FormComponent from "./Componentes/FormComponent";
import GetComponent from "./Componentes/GetComponent";

function App() {
  const [nuevo, setNuevo] = useState([]);
  return (
    <>
      <h1>App.js</h1>
      <FormComponent nuevo={nuevo} setNuevo={setNuevo}></FormComponent>
      <GetComponent nuevo={nuevo} setNuevo={setNuevo}></GetComponent>
    </>
  );
}

export default App;
