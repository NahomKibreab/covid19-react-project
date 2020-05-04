import React, { Component } from "react";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
        <footer
          className="page-footer font-small teal pt-4 pt-success bg-dark"
          style={{ color: "white" }}
        >
          <div className="container-fluid text-center text-md-left">
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase font-weight-bold">
                  Covid 19 Report
                </h5>
                <p>
                  This project is developed as part of React Development course
                  for ComIT.
                </p>
              </div>

              <hr className="clearfix w-100 d-md-none pb-3" />

              <div className="col-md-6 mb-md-0 mb-3">
                <h5 className="text-uppercase font-weight-bold">Resourse</h5>
                <p>
                  All the Covid-19 live data parsed from CSV of Johns Hopkins
                  University project found in github.
                </p>
              </div>
            </div>
          </div>

          <div className="footer-copyright text-center py-3">
            © 2020 Copyright:
            <a href="https://github.com/NahomKibreab" target="_blank">
              {" "}
              Nahom Mehanzel
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
