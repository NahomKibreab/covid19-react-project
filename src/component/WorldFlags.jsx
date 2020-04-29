import React, { Component } from "react";
import Countries from "./countries.json";

class WorldFlags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { country: props.country };
  }
  flags = (x) => {
    // // iterate over each element in the array
    const country = x;
    for (let i = 0; i < Countries.length; i++) {
      // look for the entry with a matching `code` value
      const countryName = "" + Countries[i].name;
      if (
        countryName.toLowerCase() === country ||
        Countries[i].alpha2 === country ||
        Countries[i].alpha3 === country
      ) {
        // we found it
        // obj[i].name is the matched result
        let x = "" + Countries[i].alpha2;

        return x.toUpperCase();
      }
    }
  };

  emptyImage = () => {
    return "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg";
  };
  render() {
    return (
      <React.Fragment>
        <img
          src={
            this.flags(this.state.country) !== undefined
              ? "https://www.countryflags.io/" +
                this.flags(this.state.country) +
                "/shiny/64.png"
              : this.emptyImage()
          }
          className="rounded float-left"
          width="64"
          height="64"
        />
      </React.Fragment>
    );
  }
}

export default WorldFlags;
