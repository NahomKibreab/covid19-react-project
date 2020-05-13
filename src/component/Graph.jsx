import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import $ from "jquery";
import Papa from "papaparse";

class Graph extends Component {
  state = {};
  Mydata = [];
  counter = 0;
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      country: props.country,
      date: [],
    };
  }

  componentDidMount() {
    const countryName = this.state.country;
    const url =
      "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_time.csv";

    Papa.parse(url, {
      download: true,
      header: true,
      complete: (results) => {
        let data = results.data.filter(function (params) {
          return (
            params.Country_Region === countryName &&
            params.Province_State === ""
          );
        });

        let date = data.map((x) => this.getDate(x.Report_Date_String));
        let uniqueDates = [];
        $.each(date, function (i, el) {
          if ($.inArray(el, uniqueDates) === -1) uniqueDates.push(el);
        });

        let newData = [...data];

        // Change the Report Date String in dataModified array to Month/Year only
        for (let i = 0; i < newData.length; i++) {
          newData[i]["Report_Date_String"] = this.getDate(
            newData[i]["Report_Date_String"]
          );
        }

        this.setState({ data: newData, date: uniqueDates });

        // for (let i = 0; i < uniqueDates.length; i++) {
        //   let confirmed = this.confirmedPerMonth(uniqueDates[i]);
        //   let deaths = this.deathsPerMonth(uniqueDates[i]);
        //   let casePerMonth = {
        //     month: uniqueDates[i],
        //     confirmedPerMonth: confirmed,
        //     deathsPerMonth: deaths,
        //   };
        //   dataModified.push(casePerMonth);
        // }

        // this.setState({ casesPerMonth: dataModified });
      },
    });
  }

  confirmedPerMonth(month) {
    let filterData = this.state.data.filter(
      (x) => x.Report_Date_String === month
    );
    let confirmedPerMonth = filterData.map((x) => Number(x.Confirmed));
    return confirmedPerMonth[confirmedPerMonth.length - 1];
  }

  deathsPerMonth(month) {
    let filterData = this.state.data.filter(
      (x) => x.Report_Date_String === month
    );
    let deathsPerMonth = filterData.map((x) => Number(x.Deaths));
    return deathsPerMonth[deathsPerMonth.length - 1];
  }

  getDate(x) {
    let d = new Date(x);

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let month = monthNames[d.getMonth()]; // Since getMonth() returns month from 0-11 not 1-12
    let year = d.getFullYear();

    let dateStr = month + "/" + year;
    return dateStr;
  }
  getData = () => {
    let { data, date } = this.state;
    let dataModified = [];

    for (let i = 0; i < date.length; i++) {
      let confirmed = this.confirmedPerMonth(date[i]);
      let deaths = this.deathsPerMonth(date[i]);
      let casePerMonth = {
        month: date[i],
        confirmedPerMonth: confirmed,
        deathsPerMonth: deaths,
      };
      dataModified.push(casePerMonth);
    }

    return (this.Mydata = {
      labels: date,
      datasets: [
        {
          label: "Confirmed",
          backgroundColor: "rgba(0,0,255,0.50)",
          data: dataModified.map((x) => Number(x.confirmedPerMonth)),
        },
        {
          label: "Deaths",
          backgroundColor: "rgba(255,0,0,0.50)",
          data: dataModified.map((x) => Number(x.deathsPerMonth)),
        },
      ],
    });
  };

  axes = () => [
    { primary: true, type: "time", position: "bottom" },
    { type: "linear", position: "left" },
  ];
  render() {
    return (
      <div className="mx-auto">
        <h5 className="display-4" style={{ textAlign: "center" }}>
          Cases over time
        </h5>
        <Line
          options={{
            responsive: true,
            layout: {
              padding: {
                top: 15,
                left: 30,
                right: 40,
                bottom: 15,
              },
            },
          }}
          data={this.getData}
          axes={this.axes}
        />
      </div>
    );
  }
}

export default Graph;
