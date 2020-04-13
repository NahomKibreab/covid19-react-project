import React, { Component } from "react";
import Papa from "papaparse";
class FetchJson extends Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    const url =
      "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv";

    Papa.parse(url, {
      download: true,
      header: true,
      complete: (results) => {
        let newData = results.data.filter(function (params) {
          return params.Country_Region !== "";
        });
        console.log(newData);
        this.setState({ countries: newData });
      },
    });
  }
  render() {
    return (
      <div className="container">
        <div className="card text-center">
          <div className="card-header">Featured</div>
          <div className="card-body">
            <h5 className="card-title">Covid 19 Global Report</h5>
            <p className="card-text">List of Global report for Covid19</p>
            {/* <a href="#" className="btn btn-primary">
              Go somewhere
            </a> */}
          </div>
          <div className="card-footer text-muted">2 days ago</div>
        </div>
        {this.state.countries.map((country) => (
          <div key={country.Country_Region}>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                {country.Country_Region.length === 0
                  ? "NO Country"
                  : country.Country_Region}
                <span className="badge badge-primary badge-pill">
                  {country.Confirmed}
                </span>
                <span className="badge badge-success badge-pill">
                  {country.Recovered}
                </span>
                <span className="badge badge-danger badge-pill">
                  {country.Deaths}
                </span>
              </li>
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default FetchJson;
