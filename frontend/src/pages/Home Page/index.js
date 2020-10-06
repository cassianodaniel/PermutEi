import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export default function HomePage() {
  return (
    <div className="main">
      <div className="label">Facilite as suas permutas já!</div>

      <div className="buttons">
        <Link to="/logon">
          <Button className="loginButton">Login</Button>
        </Link>
        <Link to="/register">
          <Button className="registerButton">Cadastro</Button>
        </Link>
      </div>
    </div>
  );
}
