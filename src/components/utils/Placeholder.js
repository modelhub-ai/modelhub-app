import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import Typography from '@material-ui/core/Typography';
import glamorous from 'glamorous';
import CircularProgress from '@material-ui/core/CircularProgress';
import theme from '../../theme.js';

/**
 * Placeholder
 * @extends Component
 */
class Placeholder extends Component {
  /**
   * Renders Placeholder
   * @return {ReactElement}
   */
  render() {
    const GDiv = glamorous.div({
      height: 500,
      backgroundColor: '#eeeeee',
      position: 'relative !important',
      marginBottom: 10,
      textAlign: 'center',
    });
    const GText = glamorous.div({
      position: 'absolute !important',
      top: '50% !important',
      left: '50% !important',
      transform: 'translate(-50%, -50%) !important',
    });
    const {spinner, message} = this.props;
    return (
      <GDiv>
        <GText>
          {spinner ? (
            <CircularProgress style={{color: theme.darkTeal}} size={50} />
          ) : (
            message
          )}
        </GText>
      </GDiv>
    );
  }
}

Placeholder.propTypes = {
  spinner: PropTypes.bool,
  message: PropTypes.string,
};
Placeholder.defaultProps = {
  spinner: false,
};

export default Placeholder;
