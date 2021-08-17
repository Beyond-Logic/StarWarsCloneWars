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

function PeoplePage() {
  const [person, setPeople] = React.useState([]);
  useEffect(() => {
    getPeople().then((response) => setPeople(response));
  }, []);

  const getPeople = async () => {
    console.log("loading...");
    const response = await axios.get(baseUrl.api + endpoints.people);
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
          <MenuMain title="People" />
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
                    <th>Birth Year</th>
                    <th>Gender</th>
                    <th>Eye Color</th>
                    <th>Hair Color</th>
                    <th>Height</th>
                    <th>Mass</th>
                    <th>Skin Color</th>
                    <th>Created</th>
                  </tr>
                </thead>
                <tbody>
                  {person.map((people) => (
                    <TableRow
                      one={people.name}
                      two={people.birth_year}
                      three={people.gender}
                      four={people.eye_color}
                      five={people.hair_color}
                      six={people.height}
                      seven={people.mass}
                      eight={people.skin_color}
                      nine={people.created}
                    />
                  ))}
                  {console.log("==============>" + person)}
                </tbody>
              </Table>
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default PeoplePage;
