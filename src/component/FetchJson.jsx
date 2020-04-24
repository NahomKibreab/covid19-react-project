import React, { Component } from "react";
import Papa from "papaparse";
import TableReport from "./TableReport";
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
        this.setState({ countries: newData.sort() });
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
            <p className="card-text">
              List of Global report for Covid19, this live data gets from Johns
              Hopkins University
            </p>
            <a
              href="https://coronavirus.jhu.edu/"
              target="_blank"
              className="btn btn-primary"
            >
              Johns Hopkins University
            </a>
          </div>
          <div className="card-footer text-muted">2 days ago</div>
        </div>

        <TableReport report={this.state.countries} />
      </div>
    );
  }
}

export default FetchJson;
