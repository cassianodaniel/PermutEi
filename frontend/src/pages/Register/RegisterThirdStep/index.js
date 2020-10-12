import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from '../../../services/api';
import "./style.css";

export default function RegisterThirdStep() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

<<<<<<< HEAD
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

=======
  function handleSubmit(e) {
    const object = {
      login: login,
      senha: senha,
    };
    localStorage.setItem("stepthree", JSON.stringify(object));
>>>>>>> 24e91f931fffe063102d602791e7afbdec319036
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
          <h5 class="card-title">Registro</h5>
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
<<<<<<< HEAD
              ></input>
              <Link to="/" onClick={(e) => handleSubmit(e)}>
                <button className="submit" type="submit">
                  Registrar
                </button>
              </Link>
            </form>
=======
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
>>>>>>> 24e91f931fffe063102d602791e7afbdec319036
          </div>
          <Link to="/registersecondstep">
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
