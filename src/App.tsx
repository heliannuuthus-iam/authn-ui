import "./App.css";
import React from "react";
import { Button } from "antd";
import LoginView from "./components/auth";

const App = () => (
  <div className="App">
    <LoginView style={{ width: 400 , textAlign: "left"}} />
  </div>
);

export default App;
