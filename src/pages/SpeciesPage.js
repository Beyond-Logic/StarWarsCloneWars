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

function SpeciesPage() {
  const [specie, setSpecie] = React.useState([]);
  useEffect(() => {
    getSpecies().then((response) => setSpecie(response));
  }, []);

  const getSpecies = async () => {
    console.log("loading...");
    const response = await axios.get(baseUrl.api + endpoints.species);
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
          <MenuMain title="Species" />
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
                    <th>Classification</th>
                    <th>Designation</th>
                    <th>Average Height</th>
                    <th>Average Lifespan</th>
                    <th>Eye Colors</th>
                    <th>Hair Colors</th>
                    <th>Language</th>
                  </tr>
                </thead>
                <tbody>
                  {specie.map((species) => (
                    <TableRow
                      one={species.name}
                      two={species.classification}
                      three={species.designation}
                      four={species.average_height}
                      five={species.average_lifespan}
                      six={species.eye_colors}
                      seven={species.hair_colors}
                      eight={species.language}
                    />
                  ))}
                  {console.log("==============>" + specie)}
                </tbody>
              </Table>
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default SpeciesPage;
