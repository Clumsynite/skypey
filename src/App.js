import React from "react";
import _ from "lodash";
import "./static-data";
import store from "./store";

import Sidebar from "./Sidebar";
import Main from "./Main";

import "./styles/App.css";

const App = () => {
  const { contacts } = store.getState();
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main />
    </div>
  );
};

export default App;
