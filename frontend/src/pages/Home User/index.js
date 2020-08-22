import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

export default function HomeUser(){
    return (
        <div className="main">
                <div className="navigation">
                <Link to="/" style={{marginLeft: '10px', marginTop:'5px'}}>
                    Página inicial
                </Link>
                </div>
            <div className="header">
                <form className="headerContainerProfile">
                    <div className="headerContainerProfilePicture"></div>
                    <div className="headerContainerProfileData"></div>                     
                </form>
            </div>
            <div className="headerContainerProfileDataNav">
                <div className ="headerContainerProfileDataNav1">Dados Pessoais da Minha Conta</div>
            </div>
            <div className="body">
                <div className="infoContainer">
                            <div className="dataContainer">
                                    <div className="data">Nome: DANIEL SILVA ALVES</div>
                                    <div className="data">Sexo: MASCULINO </div>
                                    <div className="data">Data de Nascimento: 24/02/2002</div>
                                    <div className="data">Endereço: RUA CACIMBA DE DENTRO, 54</div>
                                    <div className="data">CPF: 232.439.433-89</div>
                                    <div className="data">Número de Whatsapp: +55 (083) 98983-9384</div>
                                    <div className="data">Número de Matrícula: CRM329320 </div>
                                    <div className="data">Batalhão Atual: SSP-PB </div>
                                    <div className="data">Batalhão de Interesse: PSP-PB</div>
                                    <div className="data">Órgão: SSM</div>
                            </div>
                </div>
            </div>
        </div>
    )
}