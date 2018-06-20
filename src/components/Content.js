import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import glamorous from "glamorous";

class Content extends Component {
  render() {
    return (
      <Typography noWrap>
        {"You think water moves fast? You should see ice."}
      </Typography>
    );
  }
}

Content.propTypes = {};

export default Content;
