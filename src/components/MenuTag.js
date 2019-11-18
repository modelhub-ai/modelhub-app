import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import cloud from '../img/backends/cloud.svg';
import netron from '../img/backends/netron.svg';
import gpu from '../img/backends/gpu.svg';
//
import caffe from '../img/backends/caffe.svg';
import caffe2 from '../img/backends/caffe2.svg';
import cntk from '../img/backends/cntk.svg';
import dl4j from '../img/backends/dl4j.svg';
import keras from '../img/backends/keras.svg';
import mxnet from '../img/backends/mxnet.svg';
import onnx from '../img/backends/onnx.svg';
import pytorch from '../img/backends/pytorch.svg';
import tensorflow from '../img/backends/tensorflow.svg';
import theano from '../img/backends/theano.svg';
import torch from '../img/backends/torch.svg';

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
    this.GImg = glamorous.img({
      height: 15,
      float: 'left',
      borderStyle: 'solid',
      borderWidth: 0.5,
      marginLeft: 5,
      padding: 2,
      opacity: 0.8,
    });
    this.components = {
      caffe: caffe,
      caffe2: caffe2,
      cntk: cntk,
      dl4j: dl4j,
      keras: keras,
      mxnet: mxnet,
      onnx: onnx,
      pytorch: pytorch,
      tensorflow: tensorflow,
      theano: theano,
      torch: torch,
    };
    this.state = {};
    this.getBackend = this.getBackend.bind(this);
    this.getViewer = this.getViewer.bind(this);
  }

  /**
   * generates a list of backend logos
   * @param  {arrray} backends array of backends from config file
   * @return {array} array of divs to render ?
   */
  getBackend(backends) {
    let backendLogoDivs = backends.map((backend, index) => {
      return (
        <this.GImg
          key={'backend_' + index}
          title={'Running on ' + backend + '.'}
          src={this.components[backend]}
          alt="Netron"
        />
      );
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
        viewerLogoDiv = (
          <this.GImg
            title="Visualized with the Netron viewer."
            src={netron}
            alt="Netron"
          />
        );
        break;
      case undefined:
      default:
        viewerLogoDiv = '';
        break;
    }
    return viewerLogoDiv;
  }

  /**
   * if deployed, will return the cloud svg
   * @param  {bool} deployed
   * @return {string} or html
   */
  getDeployed(deployed) {
    return deployed ? (
      <this.GImg
        title="Deployed in a cloud instance."
        src={cloud}
        alt="Deployed"
      />
    ) : (
      ''
    );
  }

  /**
   * @param  {bool} gpuFlag
   * @return {string} or html
   */
  getGpu(gpuFlag) {
    return gpuFlag ? (
      <this.GImg title="Runs on a GPU." src={gpu} alt="gpu" />
    ) : (
      ''
    );
  }

  /**
   * Renders MenuTag
   * @return {ReactElement}
   */
  render() {
    const GDivParent = glamorous.div({
      marginLeft: 85,
      marginTop: -25,
      height: 15,
      paddingBottom: 20,
    });
    const {models, value} = this.props;
    const currentModel = models[value];
    return (
      <GDivParent>
        {this.getDeployed(currentModel.deployed)}
        {this.getBackend(currentModel.backend)}
        {this.getViewer(currentModel.viewer)}
        {this.getGpu(currentModel.gpu)}
      </GDivParent>
    );
  }
}

MenuTag.propTypes = {
  models: PropTypes.array.isRequired,
  value: PropTypes.number.isRequired,
};

export default MenuTag;
