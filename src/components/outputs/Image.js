import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import glamorous from 'glamorous';

/**
 * Image
 * @extends Component
 */
class Image extends Component {
  /**
   * Renders Image
   * @return {ReactElement}
   */
  render() {
    // const {currentOutput} = this.props;
    return <div>{'Image'}</div>;
  }
}

Image.propTypes = {
  currentOutput: PropTypes.object.isRequired,
};

export default Image;
