import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/Home Page";
import Logon from "./pages/Logon";
import Register from "./pages/Cadastro";
import Hall from "./pages/Hall";
import ConfirmarPermuta from "./pages/ConfirmarPermuta";
import EditarPerfil from './pages/EditarPerfil';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/logon" exact component={Logon} />
        <Route path="/register" exact component={Register} />
        <Route path="/hall" exact component={Hall} />
        <Route path="/confirmarpermuta" exact component={ConfirmarPermuta} />
        <Route path="/editarperfil" exact component={EditarPerfil} />
      </Switch>
    </BrowserRouter>
  );
}
