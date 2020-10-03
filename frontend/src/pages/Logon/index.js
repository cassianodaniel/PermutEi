import React, { useState } from "react";

import "./style.css";

import { Link } from "react-router-dom";

export default function Logon() {
  const [login, setLogin] = useState([]);
  const [password, setPassword] = useState([]);

  return (
    <>
      <div className="leftball" style={{ fontFamily: "PMingLiU-ExtB" }} />
      <Link to="/">
        <button
          style={{
            width: "100px",
            marginLeft: "20px",
            fontSize: "20px",
            color: "black",
            fontFamily: "PMingLiU-ExtB",
            position: "absolute",
          }}
        >
          Voltar
        </button>
      </Link>
      <div className="registerContainer">
        <div className="formRegisterContainer">
          <div className="placeholderContainer">
            <div className="formPlaceholderContainer">
              <input
                onChange={
                  /* (e) => setLogados(e.target.value) */ (e) =>
                    setLogin(...login, e.target.value)
                }
                className="placeholder"
                placeholder="Login"
              ></input>
              <input
                onChange={(e) => setPassword(...password, e.target.value)}
                className="placeholder"
                placeholder="Senha"
              ></input>
              <Link to="/hall">
                <button className="submit" type="submit">
                  Próximo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
