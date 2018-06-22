import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SimpleExpansionPanel from "./SimpleExpansionPanel";
import ContentTabs from "./ContentTabs";

const styles = theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0
  },
  toolbar: theme.mixins.toolbar
});

class Content extends Component {
  render() {
    const { classes, data, currentModelIndex } = this.props;
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <ContentTabs />
        <div className={classes.toolbar} />

        {currentModelIndex === -1 ? "welcome!" : data[currentModelIndex].name}
      </main>
    );
  }
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired
};

export default withStyles(styles)(Content);
// <Typography noWrap>
//   {"You think water moves fast? You should see ice."}
// </Typography>
// <SimpleExpansionPanel />
