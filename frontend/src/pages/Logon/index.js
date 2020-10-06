import React, { useState } from "react";

import "./style.css";

import { Link } from "react-router-dom";

export default function Logon() {
  const [login, setLogin] = useState([]);
  const [password, setPassword] = useState([]);

  return (
    <form>
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
                class="form-control is-valid"
                id="validationServer01"
                placeholder="Login"
                required
              />
            </div>
            <div class="mt-4 mb-4">
              <label for="validationServer02">Senha</label>
              <input
                type="text"
                class="form-control is-valid"
                id="validationServer02"
                placeholder="Senha"
                required
              />
            </div>
          </div>
          <Link to="/hall">
            <button class="btn btn-primary" type="submit">
              Próximo
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
}
