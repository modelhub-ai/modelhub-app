import React, {Component} from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import {withStyles} from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';

const styles = (theme) => ({
  menuItem: {
    height: 60,
  },
});
/**
 * ModelItem class
 * @extends Component
 */
class ModelItem extends Component {
  /**
   * Renders ModelItem
   * @return {ReactElement}
   */
  render() {
    const GAvatar = glamorous(Avatar)({
      width: '60px !important',
      height: '60px !important',
      margin: 0,
      borderRadius: '0px !important',
    });
    const {
      classes,
      value,
      primary,
      secondary,
      thumbnail,
      handleModelChoice,
      currentModelIndex,
    } = this.props;
    return (
      <MenuItem
        value={value}
        onClick={handleModelChoice}
        className={classes.menuItem}
        selected={currentModelIndex === value}
      >
        <GAvatar alt={primary} src={thumbnail} />
        <ListItemText inset primary={primary} secondary={secondary} />
      </MenuItem>
    );
  }
}

ModelItem.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  handleModelChoice: PropTypes.func.isRequired,
  currentModelIndex: PropTypes.number.isRequired,
};

export default withStyles(styles)(ModelItem);
