import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";
import { Input} from 'reactstrap';
import api from "../../services/api";

export default function Register() {

  const [nome, setNome] = useState("Inicial State");
  const [sexo, setSexo] = useState("Inicial State");
  const [dataNascimento, setDataNascimento] = useState("Inicial State");
  const [cpf, setCpf] = useState("Inicial State");
  const [numero, setNumero] = useState("Inicial State");
  const [estadoAtual, setEstadoAtual] = useState("Inicial State");
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

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      nome: nome,
      sexo: sexo,
      datanasc: dataNascimento,
      cpf: parseInt(cpf),
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
      senha: senha
    };

    try {
      console.log(data);
      await api.post('/users', data);
      alert("Cadastro realizado!");
      history.push("/logon");
    } catch (error) {
      alert("Falha no cadastro, tente novamente "+ error);
    }
  }

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
              <label for="validationServerUsername">Estado Atual</label>

              {/* <div class="input-group">
                <input
                  type="text"
                  class="form-control is-valid"
                  id="validationServerUsername"
                  placeholder="Estado"
                  aria-describedby="inputGroupPrepend3"
                  onChange={(e) => setEstadoAtual(e.target.value)}
                  required
                />
                <div class="invalid-feedback">
                  Por favor, digite um estado válido
                </div>
              </div> */}

                <Input
                  type="select"
                  id="estadoAtual"
                  name="estadoAtual"
                  onChange={(e) => setEstadoAtual(e.target.value)}
                >
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                </Input>
            </div>
          </div>

          <div class="mt-4">
              <label for="validationServerUsername">Estado de Interesse</label>
              <div class="input-group">
                {/* <input
                  type="text"
                  class="form-control is-invalid"
                  id="validationServerUsername"
                  placeholder="Estado"
                  aria-describedby="inputGroupPrepend3"
                  onChange={(e) => setEstadoInteresse(e.target.value)}
                  required
                />
                
                <div class="invalid-feedback">
                  Por favor, digite um estado válido
                </div> */}

                <Input
                  type="select"
                  id="estadoInteresse"
                  name="estadoInteresse"
                  onChange={(e) => setEstadoInteresse(e.target.value)}
                >
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                </Input>
                
              </div>
            </div>
            <div className="mt-4">
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
                onChange={(e) => setNumero(e.target.value)}
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
                  required
                />
                <div class="valid-feedback">Ótimo!</div>
              </div>
              

        {/*BATALHÃO ATUAL DE ACORDO COM ESTADOS*/}

        {/* NORDESTE*/}

              {estadoAtual === "RN" && 
              <div class="mt-4">
                <label for="validationServer06">Batalhão Atual</label>
               <Input 
                  type="select"
                  id="selectState"
                  name="estadosBrasil"
                  onChange={(e) => {setBatalhaoAtual(e.target.value)
                  console.log(batalhaoAtual);
                  }}
                >
                    <option value="decimoterceiro">13º BATALHÃO DA RN</option>
                    <option value="decimoquarto">14º BATALHÃO DA RN</option>
                </Input>
              </div>
              }

              {estadoAtual === "PB" && 
              <div class="mt-4">
                <label for="validationServer06">Batalhão Atual</label>
               <Input 
                  type="select"
                  id="selectState"
                  name="estadosBrasil"
                  onChange={(e) => {setBatalhaoAtual(e.target.value)
                  }}
                >
                    <option onClick={(e) => {setBatalhaoAtual(e.target.value)}}
                    value="decimoterceiro"
                    >13º BATALHÃO DA PB</option>
                    
                    <option onClick={(e) => {setBatalhaoAtual(e.target.value)}}
                    value="decimoquarto">14º BATALHÃO DA PB</option>
                </Input>
              </div>
              }

              {estadoAtual === "PE" && 
              <div class="mt-4">
                <label for="validationServer06">Batalhão Atual</label>
               <Input 
                  type="select"
                  id="selectState"
                  name="estadosBrasil"
                  onChange={(e) => {setBatalhaoAtual(e.target.value)
                  console.log(batalhaoAtual);
                  }}
                >
                    <option value="decimoterceiro">13º BATALHÃO DA PE</option>
                    <option value="decimoquarto">14º BATALHÃO DA PE</option>
                </Input>
              </div>
              }
              
              {estadoAtual === "PA" && 
              <div class="mt-4">
                <label for="validationServer06">Batalhão Atual</label>
               <Input 
                  type="select"
                  id="selectState"
                  name="estadosBrasil"
                  onChange={(e) => {setBatalhaoAtual(e.target.value)
                  console.log(batalhaoAtual);
                  }}
                >
                    <option value="decimoterceiro">13º BATALHÃO DO PA</option>
                    <option value="decimoquarto">14º BATALHÃO DO PA</option>
                </Input>
              </div>
              }
                            
              {estadoAtual === "MA" && 
              <div class="mt-4">
                <label for="validationServer06">Batalhão Atual</label>
               <Input 
                  type="select"
                  id="selectState"
                  name="estadosBrasil"
                  onChange={(e) => {setBatalhaoAtual(e.target.value)
                  console.log(batalhaoAtual);
                  }}
                >
                    <option value="decimoterceiro">13º BATALHÃO DO MA</option>
                    <option value="decimoquarto">14º BATALHÃO DO MA</option>
                </Input>
              </div>
              }
        
              {estadoAtual === "SE" && 
              <div class="mt-4">
                <label for="validationServer06">Batalhão Atual</label>
               <Input 
                  type="select"
                  id="selectState"
                  name="estadosBrasil"
                  onChange={(e) => {setBatalhaoAtual(e.target.value)
                  console.log(batalhaoAtual);
                  }}
                >
                    <option value="decimoterceiro">13º BATALHÃO DE SE</option>
                    <option value="decimoquarto">14º BATALHÃO DE SE</option>
                </Input>
              </div>
              }
        
              {estadoAtual === "AL" && 
              <div class="mt-4">
                <label for="validationServer06">Batalhão Atual</label>
               <Input 
                  type="select"
                  id="selectState"
                  name="estadosBrasil"
                  onChange={(e) => {setBatalhaoAtual(e.target.value)
                  console.log(batalhaoAtual);
                  }}
                >
                    <option value="decimoterceiro">13º BATALHÃO DE AL</option>
                    <option value="decimoquarto">14º BATALHÃO DE AL</option>
                </Input>
              </div>
              }
            
              {estadoAtual === "PI" && 
              <div class="mt-4">
                <label for="validationServer06">Batalhão Atual</label>
               <Input 
                  type="select"
                  id="selectState"
                  name="estadosBrasil"
                  onChange={(e) => {setBatalhaoAtual(e.target.value)
                  console.log(batalhaoAtual);
                  }}
                >
                    <option value="decimoterceiro">13º BATALHÃO DO PI</option>
                    <option value="decimoquarto">14º BATALHÃO DO PI</option>
                </Input>
              </div>
              }

          {/*FIM DOS BATALHÕES ATUAIS*/}


          {/*INÍCIO TABELAS DE BATALHÃO DE INTERESSE*/}

              {estadoInteresse === "RN" && 
              <div class="mt-4">
                <label for="validationServer06">Batalhão de Interesse</label>
               <Input 
                  type="select"
                  id="selectState"
                  name="estadosBrasil"
                  onChange={(e) => {setBatalhaoInteresse(e.target.value)
                  console.log(batalhaoInteresse);
                  }}
                >
                    <option value="decimoterceiro">13º BATALHÃO DA RN</option>
                    <option value="decimoquarto">14º BATALHÃO DA RN</option>
                </Input>
              </div>
              }

              {estadoInteresse === "PB" && 
              <div class="mt-4">
                <label for="validationServer06">Batalhão de Interesse</label>
               <Input 
                  type="select"
                  id="selectState"
                  name="estadosBrasil"
                  onChange={(e) => {setBatalhaoInteresse(e.target.value)
                  console.log(batalhaoInteresse);
                  }}
                >
                    <option value="decimoterceiro">13º BATALHÃO DA PB</option>
                    <option value="decimoquarto">14º BATALHÃO DA PB</option>
                </Input>
              </div>
              }

              {estadoInteresse === "PE" && 
              <div class="mt-4">
                <label for="validationServer06">Batalhão de Interesse</label>
               <Input 
                  type="select"
                  id="selectState"
                  name="estadosBrasil"
                  onChange={(e) => {setBatalhaoInteresse(e.target.value)
                  console.log(batalhaoInteresse);
                  }}
                >
                    <option value="decimoterceiro">13º BATALHÃO DA PE</option>
                    <option value="decimoquarto">14º BATALHÃO DA PE</option>
                </Input>
              </div>
              }
              
              {estadoInteresse === "PA" && 
              <div class="mt-4">
                <label for="validationServer06">Batalhão de Interesse</label>
               <Input 
                  type="select"
                  id="selectState"
                  name="estadosBrasil"
                  onChange={(e) => {setBatalhaoInteresse(e.target.value)
                  console.log(batalhaoInteresse);
                  }}
                >
                    <option value="decimoterceiro">13º BATALHÃO DO PA</option>
                    <option value="decimoquarto">14º BATALHÃO DO PA</option>
                </Input>
              </div>
              }
                            
              {estadoInteresse === "MA" && 
              <div class="mt-4">
                <label for="validationServer06">Batalhão de Interesse</label>
               <Input 
                  type="select"
                  id="selectState"
                  name="estadosBrasil"
                  onChange={(e) => {setBatalhaoInteresse(e.target.value)
                  console.log(batalhaoInteresse);
                  }}
                >
                    <option value="decimoterceiro">13º BATALHÃO DO MA</option>
                    <option value="decimoquarto">14º BATALHÃO DO MA</option>
                </Input>
              </div>
              }
        
              {estadoInteresse === "SE" && 
              <div class="mt-4">
                <label for="validationServer06">Batalhão de Interesse</label>
               <Input 
                  type="select"
                  id="selectState"
                  name="estadosBrasil"
                  onChange={(e) => {setBatalhaoInteresse(e.target.value)
                  console.log(batalhaoInteresse);
                  }}
                >
                    <option value="decimoterceiro">13º BATALHÃO DE SE</option>
                    <option value="decimoquarto">14º BATALHÃO DE SE</option>
                </Input>
              </div>
              }
        
              {estadoInteresse === "AL" && 
              <div class="mt-4">
                <label for="validationServer06">Batalhão de Interesse</label>
               <Input 
                  type="select"
                  id="selectState"
                  name="estadosBrasil"
                  onChange={(e) => {setBatalhaoInteresse(e.target.value)
                  console.log(batalhaoInteresse);
                  }}
                >
                    <option value="decimoterceiro">13º BATALHÃO DE AL</option>
                    <option value="decimoquarto">14º BATALHÃO DE AL</option>
                </Input>
              </div>
              }
            
              {estadoInteresse === "PI" && 
              <div class="mt-4">
                <label for="validationServer06">Batalhão de Interesse</label>
               <Input 
                  type="select"
                  id="selectState"
                  name="estadosBrasil"
                  onChange={(e) => {setBatalhaoInteresse(e.target.value)
                  console.log(batalhaoInteresse);
                  }}
                >
                    <option value="decimoterceiro">13º BATALHÃO DO PI</option>
                    <option value="decimoquarto">14º BATALHÃO DO PI</option>
                </Input>
              </div>
              }

            {/*FIM TABELAS DE BATALHÃO DE INTERESSE*/}

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
              <button class="btn btn-primary ml-3" type="submit" onClick={handleSubmit}>
                Confirmar
              </button>
          </div>
        </div>
        </div>
      </div>
    </form>
  );
}
