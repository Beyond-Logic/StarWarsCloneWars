import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styling/components/FormComponent.css";

function FormComponent({
  email,
  password,
  button,
  emailPlaceholder,
  passwordPlaceholder,
  style,
  size,
  buttonType,
}) {
  return (
    <Form className="formlogin">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{email}</Form.Label>
        <Form.Control type="email" placeholder={emailPlaceholder} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{password}</Form.Label>
        <Form.Control type="password" placeholder={passwordPlaceholder} />
      </Form.Group>
      <div className={buttonType}>
        <Link to="/dashboard">
          <Button variant="dark" type="submit" className="mt-4" size={size}>
            {button}
          </Button>
        </Link>
      </div>
    </Form>
  );
}

export default FormComponent;
