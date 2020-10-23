import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
import { Input } from 'reactstrap';

import api from '../../services/api';

export default function EditarPerfil() {
  useEffect(() => {
    const response = JSON.parse(localStorage.getItem('user'));
    if (response===null) {
      history.push('/logon');
    }else{
      setUser(response);
    }

  }, []);
  const [user, setUser] = useState({});

  const history = useHistory();

  const [nome, setNome] = useState("Inicial State");
  const [sexo, setSexo] = useState("Inicial State");
  const [dataNascimento, setDataNascimento] = useState("Inicial State");
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
                  defaultValue={estadoAtual}
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
          
            <div class="mt-4">
            <label for="validationServerUsername">Estado de Interesse</label>
                <Input
                  type="select"
                  id="estadoInteresse"
                  name="estadoInteresse"
                  defaultValue={estadoInteresse}
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

              {estadoAtual === "RN" && 
              <div class="mt-4">
                <label for="validationServer06">Batalhão Atual</label>
               <Input 
                  type="select"
                  id="selectState"
                  name="estadosBrasil"
                  onChange={(e) => {setBatalhaoAtual(e.target.value)
                  }}
                >

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="1 BPM BATALHÃO FELIPE CAMARÃO ZONA LESTE">
                    1 BPM BATALHÃO FELIPE CAMARÃO ZONA LESTE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="3 BPM TRAMPOLIM DA VITÓRIA PARNAMIRIM">
                    3 BPM TRAMPOLIM DA VITÓRIA PARNAMIRIM
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="4 BPM BATALHÃO POTENGI ZONA NORTE">
                    4 BPM BATALHÃO POTENGI ZONA NORTE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="5 BPM BATALHÃO CÂMARA CASCUDO ZONA SUL">
                    5 BPM BATALHÃO CÂMARA CASCUDO ZONA SUL
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="9 BPM ZONA OESTE">
                    9 BPM ZONA OESTE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="11 BPM BATALHÃO AUGUSTO SEVERO MACAÍBA">
                    11 BPM BATALHÃO AUGUSTO SEVERO MACAÍBA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="BPCHOQUE">
                    BPCHOQUE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="CPCHOQUE">
                    CPCHOQUE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="CPCÃES">
                    CPCÃES
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="CPATAMO">
                    CPATAMO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="RPMON">
                    RPMON
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="CPFEM">
                    CPFEM
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="ROCAM">
                    ROCAM
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="CIPAM">
                    CIPAM
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="CIPGD">
                    CIPGD
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="CIOPAR">
                    CIOPAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="CPI">
                    CPI
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="COMANDO DE POLICIAMENTO REGIONAL I MOSSORÓ">
                    COMANDO DE POLICIAMENTO REGIONAL I MOSSORÓ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="2 BPM BATALHÃO 30 DE SETEMBRO MOSSORÓ">
                    2 BPM BATALHÃO 30 DE SETEMBRO MOSSORÓ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="7 BPM BATALHÃO CEL ANDRÉ FERNANDES PAU DOS FERROS">
                    7 BPM BATALHÃO CEL ANDRÉ FERNANDES PAU DOS FERROS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="12 BPM BATALHÃO CEL PM SEBASTIÃO DE SOUZA REVOREDO">
                    12 BPM BATALHÃO CEL PM SEBASTIÃO DE SOUZA REVOREDO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="1 CIPM MACAU">
                    1 CIPM MACAU
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="COMANDO DE POLICIAMENTO REGIONAL II CAICÓ">
                    COMANDO DE POLICIAMENTO REGIONAL II CAICÓ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="6 BPM BATALHÃO DINARTE MARIZ CAICÓ">
                    6 BPM BATALHÃO DINARTE MARIZ CAICÓ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="10 BPM BATALHÃO DEL PEDRO SOARES DE MACEDO NETO AÇU">
                    10 BPM BATALHÃO DEL PEDRO SOARES DE MACEDO NETO AÇU
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="3 CIPM CURRAIS NOVOS">
                    3 CIPM CURRAIS NOVOS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="5 CIPM JARDIM DE PIRANHAS">
                    5 CIPM JARDIM DE PIRANHAS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="COMANDO DE POLICIAMENTO REGIONAL III SANTA CRUZ">
                    COMANDO DE POLICIAMENTO REGIONAL III SANTA CRUZ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="8 BPM NOVA CRUZ">
                    8 BPM NOVA CRUZ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="2 CIPM JOÃO CÂMARA">
                    2 CIPM JOÃO CÂMARA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="4 CIPM SANTA CRUZ">
                    4 CIPM SANTA CRUZ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="COMANDO DE POLICIAMENTO RODOVIÁRIO ESTADUAL CPRE">
                    COMANDO DE POLICIAMENTO RODOVIÁRIO ESTADUAL CPRE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="1 DISTRITO DE POLICIA RODOVIÁRIA ESTUDAL ESQUADRÃO ÁGUIA">
                    1 DISTRITO DE POLICIA RODOVIÁRIA ESTUDAL ESQUADRÃO ÁGUIA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="2 DISTRITO DE POLICIA RODIVIÁRIA ESTADUAL MOSSORÓ">
                    2 DISTRITO DE POLICIA RODIVIÁRIA ESTADUAL MOSSORÓ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="3 DISTRITO DE POLICIA RODOVIÁRIA ESTADUAL CAICÓ">
                    3 DISTRITO DE POLICIA RODOVIÁRIA ESTADUAL CAICÓ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="4 DISTRITO DE POLICIA RODOVIÁRIA ESTADUAL PAU DOS FERROS">
                    4 DISTRITO DE POLICIA RODOVIÁRIA ESTADUAL PAU DOS FERROS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="5 DISTRITO DE POLICIA RODIVIÁRIA ESTADUAL NOVA CRUZ">
                    5 DISTRITO DE POLICIA RODIVIÁRIA ESTADUAL NOVA CRUZ
                  </option>

                     
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
                    <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="BP CHOQUE JOÃO PESSOA">
                    BP CHOQUE JOÃO PESSOA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="BPTRAN JOÃO PESSOA">
                    BPTRAN JOÃO PESSOA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="BP AMBIENTAL JOÃO PESSOA">
                    BP AMBIENTAL JOÃO PESSOA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="GATE JOÃO PESSOA">
                    GATE JOÃO PESSOA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="GEOSAC POCINHOS">
                    GEOSAC POCINHOS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="CPR M">
                    CPR M
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="1 BPM JOÃO PESSOA">
                    1 BPM JOÃO PESSOA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="5 BPM JOÃO PESSOA">
                    5 BPM JOÃO PESSOA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="7 BPM SANTA RITA">
                    7 BPM SANTA RITA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="1 CIPM ALHANDA">
                    1 CIPM ALHANDA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="2 CIPM MAMANGUAPE">
                    2 CIPM MAMANGUAPE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="4 CIPM BAYEUX">
                    4 CIPM BAYEUX
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="6 CIPM CABEDELO">
                    6 CIPM CABEDELO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="2 BPM CAMPINA GRANDE">
                    2 BPM CAMPINA GRANDE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="4 BPM GUARABIRA">
                    4 BPM GUARABIRA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="4 BPM GUARABIRA">
                    4 BPM GUARABIRA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="8 BPM ITABAIANA">
                    8 BPM ITABAIANA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="9 BPM PICUI">
                    9 BPM PICUI
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="10 BPM CAMPINA GRANDE">
                    10 BPM CAMPINA GRANDE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="11 BPM MONTEIRO">
                    11 BPM MONTEIRO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="15 BPM ESPERANÇA">
                    15 BPM ESPERANÇA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="3 CIPM BOQUEIRÃO">
                    3 CIPM BOQUEIRÃO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="7 CIPM SOLANEA">
                    7 CIPM SOLANEA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="3 BPM PATOS">
                    3 BPM PATOS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="6 BPM CAJAZEIRAS">
                    6 BPM CAJAZEIRAS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="12 BPM C ROCHA">
                    12 BPM C ROCHA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="13 BPM ITAPORANGA">
                    13 BPM ITAPORANGA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="14 BPM SOUSA">
                    14 BPM SOUSA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="5 CIPM PRINCESA IZABEL">
                    5 CIPM PRINCESA IZABEL
                  </option>
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

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="1 BPM OLINDA">
                    1 BPM OLINDA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="2 BPM NAZARÉ DA MATA">
                    2 BPM NAZARÉ DA MATA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="3 BPM ARCO VERDE">
                    3 BPM ARCO VERDE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="4 BPM CARUARU">
                    4 BPM CARUARU
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="5 BPM PETROLINA">
                    5 BPM PETROLINA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="6 BPM JABOATÃO">
                    6 BPM JABOATÃO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="7 BPM ORICURI">
                    7 BPM ORICURI
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="8 BPM SALGUEIRO">
                    8 BPM SALGUEIRO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="9 BPM GARANHUNS">
                    9 BPM GARANHUNS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="10 BPM PALMARES">
                    10 BPM PALMARES
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="11 BPM APIPUCOS">
                    11 BPM APIPUCOS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="12 BPM VÁRZEA">
                    12 BPM VÁRZEA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="13 BPM SANTO AMARO">
                    13 BPM SANTO AMARO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="14 BPM SERRA TALHADA">
                    14 BPM SERRA TALHADA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="15 BPM BELO JARDIM">
                    15 BPM BELO JARDIM
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="16 BPM SÃO JOSÉ">
                    16 BPM SÃO JOSÉ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="17 BPM PAULISTA">
                    17 BPM PAULISTA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="18 BPM CABO DE SANTO AGOSTINHO">
                    18 BPM CABO DE SANTO AGOSTINHO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="20 BPM SÃO LOURENÇO DA MATA">
                    20 BPM SÃO LOURENÇO DA MATA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="21 BPM VITÓRIA DE SANTO ANTÃO">
                    21 BPM VITÓRIA DE SANTO ANTÃO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="22 BPM SURUBIM">
                    22 BPM SURUBIM
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="23 BPM AFOGADOS DA INGAZEIRA">
                    23 BPM AFOGADOS DA INGAZEIRA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="24 BPM SANTA CRUZ DO CAPIBARIBE">
                    24 BPM SANTA CRUZ DO CAPIBARIBE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="25 BPM CENTRO DE JOBOATÃO">
                   25 BPM CENTRO DE JOBOATÃO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="26 BPM ITAPISSUNA">
                    26 BPM ITAPISSUNA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="1 CIPM BELÉM DE SÃO FRANCISCO">
                    1 CIPM BELÉM DE SÃO FRANCISCO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="2 CIPM CABROBÓ">
                    2 CIPM CABROBÓ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="3 CIPM GOIANA">
                    3 CIPM GOIANA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="4 CIPM PETROLÂNDIA">
                    4 CIPM PETROLÂNDIA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="5 CIPM GRAVATÁ">
                    5 CIPM GRAVATÁ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="6 CIPM LIMOEIRO">
                    6 CIPM LIMOEIRO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="7 CIPM SANTA MARIA DA BOA VISTA">
                    7 CIPM SANTA MARIA DA BOA VISTA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="8 CIPM PESQUEIRA">
                    8 CIPM PESQUEIRA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="9 CIPM ARARIPINA">
                    9 CIPM ARARIPINA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="10 CIPM TAMANDARÉ">
                    10 CIPM TAMANDARÉ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="BPRP">
                    BPRP
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="BPCHOQUE">
                    BPCHOQUE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="RPMON">
                    RPMON
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="BOPE">
                    BOPE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="CIPCÃES">
                    CIPCÃES
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="CIPOMA">
                    CIPOMA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="BPTRAN">
                    BPTRAN
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="1 BIESP">
                    1 BIESP
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="2 BIESP">
                    2 BIESP
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="ROCAM">
                    ROCAM
                  </option>
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
                    <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="BOPE CAP PM DANIEL NUNES ESTEVES SÃO LUIS">
                    BOPE CAP PM DANIEL NUNES ESTEVES SÃO LUIS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="COE">
                    COE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="COSAR">
                    COSAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="ROTAM">
                    ROTAM
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="BPCHOQ">
                    BPCHOQ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="QOPM LUÍS FÁBIO SIQUEIRA SILVA">
                    QOPM LUÍS FÁBIO SIQUEIRA SILVA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="CDC">
                    CDC
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="ESQUADRÃO ÁGUIA">
                    ESQUADRÃO ÁGUIA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="CANIL">
                    CANIL
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="CPE">
                    CPE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="BPA">
                    BPA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="BPRV">
                    BPRV
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="BPTUR">
                    BPTUR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="TIRADENTES">
                    TIRADENTES
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="FORÇA TÁTICA">
                    FORÇA TÁTICA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="CPAM-1">
                    CPAM-1
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="METROPOLITANA-1">
                   METROPOLITANA-1
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="8 BATALHÃO DE POLICIA MILITAR">
                    8 BATALHÃO DA POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="9 BATALHÃO DE POLICIA MILITAR">
                    9 BATALHÃO DE POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="20 BATALHÃO DE POLICIA MILITAR">
                    20 BATALHÃO DE POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="1 USC">
                    1 USC
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="CPGD IND">
                    CPGD IND
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="CPAM-2">
                    CPAM-2
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="METROPOLITANA-2">
                    METROPOLITANA-2
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="6 BATALHÃO DE POLICIA MILITAR">
                    6 BATALHÃO DE POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="13 BATALHÃO DE POLICIA MILITAR">
                    13 BATALHÃO DE POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="SÃO JOSÉ DE RIBAMAR">
                    SÃO JOSÉ DE RIBAMAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="22 BATALHÃO DE POLICIA MILITAR">
                    22 BATALHÃO DE POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="PAÇO DO LUMIAR">
                    PAÇO DO LUMIAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="CPAM-3">
                    CPAM-3
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="METROPOLITANA-3">
                    METROPOLITANA-3
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="1 BATALHÃO DE POLICIA MILITAR">
                    1 BATALHÃO DE POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="21 BATALHÃO DE POLICIA MILITAR">
                    21 BATALHÃO DE POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="2 USC">
                   2 USC
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="CSC">
                    CSC
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="RONDA ESCOLAR">
                    RONDA ESCOLAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="PROERD">
                    PROERD
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="PMP">
                    PMP
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="CPI">
                    CPI
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="CPAI-1">
                    CPAI-1
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="15 BATALHÃO DA POLICIA MILITAR">
                    15 BATALHÃO DA POLICIA MILITAR
                  </option>
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
                    <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="1 BATALHÃO DA POLICIA MILITAR">
                    1 BATALHÃO DA POLICIA MILITAR
                  </option>


                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="5 BATALHÃO DA POLICIA MILITAR">
                    5 BATALHÃO DA POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="8 BATALHÃO DA POLICIA MILITAR">
                    8 BATALHÃO DA POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="BATALHÃO DE POLICIAMENTO DE CHOQUE">
                    BATALHÃO DE POLICIAMENTO DE CHOQUE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="BATALHÃO DE POLICIA E RADIOPATRULHA">
                    BATALHÃO DE POLICIA E RADIOPATRULHA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="BPGD">
                    BPGD
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="BESP">
                    BESP
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="COE">
                    COE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="COMPANHIA DE POLICIA DE TRÂSITO">
                    COMPANHIA DE POLICIA DE TRÂSITO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="1 COMPANHIA DE POLICIA INDEPENDENTE SÃO CRISTOVÃO">
                    1 COMPANHIA DE POLICIA INDEPENDENTE SÃO CRISTOVÃO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="2 COMPANHIA DE POLICIA INDEPENDENTE BARRA DOS COQUEIROS">
                    2 COMPANHIA DE POLICIA INDEPENDENTE BARRA DOS COQUEIROS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="3 COMPANHIA DE POLICIA INDEPENDENTE LARANJEIRAS">
                    3 COMPANHIA DE POLICIA INDEPENDENTE LARANJEIRAS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="6 COMPANHIA DE POLICIA INDEPENDENTE ARACAJU">
                    6 COMPANHIA DE POLICIA INDEPENDENTE ARACAJU
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="2 BATALHÃO DA POLICIA MILITAR">
                    2 BATALHÃO DA POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="3 BATALHÃO DA POLICIA MILITAR">
                    3 BATALHÃO DA POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="4 BATALHÃO DA POLICIA MILITAR">
                    4 BATALHÃO DA POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="6 BATALHÃO DA POLICIA MILITAR">
                    6 BATALHÃO DA POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="7 BATALHÃO DA POLICIA MILITAR">
                    7 BATALHÃO DA POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="9 BATALHÃO DA POLICIA MILITAR">
                    9 BATALHÃO DA POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="10 BATALHÃO DA POLICIA MILITAR">
                    10 BATALHÃO DA POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="11 BATALHÃO DA POLICIA MILITAR">
                    11 BATALHÃO DA POLICIA MILITAR
                  </option>
                </Input>
              </div>
              }

              {estadoAtual === "BA" && 
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
                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="1 BEIC FEIRA DE SANTANA">
                    1 BEIC FEIRA DE SANTANA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="2 BEIC ILHÉUS">
                    2 BEIC ILHÉUS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="3 BEIC JUAZEIRO">
                    3 BEIC JUAZEIRO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="4 BPM ALAGOINHAS">
                    4 BPM ALAGOINHAS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="5 BPM EUCLIDES DA CUNHA">
                    5 BPM EUCLIDES DA CUNHA
                  </option>
                  

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="6 BPM SENHOR DO BONFIM">
                    6 BPM SENHOR DO BONFIM
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="7 BPM IRECÊ">
                    7 BPM IRECÊ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="8 BPM PORTO SEGURO">
                    8 BPM PORTO SEGURO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="9 BEIC VITÓRIA DA CONQUISTA">
                    9 BEIC VITÓRIA DA CONQUISTA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="10 BEIC BARREIRAS">
                   10 BEIC BARREIRAS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="11 BPM ITABERABA">
                    11 BPM ITABERABA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="12 BPM CAMAÇARI">
                    12 BPM CAMAÇARI
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="14 BPM SANTO ANTÔNIO DE JESUS">
                    14 BPM SANTO ANTÔNIO DE JESUS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="15 BPM ITABUNA">
                    15 BPM ITABUNA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="16 BPM SERRINHA">
                    16 BPM SERRINHA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="17 BPM GUANAMBI">
                    17 BPM GUANAMBI
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="18 BPM CENTRO HISTÓRICO DE SALVADOR">
                    18 BPM CENTRO HISTÓRICO DE SALVADOR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="19 BPM JEQUIÉ">
                    19 BPM JEQUIÉ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="20 BPM PAULO AFONSO">
                    20 BPM PAULO AFONSO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="21 BPM BEPE">
                    21 BPM BEPE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="1 CIPM PERNAMBUÉS">
                    1 CIPM PERNAMBUÉS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="2 CIPM BARBALHO">
                    2 CIPM BARBALHO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="3 CIPM CAJAZEIRAS">
                    3 CIPM CAJAZEIRAS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="5 CIPM VERA CRUZ">
                    5 CIPM VERA CRUZ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="9 CIPM PIRAJÁ">
                   9 CIPM PIRAJÁ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="10 CIPM CANDEIAS">
                    10 CIPM CANDEIAS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="11 CIPM BARRA GRAÇA">
                    11 CIPM BARRA GRAÇA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="12 CIPM ONDINDA RIO VERMELHO">
                    12 CIPM ONDINDA RIO VERMELHO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="13 CIPM PITUBA">
                   13 CIPM PITUBA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="14 CIPM LOBATO">
                    14 CIPM LOBATO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="15 CIPM ITAPUÃ">
                    15 CIPM ITAPUÃ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="16 CIPM COMÉRCIO">
                    16 CIPM COMÉRCIO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="17 CIPM URUGUAI">
                    17 CIPM URUGUAI
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="18 CIPM PERIPERI">
                    18 CIPM PERIPERI
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="19 CIPM PARIPE">
                    19 CIPM PARIPE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="22 CIPM SIMÕES FILHO">
                    22 CIPM SIMÕES FILHO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="23 CIPM TANCREDO NEVES">
                    23 CIPM TANCREDO NEVES
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="26 CIPM BROTAS">
                    26 CIPM BROTAS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="31 CIPM VALÉRIA">
                    31 CIPM VALÉRIA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="35 CIPM IGUATEMI">
                    35 CIPM IGUATEMI
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="36 CIPM DIAS D'ÁVILA">
                    36 CIPM DIAS D'ÁVILA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="37 CIPM LIBERDADE">
                    37 CIPM LIBERDADE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="39 CIPM BOCA DO RIO IMBUÍ">
                    39 CIPM BOCA DO RIO IMBUÍ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="40 CIPM NORDESTE DE AMARALINA">
                    40 CIPM NORDESTE DE AMARALINA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="41 CIPM GARCIA FEDERAÇÃO">
                    41 CIPM GARCIA FEDERAÇÃO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="47 CIPM PAU DA LIMA">
                    47 CIPM PAU DA LIMA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="48 CIPM SUSSUARANA">
                    48 CIPM SUSSUARANA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="49 CIPM SÃO CRISTOVÃO">
                    49 CIPM SÃO CRISTOVÃO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="50 CIPM SETE DE ABRIL">
                    50 CIPM SETE DE ABRIL
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="51 CIPM CONDE">
                    51 CIPM CONDE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="52 CIPM LAURO DE FREITAS">
                    52 CIPM LAURO DE FREITAS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="53 CIPM MATA DE SÃO JOÃO PRAIA DO FORTE">
                    53 CIPM MATA DE SÃO JOÃO PRAIA DO FORTE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="58 CIPM COSME DE FARIAS">
                    58 CIPM COSME DE FARIAS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="59 CIPM VILA DE ABRANTES AREMBEPE">
                    59 CIPM VILA DE ABRANTES AREMBEPE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="81 CIPM ITINGA">
                    81 CIPM ITINGA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoAtual(e.target.value)}} 
                  value="82 CIPM CAB PARALELA">
                    82 CIPM CAB PARALELA
                  </option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="6 CIPM RIO REAL">6 CIPM RIO REAL</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="7 CIPM EUNÁPOLIS">7 CIPM EUNÁPOLIS</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="8 CIPM ITAPETINGA">8 CIPM ITAPETINGA</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="20 CIPM SANTO AMARO">20 CIPM SANTO AMARO</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="21 CIPM CIPÓ">21 CIPM CIPÓ</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="24 CIPM JACOBINA">24 CIPM JACOBINA</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="25 CIPM CASA NOVA">25 CIPM CASA NOVA</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="27 CIPM CRUZ DAS ALMAS">27 CIPM CRUZ DAS ALMAS</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="28 CIPM IBOTIMARA">28 CIPM IBOTIMARA</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="29 CIPM SEABRA">29 CIPM SEABRA</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="30 CIPM SANTA MARIA DA VITÓRIA">30 CIPM SANTA MARIA DA VITÓRIA</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="32 CIPM POJUCA">32 CIPM POJUCA</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="33 CIPM VALENÇA">33 CIPM VALENÇA</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="34 CIPM BRUMADO">34 CIPM BRUMADO</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="38 CIPM BOM JESUS DA LAPA">38 CIPM BOM JESUS DA LAPA</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="42 CIPM LENÇÓIS">42 CIPM LENÇÓIS</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="43 CIPM ITAMARAJU">43 CIPM ITAMARAJU</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="44 CIPM MEDEIROS NETO">44 CIPM MEDEIROS NETO</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="45 CIPM CURAÇÁ">45 CIPM CURAÇÁ</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="46 CIPM LIVRAMENTO DE NOSSA SENHORA">46 CIPM LIVRAMENTO DE NOSSA SENHORA</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="51 CIPM CONDE">51 CIPM CONDE</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="54 CIPM CAMPO FORMOSO">54 CIPM CAMPO FORMOSO</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="55 CIPM IPIAÚ">55 CIPM IPIAÚ</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="56 CIPM ENTRE RIOS">56 CIPM ENTRE RIOS</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="57 CIPM SANTO ESTÊVÃO">57 CIPM SANTO ESTÊVÃO</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="60 CIPM GANDU">60 CIPM GANDU</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="61 CIPM UBAITABA">61 CIPM UBAITABA</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="62 CIPM CAMACAN">62 CIPM CAMACAN</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="63 CIPM IBICARAÍ">63 CIPM IBICARAÍ</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="64 CIPM FEIRA DE SANTANA">64 CIPM FEIRA DE SANTANA</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="65 CIPM FEIRA DE SANTANA">65 CIPM FEIRA DE SANTANA</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="66 CIPM FEIRA DE SANTANA">66 CIPM FEIRA DE SANTANA</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="67 CIPM FEIRA DE SANTANA">67 CIPM FEIRA DE SANTANA</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="68 CIPM ILHÉUS CENTRO">68 CIPM ILHÉUS CENTRO</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="69 CIPM ILHÉUS ZONA SUL">69 CIPM ILHÉUS ZONA SUL</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="70 CIPM ILHÉUS ZONA NORTE">70 CIPM ILHÉUS ZONA NORTE</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="71 CIPM CANAVIEIRAS">71 CIPM CANAVIEIRAS</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="72 CIPM ITACARÉ">72 CIPM ITACARÉ</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="73 CIPM JUAZEIRO">73 CIPM JUAZEIRO</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="74 CIPM JUAZEIRO">74 CIPM JUAZEIRO</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="75 CIPM JUAZEIRO">75 CIPM JUAZEIRO</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="76 CIPM JUAZEIRO">76 CIPM JUAZEIRO</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="77 CIPM VITÓRIA DA CONQUISTA LESTE">77 CIPM VITÓRIA DA CONQUISTA LESTE</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="78 CIPM VITÓRIA DA CONQUISTA OESTE">78 CIPM VITÓRIA DA CONQUISTA OESTE</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="79 CIPM POÇÕES">79 CIPM POÇÕES</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="80 CIPM CÂNDIDO SALES">80 CIPM CÂNDIDO SALES</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="83 CIPM BARREIRAS">83 CIPM BARREIRAS</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="84 CIPM BARREIRAS">84 CIPM BARREIRAS</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="85 CIPM LUÍS EDUARDO MAGALHÃES">85 CIPM LUÍS EDUARDO MAGALHÃES</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="86 CIPM FORMOSA DO RIO PRETO">86 CIPM FORMOSA DO RIO PRETO</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="90 CIPM RIACHÃO DO JACUÍPE">90 CIPM RIACHÃO DO JACUÍPE</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="91 CIPM CAPIM GROSSO">91 CIPM CAPIM GROSSO</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="92 CIPM VITÓRIA DA CONQUISTA RONDA RURAL">92 CIPM VITÓRIA DA CONQUISTA RONDA RURAL</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="94 CIPM CAETITÉ">94 CIPM CAETITÉ</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="95 CIPM CATU">95 CIPM CATU</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="93 CIPM MACARÁS">93 CIPM MACARÁS</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="98 CIPM IPIRÁ">98 CIPM IPIRÁ</option>

                  <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="99 CIPM AMARGOSA">99 CIPM AMARGOSA</option>


                </Input>
              </div>
              }

                {estadoAtual === "CE" && 
                <div class="mt-4">
                  <label>Batalhão Atual</label>
                  <Input 
                  type="select"
                  id="selectState"
                  name="estadosBrasil"
                  onChange={(e) => {setBatalhaoAtual(e.target.value)
                  }}
                >

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="CPC">CPC</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="5 BPM JOSÉ BONIFÁCIO">5 BPM JOSÉ BONIFÁCIO</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="6 BPM PARANGABA">6 BPM PARANGABA</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="CPI">CPI</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="1 BPM RUSSAS">1 BPM RUSSAS</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="2 BPM JUAZEIRO DO NORTE">2 BPM JUAZEIRO DO NORTE</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="3 BPM SOBRAL">3 BPM SOBRAL</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="4 BPM CANINDÉ">4 BPM CANINDÉ</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="7 BPM CRATEÚS">7 BPM CRATEÚS</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="8 BPM MEIRELES">8 BPM MEIRELES</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="9 BPM QUIXADÁ">9 BPM QUIXADÁ</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="10 BPM IGUATU">10 BPM IGUATU</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="11 BPM ITAPIPOCA">11 BPM ITAPIPOCA</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="12 BPM CAUCAIA">12 BPM CAUCAIA</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="13 BPM TAUÁ">13 BPM TAUÁ</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="14 BPM MARACANAÚ">14 BPM MARACANAÚ</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="15 BPM EUSÉBIO">15 BPM EUSÉBIO</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="16 BPM MESSEJANA">16 BPM MESSEJANA</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="17 BPM CJ CEARÁ">17 BPM CJ CEARÁ</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="18 BPM ANTÔNIO BEZERRA">18 BPM ANTÔNIO BEZERRA</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="19 BPM JARDIM DAS OLIVEIRAS">19 BPM JARDIM DAS OLIVEIRAS</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="20 BPM CRISTO REDENTOR">20 BPM CRISTO REDENTOR</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="21 BPM CONJUNTO ESPERANÇA">21 BPM CONJUNTO ESPERANÇA</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="22 BPM PAPICU">22 BPM PAPICU</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="BPCOM">BPCOM</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="CPRAIO">CPRAIO</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="BPMA">BPMA</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="BPRE">BPRE</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="RPMONT">RPMONT</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="FTA">FTA</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="BPTUR">BPTUR</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="CIOPAER-SSPDS">CIOPAER-SSPDS</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="CPCHOQUE">CPCHOQUE</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="1 BPCHQ COTAM">1 BPCHQ COTAM</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="2 BPCHQ HUMAIATÁ">2 BPCHQ HUMAIATÁ</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="1 CIA CDC">1 CIA CDC</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="2 CIA">2 CIA</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="3 CIA CIPE">3 CIA CIPE</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="4 CIA CPCÃES">4 CIA CPCÃES</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="3 BPCHQ BOPE">3 BPCHQ BOPE</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="4 BPCHQ BEPI">4 BPCHQ BEPI</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="1 CIA COTAR">1 CIA COTAR</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="2 CIA COD">2 CIA COD</option>
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
                  console.log(batalhaoInteresse);
                  }}
                >
                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="1 BPM ">1 BPM </option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="5 BPM">5 BPM</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="6 BPM">6 BPM</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="8 BPM">8 BPM</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="9 BPM">9 BPM</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="13 BPM">13 BPM</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="BPRE">BPRE</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="BPGDA">BPGDA</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="CIPTRAN">CIPTRAN</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="BPA">BPA</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="CIPTUR LUÍS CORREIA">CIPTUR LUÍS CORREIA</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="2 BPM PARNAÍBA">2 BPM PARNAÍBA</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="3 BPM FLORIANO">3 BPM FLORIANO</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="4 BPM PICOS">4 BPM PICOS</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="5 BPM PAULISTANA">5 BPM PAULISTANA</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="7 BPM CORRENTE">7 BPM CORRENTE</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="10 BPM URUÇUÍ">10 BPM URUÇUÍ</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="11 BPM SÃO RAIMUNDO NONATO">11 BPM SÃO RAIMUNDO NONATO</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="12 BPM PIRIPIRI">12 BPM PIRIPIRI</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="14 BPM OEIRAS">14 BPM OEIRAS</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="15 BPM CAMPO MAIOR">15 BPM CAMPO MAIOR</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="19 BPM BOM JESUS">19 BPM BOM JESUS</option>
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
                  }}
                >

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="1 BPM MACEIÓ">1 BPM MACEIÓ</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="2 BPM PALMARES">2 BPM PALMARES</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="3 BPM PLANALTO ARAPIRACA">3 BPM PLANALTO ARAPIRACA</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="4 BPM MACEIÓ">4 BPM MACEIÓ</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="5 BPM MACEIÓ ">5 BPM MACEIÓ </option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="6 BPM MARAGOGI">6 BPM MARAGOGI</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="7 BPM SANTANA DO IPANEMA">7 BPM SANTANA DO IPANEMA</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="8 BPM PILAR">8 BPM PILAR</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="9 BPM DELMIRO GOUVEIA">9 BPM DELMIRO GOUVEIA</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="10 BPM PALMEIRA DOS ÍNDIOS">10 BPM PALMEIRA DOS ÍNDIOS</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="11 BPM PENEDO">11 BPM PENEDO</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="BPE">BPE</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="BPGD">BPGD</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="1 CIA/IND SÃO MIGUEL DOS CAMPOS">1 CIA/IND SÃO MIGUEL DOS CAMPOS</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="2 CIA/IND JOAQUIM GOMES">2 CIA/IND JOAQUIM GOMES</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="3 CIA/IND PARIPUEIRA">3 CIA/IND PARIPUEIRA</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="4 CIA/IND PARIPUEIRA">4 CIA/IND PARIPUEIRA</option>

                    <option onClick={(e) =>{setBatalhaoAtual(e.target.value)}}value="4 CIA/IND MARECHAL DEODORO">4 CIA/IND MARECHAL DEODORO</option>FFF
                </Input>
              </div>
              }

          {/*FIM DOS BATALHÕES ATUAIS*/}









































































          {estadoInteresse === "RN" && 
              <div class="mt-4">
                <label for="validationServer06">Batalhão de Interesse</label>
               <Input 
                  type="select"
                  id="selectState"
                  name="estadosBrasil"
                  onChange={(e) => {setBatalhaoInteresse(e.target.value)
                  }}
                >

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="1 BPM BATALHÃO FELIPE CAMARÃO ZONA LESTE">
                    1 BPM BATALHÃO FELIPE CAMARÃO ZONA LESTE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="3 BPM TRAMPOLIM DA VITÓRIA PARNAMIRIM">
                    3 BPM TRAMPOLIM DA VITÓRIA PARNAMIRIM
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="4 BPM BATALHÃO POTENGI ZONA NORTE">
                    4 BPM BATALHÃO POTENGI ZONA NORTE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="5 BPM BATALHÃO CÂMARA CASCUDO ZONA SUL">
                    5 BPM BATALHÃO CÂMARA CASCUDO ZONA SUL
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="9 BPM ZONA OESTE">
                    9 BPM ZONA OESTE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="11 BPM BATALHÃO AUGUSTO SEVERO MACAÍBA">
                    11 BPM BATALHÃO AUGUSTO SEVERO MACAÍBA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="BPCHOQUE">
                    BPCHOQUE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="CPCHOQUE">
                    CPCHOQUE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="CPCÃES">
                    CPCÃES
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="CPATAMO">
                    CPATAMO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="RPMON">
                    RPMON
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="CPFEM">
                    CPFEM
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="ROCAM">
                    ROCAM
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="CIPAM">
                    CIPAM
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="CIPGD">
                    CIPGD
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="CIOPAR">
                    CIOPAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="CPI">
                    CPI
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="COMANDO DE POLICIAMENTO REGIONAL I MOSSORÓ">
                    COMANDO DE POLICIAMENTO REGIONAL I MOSSORÓ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="2 BPM BATALHÃO 30 DE SETEMBRO MOSSORÓ">
                    2 BPM BATALHÃO 30 DE SETEMBRO MOSSORÓ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="7 BPM BATALHÃO CEL ANDRÉ FERNANDES PAU DOS FERROS">
                    7 BPM BATALHÃO CEL ANDRÉ FERNANDES PAU DOS FERROS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="12 BPM BATALHÃO CEL PM SEBASTIÃO DE SOUZA REVOREDO">
                    12 BPM BATALHÃO CEL PM SEBASTIÃO DE SOUZA REVOREDO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="1 CIPM MACAU">
                    1 CIPM MACAU
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="COMANDO DE POLICIAMENTO REGIONAL II CAICÓ">
                    COMANDO DE POLICIAMENTO REGIONAL II CAICÓ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="6 BPM BATALHÃO DINARTE MARIZ CAICÓ">
                    6 BPM BATALHÃO DINARTE MARIZ CAICÓ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="10 BPM BATALHÃO DEL PEDRO SOARES DE MACEDO NETO AÇU">
                    10 BPM BATALHÃO DEL PEDRO SOARES DE MACEDO NETO AÇU
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="3 CIPM CURRAIS NOVOS">
                    3 CIPM CURRAIS NOVOS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="5 CIPM JARDIM DE PIRANHAS">
                    5 CIPM JARDIM DE PIRANHAS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="COMANDO DE POLICIAMENTO REGIONAL III SANTA CRUZ">
                    COMANDO DE POLICIAMENTO REGIONAL III SANTA CRUZ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="8 BPM NOVA CRUZ">
                    8 BPM NOVA CRUZ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="2 CIPM JOÃO CÂMARA">
                    2 CIPM JOÃO CÂMARA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="4 CIPM SANTA CRUZ">
                    4 CIPM SANTA CRUZ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="COMANDO DE POLICIAMENTO RODOVIÁRIO ESTADUAL CPRE">
                    COMANDO DE POLICIAMENTO RODOVIÁRIO ESTADUAL CPRE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="1 DISTRITO DE POLICIA RODOVIÁRIA ESTUDAL ESQUADRÃO ÁGUIA">
                    1 DISTRITO DE POLICIA RODOVIÁRIA ESTUDAL ESQUADRÃO ÁGUIA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="2 DISTRITO DE POLICIA RODIVIÁRIA ESTADUAL MOSSORÓ">
                    2 DISTRITO DE POLICIA RODIVIÁRIA ESTADUAL MOSSORÓ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="3 DISTRITO DE POLICIA RODOVIÁRIA ESTADUAL CAICÓ">
                    3 DISTRITO DE POLICIA RODOVIÁRIA ESTADUAL CAICÓ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="4 DISTRITO DE POLICIA RODOVIÁRIA ESTADUAL PAU DOS FERROS">
                    4 DISTRITO DE POLICIA RODOVIÁRIA ESTADUAL PAU DOS FERROS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="5 DISTRITO DE POLICIA RODIVIÁRIA ESTADUAL NOVA CRUZ">
                    5 DISTRITO DE POLICIA RODIVIÁRIA ESTADUAL NOVA CRUZ
                  </option>

                     
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
                  }}
                >
                    <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="BP CHOQUE JOÃO PESSOA">
                    BP CHOQUE JOÃO PESSOA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="BPTRAN JOÃO PESSOA">
                    BPTRAN JOÃO PESSOA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="BP AMBIENTAL JOÃO PESSOA">
                    BP AMBIENTAL JOÃO PESSOA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="GATE JOÃO PESSOA">
                    GATE JOÃO PESSOA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="GEOSAC POCINHOS">
                    GEOSAC POCINHOS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="CPR M">
                    CPR M
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="1 BPM JOÃO PESSOA">
                    1 BPM JOÃO PESSOA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="5 BPM JOÃO PESSOA">
                    5 BPM JOÃO PESSOA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="7 BPM SANTA RITA">
                    7 BPM SANTA RITA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="1 CIPM ALHANDA">
                    1 CIPM ALHANDA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="2 CIPM MAMANGUAPE">
                    2 CIPM MAMANGUAPE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="4 CIPM BAYEUX">
                    4 CIPM BAYEUX
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="6 CIPM CABEDELO">
                    6 CIPM CABEDELO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="2 BPM CAMPINA GRANDE">
                    2 BPM CAMPINA GRANDE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="4 BPM GUARABIRA">
                    4 BPM GUARABIRA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="4 BPM GUARABIRA">
                    4 BPM GUARABIRA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="8 BPM ITABAIANA">
                    8 BPM ITABAIANA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="9 BPM PICUI">
                    9 BPM PICUI
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="10 BPM CAMPINA GRANDE">
                    10 BPM CAMPINA GRANDE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="11 BPM MONTEIRO">
                    11 BPM MONTEIRO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="15 BPM ESPERANÇA">
                    15 BPM ESPERANÇA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="3 CIPM BOQUEIRÃO">
                    3 CIPM BOQUEIRÃO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="7 CIPM SOLANEA">
                    7 CIPM SOLANEA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="3 BPM PATOS">
                    3 BPM PATOS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="6 BPM CAJAZEIRAS">
                    6 BPM CAJAZEIRAS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="12 BPM C ROCHA">
                    12 BPM C ROCHA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="13 BPM ITAPORANGA">
                    13 BPM ITAPORANGA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="14 BPM SOUSA">
                    14 BPM SOUSA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="5 CIPM PRINCESA IZABEL">
                    5 CIPM PRINCESA IZABEL
                  </option>
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
                  console.log(batalhaoAtual);
                  }}
                >

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="1 BPM OLINDA">
                    1 BPM OLINDA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="2 BPM NAZARÉ DA MATA">
                    2 BPM NAZARÉ DA MATA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="3 BPM ARCO VERDE">
                    3 BPM ARCO VERDE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="4 BPM CARUARU">
                    4 BPM CARUARU
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="5 BPM PETROLINA">
                    5 BPM PETROLINA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="6 BPM JABOATÃO">
                    6 BPM JABOATÃO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="7 BPM ORICURI">
                    7 BPM ORICURI
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="8 BPM SALGUEIRO">
                    8 BPM SALGUEIRO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="9 BPM GARANHUNS">
                    9 BPM GARANHUNS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="10 BPM PALMARES">
                    10 BPM PALMARES
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="11 BPM APIPUCOS">
                    11 BPM APIPUCOS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="12 BPM VÁRZEA">
                    12 BPM VÁRZEA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="13 BPM SANTO AMARO">
                    13 BPM SANTO AMARO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="14 BPM SERRA TALHADA">
                    14 BPM SERRA TALHADA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="15 BPM BELO JARDIM">
                    15 BPM BELO JARDIM
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="16 BPM SÃO JOSÉ">
                    16 BPM SÃO JOSÉ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="17 BPM PAULISTA">
                    17 BPM PAULISTA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="18 BPM CABO DE SANTO AGOSTINHO">
                    18 BPM CABO DE SANTO AGOSTINHO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="20 BPM SÃO LOURENÇO DA MATA">
                    20 BPM SÃO LOURENÇO DA MATA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="21 BPM VITÓRIA DE SANTO ANTÃO">
                    21 BPM VITÓRIA DE SANTO ANTÃO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="22 BPM SURUBIM">
                    22 BPM SURUBIM
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="23 BPM AFOGADOS DA INGAZEIRA">
                    23 BPM AFOGADOS DA INGAZEIRA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="24 BPM SANTA CRUZ DO CAPIBARIBE">
                    24 BPM SANTA CRUZ DO CAPIBARIBE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="25 BPM CENTRO DE JOBOATÃO">
                   25 BPM CENTRO DE JOBOATÃO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="26 BPM ITAPISSUNA">
                    26 BPM ITAPISSUNA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="1 CIPM BELÉM DE SÃO FRANCISCO">
                    1 CIPM BELÉM DE SÃO FRANCISCO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="2 CIPM CABROBÓ">
                    2 CIPM CABROBÓ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="3 CIPM GOIANA">
                    3 CIPM GOIANA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="4 CIPM PETROLÂNDIA">
                    4 CIPM PETROLÂNDIA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="5 CIPM GRAVATÁ">
                    5 CIPM GRAVATÁ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="6 CIPM LIMOEIRO">
                    6 CIPM LIMOEIRO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="7 CIPM SANTA MARIA DA BOA VISTA">
                    7 CIPM SANTA MARIA DA BOA VISTA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="8 CIPM PESQUEIRA">
                    8 CIPM PESQUEIRA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="9 CIPM ARARIPINA">
                    9 CIPM ARARIPINA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="10 CIPM TAMANDARÉ">
                    10 CIPM TAMANDARÉ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="BPRP">
                    BPRP
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="BPCHOQUE">
                    BPCHOQUE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="RPMON">
                    RPMON
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="BOPE">
                    BOPE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="CIPCÃES">
                    CIPCÃES
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="CIPOMA">
                    CIPOMA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="BPTRAN">
                    BPTRAN
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="1 BIESP">
                    1 BIESP
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="2 BIESP">
                    2 BIESP
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="ROCAM">
                    ROCAM
                  </option>
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
                  console.log(batalhaoAtual);
                  }}
                >
                    <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="BOPE CAP PM DANIEL NUNES ESTEVES SÃO LUIS">
                    BOPE CAP PM DANIEL NUNES ESTEVES SÃO LUIS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="COE">
                    COE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="COSAR">
                    COSAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="ROTAM">
                    ROTAM
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="BPCHOQ">
                    BPCHOQ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="QOPM LUÍS FÁBIO SIQUEIRA SILVA">
                    QOPM LUÍS FÁBIO SIQUEIRA SILVA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="CDC">
                    CDC
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="ESQUADRÃO ÁGUIA">
                    ESQUADRÃO ÁGUIA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="CANIL">
                    CANIL
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="CPE">
                    CPE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="BPA">
                    BPA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="BPRV">
                    BPRV
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="BPTUR">
                    BPTUR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="TIRADENTES">
                    TIRADENTES
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="FORÇA TÁTICA">
                    FORÇA TÁTICA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="CPAM-1">
                    CPAM-1
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="METROPOLITANA-1">
                   METROPOLITANA-1
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="8 BATALHÃO DE POLICIA MILITAR">
                    8 BATALHÃO DA POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="9 BATALHÃO DE POLICIA MILITAR">
                    9 BATALHÃO DE POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="20 BATALHÃO DE POLICIA MILITAR">
                    20 BATALHÃO DE POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="1 USC">
                    1 USC
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="CPGD IND">
                    CPGD IND
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="CPAM-2">
                    CPAM-2
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="METROPOLITANA-2">
                    METROPOLITANA-2
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="6 BATALHÃO DE POLICIA MILITAR">
                    6 BATALHÃO DE POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="13 BATALHÃO DE POLICIA MILITAR">
                    13 BATALHÃO DE POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="SÃO JOSÉ DE RIBAMAR">
                    SÃO JOSÉ DE RIBAMAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="22 BATALHÃO DE POLICIA MILITAR">
                    22 BATALHÃO DE POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="PAÇO DO LUMIAR">
                    PAÇO DO LUMIAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="CPAM-3">
                    CPAM-3
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="METROPOLITANA-3">
                    METROPOLITANA-3
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="1 BATALHÃO DE POLICIA MILITAR">
                    1 BATALHÃO DE POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="21 BATALHÃO DE POLICIA MILITAR">
                    21 BATALHÃO DE POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="2 USC">
                   2 USC
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="CSC">
                    CSC
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="RONDA ESCOLAR">
                    RONDA ESCOLAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="PROERD">
                    PROERD
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="PMP">
                    PMP
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="CPI">
                    CPI
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="CPAI-1">
                    CPAI-1
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="15 BATALHÃO DA POLICIA MILITAR">
                    15 BATALHÃO DA POLICIA MILITAR
                  </option>
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
                  console.log(batalhaoAtual);
                  }}
                >
                    <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="1 BATALHÃO DA POLICIA MILITAR">
                    1 BATALHÃO DA POLICIA MILITAR
                  </option>


                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="5 BATALHÃO DA POLICIA MILITAR">
                    5 BATALHÃO DA POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="8 BATALHÃO DA POLICIA MILITAR">
                    8 BATALHÃO DA POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="BATALHÃO DE POLICIAMENTO DE CHOQUE">
                    BATALHÃO DE POLICIAMENTO DE CHOQUE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="BATALHÃO DE POLICIA E RADIOPATRULHA">
                    BATALHÃO DE POLICIA E RADIOPATRULHA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="BPGD">
                    BPGD
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="BESP">
                    BESP
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="COE">
                    COE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="COMPANHIA DE POLICIA DE TRÂSITO">
                    COMPANHIA DE POLICIA DE TRÂSITO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="1 COMPANHIA DE POLICIA INDEPENDENTE SÃO CRISTOVÃO">
                    1 COMPANHIA DE POLICIA INDEPENDENTE SÃO CRISTOVÃO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="2 COMPANHIA DE POLICIA INDEPENDENTE BARRA DOS COQUEIROS">
                    2 COMPANHIA DE POLICIA INDEPENDENTE BARRA DOS COQUEIROS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="3 COMPANHIA DE POLICIA INDEPENDENTE LARANJEIRAS">
                    3 COMPANHIA DE POLICIA INDEPENDENTE LARANJEIRAS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="6 COMPANHIA DE POLICIA INDEPENDENTE ARACAJU">
                    6 COMPANHIA DE POLICIA INDEPENDENTE ARACAJU
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="2 BATALHÃO DA POLICIA MILITAR">
                    2 BATALHÃO DA POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="3 BATALHÃO DA POLICIA MILITAR">
                    3 BATALHÃO DA POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="4 BATALHÃO DA POLICIA MILITAR">
                    4 BATALHÃO DA POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="6 BATALHÃO DA POLICIA MILITAR">
                    6 BATALHÃO DA POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="7 BATALHÃO DA POLICIA MILITAR">
                    7 BATALHÃO DA POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="9 BATALHÃO DA POLICIA MILITAR">
                    9 BATALHÃO DA POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="10 BATALHÃO DA POLICIA MILITAR">
                    10 BATALHÃO DA POLICIA MILITAR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="11 BATALHÃO DA POLICIA MILITAR">
                    11 BATALHÃO DA POLICIA MILITAR
                  </option>
                </Input>
              </div>
              }

              {estadoInteresse === "BA" && 
              <div class="mt-4">
                <label for="validationServer06">Batalhão de Interesse</label>
               <Input 
                  type="select"
                  id="selectState"
                  name="estadosBrasil"
                  onChange={(e) => {setBatalhaoInteresse(e.target.value)
                  console.log(batalhaoAtual);
                  }}
                >
                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="1 BEIC FEIRA DE SANTANA">
                    1 BEIC FEIRA DE SANTANA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="2 BEIC ILHÉUS">
                    2 BEIC ILHÉUS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="3 BEIC JUAZEIRO">
                    3 BEIC JUAZEIRO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="4 BPM ALAGOINHAS">
                    4 BPM ALAGOINHAS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="5 BPM EUCLIDES DA CUNHA">
                    5 BPM EUCLIDES DA CUNHA
                  </option>
                  

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="6 BPM SENHOR DO BONFIM">
                    6 BPM SENHOR DO BONFIM
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="7 BPM IRECÊ">
                    7 BPM IRECÊ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="8 BPM PORTO SEGURO">
                    8 BPM PORTO SEGURO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="9 BEIC VITÓRIA DA CONQUISTA">
                    9 BEIC VITÓRIA DA CONQUISTA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="10 BEIC BARREIRAS">
                   10 BEIC BARREIRAS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="11 BPM ITABERABA">
                    11 BPM ITABERABA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="12 BPM CAMAÇARI">
                    12 BPM CAMAÇARI
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="14 BPM SANTO ANTÔNIO DE JESUS">
                    14 BPM SANTO ANTÔNIO DE JESUS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="15 BPM ITABUNA">
                    15 BPM ITABUNA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="16 BPM SERRINHA">
                    16 BPM SERRINHA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="17 BPM GUANAMBI">
                    17 BPM GUANAMBI
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="18 BPM CENTRO HISTÓRICO DE SALVADOR">
                    18 BPM CENTRO HISTÓRICO DE SALVADOR
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="19 BPM JEQUIÉ">
                    19 BPM JEQUIÉ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="20 BPM PAULO AFONSO">
                    20 BPM PAULO AFONSO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="21 BPM BEPE">
                    21 BPM BEPE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="1 CIPM PERNAMBUÉS">
                    1 CIPM PERNAMBUÉS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="2 CIPM BARBALHO">
                    2 CIPM BARBALHO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="3 CIPM CAJAZEIRAS">
                    3 CIPM CAJAZEIRAS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="5 CIPM VERA CRUZ">
                    5 CIPM VERA CRUZ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="9 CIPM PIRAJÁ">
                   9 CIPM PIRAJÁ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="10 CIPM CANDEIAS">
                    10 CIPM CANDEIAS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="11 CIPM BARRA GRAÇA">
                    11 CIPM BARRA GRAÇA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="12 CIPM ONDINDA RIO VERMELHO">
                    12 CIPM ONDINDA RIO VERMELHO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="13 CIPM PITUBA">
                   13 CIPM PITUBA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="14 CIPM LOBATO">
                    14 CIPM LOBATO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="15 CIPM ITAPUÃ">
                    15 CIPM ITAPUÃ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="16 CIPM COMÉRCIO">
                    16 CIPM COMÉRCIO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="17 CIPM URUGUAI">
                    17 CIPM URUGUAI
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="18 CIPM PERIPERI">
                    18 CIPM PERIPERI
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="19 CIPM PARIPE">
                    19 CIPM PARIPE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="22 CIPM SIMÕES FILHO">
                    22 CIPM SIMÕES FILHO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="23 CIPM TANCREDO NEVES">
                    23 CIPM TANCREDO NEVES
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="26 CIPM BROTAS">
                    26 CIPM BROTAS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="31 CIPM VALÉRIA">
                    31 CIPM VALÉRIA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="35 CIPM IGUATEMI">
                    35 CIPM IGUATEMI
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="36 CIPM DIAS D'ÁVILA">
                    36 CIPM DIAS D'ÁVILA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="37 CIPM LIBERDADE">
                    37 CIPM LIBERDADE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="39 CIPM BOCA DO RIO IMBUÍ">
                    39 CIPM BOCA DO RIO IMBUÍ
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="40 CIPM NORDESTE DE AMARALINA">
                    40 CIPM NORDESTE DE AMARALINA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="41 CIPM GARCIA FEDERAÇÃO">
                    41 CIPM GARCIA FEDERAÇÃO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="47 CIPM PAU DA LIMA">
                    47 CIPM PAU DA LIMA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="48 CIPM SUSSUARANA">
                    48 CIPM SUSSUARANA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="49 CIPM SÃO CRISTOVÃO">
                    49 CIPM SÃO CRISTOVÃO
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="50 CIPM SETE DE ABRIL">
                    50 CIPM SETE DE ABRIL
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="51 CIPM CONDE">
                    51 CIPM CONDE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="52 CIPM LAURO DE FREITAS">
                    52 CIPM LAURO DE FREITAS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="53 CIPM MATA DE SÃO JOÃO PRAIA DO FORTE">
                    53 CIPM MATA DE SÃO JOÃO PRAIA DO FORTE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="58 CIPM COSME DE FARIAS">
                    58 CIPM COSME DE FARIAS
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="59 CIPM VILA DE ABRANTES AREMBEPE">
                    59 CIPM VILA DE ABRANTES AREMBEPE
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="81 CIPM ITINGA">
                    81 CIPM ITINGA
                  </option>

                  <option onClick={(e) => 
                  {setBatalhaoInteresse(e.target.value)}} 
                  value="82 CIPM CAB PARALELA">
                    82 CIPM CAB PARALELA
                  </option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="6 CIPM RIO REAL">6 CIPM RIO REAL</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="7 CIPM EUNÁPOLIS">7 CIPM EUNÁPOLIS</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="8 CIPM ITAPETINGA">8 CIPM ITAPETINGA</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="20 CIPM SANTO AMARO">20 CIPM SANTO AMARO</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="21 CIPM CIPÓ">21 CIPM CIPÓ</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="24 CIPM JACOBINA">24 CIPM JACOBINA</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="25 CIPM CASA NOVA">25 CIPM CASA NOVA</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="27 CIPM CRUZ DAS ALMAS">27 CIPM CRUZ DAS ALMAS</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="28 CIPM IBOTIMARA">28 CIPM IBOTIMARA</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="29 CIPM SEABRA">29 CIPM SEABRA</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="30 CIPM SANTA MARIA DA VITÓRIA">30 CIPM SANTA MARIA DA VITÓRIA</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="32 CIPM POJUCA">32 CIPM POJUCA</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="33 CIPM VALENÇA">33 CIPM VALENÇA</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="34 CIPM BRUMADO">34 CIPM BRUMADO</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="38 CIPM BOM JESUS DA LAPA">38 CIPM BOM JESUS DA LAPA</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="42 CIPM LENÇÓIS">42 CIPM LENÇÓIS</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="43 CIPM ITAMARAJU">43 CIPM ITAMARAJU</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="44 CIPM MEDEIROS NETO">44 CIPM MEDEIROS NETO</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="45 CIPM CURAÇÁ">45 CIPM CURAÇÁ</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="46 CIPM LIVRAMENTO DE NOSSA SENHORA">46 CIPM LIVRAMENTO DE NOSSA SENHORA</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="51 CIPM CONDE">51 CIPM CONDE</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="54 CIPM CAMPO FORMOSO">54 CIPM CAMPO FORMOSO</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="55 CIPM IPIAÚ">55 CIPM IPIAÚ</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="56 CIPM ENTRE RIOS">56 CIPM ENTRE RIOS</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="57 CIPM SANTO ESTÊVÃO">57 CIPM SANTO ESTÊVÃO</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="60 CIPM GANDU">60 CIPM GANDU</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="61 CIPM UBAITABA">61 CIPM UBAITABA</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="62 CIPM CAMACAN">62 CIPM CAMACAN</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="63 CIPM IBICARAÍ">63 CIPM IBICARAÍ</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="64 CIPM FEIRA DE SANTANA">64 CIPM FEIRA DE SANTANA</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="65 CIPM FEIRA DE SANTANA">65 CIPM FEIRA DE SANTANA</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="66 CIPM FEIRA DE SANTANA">66 CIPM FEIRA DE SANTANA</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="67 CIPM FEIRA DE SANTANA">67 CIPM FEIRA DE SANTANA</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="68 CIPM ILHÉUS CENTRO">68 CIPM ILHÉUS CENTRO</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="69 CIPM ILHÉUS ZONA SUL">69 CIPM ILHÉUS ZONA SUL</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="70 CIPM ILHÉUS ZONA NORTE">70 CIPM ILHÉUS ZONA NORTE</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="71 CIPM CANAVIEIRAS">71 CIPM CANAVIEIRAS</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="72 CIPM ITACARÉ">72 CIPM ITACARÉ</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="73 CIPM JUAZEIRO">73 CIPM JUAZEIRO</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="74 CIPM JUAZEIRO">74 CIPM JUAZEIRO</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="75 CIPM JUAZEIRO">75 CIPM JUAZEIRO</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="76 CIPM JUAZEIRO">76 CIPM JUAZEIRO</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="77 CIPM VITÓRIA DA CONQUISTA LESTE">77 CIPM VITÓRIA DA CONQUISTA LESTE</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="78 CIPM VITÓRIA DA CONQUISTA OESTE">78 CIPM VITÓRIA DA CONQUISTA OESTE</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="79 CIPM POÇÕES">79 CIPM POÇÕES</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="80 CIPM CÂNDIDO SALES">80 CIPM CÂNDIDO SALES</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="83 CIPM BARREIRAS">83 CIPM BARREIRAS</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="84 CIPM BARREIRAS">84 CIPM BARREIRAS</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="85 CIPM LUÍS EDUARDO MAGALHÃES">85 CIPM LUÍS EDUARDO MAGALHÃES</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="86 CIPM FORMOSA DO RIO PRETO">86 CIPM FORMOSA DO RIO PRETO</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="90 CIPM RIACHÃO DO JACUÍPE">90 CIPM RIACHÃO DO JACUÍPE</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="91 CIPM CAPIM GROSSO">91 CIPM CAPIM GROSSO</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="92 CIPM VITÓRIA DA CONQUISTA RONDA RURAL">92 CIPM VITÓRIA DA CONQUISTA RONDA RURAL</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="94 CIPM CAETITÉ">94 CIPM CAETITÉ</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="95 CIPM CATU">95 CIPM CATU</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="93 CIPM MACARÁS">93 CIPM MACARÁS</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="98 CIPM IPIRÁ">98 CIPM IPIRÁ</option>

                  <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="99 CIPM AMARGOSA">99 CIPM AMARGOSA</option>


                </Input>
              </div>
              }

                {estadoInteresse === "CE" && 
                <div class="mt-4">
                  <label>Batalhão de Interesse</label>
                  <Input 
                  type="select"
                  id="selectState"
                  name="estadosBrasil"
                  onChange={(e) => {setBatalhaoInteresse(e.target.value)
                  }}
                >

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="CPC">CPC</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="5 BPM JOSÉ BONIFÁCIO">5 BPM JOSÉ BONIFÁCIO</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="6 BPM PARANGABA">6 BPM PARANGABA</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="CPI">CPI</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="1 BPM RUSSAS">1 BPM RUSSAS</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="2 BPM JUAZEIRO DO NORTE">2 BPM JUAZEIRO DO NORTE</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="3 BPM SOBRAL">3 BPM SOBRAL</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="4 BPM CANINDÉ">4 BPM CANINDÉ</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="7 BPM CRATEÚS">7 BPM CRATEÚS</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="8 BPM MEIRELES">8 BPM MEIRELES</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="9 BPM QUIXADÁ">9 BPM QUIXADÁ</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="10 BPM IGUATU">10 BPM IGUATU</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="11 BPM ITAPIPOCA">11 BPM ITAPIPOCA</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="12 BPM CAUCAIA">12 BPM CAUCAIA</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="13 BPM TAUÁ">13 BPM TAUÁ</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="14 BPM MARACANAÚ">14 BPM MARACANAÚ</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="15 BPM EUSÉBIO">15 BPM EUSÉBIO</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="16 BPM MESSEJANA">16 BPM MESSEJANA</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="17 BPM CJ CEARÁ">17 BPM CJ CEARÁ</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="18 BPM ANTÔNIO BEZERRA">18 BPM ANTÔNIO BEZERRA</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="19 BPM JARDIM DAS OLIVEIRAS">19 BPM JARDIM DAS OLIVEIRAS</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="20 BPM CRISTO REDENTOR">20 BPM CRISTO REDENTOR</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="21 BPM CONJUNTO ESPERANÇA">21 BPM CONJUNTO ESPERANÇA</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="22 BPM PAPICU">22 BPM PAPICU</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="BPCOM">BPCOM</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="CPRAIO">CPRAIO</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="BPMA">BPMA</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="BPRE">BPRE</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="RPMONT">RPMONT</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="FTA">FTA</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="BPTUR">BPTUR</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="CIOPAER-SSPDS">CIOPAER-SSPDS</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="CPCHOQUE">CPCHOQUE</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="1 BPCHQ COTAM">1 BPCHQ COTAM</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="2 BPCHQ HUMAIATÁ">2 BPCHQ HUMAIATÁ</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="1 CIA CDC">1 CIA CDC</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="2 CIA">2 CIA</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="3 CIA CIPE">3 CIA CIPE</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="4 CIA CPCÃES">4 CIA CPCÃES</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="3 BPCHQ BOPE">3 BPCHQ BOPE</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="4 BPCHQ BEPI">4 BPCHQ BEPI</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="1 CIA COTAR">1 CIA COTAR</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="2 CIA COD">2 CIA COD</option>
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
                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="1 BPM ">1 BPM </option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="5 BPM">5 BPM</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="6 BPM">6 BPM</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="8 BPM">8 BPM</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="9 BPM">9 BPM</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="13 BPM">13 BPM</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="BPRE">BPRE</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="BPGDA">BPGDA</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="CIPTRAN">CIPTRAN</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="BPA">BPA</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="CIPTUR LUÍS CORREIA">CIPTUR LUÍS CORREIA</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="2 BPM PARNAÍBA">2 BPM PARNAÍBA</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="3 BPM FLORIANO">3 BPM FLORIANO</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="4 BPM PICOS">4 BPM PICOS</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="5 BPM PAULISTANA">5 BPM PAULISTANA</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="7 BPM CORRENTE">7 BPM CORRENTE</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="10 BPM URUÇUÍ">10 BPM URUÇUÍ</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="11 BPM SÃO RAIMUNDO NONATO">11 BPM SÃO RAIMUNDO NONATO</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="12 BPM PIRIPIRI">12 BPM PIRIPIRI</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="14 BPM OEIRAS">14 BPM OEIRAS</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="15 BPM CAMPO MAIOR">15 BPM CAMPO MAIOR</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="19 BPM BOM JESUS">19 BPM BOM JESUS</option>
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
                  }}
                >

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="1 BPM MACEIÓ">1 BPM MACEIÓ</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="2 BPM PALMARES">2 BPM PALMARES</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="3 BPM PLANALTO ARAPIRACA">3 BPM PLANALTO ARAPIRACA</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="4 BPM MACEIÓ">4 BPM MACEIÓ</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="5 BPM MACEIÓ ">5 BPM MACEIÓ </option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="6 BPM MARAGOGI">6 BPM MARAGOGI</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="7 BPM SANTANA DO IPANEMA">7 BPM SANTANA DO IPANEMA</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="8 BPM PILAR">8 BPM PILAR</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="9 BPM DELMIRO GOUVEIA">9 BPM DELMIRO GOUVEIA</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="10 BPM PALMEIRA DOS ÍNDIOS">10 BPM PALMEIRA DOS ÍNDIOS</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="11 BPM PENEDO">11 BPM PENEDO</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="BPE">BPE</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="BPGD">BPGD</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="1 CIA/IND SÃO MIGUEL DOS CAMPOS">1 CIA/IND SÃO MIGUEL DOS CAMPOS</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="2 CIA/IND JOAQUIM GOMES">2 CIA/IND JOAQUIM GOMES</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="3 CIA/IND PARIPUEIRA">3 CIA/IND PARIPUEIRA</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="4 CIA/IND PARIPUEIRA">4 CIA/IND PARIPUEIRA</option>

                    <option onClick={(e) =>{setBatalhaoInteresse(e.target.value)}}value="4 CIA/IND MARECHAL DEODORO">4 CIA/IND MARECHAL DEODORO</option>FFF
                </Input>
              </div>
              }

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
        </div>
        </div>
    </form>
  );
}