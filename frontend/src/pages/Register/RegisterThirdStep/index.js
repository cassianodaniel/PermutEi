import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default function RegisterThirdStep() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(e) {
    console.log("SECOND STEP");

    const object = {
      login: login,
      senha: senha,
    };

    localStorage.setItem("stepthree", JSON.stringify(object));
  }

  return (
    <>
      <div className="leftball" />
      <Link to="/registersecondstep">
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
            <form className="formPlaceholderContainer">
              <input
                className="placeholder"
                placeholder="Login"
                onChange={(e) => setLogin(e.target.value)}
              ></input>
              <input
                className="placeholder"
                placeholder="Senha"
                onChange={(e) => setSenha(e.target.value)}
              ></input>
              <Link to="/hall" onClick={(e) => handleSubmit(e)}>
                <button className="submit" type="submit">
                  Registrar
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
