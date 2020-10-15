import React from "react";
import "./style.css";
import {
  Table,
  Card,
  CardBody,
  Jumbotron,
  Container,
  Button,
} from "reactstrap";

const Hall = () => {
  var personalData = JSON.parse(localStorage.getItem("stepone"));
  var tecnicalData = JSON.parse(localStorage.getItem("steptwo"));
  var loginData = JSON.parse(localStorage.getItem("stepthree"));

  const originalstringtowpp =
    "https://wa.me/5583998304290?text=Olá,%20te%20encontrei%20no%20PermutEi%20e%20tenho%20interesse%20pela%20sua%20proposta!";

  const firstarraytostringwpp = originalstringtowpp.split("55");
  const secondarraytostringwpp = originalstringtowpp.split("?");

  const usernumbertonewstringwpp = 83999788428;

  const finalarraytotheuserstelephonewpp =
    firstarraytostringwpp[0] +
    "55" +
    usernumbertonewstringwpp +
    "?" +
    secondarraytostringwpp[1];

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
            <a link href="/editarcadastro">
              Editar cadastro
            </a>
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
              <th>Matrícula</th>
              <th>Batalhão Atual</th>
              <th>Estado Atual</th>
              <th>Batalhão de Interesse</th>
              <th>Estado de Interesse</th>
              <th>Combinar permuta </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>DANIEL CASSIANO CHAVES</td>
              <td>48934-32</td>
              <td>13º BATALHÃO DA P.M.</td>
              <td>PARAÍBA</td>
              <td>14º BATALHÃO DA P.M.</td>
              <td>PERNAMBUCO</td>
              <Button
                style={{
                  backgroundColor: "yellow",
                  color: "red",
                  borderRadius: "18px",
                  padding: "6px",
                  textAlign: "center",
                  boxShadow: "1px 1px 2px #888",
                }}
              >
                <a href={finalarraytotheuserstelephonewpp}>
                  <i
                    class="fa fa-whatsapp text-danger"
                    style={{ fontSize: 24 }}
                  >
                    {" "}
                    PermutEi!
                  </i>
                </a>
              </Button>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th scope="row">2</th>
              <td>DANIEL CASSIANO CHAVES</td>
              <td>48934-32</td>
              <td>13º BATALHÃO DA P.M.</td>
              <td>PARAÍBA</td>
              <td>14º BATALHÃO DA P.M.</td>
              <td>PERNAMBUCO</td>
              <Button
                style={{
                  backgroundColor: "yellow",
                  color: "red",
                  borderRadius: "18px",
                  padding: "6px",
                  textAlign: "center",
                  boxShadow: "1px 1px 2px #888",
                }}
              >
                <a href={finalarraytotheuserstelephonewpp}>
                  <i
                    class="fa fa-whatsapp text-danger"
                    style={{ fontSize: 24 }}
                  >
                    {" "}
                    PermutEi!
                  </i>
                </a>
              </Button>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th scope="row">3</th>
              <td>DANIEL CASSIANO CHAVES</td>
              <td>48934-32</td>
              <td>13º BATALHÃO DA P.M.</td>
              <td>PARAÍBA</td>
              <td>14º BATALHÃO DA P.M.</td>
              <td>PERNAMBUCO</td>
              <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
              />
              <Button
                style={{
                  backgroundColor: "yellow",
                  color: "red",
                  borderRadius: "18px",
                  padding: "6px",
                  textAlign: "center",
                  boxShadow: "1px 1px 2px #888",
                }}
              >
                <a href={finalarraytotheuserstelephonewpp}>
                  <i
                    class="fa fa-whatsapp text-danger"
                    style={{ fontSize: 24 }}
                  >
                    {" "}
                    PermutEi!
                  </i>
                </a>
              </Button>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th scope="row">4</th>
              <td>DANIEL CASSIANO CHAVES</td>
              <td>48934-32</td>
              <td>13º BATALHÃO DA P.M.</td>
              <td>PARAÍBA</td>
              <td>14º BATALHÃO DA P.M.</td>
              <td>PERNAMBUCO</td>
              <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
              />
              <Button
                style={{
                  backgroundColor: "yellow",
                  color: "red",
                  borderRadius: "18px",
                  padding: "6px",
                  textAlign: "center",
                  boxShadow: "1px 1px 2px #888",
                }}
              >
                <a href={finalarraytotheuserstelephonewpp}>
                  <i
                    class="fa fa-whatsapp text-danger"
                    style={{ fontSize: 24 }}
                  >
                    {" "}
                    PermutEi!
                  </i>
                </a>
              </Button>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th scope="row">5</th>
              <td>DANIEL CASSIANO CHAVES</td>
              <td>48934-32</td>
              <td>13º BATALHÃO DA P.M.</td>
              <td>PARAÍBA</td>
              <td>14º BATALHÃO DA P.M.</td>
              <td>PERNAMBUCO</td>
              <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
              />
              <Button
                style={{
                  backgroundColor: "yellow",
                  color: "red",
                  borderRadius: "18px",
                  padding: "6px",
                  textAlign: "center",
                  boxShadow: "1px 1px 2px #888",
                }}
              >
                <a href={finalarraytotheuserstelephonewpp}>
                  <i
                    class="fa fa-whatsapp text-danger"
                    style={{ fontSize: 24 }}
                  >
                    {" "}
                    PermutEi!
                  </i>
                </a>
              </Button>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th scope="row">6</th>
              <td>DANIEL CASSIANO CHAVES</td>
              <td>48934-32</td>
              <td>13º BATALHÃO DA P.M.</td>
              <td>PARAÍBA</td>
              <td>14º BATALHÃO DA P.M.</td>
              <td>PERNAMBUCO</td>
              <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
              />
              <Button
                style={{
                  backgroundColor: "yellow",
                  color: "red",
                  borderRadius: "18px",
                  padding: "6px",
                  textAlign: "center",
                  boxShadow: "1px 1px 2px #888",
                }}
              >
                <a href={finalarraytotheuserstelephonewpp}>
                  <i
                    class="fa fa-whatsapp text-danger"
                    style={{ fontSize: 24 }}
                  >
                    {" "}
                    PermutEi!
                  </i>
                </a>
              </Button>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th scope="row">7</th>
              <td>DANIEL CASSIANO CHAVES</td>
              <td>48934-32</td>
              <td>13º BATALHÃO DA P.M.</td>
              <td>PARAÍBA</td>
              <td>14º BATALHÃO DA P.M.</td>
              <td>PERNAMBUCO</td>
              <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
              />
              <Button
                style={{
                  backgroundColor: "yellow",
                  color: "red",
                  borderRadius: "18px",
                  padding: "6px",
                  textAlign: "center",
                  boxShadow: "1px 1px 2px #888",
                }}
              >
                <a href={finalarraytotheuserstelephonewpp}>
                  <i
                    class="fa fa-whatsapp text-danger"
                    style={{ fontSize: 24 }}
                  >
                    {" "}
                    PermutEi!
                  </i>
                </a>
              </Button>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default Hall;
