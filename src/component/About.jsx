import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
class About extends Component {
  state = {};
  notify = () => toast("Wow so easy !");
  render() {
    return (
      <div>
        About Page!
        <button onClick={this.notify}>Notify !</button>
        <ToastContainer />
        <div className="footer">Footer</div>
      </div>
    );
  }
}

export default About;
