import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//pages
import HomePage from "./pages/Home Page";
import Logon from "./pages/Logon";
import Register from "./pages/Register";
import RegisterSecondStep from "./pages/Register/RegisterSecondStep";
import RegisterThirdStep from "./pages/Register/RegisterThirdStep";
import HomeUser from "./pages/Home User";
import Hall from "./pages/Hall";
import ConfirmarPermuta from "./pages/ConfirmarPermuta";

export default function Routes() {
  const [registers, setRegisters] = useState("Initial state");
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/logon" exact component={Logon} />
        <Route
          path="/register"
          exact
          render={(props) => (
            <Register
              {...props}
              personalData={registers}
              setPersonalData={setRegisters}
            />
          )}
          personalData={registers}
          setPersonalData={setRegisters}
        />
        <Route
          path="/registersecondstep"
          exact
          render={(props) => (
            <RegisterSecondStep
              {...props}
              personalData={registers}
              setPersonalData={setRegisters}
            />
          )}
        />
        <Route path="/registerthirdstep" exact component={RegisterThirdStep} />
        <Route path="/homeuser" exact component={HomeUser} />
        <Route path="/hall" exact component={Hall} />
        <Route path="/confirmarpermuta" exact component={ConfirmarPermuta} />
      </Switch>
    </BrowserRouter>
  );
}

/* 
          render={(props) => (
            <RegisterSecondStep {...props} personaldata={registers} />
          )} */
