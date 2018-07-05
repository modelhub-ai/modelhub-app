import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import glamorous from 'glamorous';
//
import Images from './inputs/Images';

/**
 * Input
 * @extends Component
 */
class Input extends Component {
  /**
   * Sets the component type based on the given type
   * @param  {string} type mime type of data to be displayed as input
   * @return {ReactElement} The component to mount
   */
  getComponent(type) {
    let component;
    const {data} = this.props;
    switch (type) {
      case 'image/jpg':
      case 'image/jpeg':
      case 'image/png':
        component = <Images data={data} />;
        break;
      case 'application/dicom':
        component = 'Today is Sunday';
        break;
      default:
        component = 'Looking forward to the Weekend';
    }
    return component;
  }
  /**
   * Renders Input
   * @return {ReactElement}
   */
  render() {
    const {type} = this.props;
    return <div>{this.getComponent(type)}</div>;
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.string.isRequired,
  ]),
};

export default Input;
