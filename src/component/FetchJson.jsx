import React, { Component } from "react";
import axios from "axios";
class FetchJson extends Component {
  state = {
    countries: [],
  };

  async componentDidMount() {
    let json = await axios.get("https://api.covid19api.com/summary");
    this.setState({ countries: json.data.Countries });
  }
  render() {
    return (
      <div className="container">
        <div className="card text-center">
          <div className="card-header">Featured</div>
          <div className="card-body">
            <h5 className="card-title">Covid 19 Global Report</h5>
            <p className="card-text">List of Global report for Covid19</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
          <div className="card-footer text-muted">2 days ago</div>
        </div>
        {this.state.countries.map((country) => (
          <div>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                {country.Country.length === 0 ? "NO Country" : country.Country}
                <span className="badge badge-primary badge-pill">
                  {country.TotalConfirmed}
                </span>
                <span className="badge badge-success badge-pill">
                  {country.TotalRecovered}
                </span>
                <span className="badge badge-danger badge-pill">
                  {country.NewDeaths}
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
