import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ImageFocus from '../utils/ImageFocus';
import ImageGallery from '../utils/ImageGallery';

/**
 * Images
 * @extends Component
 */
class Images extends Component {
  /**
   * Renders Images
   * @return {ReactElement}
   */
  render() {
    const {data, onCLickHandler, currentInput} = this.props;
    return (
      <div>
        <ImageFocus src={currentInput} />
        <ImageGallery
          data={data}
          onCLickHandler={onCLickHandler}
          currentInput={currentInput}
        />
      </div>
    );
  }
}

Images.propTypes = {
  data: PropTypes.array.isRequired,
  onCLickHandler: PropTypes.func.isRequired,
  currentInput: PropTypes.string.isRequired,
};

export default Images;
