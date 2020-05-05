import React, { Component } from "react";
import imageProfile from "./nknahom_pro.jpg";

class About extends Component {
  state = {};

  render() {
    return (
      <div
        className="container"
        style={{ marginTop: "5%", marginBottom: "5%" }}
      >
        <div
          class="card mx-auto"
          style={{ maxWidth: "470px", textAlign: "center", objectFit: "cover" }}
        >
          <img
            src={imageProfile}
            class="card-img-top rounded "
            alt="nahom photo"
          />
          <div class="card-body">
            <p style={{ fontStyle: "italic" }}>Developed by</p>
            <div class="display-4">Nahom Mehanzel</div>
            <p class="card-text">
              ComIT React Development <br /> Covid19 Project
            </p>
            <hr />
            <a
              href="https://www.linkedin.com/in/nahom-mehanzel/"
              target="_blank"
            >
              <svg
                class="bi bi-person-plus-fill"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 100-6 3 3 0 000 6zm7.5-3a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13V5.5a.5.5 0 01.5-.5z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M13 7.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z"
                  clip-rule="evenodd"
                />
              </svg>{" "}
              Connect with LinkedIn
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
