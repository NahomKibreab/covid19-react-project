import React, { Component } from "react";
import Papa from "papaparse";
import TableReport from "./TableReport";
class FetchJson extends Component {
  state = {
    countries: [],
    totalConfirmed: 0,
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
        this.setState({ countries: newData });
      },
    });
  }

  totalConfirmed = (total) => {
    const totalConfirmed = 0;
    const totals = [];
    for (let i = 0; i <= total.length; i++) {
      // totalConfirmed += this.state.countries[1][]
      console.log(total[i]);
    }
  };
  sortByCountryName = (A, B) => {
    if (A.Country_Region > B.Country_Region) return 1;
    else if (A.Country_Region < B.Country_Region) return -1;
    else return 0;
  };
  sortByConfirmed = (A, B) => {
    if (Number(B.Confirmed) > Number(A.Confirmed)) return 1;
    else if (B.Confirmed < A.Confirmed) return -1;
    else return 0;
  };
  handleOnSortByConfirmed = (event) => {
    this.handelOnSortBy(event, this.sortByConfirmed);
  };

  handleOnSortByCountryName = (event) => {
    this.handelOnSortBy(event, this.sortByCountryName);
  };

  handelOnSortBy = (event, sortOperation) => {
    const countries = [...this.state.countries];
    console.table(countries);
    countries.sort(sortOperation);
    this.setState({ countries });
  };

  render() {
    return (
      <div className="container">
        {this.totalConfirmed(this.state.countries)}
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

        <TableReport
          report={this.state.countries}
          onSortByCountryName={this.handleOnSortByCountryName}
          onSortByConfirmed={this.handleOnSortByConfirmed}
        />
      </div>
    );
  }
}

export default FetchJson;
