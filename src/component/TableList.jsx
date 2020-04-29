import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class TableList extends Component {
  state = {};

  render() {
    const { country } = this.props;
    let counter = 1;
    return (
      <React.Fragment>
        {country.map((country) => (
          <tr key={country.UID}>
            <th scope="row">{counter++}</th>
            <NavLink
              style={{ color: "white" }}
              exact
              to={{
                pathname: "/country",
                search: "?id=" + country.UID,
              }}
            >
              <td>{country.Country_Region}</td>
            </NavLink>
            <td key={country.name}>
              <span className="badge badge-primary badge-pill">
                {country.Confirmed}
              </span>
            </td>
            <td>
              <span className="badge badge-success badge-pill">
                {country.Recovered}
              </span>
            </td>
            <td>
              <span className="badge badge-danger badge-pill">
                {country.Deaths}
              </span>
            </td>
            {/* <td>
                          <span className="badge badge-info badge-pill">
                            {country.Active}
                          </span>
                        </td> */}
          </tr>
        ))}
      </React.Fragment>
    );
  }
}

export default TableList;
