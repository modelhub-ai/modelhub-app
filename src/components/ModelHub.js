import React, { Component } from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";
import ModelList from "./ModelList";
import Content from "./Content";
import Welcome from "./Welcome";
import data from "../data";

const GDiv = glamorous.div({
  flexGrow: 1,
  zIndex: 1,
  overflow: "hidden",
  position: "relative",
  display: "flex"
});
class ModelHub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentModelIndex: -1
    };
    this.handleModelChoice = this.handleModelChoice.bind(this);
  }
  handleModelChoice(event) {
    this.setState({ currentModelIndex: event.currentTarget.value });
  }
  render() {
    const { currentModelIndex } = this.state;
    return (
      <GDiv>
        <ModelList
          data={data}
          handleModelChoice={this.handleModelChoice}
          currentModelIndex={currentModelIndex}
        />
        {currentModelIndex === -1 ? (
          <Welcome />
        ) : (
          <Content data={data[currentModelIndex]} />
        )}
      </GDiv>
    );
  }
}

ModelHub.propTypes = {};

export default ModelHub;
