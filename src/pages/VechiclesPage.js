import axios from "axios";
import React, { useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import baseUrl from "../api/baseUrl";
import endpoints from "../api/endpoints";
import MenuMain from "../components/MenuMain";
import MenuSide from "../components/MenuSide";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import TableRow from "../components/TableRow";

function VechiclesPage() {
  const [vechicle, setVechicle] = React.useState([]);
  useEffect(() => {
    getVechicles().then((response) => setVechicle(response));
  }, []);

  const getVechicles = async () => {
    console.log("loading...");
    const response = await axios.get(baseUrl.api + endpoints.vechicles);
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
          <MenuMain title="Vechicles" />
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
                    <th>Vechicle Name</th>
                    <th>Vechicle Model</th>
                    <th>Vechicle Class</th>
                    <th>Vehicle Manufacturer</th>
                    <th>Vechicle Length</th>
                    <th>Crew</th>
                    <th>Passengers</th>
                    <th>Cargo Capacity</th>
                  </tr>
                </thead>
                <tbody>
                  {vechicle.map((vechicles) => (
                    <TableRow
                      one={vechicles.name}
                      two={vechicles.model}
                      three={vechicles.vehicle_class}
                      four={vechicles.manufacturer}
                      five={vechicles.length}
                      six={vechicles.crew}
                      seven={vechicles.passengers}
                      eight={vechicles.cargo_capacity}
                    />
                  ))}
                  {console.log("==============>" + vechicle)}
                </tbody>
              </Table>
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default VechiclesPage;
