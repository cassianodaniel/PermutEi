import React, { useState } from "react";

import "./style.css";

import { Link } from "react-router-dom";

export default function EditarPerfilSecondStep() {
  function handleSubmit(e) {
    const object = {
      matricula: matricula,
      batalhaoAtual: batalhaoAtual,
      batalhaoInteresse: batalhaoInteresse,
      comportamento: comportamento,
      postograduacao: postograduacao,
    };

    localStorage.setItem("steptwo", JSON.stringify(object));
  }

  const [matricula, setMatricula] = useState("");
  const [batalhaoAtual, setBatalhaoAtual] = useState("");
  const [batalhaoInteresse, setBatalhaoInteresse] = useState("");
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
          <h5 class="card-title">Editar cadastro atual</h5>
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
                required
              />
              <div class="valid-feedback">Ótimo!</div>
            </div>

            <div class="mt-4">
              <label for="validationServerUsername">
                Batalhão de Interesse
              </label>

              <div class="input-group">
                <input
                  type="text"
                  class="form-control is-invalid"
                  id="validationServerUsername"
                  placeholder="Batalhão de Interesse"
                  aria-describedby="inputGroupPrepend3"
                  onChange={(e) => setBatalhaoInteresse(e.target.value)}
                  required
                />
                <div class="invalid-feedback">Batalhão inválido!</div>
              </div>
            </div>
          </div>
          <div class="form-col mt-4">
            <div>
              <label for="validationServer03">Comportamento</label>
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
          <Link to="/editarcadastrothirdstep" onClick={(e) => handleSubmit(e)}>
            <button class="btn btn-primary ml-3" type="submit">
              Próximo
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
}
