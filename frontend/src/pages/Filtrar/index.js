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

const Filtrar = () => {
  
  function handleEditar(e){

    localStorage.setItem('user', JSON.stringify(userMaster));
    //history.push('/editarperfil')
  }

  const history = useHistory();

  const [users, setUsers] = useState([]);
  const [userMaster, setUserMaster] = useState({});

  const [search, setSearch] = useState("");

  const handleSearchArray = (e, string) => {
    e.preventDefault();
    let match = [];
    users.map((item) => { 
        if(item.nome.toUpperCase().includes(string.toUpperCase())){
          match.push(item);
        };
    });
    history.push( 
    {pathname: '/filtrar',
    state: {array: "match"}}
    );
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("vaikey"));
    setUsers(data);
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
            <a link href="/editarperfil" onClick={handleEditar}>
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
          <Button onClick={() => history.push("/hall")} className="mb-4 bg-primary">Voltar</Button>

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

export default Filtrar;
