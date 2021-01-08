import React from "react";

import Sidebar from "./Sidebar";
import Main from "./Main";

import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
