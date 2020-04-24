import React, { Component } from "react";
class TableReport extends Component {
  state = {};
  i = 1;
  render() {
    return (
      <div>
        <table className="table table-striped table-dark table-hover">
          <thead>
            <tr>
              <th colspan="5">
                <div class="input-group flex-nowrap">
                  <div class="input-group-prepend">
                    <span></span>
                    <span class="input-group-text" id="basic-addon1">
                      Seach Country
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="search by name"
                    aria-label="search by name"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </th>
            </tr>
            <tr>
              <th scope="col">Country</th>
              <th scope="col">Confirmed</th>
              <th scope="col">Deaths</th>
              <th scope="col">Recovered</th>
              <th scope="col">Active</th>
            </tr>
          </thead>
          <tbody>
            {this.props.report.map((country) => (
              <tr key={country.ISO3}>
                <td>{country.Country_Region}</td>
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
                <td>
                  <span className="badge badge-info badge-pill">
                    {country.Active}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableReport;
