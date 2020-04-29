import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" exact to="/">
          Covid19 Report
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
                {/* Home <span className="sr-only">(current)</span> */}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About">
                About
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                exact
                to="/about"
              >
                Dropdown
              </NavLink>

              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="/about">
                  Action
                </NavLink>
                <NavLink className="dropdown-item" to="/about">
                  Another action
                </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="dropdown-item" to="/about">
                  Something else here
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link disabled"
                to="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                Disabled
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
