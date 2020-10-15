import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//pages
import HomePage from "./pages/Home Page";
import Logon from "./pages/Logon";
import Register from "./pages/Register/RegisterFirstStep/";
import RegisterSecondStep from "./pages/Register/RegisterSecondStep";
import RegisterThirdStep from "./pages/Register/RegisterThirdStep";
import HomeUser from "./pages/Home User";
import Hall from "./pages/Hall";
import ConfirmarPermuta from "./pages/ConfirmarPermuta";
import EditarPerfilFirstStep from "./pages/EditarPerfil/EditarPerfilFirstStep";
import EditarPerfilSecondStep from "./pages/EditarPerfil/EditarPerfilSecondStep";
import EditarPerfilThirdStep from "./pages/EditarPerfil/EditarPerfilThirdStep";

export default function Routes() {
  //const [registers, setRegisters] = useState("Initial state");
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/logon" exact component={Logon} />
        <Route path="/register" exact component={Register} />
        <Route
          path="/registersecondstep"
          exact
          component={RegisterSecondStep}
        />
        <Route path="/registerthirdstep" exact component={RegisterThirdStep} />
        <Route path="/homeuser" exact component={HomeUser} />
        <Route path="/hall" exact component={Hall} />
        <Route path="/confirmarpermuta" exact component={ConfirmarPermuta} />
        <Route path="/editarcadastro" exact component={EditarPerfilFirstStep} />
        <Route
          path="/editarcadastrosecondstep"
          exact
          component={EditarPerfilSecondStep}
        />
        <Route
          path="/editarcadastrothirdstep"
          exact
          component={EditarPerfilThirdStep}
        />
      </Switch>
    </BrowserRouter>
  );
}
