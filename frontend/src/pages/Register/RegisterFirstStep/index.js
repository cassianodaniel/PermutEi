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
    <form>
      <div class="card text-center m-3">
        <div class="card-header ">
          <ul class="nav nav-tabs  card-header-tabs">
            <li class="nav-item">
              <text class="nav-link active">
                <text className="smallertextsizing">Dados pessoais</text>
              </text>
            </li>
            <li class="nav-item">
              <text class="nav-link">
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
              <label for="validationServer01">Nome</label>
              <input
                type="text"
                class="form-control is-valid"
                id="validationServer01"
                placeholder="Nome"
                onChange={(e) => setNome(e.target.value)}
                required
              />
              <div class="valid-feedback">Ótimo!</div>
            </div>
            <div class="mt-4">
              <label for="validationServer02">Sexo</label>
              <input
                type="text"
                class="form-control is-valid"
                id="validationServer02"
                placeholder="Sexo"
                onChange={(e) => setSexo(e.target.value)}
                required
              />
              <div class="valid-feedback">Ótimo!</div>
            </div>

            <div class="mt-4">
              <label for="validationServerUsername">Data de Nascimento</label>

              <div class="input-group">
                <input
                  type="text"
                  class="form-control is-invalid"
                  id="validationServerUsername"
                  placeholder="Data de Nascimento"
                  aria-describedby="inputGroupPrepend3"
                  onChange={(e) => setDataNascimento(e.target.value)}
                  required
                />
                <div class="invalid-feedback">
                  Por favor, digite uma data no formato 'dd/mm/aaaa'
                </div>
              </div>
            </div>

            <div class="mt-4">
              <label for="validationServerUsername">Endereço</label>

              <div class="input-group">
                <input
                  type="text"
                  class="form-control is-invalid"
                  id="validationServerUsername"
                  placeholder="Endereço"
                  aria-describedby="inputGroupPrepend3"
                  onChange={(e) => setEndereco(e.target.value)}
                  required
                />
                <div class="invalid-feedback">
                  Por favor, digite um endereço válido
                </div>
              </div>
            </div>
          </div>
          <div class="form-col mt-4">
            <div>
              <label for="validationServer03">CPF</label>
              <input
                type="text"
                class="form-control is-invalid"
                id="validationServer03"
                placeholder="CPF"
                onChange={(e) => setCpf(e.target.value)}
                required
              />
              <div class="invalid-feedback">
                Por favor, digite um CPF válido.
              </div>
            </div>
            <div class="mt-4">
              <label for="validationServer04">Número de Whatsapp</label>
              <input
                type="text"
                class="form-control is-invalid"
                id="validationServer04"
                placeholder="Whatsapp"
                onChange={(e) => setWhatsapp(e.target.value)}
                required
              />
              <div class="invalid-feedback">
                Por favor, digite um número válido.
              </div>
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
                  Declaro exibição de número de Whatsapp em meu perfil
                </text>
              </label>
              <div class="invalid-feedback">
                <text className="smallertextsizing">
                  Você deve aceitar este critério.
                </text>
              </div>
            </div>
          </div>
          <Link to="/registersecondstep" onClick={(e) => handleSubmit(e)}>
            <button class="btn btn-primary" type="submit">
              Próximo
            </button>
          </Link>
        </div>
      </div>
    </form>

    /* <>
      <Link to="/">
        <button>Voltar</button>
      </Link>
      <div className="registerContainer">
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
      
    </> */
  );
}
