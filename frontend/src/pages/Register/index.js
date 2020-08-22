import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Register(){

    return(
    <>
    <div className="leftball"/>
    <Link to="/">
        <button style={{width:'100px', marginLeft:'20px', fontSize: '20px', color:'black', fontFamily:'PMingLiU-ExtB', position:'absolute'}}>Voltar</button>
    </Link>
    <div className="registerContainer">
        <div className="formRegisterContainer">
            <div className="placeholderContainer">
                <div className="formPlaceholderContainer">
                        <input className="placeholder" placeholder="Nome"></input>
                        <input className="placeholder" placeholder="Sexo"></input>
                        <input className="placeholder" placeholder="Data de Nascimento"></input>
                        <input className="placeholder" placeholder="Endereço"></input>
                        <input className="placeholder" placeholder="CPF"></input>
                        <input className="placeholder" placeholder="Número de Whatsapp"></input>
                        <Link to="/registersecondstep">
                            <button className="submit" type="submit">Próximo</button>
                        </Link>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}