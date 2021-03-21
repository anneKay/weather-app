import React from "react";
import { Form, Button, Alert } from 'react-bootstrap';
import Header from "../shared/Header";
import FormHook from "../shared/formHook";
import "../../../assets/stylesheets/form.scss";

const Signup = () => {

  const { onSubmit, error , isLoading, handleChange} = FormHook();
  return (
    <>
    <Header />
      <div className="formContainer">
      {isLoading && <div>Loading...</div>}
      {error && (
        <Alert variant="danger">
          {error}
        </Alert>
        )}
        <Form onSubmit={(event) => onSubmit(event, 'users')}>
          <Form.Group controlId="formName">
            <Form.Label>Full name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              onChange={handleChange}
              required={true}
              minLength={8}
              name="name"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="Email"
              placeholder="Enter email"
              onChange={handleChange}
              required={true}
              name="email"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                minLength={8}
                onChange={handleChange}
                required={true}
                name="password"
              >
              </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                minLength={8}
                onChange={handleChange}
                required={true}
                name="confirmPassword"
              >
              </Form.Control>
          </Form.Group>
          <Button block variant="success" type="submit">
            Signup
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Signup;
