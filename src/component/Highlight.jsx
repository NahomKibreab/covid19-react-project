import React, { Component } from "react";
class Highlight extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex flex-row justify-content-between p-4 bd-highlight overflow-auto">
        <div
          className="card shadow p-3 mb-5 bg-white rounded alert-primary"
          style={{ minWidth: "14rem" }}
        >
          <img src="" className="card-img-top" alt="" />
          <div className="card-body">
            <p>Confirmed</p>
            <hr />
            <p className="h2">{this.props.confirmed}</p>
          </div>
        </div>
        <div
          className="card shadow p-3 mb-5 bg-white rounded alert-warning"
          style={{ minWidth: "14rem" }}
        >
          <img src="" className="card-img-top" alt="" />
          <div className="card-body">
            <p>Active</p>
            <hr />
            <p className="h2">{this.props.active}</p>
          </div>
        </div>
        <div
          className="card shadow p-3 mb-5 bg-white rounded alert-success"
          style={{ minWidth: "14rem" }}
        >
          <img src="" className="card-img-top" alt="" />
          <div className="card-body">
            <p>Recovered</p>
            <hr />
            <p className="h2">{this.props.recovered}</p>
          </div>
        </div>
        <div
          className="card shadow p-3 mb-5 bg-white rounded alert-danger"
          style={{ minWidth: "14rem" }}
        >
          <img src="" className="card-img-top" alt="" />
          <div className="card-body">
            <p>Deaths</p>
            <hr />
            <p className="h2">{this.props.deaths}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Highlight;
