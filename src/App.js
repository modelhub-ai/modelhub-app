import React, { Component } from "react";
import glamorous from "glamorous";
import PropTypes from "prop-types";
import Header from "./components/Header";
import ModelHub from "./components/ModelHub";

class App extends Component {
  render() {
    return (
      <div>
        <ModelHub />
        <Header />
      </div>
    );
  }
}

App.propTypes = {};

export default App;
