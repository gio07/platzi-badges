import React from "react";
import { Link } from 'react-router-dom';

import "./styles/Home.css";
import astronauts from "../images/astronauts.svg";
import logo from "../images/platziconf-logo.svg";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Home">
          <div className="Home__logo">
            <img src={logo} alt="Logo" />
            <h3><strong>PRINT YOUR BADGES</strong></h3>
            <p>The easiest way to manage your coference</p>
            <div className="Home__buttons">
              <Link to="/badges" className="btn btn-primary">
                Start now
              </Link>
            </div>
          </div>
          <img src={astronauts} alt="Astronautas" />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;

