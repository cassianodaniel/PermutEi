import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function RegisterThirdStep(){

    return(
        <div className="registerContainer">
            <div className="formRegisterContainer">
                <div className="placeholderContainer">
                    <div className="formPlaceholderContainer">
                            <input className="placeholder" placeholder="Login"></input>
                            <input className="placeholder" placeholder="Senha"></input>
                            <Link to="/homeuser">
                                <button className="submit" type="submit">Registrar</button>
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}