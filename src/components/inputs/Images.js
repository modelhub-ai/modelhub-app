import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import glamorous from 'glamorous';

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
    const {data} = this.props;
    return <div>{data[0]}</div>;
  }
}

Images.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.string.isRequired,
  ]),
};

export default Images;
