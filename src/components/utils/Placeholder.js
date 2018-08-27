import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import glamorous from 'glamorous';

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
      backgroundColor: '#fff',
      position: 'relative !important',
    });
    const GText = glamorous(Typography)({
      position: 'absolute !important',
      top: '50% !important',
      left: '50% !important',
      transform: 'translate(-50%, -50%) !important',
    });
    const {message} = this.props;
    return (
      <GDiv>
        <GText variant="title" noWrap>
          {this.getText(message)}
        </GText>
      </GDiv>
    );
  }
}

Placeholder.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Placeholder;
