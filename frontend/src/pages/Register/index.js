import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Register() {
  function handleSubmit(e) {
    const object = {
      nome: nome,
      sexo: sexo,
      dataNascimento: dataNascimento,
      endereco: endereco,
      cpf: cpf,
      whatsapp: whatsapp,
    };

    localStorage.setItem("stepone", JSON.stringify(object));
  }

  const [nome, setNome] = useState("Inicial State");
  const [sexo, setSexo] = useState("Inicial State");
  const [dataNascimento, setDataNascimento] = useState("Inicial State");
  const [endereco, setEndereco] = useState("Inicial State");
  const [cpf, setCpf] = useState("Inicial State");
  const [whatsapp, setWhatsapp] = useState("Inicial State");

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
            <form className="formPlaceholderContainer">
              <input
                className="placeholder"
                placeholder="Nome"
                onChange={(e) => setNome(e.target.value)}
              ></input>
              <input
                className="placeholder"
                placeholder="Sexo"
                onChange={(e) => setSexo(e.target.value)}
              ></input>
              <input
                className="placeholder"
                placeholder="Data de Nascimento"
                onChange={(e) => setDataNascimento(e.target.value)}
              ></input>
              <input
                className="placeholder"
                placeholder="Endereço"
                onChange={(e) => setEndereco(e.target.value)}
              ></input>
              <input
                className="placeholder"
                placeholder="CPF"
                onChange={(e) => setCpf(e.target.value)}
              ></input>
              <input
                className="placeholder"
                placeholder="Número de Whatsapp"
                onChange={(e) => setWhatsapp(e.target.value)}
              ></input>
              <Link to="/RegisterSecondStep" onClick={(e) => handleSubmit(e)}>
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
