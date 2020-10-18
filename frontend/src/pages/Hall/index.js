import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import "./style.css";
import {
  Table,
  Card,
  CardBody,
  Jumbotron,
  Container,
  Button,
} from "reactstrap";

import api from '../../services/api';

const Hall = () => {
  
  const history = useHistory();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const login = JSON.stringify(localStorage.getItem('login'));
    console.log(login);
    api.get('/users').then(response => {
        const data = [];
        const resp = response.data;
        console.log(resp);
        let userMaster = {};


        
        
        if (login==="null") {
          history.push("/logon");
        }


        resp.map((user) => {
          console.log(user.login)
          if (JSON.stringify(user.login) === login) {
            userMaster = user;
          }
        })
        console.log(userMaster);

        resp.map((user) => {
          if (user.orgao === userMaster.orgao && user.login!==userMaster.login) {
            data.push(user);
          }
        })
        console.log(data);
        setUsers(data);
    })
}, []);

  function chamaNoZap(numero){
    const originalstringtowpp =
    "https://wa.me/5583998304290?text=Olá,%20te%20encontrei%20no%20PermutEi%20e%20tenho%20interesse%20pela%20sua%20proposta!";

    const firstarraytostringwpp = originalstringtowpp.split("55");
    const secondarraytostringwpp = originalstringtowpp.split("?");

    const usernumbertonewstringwpp = numero;

    const finalarraytotheuserstelephonewpp =
      firstarraytostringwpp[0] +
      "55" +
      usernumbertonewstringwpp +
      "?" +
      secondarraytostringwpp[1];
    
    console.log(finalarraytotheuserstelephonewpp);

    window.open(finalarraytotheuserstelephonewpp);
  }

  return (
    <Card className="m-3">
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-4">Encontrou sua permuta?</h1>
            <p className="lead">
              Faça-nos uma doação{" "}
              <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UV4KH7XC3U9ZQ&source=url">
                aqui!
              </a>{" "}
              ;)
            </p>
            <a link href="/editarperfil">
              Editar cadastro
            </a>
            <br/>
            <br/>
            <Button onClick={() => {}}>
              {/* {user.disponibilidade ? "Ocultar minha permuta" : "Exibir disponibilidade de permuta"} */}
              Ocultar minha permuta
          </Button>
          </Container>
        </Jumbotron>
      </div>

      <CardBody>
        <p className="text-success">
          Você pode buscar por qualquer categoria no campo abaixo
        </p>
        <form class="form-inline mb-3">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
            style={{ width: "45.7vh" }}
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Filtrar
          </button>

        </form>
        <Table responsive hover bordered className="bg-light">
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Órgão</th>
              <th>Matrícula</th>
              <th>Estado</th>
              <th>Estado de Interesse</th>
              <th>Batalhão Atual</th>
              <th>Batalhão de Interesse</th>
              <th>Estado Atual</th>
              <th>Combinar permuta </th>
            </tr>
          </thead>

          {users.map((user) => (
            <tbody>
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.nome}</td>
                <td>{user.orgao}</td>
                <td>{user.matricula}</td>
                <td>{user.estado}</td>
                <td>{user.estadoInteresse}</td>
                <td>{user.batalhaoAtual}</td>
                <td>{user.batalhaoInteresse}</td>
                <td>{user.batalhaoAtual}</td>
                <td>{user.batalhaoInteresse}</td>
                <td>{user.estadoAtual}</td>
                
                <Button
                  style={{
                    backgroundColor: "yellow",
                    color: "red",
                    borderRadius: "18px",
                    padding: "6px",
                    textAlign: "center",
                    boxShadow: "1px 1px 2px #888",
                  }}
                  onClick={() => chamaNoZap(user.numero)}
                >
                    <i
                      class="fa fa-whatsapp text-danger"
                      style={{ fontSize: 24 }}
                    >
                      {" "}
                      PermutEi!
                    </i>
                </Button>
              </tr>
          </tbody>
          ))}
        </Table>
      </CardBody>
    </Card>
  );
};

export default Hall;
