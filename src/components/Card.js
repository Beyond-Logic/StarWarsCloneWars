import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "../styling/components/Card.css";

function Card({ uri, title }) {
  return (
    <div className="card shadow p-3 mb-5 rounded">
      <Row>
        <Col lg="7">
          <h4>{title}</h4>
        </Col>
        <Col className="card-icon">
          <Image src={uri} className="" />
        </Col>
      </Row>
      <Row>
        <h4 className="mt-5">200</h4>
        <p className="">
          <span>↑ 20</span> More Than Yesterday
        </p>
      </Row>
    </div>
  );
}

export default Card;
