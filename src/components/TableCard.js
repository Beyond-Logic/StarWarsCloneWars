import React from "react";
import { Col, Image, Row, Table } from "react-bootstrap";
import "../styling/components/TableCard.css";
import TableRow from "./TableRow";

function TableCard() {
  return (
    <div className="shadow p-3 mb-5 rounded table-card">
      <Table responsive="lg">
        <thead>
          <tr>
            <th>Film Title</th>
            <th>Director</th>
            <th>Producer</th>
            <th>Release Date</th>
            <th>Episode ID</th>
            <th>Characters</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <TableRow />
        </tbody>
      </Table>
    </div>
  );
}

export default TableCard;
