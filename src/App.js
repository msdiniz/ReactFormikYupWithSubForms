import React from "react";
import "./styles.css";
import { RegularReactForm } from "./RegularReactForm";
import { ReactFormikForm } from "./ReactFormikForm";

const App = () => (
  <div className="App">
    <h1>Subforms with Formik</h1>
    <RegularReactForm />
    <ReactFormikForm />
  </div>
);

export default App;
