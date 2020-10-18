import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
import { Input } from 'reactstrap';

import api from '../../services/api';

export default function EditarPerfil() {
  const user = JSON.parse(localStorage.getItem('user'));

  const history = useHistory();

  const [nome, setNome] = useState("Inicial State");
  const [sexo, setSexo] = useState("Inicial State");
  const [dataNascimento, setDataNascimento] = useState("Inicial State");
  const [numero, setNumero] = useState("Inicial State");
  const [estadoAtual, setEestadoAtual] = useState("Inicial State");
  const [estadoInteresse, setEstadoInteresse] = useState("Inicial State");
  const [matricula, setMatricula] = useState("");
  const [batalhaoAtual, setBatalhaoAtual] = useState("");
  const [batalhaoInteresse, setBatalhaoInteresse] = useState("");
  const [comportamento, setComportamento] = useState("");
  const [postograduacao, setPostoGraduacao] = useState("");
  const [orgao, setOrgao] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [disponibilidade] = useState(true);

  async function handleSubmit(e) {
    const data = {
      nome: nome,
      sexo: sexo,
      datanasc: dataNascimento,
      cpf: user.cpf,
      numero: numero,
      estadoAtual: estadoAtual,
      estadoInteresse: estadoInteresse,
      matricula: matricula,
      batalhaoAtual: batalhaoAtual,
      batalhaoInteresse: batalhaoInteresse,
      orgao: orgao,
      comportamento: comportamento,
      postoGraduacao: postograduacao,
      disponibilidade: disponibilidade,
      login: login,
      senha: senha,
    };

    try {
      console.log(data);
      await api.post('/updateUser', data);
      alert("Cadastro atualizado!");
      history.push("/hall");
    } catch (error) {
      alert("Falha na atualização, tente novamente "+ error);
    }
  }

  return (
    <form onSubmit={() => handleSubmit()}>
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
          <Link to="/hall">
            <button class="btn btn-primary mb-4" type="submit">
              {"Voltar para a tela inicial"}
            </button>
          </Link>
          
          
          <h5 class="card-title">Editar cadastro atual</h5>
          
          <div className='custom-control custom-switch'>
      
        </div>
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
                defaultValue={user.nome}
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
                  defaultValue={user.datanasc}
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
                  onChange={(e) => setEestadoAtual(e.target.value)}
                  defaultValue={user.estadoAtual}
                  required
                />
                <div class="invalid-feedback">
                  Por favor, digite um estado válido
                </div>
              </div>
            </div>
          </div>

          <div class="mt-4">
              <label for="validationServerUsername">Estado de Interesse</label>

              <div class="input-group">
                <input
                  type="text"
                  class="form-control is-valid"
                  id="validationServerUsername"
                  placeholder="Estado"
                  aria-describedby="inputGroupPrepend3"
                  onChange={(e) => setEstadoInteresse(e.target.value)}
                  defaultValue={user.estadoInteresse}
                  required
                />
                <div class="invalid-feedback">
                  Por favor, digite um estado válido
                </div>
              </div>
            </div>
          </div>

          <div class="form-col mt-0">
            <div class="mt-4 ml-3 mr-3">
              <label for="validationServer04">Número de Whatsapp</label>
              <input
                type="text"
                class="form-control is-valid"
                id="validationServer04"
                placeholder="Whatsapp"
                onChange={(e) => setNumero(e.target.value)}
                defaultValue={user.numero}
                required
              />
              <div class="invalid-feedback">
                Por favor, digite um número válido.
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
                  defaultValue={user.matricula}
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
                  defaultValue={user.batalhaoAtual}
                ></input>
              </div>

              <div class="mt-4">
                <label for="validationServer03">Batalhão Interesse</label>
                <input
                  type="text"
                  class="form-control is-valid"
                  id="validationServer07"
                  placeholder="Batalhão Atual"
                  defaultValue={user.batalhaoInteresse}
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
                  defaultValue={user.comportamento}
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
                  defaultValue={user.postoGraduacao}
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
                  defaultValue={user.orgao}
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
                  defaultValue={user.login}
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
                  defaultValue={user.senha}
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
                    Aceito os termos e condições
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