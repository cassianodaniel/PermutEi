import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from '../../../services/api';
import "./style.css";

export default function RegisterThirdStep() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  async function handleSubmit(e) {
    console.log("SECOND STEP");

    /*const object = {
      login: login,
      senha: senha,
    };

    localStorage.setItem("stepthree", JSON.stringify(object));*/

    const stepone = localStorage.getItem("stepone");
    const steptwo = localStorage.getItem("steptwo");

    const data = {
      nome: stepone.nome,
      sexo: stepone.sexo,
      datanasc: stepone.dataNascimento,
      endereco: stepone.endereco,
      cpf: parseInt(stepone.cpf),
      numero: parseInt(stepone.whatsapp),
      matricula: parseInt(steptwo.matricula),
      batalhao: steptwo.batalhaoAtual,
      batalhaointeresse: steptwo.batalhaoInteresse,
      disponibilidade: true,
      orgao: steptwo.orgao,
      comportamento: steptwo.comportamento,
      login: login,
      senha: senha
    };

    try {
      await api.post('users', data);
      alert("Cadastro realizado")
    } catch (error) {
      alert(error)
    }

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
              <Link to="/" onClick={(e) => handleSubmit(e)}>
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
