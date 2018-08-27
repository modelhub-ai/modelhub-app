import React, {Component} from 'react';
import PropTypes from 'prop-types';
import OutputDisplay from './utils/OutputDisplay';
import OutputInfo from './utils/OutputInfo';
// The main output components
import LabelList from './outputs/LabelList';
import Vector from './outputs/Vector';
import MaskImage from './outputs/MaskImage';
import Heatmap from './outputs/Heatmap';
import Image from './outputs/Image';
import TestPlaceholder from './utils/TestPlaceholder';
import NoSupport from './utils/NoSupport';

/**
 * Output
 * @extends Component
 */
class Output extends Component {
  /**
   * Sets the component type based on the given type and tells us if we should
   * mount the output info bar or not.
   * @param  {string} typeObject object of data type & name
   * to be displayed as output
   * @return {ReactElement} A The component to mount
   */
  getComponent(typeObject) {
    let outputDisplay;
    const {currentOutput} = this.props;
    switch (typeObject) {
      // probabilities
      // json - no overlay
      case 'label_list':
        outputDisplay = <LabelList currentOutput={currentOutput} />;
        break;
      // 1d vector
      // numpy - no overlay
      case 'vector':
        outputDisplay = <Vector currentOutput={currentOutput} />;
        break;
      // 2d or 3d, discrete values. 0 is always background, 1,2... are the
      // regions
      // numpy - yes overlay
      case 'mask_image':
        outputDisplay = <MaskImage currentOutput={currentOutput} />;
        break;
      // 2d grayscale, 2d multi, 3d grayscale, 3d multi.
      // If normalized, 1 is highest, 0 is lowest
      // numpy - overlay yes
      case 'heatmap':
        outputDisplay = <Heatmap currentOutput={currentOutput} />;
        break;
      // 2d grayscale, 2d multi, 3d grayscale, 3d multi
      // numpy - no overlay
      case 'image':
        outputDisplay = <Image currentOutput={currentOutput} />;
        break;
      // Alien format we are not able to deal with yet.
      case 'custom':
        outputDisplay = <NoSupport message={'output type'} />;
        break;
      // test-placeholder
      case 'test-placeholder':
        outputDisplay = <TestPlaceholder io={'output'} />;
        break;
      default:
        outputDisplay = <NoSupport message={'output type'} />;
    }
    return outputDisplay;
  }

  /**
   * Renders Output
   * Assumes only one single output for now.
   * @return {ReactElement}
   */
  render() {
    const {type, currentOutput} = this.props;
    const singleOutput = type[0];
    // loop though type here
    // should be list of objects with "name" & "type" properties.
    return (
      <div>
        <OutputDisplay>{this.getComponent(singleOutput.type)}</OutputDisplay>
        <OutputInfo name={singleOutput.name} currentOutput={currentOutput} />
      </div>
    );
  }
}

Output.propTypes = {
  type: PropTypes.array.isRequired,
  currentOutput: PropTypes.object.isRequired,
};

export default Output;
