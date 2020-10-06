import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default function EditarPerfilThirdStep() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(e) {
    const object = {
      login: login,
      senha: senha,
    };
    localStorage.setItem("stepthree", JSON.stringify(object));
  }

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
              <text class="nav-link">
                <text className="smallertextsizing">Dados profissionais</text>
              </text>
            </li>
            <li class="nav-item">
              <text class="nav-link active">
                <text className="smallertextsizing">Dados de acesso</text>
              </text>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <h5 class="card-title">Editar cadastro atual</h5>
          <div class="form-col">
            <div class="mt-4">
              <label for="validationServer01">Login</label>
              <input
                type="text"
                class="form-control is-valid"
                id="validationServer01"
                placeholder="Login"
                onChange={(e) => setLogin(e.target.value)}
                required
              />
              <div class="valid-feedback">Ótimo!</div>
            </div>
            <div class="mt-4">
              <label for="validationServer02">Senha</label>
              <input
                type="text"
                class="form-control is-valid"
                id="validationServer02"
                placeholder="Senha"
                onChange={(e) => setSenha(e.target.value)}
                required
              />
              <div class="valid-feedback">Ótimo!</div>
            </div>
          </div>
          <div class="form-group mt-4">
            <div class="form-check mt-4">
              <input
                class="form-check-input is-invalid"
                type="checkbox"
                value=""
                id="invalidCheck3"
                required
              />
              <label class="form-check-label" for="invalidCheck3">
                <text className="smallertextsizing">
                  Aceito com os termos e condições
                </text>
              </label>
              <div class="invalid-feedback">
                <text className="smallertextsizing">
                  Você deve aceitar este critério.
                </text>
              </div>
            </div>
          </div>
          <Link to="/hall">
            <button class="btn btn-primary" type="submit">
              Anterior
            </button>
          </Link>
          <Link to="/logon" onClick={(e) => handleSubmit(e)}>
            <button class="btn btn-primary ml-3" type="submit">
              Confirmar
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
}
