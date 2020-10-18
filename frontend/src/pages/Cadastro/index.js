import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { Input } from "reactstrap";

export default function Register() {
  function handleSubmit(e) {
    const object = {
      nome: nome,
      sexo: sexo,
      dataNascimento: dataNascimento,
      estado: estado,
      cpf: cpf,
      whatsapp: whatsapp,
      matricula: matricula,
      batalhaoAtual: batalhaoAtual,
      batalhaoInteresse: batalhaoInteresse,
      comportamento: comportamento,
      postograduacao: postograduacao,
      orgao: orgao,
      login: login,
      senha: senha,
      disponibilidade: disponibilidade
    };

    localStorage.setItem("stepone", JSON.stringify(object));
  }

  const [nome, setNome] = useState("Inicial State");
  const [sexo, setSexo] = useState("Inicial State");
  const [dataNascimento, setDataNascimento] = useState("Inicial State");
  const [estado, setEstado] = useState("Inicial State");
  const [cpf, setCpf] = useState("Inicial State");
  const [whatsapp, setWhatsapp] = useState("Inicial State");
  const [matricula, setMatricula] = useState("");
  const [batalhaoAtual, setBatalhaoAtual] = useState("");
  const [batalhaoInteresse, setBatalhaoInteresse] = useState("");

  const [comportamento, setComportamento] = useState("");
  const [postograduacao, setPostoGraduacao] = useState("");
  const [orgao, setOrgao] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [disponibilidade] = useState(true);

  return (
    <form onSubmit={() => handleSubmit}>
      <div class="card text-center m-3">
        <div class="card-header ">
          <ul class="nav nav-tabs  card-header-tabs">
            <li class="nav-item">
              <text class="nav-link active">
                <text className="smallertextsizing">Dados pessoais</text>
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
              <Input onChange={(e) => setSexo(e.target.value)} type="select" name="select" id="exampleSelect">
                <option>Masculino</option>
                <option>Feminino</option>
                <option>Não declarante</option>
              </Input>
            </div>

            <div class="mt-4">
              <label for="validationServerUsername">Data de Nascimento</label>

              <div class="input-group">
                <input
                  type="text"
                  class="form-control is-valid"
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
              <label for="validationServerUsername">Estado</label>

              <div class="input-group">
                <input
                  type="text"
                  class="form-control is-valid"
                  id="validationServerUsername"
                  placeholder="Estado"
                  aria-describedby="inputGroupPrepend3"
                  onChange={(e) => setEstado(e.target.value)}
                  required
                />
                <div class="invalid-feedback">
                  Por favor, digite um estado válido
                </div>
              </div>
            </div>
          </div>

          <div class="form-col mt-4">
            <div>
              <label for="validationServer03">CPF</label>
              <input
                type="text"
                class="form-control is-valid"
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
                class="form-control is-valid"
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
        </div>

        <div class="card text-center border-0">
          <div class="card-body">
            <div class="form-col">
              <div>
                <label for="validationServer05">Matrícula</label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="validationServer05"
                  placeholder="Matrícula"
                  onChange={(e) => setMatricula(e.target.value)}
                  required
                />
                <div class="valid-feedback">Ótimo!</div>
              </div>

              <div class="mt-4">
                <label for="validationServer06">Batalhão Atual</label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="validationServer06"
                  placeholder="Batalhão Atual"
                  onChange={(e) => setBatalhaoAtual(e.target.value)}
                ></input>
              </div>

              <div class="mt-4">
                <label for="validationServer03">Batalhão Interesse</label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="validationServer07"
                  placeholder="Batalhão Atual"
                  onChange={(e) => setBatalhaoInteresse(e.target.value)}
                ></input>
              </div>

              <div class="mt-4">
              <label for="validationServer07">Comportamento</label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="validationServer08"
                  placeholder="Comportamento"
                  onChange={(e) => setComportamento(e.target.value)}
                  required
                />
                <div class="valid-feedback">Ótimo!</div>
              </div>

              <div class="mt-4 mb-4">
                <label for="validationServer08">Posto/graduação</label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="validationServer05"
                  placeholder="Posto/graduação"
                  onChange={(e) => setPostoGraduacao(e.target.value)}
                  required
                />
                <div class="valid-feedback">Ótimo!</div>
              </div>

              <div class="mt-4">
              <label for="validationServer09">Órgão</label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="validationServer09"
                  placeholder="Comportamento"
                  onChange={(e) => setOrgao(e.target.value)}
                  required
                />
                <div class="valid-feedback">Ótimo!</div>
              </div>
            </div>
          </div>
          <div class="card text-center border-0">
          <div class="card-body">
            <div class="form-col">
              <div>
                <label for="validationServer01">Login</label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="validationServer10"
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
                  id="validationServer11"
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
                  class="form-check-input is-valid"
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
              <button class="btn btn-primary ml-3" type="submit">
                Confirmar
              </button>
          </div>
        </div>
      </div>
      </div>
    </form>
  );
}
