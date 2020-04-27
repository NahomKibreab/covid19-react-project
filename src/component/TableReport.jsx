import React, { Component } from "react";
class TableReport extends Component {
  state = {
    country: [],
    seachCountry: [],
  };
  i = 1;

  handleChange = (e) => {
    console.log(e.target.value.toLowerCase());
    const data = [...this.props.report];
    const findCountry = data.filter(function (params) {
      return (
        params.Country_Region.toLowerCase() == e.target.value.toLowerCase()
      );
    });
    this.setState({ seachCountry: findCountry });
    console.log(findCountry);
  };
  render() {
    const { report } = this.props;
    return (
      <div>
        <table className="table table-striped table-dark table-hover">
          <thead>
            <tr>
              <th colSpan="4">
                <div className="input-group flex-nowrap">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <svg
                        className="bi bi-search"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
                          clipRule="evenodd"
                        />
                        <path
                          fillRule="evenodd"
                          d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="search by country name"
                    aria-label="search by country name"
                    aria-describedby="basic-addon1"
                    onChange={this.handleChange}
                  />
                </div>
              </th>
            </tr>
            <tr>
              <th scope="col" onClick={this.props.onSortByCountryName}>
                Country
                <span hidden={true}> &#8681;</span>
              </th>
              <th
                scope="col"
                onClick={this.props.onSortByConfirmed}
                className="bg-primary"
              >
                Cases
              </th>
              <th
                scope="col"
                onClick={this.props.onSortByRecovered}
                className="bg-success"
              >
                Recovered
              </th>
              <th
                scope="col"
                onClick={this.props.onSortByDeaths}
                className="bg-danger"
              >
                Deaths
              </th>
              {/* <th scope="col">Active</th> */}
            </tr>
          </thead>
          <tbody>
            {this.state.seachCountry.length > 0
              ? this.state.seachCountry.map((country) => (
                  <tr key={country.UID}>
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
                    {/* <td>
                    <span className="badge badge-info badge-pill">
                      {country.Active}
                    </span>
                  </td> */}
                  </tr>
                ))
              : report.map((country) => (
                  <tr key={country.UID}>
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
                    {/* <td>
                    <span className="badge badge-info badge-pill">
                      {country.Active}
                    </span>
                  </td> */}
                  </tr>
                ))}
            {}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableReport;
