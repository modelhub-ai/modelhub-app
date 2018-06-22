import React, { Component } from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
  menuItem: {
    height: 60
    // "&:focus": {
    //   backgroundColor: "#696969", // theme.palette.primary.main,
    //   "& $primary, & $icon": {
    //     // color: theme.palette.common.white
    //   }
    // }
  },
  primary: {},
  icon: {},
  bigAvatar: {
    width: 60,
    height: 60,
    margin: 0,
    borderRadius: 0
  }
});

class ModelItem extends Component {
  render() {
    const {
      classes,
      value,
      primary,
      secondary,
      thumbnail,
      handleModelChoice,
      currentModelIndex
    } = this.props;
    return (
      <MenuItem
        value={value}
        onClick={handleModelChoice}
        className={classes.menuItem}
        selected={currentModelIndex == value}
      >
        <Avatar className={classes.bigAvatar} alt={primary} src={thumbnail} />
        <ListItemText
          classes={{ primary: classes.primary }}
          inset
          primary={primary}
          secondary={secondary}
        />
      </MenuItem>
    );
  }
}

ModelItem.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired
};

export default withStyles(styles)(ModelItem);
