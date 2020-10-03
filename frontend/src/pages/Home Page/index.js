import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="leftball" />
      <div className="label">Facilite as suas permutas já!</div>
      <div className="container">
        <div className="buttonContainer">
          <div className="buttons">
            <Link to="/logon">
              <button
                style={{
                  width: "100px",
                  fontSize: "20px",
                  color: "black",
                  fontFamily: "PMingLiU-ExtB",
                  position: "absolute",
                }}
              >
                Login
              </button>
            </Link>
            <Link to="/register">
              <button
                style={{
                  width: "100px",
                  fontSize: "20px",
                  color: "black",
                  fontFamily: "PMingLiU-ExtB",
                  position: "absolute",
                  marginLeft: "100px",
                }}
              >
                Cadastro
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
