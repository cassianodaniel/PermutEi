import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function Logon(){
    
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
                            <input className="placeholder" placeholder="Login"></input>
                            <input className="placeholder" placeholder="Senha"></input>
                            <Link to="/hall">
                                <button className="submit" type="submit">Próximo</button>
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}