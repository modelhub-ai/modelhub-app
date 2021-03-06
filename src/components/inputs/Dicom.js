import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import glamorous from 'glamorous';

/**
 * Dicom
 * @extends Component
 */
class Dicom extends Component {
  /**
   * Renders Dicom
   * @return {ReactElement}
   */
  render() {
    // const {data, onCLickHandler, currentInput} = this.props;
    return <div>{'dicom viewer'}</div>;
  }
}

Dicom.propTypes = {
  data: PropTypes.array.isRequired,
  onCLickHandler: PropTypes.func.isRequired,
  currentInput: PropTypes.string.isRequired,
};

export default Dicom;
