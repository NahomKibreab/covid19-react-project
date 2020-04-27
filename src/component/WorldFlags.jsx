import React, { Component } from "react";
import Countries from "world_countries_lists/data/en/countries.json";

class WorldFlags extends Component {
  state = {
    topCountry: [],
  };

  flags = (country) => {
    // // iterate over each element in the array
    for (let i = 0; i < Countries.length; i++) {
      // look for the entry with a matching `code` value
      if (Countries[i].name === country) {
        // we found it
        // obj[i].name is the matched result
        return Countries[i].alpha2;
      }
    }
  };

  render() {
    return (
      <div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={
                  "https://www.worldometers.info/img/flags/" +
                  this.flags("Eritrea") +
                  "-flag.gif"
                }
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={
                  "https://www.worldometers.info/img/flags/" +
                  this.flags("Eritrea") +
                  "-flag.gif"
                }
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={
                  "https://www.worldometers.info/img/flags/" +
                  this.flags("Eritrea") +
                  "-flag.gif"
                }
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default WorldFlags;
