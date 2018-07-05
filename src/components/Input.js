import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import glamorous from 'glamorous';

/**
 * Input
 * @extends Component
 */
class Input extends Component {
  /**
   * Renders Input
   * @return {ReactElement}
   */
  render() {
    const {type} = this.props;
    return <div>{type}</div>;
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Input;
