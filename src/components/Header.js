import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import glamorous from "glamorous";

class Header extends Component {
  render() {
    const GAppBar = glamorous(AppBar)({
      zIndex: "1500 !important"
    });
    return (
      <GAppBar position="absolute">
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            ModelHub
          </Typography>
        </Toolbar>
      </GAppBar>
    );
  }
}

Header.propTypes = {};

export default Header;
