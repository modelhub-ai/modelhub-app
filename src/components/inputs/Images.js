import React, {Component} from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

/**
 * Images
 * @extends Component
 */
class Images extends Component {
  /**
  onClick() {
    console.log('clicked');
  }
  /**
   * Renders Images
   * @return {ReactElement}
   */
  render() {
    const {data} = this.props;
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
      marginRight: 10,
      flex: 1,
      height: '100%',
      cursor: 'pointer',
      border: '3px solid transparent',
    });
    return (
      <GGallery>
        {data.map((tile) => (
          <GContent key={tile}>
            <GImg src={tile} alt={''} onClick={this.onClick} />
          </GContent>
        ))}
      </GGallery>
    );
  }
}

Images.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.string.isRequired,
  ]),
};

export default Images;
