import React, { Component } from "react";
import Papa from "papaparse";
import TableReport from "./TableReport";
import Highlight from "./Highlight";

class FetchJson extends Component {
  state = {
    countries: [],
    totalConfirmed: 0,
    totalActive: 0,
    totalRecovered: 0,
    totalDeath: 0,
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

        const sortedData = newData.sort(this.sortByConfirmed);

        let totalConfirmed = 0;
        sortedData.map((total) => {
          totalConfirmed += Number(total.Confirmed);
        });
        let totalActive = 0;
        sortedData.map((total) => {
          totalActive += Number(total.Active);
        });
        let totalRecovered = 0;
        sortedData.map((total) => {
          totalRecovered += Number(total.Recovered);
        });
        let totalDeath = 0;
        sortedData.map((total) => {
          totalDeath += Number(total.Deaths);
        });

        this.setState({
          countries: sortedData,
          totalConfirmed: totalConfirmed,
          totalActive: totalActive,
          totalRecovered: totalRecovered,
          totalDeath: totalDeath,
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
            <h5 className="display-3">COVID-19 Pandemic</h5>
            <p className="card-text">
              Coronavirus disease (COVID-19) is an infectious disease caused by
              a newly discovered coronavirus. This list of countries with the
              cases for Covid19 gets data from Johns Hopkins University.
            </p>
            <a
              href="https://coronavirus.jhu.edu/"
              target="_blank"
              className="btn btn-primary"
            >
              Johns Hopkins University
            </a>
          </div>
        </div>
        <Highlight
          confirmed={this.numberWithCommas(this.state.totalConfirmed)}
          active={this.numberWithCommas(this.state.totalActive)}
          recovered={this.numberWithCommas(this.state.totalRecovered)}
          deaths={this.numberWithCommas(this.state.totalDeath)}
        />
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
