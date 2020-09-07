import React, { createContext, useState, useContext } from "react";

const LoggedContext = createContext();

export default function LoggedProvider({ children }) {
  const [log, setLog] = useState("Inicial state");
  return (
    <LoggedContext.Provider value={{ log, setLog }}>
      {children}
    </LoggedContext.Provider>
  );
}

export function useLog() {
  const context = useContext(LoggedContext);
  if (!context) throw new Error("useCount must be used within a CountProvider");
  const { log, setLog } = context;
  return { log, setLog };
}
