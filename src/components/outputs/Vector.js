import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import glamorous from 'glamorous';

/**
 * Vector
 * @extends Component
 */
class Vector extends Component {
  /**
   * Renders Vector
   * @return {ReactElement}
   */
  render() {
    const {currentOutput} = this.props;
    return <div>{'Vector'}</div>;
  }
}

Vector.propTypes = {
  currentOutput: PropTypes.object.isRequired,
};

export default Vector;
