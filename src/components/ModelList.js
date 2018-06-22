import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ModelItem from "./ModelItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const drawerWidth = 340;
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
  dummy() {
    console.log("click away");
  }
  render() {
    const { classes, data, handleModelChoice, currentModelIndex } = this.props;
    return (
      <ClickAwayListener onClickAway={this.dummy}>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
          SlideProps={{ unmountOnExit: true }}
        >
          <MenuList>
            <div className={classes.toolbar} />
            {data.map((model, index) => {
              return (
                <div key={"model_" + index}>
                  <ModelItem
                    value={index}
                    primary={model.name}
                    secondary={model.task_extended}
                    thumbnail={model.url + "thumbnail/thumbnail.jpg"}
                    handleModelChoice={handleModelChoice}
                    currentModelIndex={currentModelIndex}
                  />
                  <Divider />
                </div>
              );
            })}
          </MenuList>
        </Drawer>
      </ClickAwayListener>
    );
  }
}

ModelList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ModelList);
