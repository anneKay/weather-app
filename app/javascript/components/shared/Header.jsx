import React from"react";
import { authToken, user } from "../../utils/helper";
import "../../../assets/stylesheets/header.scss";

const Header = () => (
  <div className="HeaderContainer">
    <h4>Weather App</h4>
    <div className="HeaderLinks">
      <div className="AuthLinks">
        {authToken ? (<p>{`Welcome`}</p>) : (
        <p>
          <a href="/login">Login</a>
          <a href="/signup">Signup</a>
        </p>
        )}
    </div>
  </div>
  </div>
);

export default Header;
