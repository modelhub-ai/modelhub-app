import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
      marginBottom: 10,
      // backgroundColor: '#eeeeee',
    });
    return <GDiv>{children}</GDiv>;
  }
}

OutputDisplay.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OutputDisplay;
