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
        <Form.Control type="email" placeholder={emailPlaceholder} required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{password}</Form.Label>
        <Form.Control
          type="password"
          placeholder={passwordPlaceholder}
          required
        />
      </Form.Group>
      <div className={buttonType}>
        <Button variant="dark" type="submit" className="mt-4" size={size}>
          <Link to="/dashboard" className="login">
            {button}
          </Link>
        </Button>
      </div>
    </Form>
  );
}

export default FormComponent;
