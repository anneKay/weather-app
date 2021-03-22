import React, { useContext } from"react";
import { authToken, user } from "../../utils/helper";
import UserContext from "../shared/provider/UserContext";
import "../../../assets/stylesheets/header.scss";

const Header = () => {
  const { userData } = useContext(UserContext);
  return (
    <div className="HeaderContainer">
      <h4>Weather App</h4>
      <div className="HeaderLinks">
        <div className="AuthLinks">
          {(authToken || userData) ? (<p>{`Welcome`}</p>) : (
          <p>
            <a href="/login">Login</a>
            <a href="/signup">Signup</a>
          </p>
          )}
        </div>
      </div>
    </div>
  )
  
};

export default Header;
