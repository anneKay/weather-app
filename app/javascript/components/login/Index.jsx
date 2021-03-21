import React, { useState, useEffect, Suspense } from "react";
import { Form, Button, Alert } from 'react-bootstrap';
import Header from "../shared/Header";
import FormHook from "../shared/formHook";
import "../../../assets/stylesheets/form.scss";


const Login = () => {

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
      <Form onSubmit={(event) => onSubmit(event, 'auth/login')}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="Email"
            placeholder="Enter email"
            onChange={handleChange}
            required={true}
            minLength={8}
            name="email"
          />
        </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={handleChange}
            required={true}
            name="password"
            minLength={8}
          >
          </Form.Control>
      </Form.Group>
      <Button block variant="success" type="submit">
        Login
      </Button>
      </Form>
    </div>
    </>
  );
};

export default Login;
