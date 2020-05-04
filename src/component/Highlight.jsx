import React, { Component } from "react";
class Highlight extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex flex-row justify-content-between p-4 bd-highlight overflow-auto">
        <div
          className="card border-primary shadow p-3 mb-5 bg-white rounded"
          style={{ minWidth: "14rem" }}
        >
          <img src="" className="card-img-top" alt="" />
          <div className="card-body text-primary">
            <p>Confirmed</p>
            <hr />
            <p className="h2">{this.props.confirmed}</p>
          </div>
        </div>
        <div
          className="card border-warning shadow p-3 mb-5 bg-white rounded"
          style={{ minWidth: "14rem" }}
        >
          <img src="" className="card-img-top" alt="" />
          <div className="card-body text-warning">
            <p>Active</p>
            <hr />
            <p className="h2">{this.props.active}</p>
          </div>
        </div>
        <div
          className="card border-success shadow p-3 mb-5 bg-white rounded"
          style={{ minWidth: "14rem" }}
        >
          <img src="" className="card-img-top" alt="" />
          <div className="card-body text-success">
            <p>Recovered</p>
            <hr />
            <p className="h2">{this.props.recovered}</p>
          </div>
        </div>
        <div
          className="card border-danger shadow p-3 mb-5 bg-white rounded"
          style={{ minWidth: "14rem" }}
        >
          <img src="" className="card-img-top" alt="" />
          <div className="card-body text-danger">
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
