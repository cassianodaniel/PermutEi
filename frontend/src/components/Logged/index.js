import React from "react";

import { useLog } from "../../contexts/LoggedContext";

export default function Logged() {
  const { log } = useLog();
  return (
    <div style={{ color: "white", padding: 10 }}>
      Olá, <b>{log}</b>. Seja bem-vindo(a)!
    </div>
  );
}
