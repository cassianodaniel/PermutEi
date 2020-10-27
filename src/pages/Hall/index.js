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
  Input
} from "reactstrap";

import api from '../../services/api';

const Hall = () => {
  
  function handleEditar(e){

    localStorage.setItem('user', JSON.stringify(userMaster));
  }

  const history = useHistory();

  const [users, setUsers] = useState([]);
  const [userMaster, setUserMaster] = useState({});

  const [search, setSearch] = useState("");

  const handleOcultarPermuta = () => {
    try {
      api.post('/setDisponibilidade', {
        cpf: userMaster.cpf,
        disponibilidade: !userMaster.disponibilidade
      });

      window.location.reload();
    } catch (error) {
      alert(error)
    }
  }

  const handleSearchArray = (e, string) => {
    e.preventDefault();
    let match = [];
    users.map((item) => { 
        if(item.nome.toUpperCase().includes(string.toUpperCase())){
          match.push(item);
        };
    });
    localStorage.setItem("vaikey", JSON.stringify(match));
    history.push("/filtrar");
  };

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
            setUserMaster(user);
          }
        })
        console.log(userMaster);

        resp.map((user) => {
          if (user.orgao === userMaster.orgao && user.login!==userMaster.login && user.disponibilidade===1) {
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
            <div 
            style={{display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end"
            }}>
                <Button className="bg-primary mr-4 border-0"
                style={{position: "relative"}}
                onClick={() => {localStorage.clear()
                  history.push("/logon")
                }}>
                  Sair
                </Button>
            </div>
            <h1 className="display-4">Encontrou sua permuta?</h1>
            <p className="lead">
              Faça-nos uma doação{" "}
              <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=PVMJ2UAY9NSZ2&currency_code=BRL">
                aqui!
              </a>{" "}
              ;)
            </p>
            <a link href="/editarperfil" onClick={handleEditar}>
              Editar cadastro
            </a>
            
            <br/>
            <br/>
            <Button onClick={handleOcultarPermuta}>
              { userMaster.disponibilidade ? "Ocultar minha permuta" : "Exibir disponibilidade de permuta" }
          </Button>
          </Container>
        </Jumbotron>
      </div>

      <CardBody>
        <p className="text-success">
          Você pode buscar pela categoria "Batalhão de interesse" no campo abaixo:
        </p>

        <form onSubmit={(e) => handleSearchArray(e, search)} class="form-inline mb-3">
          <Input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            className="form-control bg-light w-50"
            placeholder="Filtrar por batalhão de interesse"
            font
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Filtrar
          </button>
        </form>

        <Table responsive hover bordered className="bg-light">
          <thead>
            <tr>
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
                <td>{user.nome}</td>
                <td>{user.orgao}</td>
                <td>{user.matricula}</td>
                <td>{user.estadoAtual}</td>
                <td>{user.estadoInteresse}</td>
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
