import React, { Component } from "react";
class TableList extends Component {
  state = {};

  render() {
    const { country } = this.props;
    let counter = 1;
    return (
      <React.Fragment>
        {country.map((country) => (
          <tr key={country.UID}>
            <td>{counter++ + ". " + country.Country_Region}</td>
            <td>
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
