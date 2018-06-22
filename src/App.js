import React, { Component } from "react";
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

export default App;
