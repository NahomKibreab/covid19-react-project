import React, { Component } from "react";
import Papa from "papaparse";
import TableReport from "./TableReport";
import Graph from "./Graph";

class FetchJson extends Component {
  state = {
    countries: [],
    topCountries: null,
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

        const sortedData = newData.sort(this.sortByCountryName);
        let totalConfirmed = 0;

        sortedData.map((total) => {
          totalConfirmed += Number(total.Confirmed);
        });

        //Top three Country with the highest cases
        const sortedTopCountry = newData.sort(this.sortByConfirmed);
        let topCountry = [];
        for (let i = 0; i < 3; i++) {
          topCountry.push(sortedTopCountry[i]);
        }

        let topThree = [];
        topCountry.map((country) => {
          topThree.push(country.ISO3.toLowerCase());
        });
        this.setState({ topCountries: topThree });
        this.setState({
          countries: sortedData,
          totalConfirmed: totalConfirmed,
        });
      },
    });
  }

  sortByCountryName = (A, B) => {
    if (A.Country_Region > B.Country_Region) return 1;
    else if (A.Country_Region < B.Country_Region) return -1;
    else return 0;
  };
  sortByConfirmed = (A, B) => {
    if (Number(B.Confirmed) > Number(A.Confirmed)) return 1;
    else if (Number(B.Confirmed) < Number(A.Confirmed)) return -1;
    else return 0;
  };

  handleOnSortByConfirmed = (event) => {
    this.handelOnSortBy(event, this.sortByConfirmed);
  };

  sortByRecovered = (A, B) => {
    if (Number(B.Recovered) > Number(A.Recovered)) return 1;
    else if (Number(B.Recovered) < Number(A.Recovered)) return -1;
    else return 0;
  };

  sortByDeaths = (A, B) => {
    if (Number(B.Deaths) > Number(A.Deaths)) return 1;
    else if (Number(B.Deaths) < Number(A.Deaths)) return -1;
    else return 0;
  };

  handleOnSortByCountryName = (event) => {
    this.handelOnSortBy(event, this.sortByCountryName);
  };
  handleOnSortByRecovered = (event) => {
    this.handelOnSortBy(event, this.sortByRecovered);
  };
  handleOnSortByDeaths = (event) => {
    this.handelOnSortBy(event, this.sortByDeaths);
  };

  handelOnSortBy = (event, sortOperation) => {
    const countries = [...this.state.countries];
    countries.sort(sortOperation);
    this.setState({ countries });
  };

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  render() {
    const { topCountries } = this.state;

    if (topCountries === null) {
      return null;
    }
    return (
      <div className="container">
        <div className="card text-center">
          <div className="card-header">Featured Covid19</div>
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
          <div className="card-footer text-muted">
            Global Confrimed Cases:{" "}
            {this.numberWithCommas(this.state.totalConfirmed)}
          </div>
        </div>
        {/* <Graph /> */}
        {/* <WorldFlags topCountries={this.state.topCountries} /> */}

        <TableReport
          report={this.state.countries}
          onSortByCountryName={this.handleOnSortByCountryName}
          onSortByConfirmed={this.handleOnSortByConfirmed}
          onSortByRecovered={this.handleOnSortByRecovered}
          onSortByDeaths={this.handleOnSortByDeaths}
        />
      </div>
    );
  }
}

export default FetchJson;
