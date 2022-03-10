import React from "react";
import DatePicker from "./components/Datepicker";
import Autocomplete from "./components/Autocomplete";
import "./App.css";

const App = () => (
  <div className="App">
    <DatePicker />
    <br />
    <br />
    <Autocomplete />
  </div>
);

export default App;
