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
      postograduacao: postograduacao,
    };

    localStorage.setItem("steptwo", JSON.stringify(object));
  }

  const [matricula, setMatricula] = useState("");
  const [batalhaoAtual, setBatalhaoAtual] = useState("");
  const [batalhaoInteresse, setBatalhaoInteresse] = useState("");
  const [orgao, setOrgao] = useState("");
  const [comportamento, setComportamento] = useState("");
  const [postograduacao, setPostograduacao] = useState("");

  return (
    <form>
      <div class="card text-center m-3">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <text class="nav-link">
                <text className="smallertextsizing">Dados pessoais</text>
              </text>
            </li>
            <li class="nav-item">
              <text class="nav-link active">
                <text className="smallertextsizing">Dados profissionais</text>
              </text>
            </li>
            <li class="nav-item">
              <text class="nav-link">
                <text className="smallertextsizing">Dados de acesso</text>
              </text>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <h5 class="card-title">Registro</h5>
          <div class="form-col">
            <div class="mt-4">
              <label for="validationServer01">Matrícula</label>
              <input
                type="text"
                class="form-control is-valid"
                id="validationServer01"
                placeholder="Matrícula"
                onChange={(e) => setMatricula(e.target.value)}
                required
              />
              <div class="valid-feedback">Ótimo!</div>
            </div>
            <div class="mt-4">
              <label for="validationServer02">Batalhão Atual</label>
              <input
                type="text"
                class="form-control is-valid"
                id="validationServer02"
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
                type="text"
                class="form-control is-invalid"
                id="validationServer03"
                placeholder="Comportamento"
                onChange={(e) => setComportamento(e.target.value)}
                required
              />
              <div class="valid-feedback">Ótimo!</div>
            </div>
            <div class="mt-4 mb-4">
              <label for="validationServer04">Posto/graduação</label>
              <input
                type="text"
                class="form-control is-invalid"
                id="validationServer04"
                placeholder="Posto/graduação"
                onChange={(e) => setPostograduacao(e.target.value)}
                required
              />
              <div class="valid-feedback">Ótimo!</div>
            </div>
          </div>

          <Link to="/register">
            <button class="btn btn-primary" type="submit">
              Anterior
            </button>
          </Link>
          <Link to="/registerthirdstep" onClick={(e) => handleSubmit(e)}>
            <button class="btn btn-primary ml-3" type="submit">
              Próximo
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
}
