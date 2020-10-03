import React from "react";
import "./style.css";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

const Hall = () => {
  var personalData = JSON.parse(localStorage.getItem("stepone"));
  var tecnicalData = JSON.parse(localStorage.getItem("steptwo"));
  var loginData = JSON.parse(localStorage.getItem("stepthree"));
  return (
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
          <td>
            <Link to="/confirmarpermuta">Combinar permuta +</Link>
          </td>
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
          <td>
            <Link to="/confirmarpermuta">Combinar permuta +</Link>
          </td>
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
          <td>
            <Link to="/confirmarpermuta">Combinar permuta +</Link>
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th scope="row">3</th>
          <td>{JSON.stringify(personalData)}</td>
          <td>{JSON.stringify(tecnicalData)}</td>
          <td>{JSON.stringify(loginData)}</td>
          <td>LOCALSTORAGEEE</td>
          <td>LOCALSTORAGEEE</td>
          <td>LOCALSTORAGEEE</td>
          <td>
            <Link to="/confirmarpermuta">Combinar permuta +</Link>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Hall;
