import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import Typography from '@material-ui/core/Typography';
import glamorous from 'glamorous';

/**
 * TestPlaceholder
 * @extends Component
 */
class TestPlaceholder extends Component {
  /**
   * Renders NoSupport
   * @return {ReactElement}
   */
  render() {
    const GDiv = glamorous.div({
      height: 500,
      backgroundColor: '#fff',
      position: 'relative !important',
    });
    const GText = glamorous.div({
      position: 'absolute !important',
      top: '50% !important',
      left: '50% !important',
      transform: 'translate(-50%, -50%) !important',
    });
    const {io} = this.props;
    return (
      <GDiv>
        <GText>{io === 'input' ? 'UPLOAD' : 'RESULT'}</GText>
      </GDiv>
    );
  }
}

TestPlaceholder.propTypes = {
  io: PropTypes.string.isRequired,
};

export default TestPlaceholder;
