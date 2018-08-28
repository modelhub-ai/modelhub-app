import React, {Component} from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

/**
 * ImageFocus Class
 * @extends Component
 */
class ImageFocus extends Component {
  /**
   * Renders ImageFocus
   * @return {ReactElement}
   */
  render() {
    const {src} = this.props;
    const GDiv = glamorous.div({
      height: 500,
      backgroundColor: '#eeeeee',
      border: '0px solid #000',
      background: 'url(' + src + ') center center no-repeat',
      backgroundSize: '50%',
      marginBottom: 10,
    });
    return <GDiv />;
  }
}

ImageFocus.propTypes = {
  src: PropTypes.string.isRequired,
};

export default ImageFocus;
