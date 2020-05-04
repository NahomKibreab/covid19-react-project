import React, { Component } from "react";
import TableList from "./TableList";
class TableReport extends Component {
  // state = {
  //   country: [],
  //   seachCountry: [],
  // };
  constructor(props) {
    super(props);
    this.state = {
      country: [],
      seachCountry: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { country: props.report };
  }
  sortByCountryName = (A, B) => {
    if (A.Country_Region > B.Country_Region) return 1;
    else if (A.Country_Region < B.Country_Region) return -1;
    else return 0;
  };

  handleChange = (e) => {
    if (e.target.value.length > 0) {
      const data = [...this.props.report];
      const findCountry = data.filter(function (params) {
        return (
          params.Country_Region.toLowerCase().indexOf(
            e.target.value.toLowerCase().trim()
          ) >= 0
        );
      });
      this.setState({ seachCountry: findCountry });
    } else {
      this.setState({ seachCountry: [] });
    }
  };

  onCountryClicked = (e) => {
    return e;
  };
  render() {
    return (
      <div>
        <table className="table table-striped table-dark table-hover">
          <thead>
            <tr>
              <th colSpan="5">
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
                    placeholder="search country"
                    aria-label="search country"
                    aria-describedby="basic-addon1"
                    onChange={this.handleChange}
                  />
                </div>
              </th>
            </tr>
            <tr>
              <th scope="col"></th>
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
            </tr>
          </thead>
          <tbody>
            <TableList
              country={
                this.state.seachCountry.length > 0
                  ? this.state.seachCountry.map((country) => country)
                  : this.state.country.map((country) => country)
              }
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableReport;
