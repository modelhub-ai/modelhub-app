import React, {Component} from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    padding: '0px !important',
  },
});

/**
 * ImageGallery
 * @extends Component
 */
class ImageGallery extends Component {
  /**
   * Forcing component not to update in order to preserve the current scroll
   * location
   * @param  {object} nextProps nextProps
   * @param  {object} nextState nextState
   * @return {bool}
   */
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  /**
   * Renders Images
   * @return {ReactElement}
   */
  render() {
    const {classes, data, onCLickHandler} = this.props; // currentInput
    const GGallery = glamorous.div({
      backgroundColor: '#fff',
      padding: 10,
      overflowY: 'hidden',
      height: 100,
      display: 'flex',
    });
    const GImg = glamorous.img({
      height: '100%',
      cursor: 'pointer',
      marginRight: 10,
      // border: '3px solid transparent',
    });
    return (
      <Paper className={classes.root} elevation={1}>
        <GGallery>
          {data.map((tile) => (
            <GImg key={tile} src={tile} alt={''} onClick={onCLickHandler} />
          ))}
        </GGallery>
      </Paper>
    );
  }
}

ImageGallery.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.string.isRequired,
  ]),
  onCLickHandler: PropTypes.func.isRequired,
  currentInput: PropTypes.string.isRequired,
};

export default withStyles(styles)(ImageGallery);

// style={{
//   borderColor: tile === currentInput ? '#ffab40' : 'transparent',
// }}
