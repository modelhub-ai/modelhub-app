import React, {Component} from 'react';
import PropTypes from 'prop-types';
// The main input components
import Images from './inputs/Images';
import Dicom from './inputs/Dicom';
import NoSupport from './utils/NoSupport';

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
    const {data, onCLickHandler, currentInput} = this.props;
    switch (type) {
      case 'image/jpg':
      case 'image/jpeg':
      case 'image/png':
        component = (
          <Images
            data={data}
            onCLickHandler={onCLickHandler}
            currentInput={currentInput}
          />
        );
        break;
      case 'application/dicom':
        component = (
          <Dicom
            data={data}
            onCLickHandler={onCLickHandler}
            currentInput={currentInput}
          />
        );
        break;
      default:
        component = <NoSupport message={'sample file type'} />;
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
  onCLickHandler: PropTypes.func.isRequired,
  currentInput: PropTypes.string.isRequired,
};

export default Input;
