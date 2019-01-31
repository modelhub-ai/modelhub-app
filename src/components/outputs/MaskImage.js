import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import glamorous from 'glamorous';

/**
 * MaskImage
 * @extends Component
 */
class MaskImage extends Component {
  /**
   * Renders MaskImage
   * @return {ReactElement}
   */
  render() {
    // const {currentOutput} = this.props;
    return <div>{'MaskImage'}</div>;
  }
}

MaskImage.propTypes = {
  currentOutput: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};

export default MaskImage;
