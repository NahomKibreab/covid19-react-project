import React, { Component } from "react";
import Papa from "papaparse";
import queryString from "query-string";
import WorldFlags from "./WorldFlags";
import MapChart from "./MapChart";
import Graph from "./Graph";

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
        <div style={{ width: "100%", display: "inline-block" }}>
          <WorldFlags
            country={lowerCaseName.toLowerCase()}
            style={{ float: "left" }}
          />

          <h1 className="display-4" style={{ float: "right" }}>
            {country.Country_Region}
          </h1>
        </div>
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-interval="10000">
              <div class="d-block w-100">
                <MapChart
                  name={country.Country_Region}
                  longitude={country.Long_}
                  latitude={country.Lat}
                />
              </div>
            </div>
            <div class="carousel-item" data-interval="10000">
              <div class="d-block w-100">
                {country.Country_Region !== undefined ? (
                  <Graph country={country.Country_Region} />
                ) : null}
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleInterval"
            role="button"
            data-slide="prev"
            style={{ backgroundColor: "gray", width: "3%" }}
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleInterval"
            role="button"
            data-slide="next"
            style={{ backgroundColor: "gray", width: "3%" }}
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

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
                  {this.numberWithCommas(country.Confirmed | 0)}
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row">Active</th>
              <td>
                <span className="badge badge-warning badge-pill">
                  {this.numberWithCommas(country.Active | 0)}
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row">Recovered</th>
              <td>
                <span className="badge badge-success badge-pill">
                  {this.numberWithCommas(country.Recovered | 0)}
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row">Deaths</th>
              <td>
                <span className="badge badge-danger badge-pill">
                  {this.numberWithCommas(country.Deaths | 0)}
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
