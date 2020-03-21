import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "../page/homepage";
import Alumni from "../page/alumni";
import Grafik from "../page/grafik";

class body extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/alumni" component={Alumni} />
        <Route path="/grafik" component={Grafik} />
      </Switch>
    );
  }
}

export default body;
