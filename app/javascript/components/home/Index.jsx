import React from "react";
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import Header from "../shared/Header";
import "../../../assets/stylesheets/home.scss";

const HomePage = () => (
  <div>
    <Header />
    <div className="weatherContainer">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter a city"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-primary">Search</Button>
        </InputGroup.Append>
      </InputGroup>
      <hr />
    </div>
  </div>
)
export default HomePage;
