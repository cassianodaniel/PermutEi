import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const originalstringtowpp = "https://wa.me/5583998304290?text=Olá,%20te%20encontrei%20no%20PermutEi%20e%20tenho%20interesse%20pela%20sua%20proposta!";

const firstarraytostringwpp = originalstringtowpp.split("55");
const secondarraytostringwpp = originalstringtowpp.split("?");

const usernumbertonewstringwpp = 83998354294;

const finalarraytotheuserstelephonewpp = firstarraytostringwpp[0] + '55' + usernumbertonewstringwpp + '?' + secondarraytostringwpp[1];

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
                </form>
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
                            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
                            <a href={finalarraytotheuserstelephonewpp} 
                            style={{position:'absolute',
                            width:'230px',
                            height:'60px',
                            bottom:'70px',
                            right:'650px',
                            backgroundColor: 'yellow',
                            color:'red',
                            borderRadius:'20px',
                            textAlign:'center',
                            fontSize:'30px',
                            boxShadow: '1px 1px 2px #888'}}>
                                <i style={{marginTop:'16px'}} class="fa fa-whatsapp"> PermutEi!</i>
                            </a>                            
                </div>
            </div>
        </div>
    )
}