import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

/**
 * MenuTag class
 * @extends React
 */
class MenuTag extends React.Component {
  /**
   * Constructor
   */
  constructor() {
    super();
    this.state = {};
  }

  /**
   * generates a list of backend logos
   * @param  {arrray} backends array of backends from config file
   * @return {array} array of divs to render ?
   */
  getBackend(backends) {
    let backendLogoDivs = backends.map((backend) => {
      switch (backend) {
        case 'tensorflow':
          return 'tf-';
        case 'keras':
          return 'kr-';
        case 'onnx':
          return 'on-';
        case 'caffe':
          return 'cf-';
        case 'caffe2':
          return 'cf2-';
        default:
          return 'unknown';
      }
    });
    return backendLogoDivs;
  }

  /**
   * generates a single viewer logo, whether netron or other.
   * @param  {arrray} viewer viewer type from models list
   * @return {string} a div. ?
   */
  getViewer(viewer) {
    let viewerLogoDiv;
    switch (viewer) {
      case 'netron':
        viewerLogoDiv = 'ntrn';
        break;
      case undefined:
      default:
        viewerLogoDiv = '';
        break;
    }
    return viewerLogoDiv;
  }

  /**
   * Renders MenuTag
   * @return {ReactElement}
   */
  render() {
    const GDiv = glamorous.div({
      backgroundColor: 'yellow',
      width: 50,
      height: 50,
    });
    const {models, value} = this.props;
    const currentModel = models[value];
    const deployedFlag = currentModel.deployed ? 'd' : '';
    return (
      <GDiv>
        {deployedFlag}
        <br /> {this.getViewer(currentModel.viewer)}
        <br />
        {this.getBackend(currentModel.backend)}
      </GDiv>
    );
  }
}

MenuTag.propTypes = {
  models: PropTypes.array.isRequired,
  value: PropTypes.number.isRequired,
};

export default MenuTag;
