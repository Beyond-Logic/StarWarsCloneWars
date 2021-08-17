import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import axios from "axios";
import Card from "../components/Card";
import Filter from "../components/Filter";
import MenuMain from "../components/MenuMain";
import MenuSide from "../components/MenuSide";
import baseUrl from "../api/baseUrl";
import endpoints from "../api/endpoints";
import "../styling/components/TableCard.css";
import "../styling/pages/DashBoard.css";
import TableRow from "../components/TableRow";

function DashboardPage() {
  const [film, setFilm] = React.useState([]);
  useEffect(() => {
    getFilms().then((response) => setFilm(response));
  }, []);

  const getFilms = async () => {
    console.log("loading...");
    const response = await axios.get(baseUrl.api + endpoints.films);
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
          <MenuMain title="Dashboard" />
          <div>
            <Row>
              <Col lg="8"></Col>
              <Col lg="4">
                <Filter />
              </Col>
            </Row>
          </div>
          <Container className="main-card">
            <Row>
              <Col xl="2" md="6">
                <Card
                  title="Films"
                  uri={require("../assets/video-camera.svg").default}
                />
              </Col>
              <Col xl="auto" md="6">
                <Card
                  title="Starships"
                  uri={require("../assets/ufo.svg").default}
                />
              </Col>
              <Col xl="auto" md="6">
                <Card
                  title="People"
                  uri={require("../assets/group-of-students.svg").default}
                />
              </Col>
              <Col xl="auto" md="6">
                <Card
                  title="Vechicles"
                  uri={require("../assets/taxi.svg").default}
                />
              </Col>
              <Col xl="auto" md="6">
                <Card
                  title="Species"
                  uri={require("../assets/phylogenetics.svg").default}
                />
              </Col>
            </Row>
          </Container>
          <Container className="main-card">
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
                  {film.map((films) => (
                    <TableRow
                      one={films.title}
                      two={films.director}
                      three={films.producer}
                      four={films.release_date}
                      five={films.episode_id}
                      six={films.characters[0]}
                    />
                  ))}
                  {console.log("==============>" + film)}
                </tbody>
              </Table>
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default DashboardPage;
