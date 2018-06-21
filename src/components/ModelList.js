import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ModelItem from "./ModelItem";

const drawerWidth = 270;
const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0
  },
  toolbar: theme.mixins.toolbar
});

class ModelList extends Component {
  render() {
    const { classes, data } = this.props;
    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        {data.map((model, index) => {
          return (
            <ModelItem
              key={"model_" + index}
              primary={model.name}
              secondary={model.task_extended}
              thumbnail={model.url + "thumbnail/thumbnail.jpg"}
            />
          );
        })}
        <Divider />
      </Drawer>
    );
  }
}

ModelList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ModelList);
