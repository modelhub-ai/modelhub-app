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
    const {test, data, onCLickHandler, currentInput} = this.props;
    return (
      <div>
        <ImageFocus src={currentInput} />
        {test ? null : (
          <ImageGallery
            data={data}
            onCLickHandler={onCLickHandler}
            currentInput={currentInput}
          />
        )}
      </div>
    );
  }
}

Images.propTypes = {
  test: PropTypes.bool.isRequired,
  data: PropTypes.array,
  onCLickHandler: PropTypes.func,
  currentInput: PropTypes.string.isRequired,
};

export default Images;
