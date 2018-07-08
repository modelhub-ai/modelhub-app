import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import glamorous from 'glamorous';

/**
 * OutputDisplay Class
 * @extends Component
 */
class OutputDisplay extends Component {
  /**
   * Renders OutputDisplay
   * @return {ReactElement}
   */
  render() {
    const {children} = this.props;
    const GDiv = glamorous.div({
      height: 500,
      backgroundColor: '#eeeeee',
      border: '1px solid #000',
    });
    return <GDiv>{children}</GDiv>;
  }
}

OutputDisplay.propTypes = {};

export default OutputDisplay;
