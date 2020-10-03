import React from "react";

import { useLog } from "../../contexts/LoggedContext";

export default function Logged() {
  const { logados } = useLog();
  return (
    <div style={{ color: "white", padding: 10 }}>
      Olá, <b>{logados}</b>. Seja bem-vindo(a)!
    </div>
  );
}
