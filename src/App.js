import React from "react";
import "./App.css";
import FetchJson from "./component/FetchJson";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./component/About";
import Navigation from "./component/Navigation";
import Footer from "./component/Footer";
import Country from "./component/Country";

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/country" component={Country} />
        <Route path="/" component={FetchJson} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
