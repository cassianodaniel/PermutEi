import React from "react";

import { Table } from "reactstrap";
import "./style.css";
import { Link } from "react-router-dom";

const Tabela = (props) => {
  return (
    <Table responsive hover bordered striped className="bg-light">
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>DANIEL CASSIANO CHAVES</td>
          <td>48934-32</td>
          <td>13º BATALHÃO DA P.M.</td>
          <td>PARAÍBA</td>
          <td>14º BATALHÃO DA P.M.</td>
          <td>PERNAMBUCO</td>
          <Link to="/confirmarpermuta">
            <td>Combinar permuta + </td>
          </Link>
        </tr>
      </tbody>
    </Table>
  );
};

export default Tabela;
