import React, {Component} from 'react';
import PropTypes from 'prop-types';
// The main input components
import Images from './inputs/Images';
import Dicom from './inputs/Dicom';
import Placeholder from './utils/Placeholder';

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
    const {test, message, data, onCLickHandler, currentInput} = this.props;
    switch (type) {
      case 'image/jpg':
      case 'image/jpeg':
      case 'image/png':
        component = (
          <Images
            test={test}
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
      case 'test-placeholder':
        component = <Placeholder message={'INPUT'} />;
        break;
      default:
        component = <Placeholder message={message} />;
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
  test: PropTypes.bool,
  message: PropTypes.string,
  type: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  onCLickHandler: PropTypes.func,
  currentInput: PropTypes.string,
};

Input.defaultProps = {
  test: false,
};

export default Input;
