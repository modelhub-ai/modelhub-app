import React, { Component } from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";
import ModelList from "./ModelList";
import Content from "./Content";
import data from "../data";

const GDiv = glamorous.div({
  flexGrow: 1,
  zIndex: 1,
  overflow: "hidden",
  position: "relative",
  display: "flex"
});
class ModelHub extends Component {
  render() {
    return (
      <GDiv>
        <ModelList data={data} />
        <Content />
      </GDiv>
    );
  }
}

ModelHub.propTypes = {};

export default ModelHub;
