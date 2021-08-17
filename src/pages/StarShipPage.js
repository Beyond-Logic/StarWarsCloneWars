import React, { useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Card from "../components/Card";
import MenuMain from "../components/MenuMain";
import MenuSide from "../components/MenuSide";
import Pagination from "../components/Pagination";
import baseUrl from "../api/baseUrl";
import endpoints from "../api/endpoints";
import Search from "../components/Search";
import TableCard from "../components/TableCard";

import "../styling/pages/DashBoard.css";
import "../styling/pages/Pages.css";
import axios from "axios";
import TableRow from "../components/TableRow";

function StarShipPage() {
  const [starship, setStarship] = React.useState([]);
  useEffect(() => {
    getStarships().then((response) => setStarship(response));
  }, []);

  const getStarships = async () => {
    console.log("loading...");
    const response = await axios.get(baseUrl.api + endpoints.starships);
    console.log(response);
    return response.data.results;
  };
  return (
    <Container className="container-dashboard" fluid>
      <Row>
        <Col lg="2" className="menu-side">
          <MenuSide />
        </Col>
        <Col className="menu-main-main">
          <MenuMain title="StarShip" />
          <Row className="">
            <Col lg="9">
              <Pagination />
            </Col>
            <Col lg="3">
              <Search placeholder="Search for starship" />
            </Col>
          </Row>
          <Container className="page-card"></Container>
          <Container className="page-card">
            <div className="shadow p-3 mb-5 rounded table-card">
              <Table responsive="lg">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Model</th>
                    <th>Class</th>
                    <th>Cost (in GC)</th>
                    <th>Passengers</th>
                    <th>Length</th>
                    <th>Crew</th>
                  </tr>
                </thead>
                <tbody>
                  {starship.map((starships) => (
                    <TableRow
                      one={starships.name}
                      two={starships.model}
                      three={starships.starship_class}
                      four={starships.cost_in_credits}
                      five={starships.passengers}
                      six={starships.length}
                      seven={starships.crew}
                    />
                  ))}
                  {console.log("==============>" + starship)}
                </tbody>
              </Table>
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default StarShipPage;
