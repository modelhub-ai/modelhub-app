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
   * Sets the text based on message from props
   * @param  {string } message from props
   * @return {string} text to display
   */
  getText(message) {
    let text = '';
    switch (message) {
      case 'input':
        text = 'UPLOAD';
        break;
      case 'output':
        text = 'RESULT';
        break;
      default:
        text = 'The model does not support this ' + message + '.';
    }
    return text;
  }
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
            this.getText(message)
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
