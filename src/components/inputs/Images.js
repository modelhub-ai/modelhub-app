import React, {Component} from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import ImageFocus from '../utils/ImageFocus';

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
    const GGallery = glamorous.div({
      backgroundColor: '#eeeeee',
      padding: 10,
      overflowY: 'hidden',
      height: 100,
      display: 'flex',
    });
    const GContent = glamorous.div({
      height: '100%',
    });
    const GImg = glamorous.img({
      // marginRight: '5px !important',
      // flex: 1,
      height: '100%',
      cursor: 'pointer',
      border: '3px solid transparent',
    });
    return (
      <div>
        <ImageFocus src={currentInput} />
        <GGallery>
          {data.map((tile) => (
            <GContent key={tile}>
              <GImg
                src={tile}
                alt={''}
                onClick={onCLickHandler}
                style={{
                  borderColor: tile === currentInput ? '#ffab40' : 'transparent',
                }}
              />
            </GContent>
          ))}
        </GGallery>
      </div>
    );
  }
}

Images.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.string.isRequired,
  ]),
  onCLickHandler: PropTypes.func.isRequired,
  currentInput: PropTypes.string.isRequired,
};

export default Images;
