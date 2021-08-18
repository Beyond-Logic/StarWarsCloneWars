import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styling/components/FormComponent.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain at least 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});

function FormComponent({
  email,
  password,
  button,
  emailPlaceholder,
  passwordPlaceholder,
  size,
  buttonType,
}) {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="formlogin">
          <div className="form-group mb-3">
            <label for="email">{email}</label>
            <Field
              name="email"
              type="email"
              className="form-control"
              placeholder={emailPlaceholder}
              id="email"
            />

            {errors.email && touched.email ? (
              <div class="alert alert-danger" role="alert">
                {errors.email}
              </div>
            ) : null}
          </div>
          <div className="form-group">
            <label for="email">{password}</label>
            <Field
              name="password"
              type="password"
              placeholder={passwordPlaceholder}
              className="form-control"
              id="password"
            />
            {errors.password && touched.password ? (
              <div class="alert alert-danger" role="alert">
                {errors.password}
              </div>
            ) : null}
          </div>
          <div className={buttonType}>
            <button
              type="submit"
              variant="dark"
              className="mt-4 btn btn-dark btn-block"
              size={size}
            >
              <Link to="/dashboard" className="login">
                {button}
              </Link>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default FormComponent;
