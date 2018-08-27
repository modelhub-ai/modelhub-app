import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    height: 90,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});
/**
 * OutputInfo Class
 * @extends Component
 */
class OutputInfo extends Component {
  /**
   * Renders OutputInfo
   * @return {ReactElement}
   */
  render() {
    const {classes, name, currentOutput} = this.props;
    return currentOutput !== undefined && name !== '' ? (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="headline" component="h3">
            {name}
          </Typography>
          <Typography component="p">
            Inferred in {currentOutput['processing_time']} seconds.
          </Typography>
        </Paper>
      </div>
    ) : null;
  }
}

OutputInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  currentOutput: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutputInfo);
