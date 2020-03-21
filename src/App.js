import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Body from "./components/body";



class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Body/>
      </Router>
    );
  }
}

export default App;
