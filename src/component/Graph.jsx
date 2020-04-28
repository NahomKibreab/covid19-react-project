import React, { Component } from "react";
import { Line } from "react-chartjs-2";
class Graph extends Component {
  state = {};
  constructor(props) {
    super(props);

    this.state = {
      data: {
        labels: ["1", "2", "3", "4"],
        datasets: [
          {
            label: "Cases",
            backgroundColor: "rgba(0,0,255,0.50)",
            data: [4, 5, 1, 10, 32, 2, 20],
          },
          {
            label: "Recovered",
            backgroundColor: "rgba(0,255,0,0.50)",
            data: [14, 15, 21, 0, 12, 4, 12],
          },
          {
            label: "Deaths",
            backgroundColor: "rgba(255,0,0,0.50)",
            data: [7, 4, 11, 20, 21, 2, 5],
          },
        ],
      },
    };
  }
  render() {
    return (
      <div className="mx-auto">
        <h3 className="display-1" style={{ textAlign: "center" }}>
          Covid19 Global Graph
        </h3>
        <Line options={{ responsive: true }} data={this.state.data} />
      </div>
    );
  }
}

export default Graph;
