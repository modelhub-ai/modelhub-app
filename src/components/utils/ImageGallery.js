import React, {Component} from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

/**
 * ImageGallery
 * @extends Component
 */
class ImageGallery extends Component {
  /**
   * Forcing component not to update in order to preserve the current scroll
   * location
   * @param  {object} nextProps nextProps
   * @param  {object} nextState nextState
   * @return {bool}
   */
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  /**
   * Renders Images
   * @return {ReactElement}
   */
  render() {
    const {data, onCLickHandler} = this.props; // currentInput
    const GGallery = glamorous.div({
      backgroundColor: '#eeeeee',
      padding: 10,
      overflowY: 'hidden',
      height: 100,
      display: 'flex',
    });
    const GImg = glamorous.img({
      height: '100%',
      cursor: 'pointer',
      marginRight: 10,
      // border: '3px solid transparent',
    });
    return (
      <div>
        <GGallery>
          {data.map((tile) => (
            <GImg key={tile} src={tile} alt={''} onClick={onCLickHandler} />
          ))}
        </GGallery>
      </div>
    );
  }
}

ImageGallery.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.string.isRequired,
  ]),
  onCLickHandler: PropTypes.func.isRequired,
  currentInput: PropTypes.string.isRequired,
};

export default ImageGallery;

// style={{
//   borderColor: tile === currentInput ? '#ffab40' : 'transparent',
// }}
