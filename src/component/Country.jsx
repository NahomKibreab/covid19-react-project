import React, { Component } from "react";
import Papa from "papaparse";
import queryString from "query-string";
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
  render() {
    console.log(this.state.country.Country_Region);
    return <h1>Country {this.state.country.Country_Region}</h1>;
  }
}

export default Country;
