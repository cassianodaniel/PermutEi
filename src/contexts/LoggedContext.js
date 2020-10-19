import React, { createContext, useState, useContext } from "react";

const LoggedContext = createContext();

export default function LoggedProvider({ children }) {
  const [logados, setLogados] = useState("Inicial state");
  return (
    <LoggedContext.Provider value={{ logados, setLogados }}>
      {children}
    </LoggedContext.Provider>
  );
}

export function useLog() {
  const context = useContext(LoggedContext);
  if (!context) throw new Error("useCount must be used within a CountProvider");
  const { logados, setLogados } = context;
  return { logados, setLogados };
}
