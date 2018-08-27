import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import glamorous from 'glamorous';
import theme from '../../theme.js';

const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    height: 90,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    position: 'relative !important',
  },
});
/**
 * TestUpload Class
 * @extends Component
 */
class TestUpload extends Component {
  /**
   * Renders TestUpload
   * @return {ReactElement}
   */
  render() {
    const {classes, handleUploadImage, uploadRef} = this.props;
    const GButton = glamorous(Button)({
      marginRight: '15px !important',
      height: '25px !important',
      color: '#fff !important',
      backgroundColor: theme.darkTeal + ' !important',
      position: 'absolute !important',
      top: '50% !important',
      left: '50% !important',
      transform: 'translate(-50%, -50%) !important',
    });
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <form onChange={handleUploadImage}>
            <input
              style={{display: 'none'}}
              id="raised-button-file"
              type="file"
              ref={uploadRef}
            />
            <label htmlFor="raised-button-file">
              <GButton component="span">Upload</GButton>
            </label>
          </form>
        </Paper>
      </div>
    );
  }
}

TestUpload.propTypes = {
  classes: PropTypes.object.isRequired,
  // name: PropTypes.string.isRequired,
  // currentOutput: PropTypes.object.isRequired,
};

export default withStyles(styles)(TestUpload);
