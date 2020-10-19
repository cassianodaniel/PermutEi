import React from "react";
import "./global.css";
import Routes from "./routes";

import LoggedProvider from "./contexts/LoggedContext";

function App() {
  return (
    <LoggedProvider>
      <Routes />
    </LoggedProvider>
  );
}

export default App;
