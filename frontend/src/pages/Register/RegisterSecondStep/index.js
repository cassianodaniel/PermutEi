import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function RegisterSecondStep(){

    return(
        <div className="registerContainer">
            <div className="formRegisterContainer">
                <div className="placeholderContainer">
                    <div className="formPlaceholderContainer">
                            <input className="placeholder" placeholder="Número de Matrícula"></input>
                            <input className="placeholder" placeholder="Batalhão Atual"></input>
                            <input className="placeholder" placeholder="Batalhão de Interesse"></input>
                            <input className="placeholder" placeholder="Órgão"></input>
                            <input className="placeholder" placeholder="Comportamento"></input>
                            <Link to="/registerthirdstep">
                                <button className="submit" type="submit">Próximo</button>
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}