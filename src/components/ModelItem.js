import React, { Component } from "react";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import glamorous from "glamorous";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  bigAvatar: {
    width: 60,
    height: 60,
    margin: 0,
    borderRadius: 0
  }
};

class ModelItem extends Component {
  handleClick(event) {
    console.log(event);
  }

  render() {
    const { classes, primary, secondary, thumbnail } = this.props;
    return (
      <div>
        <ListItem button onClick={this.handleClick}>
          <Avatar className={classes.bigAvatar} alt={primary} src={thumbnail} />
          <ListItemText primary={primary} secondary={secondary} />
        </ListItem>
        <Divider />
      </div>
    );
  }
}

ModelItem.propTypes = {
  classes: PropTypes.object.isRequired,
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired
};

export default withStyles(styles)(ModelItem);
