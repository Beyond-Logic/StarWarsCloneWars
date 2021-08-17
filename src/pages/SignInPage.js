import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import FormComponent from "../components/Form";
import HeroComponent from "../components/Hero";
import "../styling/pages/SignInPage.css";

function SignInPage() {
  return (
    <Container className="container-login" fluid>
      <Row>
        <Col lg="4" className="login-hero-bg">
          <div className="login-hero">
            <HeroComponent />
          </div>
        </Col>
        <Col lg="5">
          <div className="login-form">
            <h4 className="mb-5">
              Sign in to continue to <br />
              your account
            </h4>

            <FormComponent
              email="Email Address"
              emailPlaceholder="Email Address"
              password="Password"
              passwordPlaceholder="Enter Strong Password"
              button="Sign In"
              size="lg"
              buttonType="d-grid gap-2"
            />
          </div>
        </Col>
        <Col lg="3">
          <div className="photocontainer">
            <Image
              src={require("../assets/undraw_Astronaut_xko2.svg").default}
              className=""
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SignInPage;
