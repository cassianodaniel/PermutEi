import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function Logon(){
    
    return(
        <div className="logon-container">
            <form className="logon">
                <h1 className="title">Faça seu logon</h1>
                <input className="user" placeholder="Nome de usuário" />
                <input className="password" placeholder="Senha" type="password" />
                <Link to="homeuser" style={{width: '100%'}}>
                    <button className="open" onClick={() => {}}>Entrar</button>
                </Link>
            </form>
        </div>
    );
}