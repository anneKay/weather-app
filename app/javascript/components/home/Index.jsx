import React, { useState, useEffect, useContext } from "react";
import { FormControl, InputGroup, Button, Alert, Form } from 'react-bootstrap';
import Header from "../shared/Header";
import fetchData from "../../utils/api";
import { prepareQuery } from "../../utils/helper";
import { authToken } from  "../../utils/helper";
import { useHistory } from "react-router-dom";
import UserContext from "../shared/provider/UserContext";
import "../../../assets/stylesheets/home.scss";
import CookieUtil from "../../utils/cookie";

const HomePage = () => {

  const history = useHistory();

  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const { userData } = useContext(UserContext);

  useEffect(() => {
    if (!authToken  && !userData.length > 0) {
      history.push("/signup");
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    const authToken = CookieUtil.getItem('user-auth');
    setIsLoading(true);
    if (city.trim().length > 0) {
      fetchData(prepareQuery(`/weather?city=${city}`, {} , authToken ))
        .then(response => {
          setWeatherData({...weatherData, ...response.data.data});
          setIsLoading(false)
        })
        .catch(() => {
          setError('something went wrong, please try again');
          setIsLoading(false);
        })
    }

  }
  const handleChange = (event) => {
    setCity(event.target.value);
  }

  return (
    <div>
    <Header />
    <div className="weatherContainer">
        <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter a city"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          name="city"
          onChange={handleChange}
          required={true}
          minLength={2}
        />
        <InputGroup.Append>
          <Button variant="outline-primary" type="submit">Search</Button>
        </InputGroup.Append>
      </InputGroup>
        </Form>
      <hr />
      {isLoading && <div>Fetching Weather Data ...</div>}
      {error && (
        <Alert variant="danger">
          {error}
        </Alert>
      )}
      {(!isLoading && Object.keys(weatherData).length) > 0 && (
        <div>
          <p className="city">{`${weatherData.name}, 
          ${weatherData.sys.country}, 
          ${weatherData.weather[0].description}`}</p>
          <p>{`${weatherData.wind.speed}, ${weatherData.clouds.all}`} </p>
          <p>{`Geo cords[${weatherData.coord.lon, weatherData.coord.lat}]`}</p>
        </div>
      )}
      
    </div>
  </div>
  );
}
export default HomePage;
