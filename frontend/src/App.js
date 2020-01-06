import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
