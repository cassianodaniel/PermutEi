import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function HomePage(){

    return(
        <>
            <div className="label">Permutas Policiais</div>
                <div className="container">
                    <div className="textoesquerda">
                        Acredito que aqui seria um bom local para introduzir 
                        a essência do website, com informações mais técnicas e 
                        específicas sobre o funcionamento geral da interface. 
                        Ressaltando as dificuldades das permutas de uma maneira 
                        arcaica e manual e detalhando os principais pontos de acessibilidade 
                        a serem facilitados no desenvolvimento do website.
                    </div>

                    <div className="buttonContainer"> 
                        <div className="buttons">
                            <Link to="/logon">
                                <button>Login</button>
                            </Link>
                            <Link to ="/register">
                                <button>Cadastro</button>
                            </Link>
                        </div>
                        <div className="icone"/>
                    </div>  

                    <div className="textodireita">
                        Acredito que aqui seria um bom local para introduzir a essência do website, 
                        com informações mais técnicas e específicas sobre o funcionamento geral da 
                        interface. Ressaltando as dificuldades das permutas de uma maneira arcaica e manual e detalhando os principais pontos de acessibilidade a serem facilitados no desenvolvimento do website.
                    </div> 
                </div> 
    </>
    )
}