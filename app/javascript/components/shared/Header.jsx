import React from"react";
import "../../../assets/stylesheets/header.scss";

const Header = ({authenticated}) => (
  <div className="HeaderContainer">
    <h4>Weather App</h4>
    <div className="HeaderLinks">
      <div className="AuthLinks">
        {/* {!authenticated && (
        <>
          <a href="/login">Login</a>
          <a href="/signup">Signup</a>
        </>
        )} */}
        <a href="/login">Login</a>
        <a href="/signup">Signup</a>
    </div>
  </div>
  </div>
);

export default Header;
