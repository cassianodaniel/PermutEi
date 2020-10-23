import React, { useState } from "react";

import "./style.css";

import { useHistory } from "react-router-dom";

import api from '../../services/api';

export default function Logon() {

  const history = useHistory();

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin(e){
    e.preventDefault();
    try {
      console.log(login);
      console.log(senha);
      const response = await api.post('/login', {login, senha});
      console.log(response.data);
      if (response.data===true) {
        localStorage.setItem("login", login);
        history.push('/hall');
      } else {
        alert("Login ou senha incorretos!");
      }
    } catch (error) {
      alert(error)
    }
    
  }

  return (
    <form onSubmit={handleLogin}>
      <div class="card text-center m-3">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <text class="nav-link active">
                <text className="smallertextsizing">Login</text>
              </text>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <h5 class="card-title">Acesso ao PermutEi!</h5>
          <div class="form-col">
            <div class="mt-4">
              <label for="validationServer01">Login</label>
              <input
                type="text"
                class="form-control"
                id="validationServer01"
                placeholder="Login"
                required
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>
            <div class="mt-4 mb-4">
              <label for="validationServer02">Senha</label>
              <input
                type="text"
                class="form-control"
                id="validationServer02"
                placeholder="Senha"
                required
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
          </div>
            <button class="btn btn-primary" type="submit">
              Próximo
            </button>
        </div>
      </div>
    </form>
  );
}
