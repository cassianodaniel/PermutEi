import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

import { useLog } from "./../../contexts/LoggedContext";

export default function Logon() {
  const { setLog } = useLog();
  return (
    <>
      <div className="leftball" />
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
                onBlur={(e) => setLog(e.target.value)}
                className="placeholder"
                placeholder="Login"
              ></input>
              <input className="placeholder" placeholder="Senha"></input>
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
