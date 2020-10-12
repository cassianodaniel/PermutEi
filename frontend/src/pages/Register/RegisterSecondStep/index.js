import React, { useState } from "react";

import "./style.css";

import { Link } from "react-router-dom";

export default function RegisterSecondStep() {
  function handleSubmit(e) {
    const object = {
      matricula: matricula,
      batalhaoAtual: batalhaoAtual,
      batalhaoInteresse: batalhaoInteresse,
      orgao: orgao,
      comportamento: comportamento,
    };

    localStorage.setItem("steptwo", JSON.stringify(object));
  }

  const [matricula, setMatricula] = useState("");
  const [batalhaoAtual, setBatalhaoAtual] = useState("");
  const [batalhaoInteresse, setBatalhaoInteresse] = useState("");
  const [orgao, setOrgao] = useState("");
  const [comportamento, setComportamento] = useState("");

  return (
    <>
      <div className="leftball" />
      <Link to="/register">
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
                placeholder="Número de Matrícula"
                onChange={(e) => setMatricula(e.target.value)}
              ></input>
              <input
                className="placeholder"
                placeholder="Batalhão Atual"
                onChange={(e) => setBatalhaoAtual(e.target.value)}
              ></input>
              <input
                className="placeholder"
                placeholder="Batalhão de Interesse"
                onChange={(e) => setBatalhaoInteresse(e.target.value)}
              ></input>
              <input 
                className="placeholder"
                placeholder="Orgão"
                onChange={(e) => setOrgao(e.target.value)}
              ></input>
              <input
                className="placeholder"
                placeholder="Comportamento"
                onChange={(e) => setComportamento(e.target.value)}
              ></input>
              <Link to="/registerthirdstep" onClick={(e) => handleSubmit(e)}>
                <button className="submit" type="submit">
                  Próximo
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
