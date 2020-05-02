import React, { Component } from "react";
import Papa from "papaparse";
import queryString from "query-string";
import WorldFlags from "./WorldFlags";
import MapChart from "./MapChart";

class Country extends Component {
  state = {
    country: {},
  };

  componentDidMount() {
    const value = queryString.parse(this.props.location.search);
    const url =
      "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv";

    Papa.parse(url, {
      download: true,
      header: true,
      complete: (results) => {
        let newData = results.data.filter(function (params) {
          return params.UID === value.id;
        });
        this.setState({
          country: newData[0],
        });
      },
    });
  }

  numberWithCommas(x) {
    const y = "" + x;
    return y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  render() {
    const { country } = this.state;
    const lowerCaseName = "" + country.Country_Region;
    return (
      <div className="container">
        <WorldFlags
          country={lowerCaseName.toLowerCase()}
          style={{ float: "left" }}
        />
        <h1 className="display-2" style={{ float: "right" }}>
          {country.Country_Region}
        </h1>
        <MapChart
          name={country.Country_Region}
          longitude={country.Long_}
          latitude={country.Lat}
        />
        <table className="table table-bordered table-dark">
          <thead>
            <tr>
              <th scope="col">Country</th>
              <td scope="col">{country.Country_Region}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Confirmed</th>
              <td>
                <span className="badge badge-primary badge-pill">
                  {this.numberWithCommas(country.Confirmed)}
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row">Active</th>
              <td>
                <span className="badge badge-warning badge-pill">
                  {this.numberWithCommas(country.Active)}
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row">Recovered</th>
              <td>
                <span className="badge badge-success badge-pill">
                  {this.numberWithCommas(country.Recovered)}
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row">Deaths</th>
              <td>
                <span className="badge badge-danger badge-pill">
                  {this.numberWithCommas(country.Deaths)}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Country;
