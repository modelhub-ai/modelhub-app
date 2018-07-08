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
import NoSupport from './utils/NoSupport';

/**
 * Output
 * @extends Component
 */
class Output extends Component {
  /**
   * Sets the component type based on the given type
   * @param  {string} typeObject object of data type & name
   * to be displayed as output
   * @return {ReactElement} The component to mount
   */
  getComponent(typeObject) {
    let component;
    const {currentOutput} = this.props;
    switch (typeObject) {
      // probabilities
      // json - no overlay
      case 'label_list':
        component = <LabelList currentOutput={currentOutput} />;
        break;
      // 1d vector
      // numpy - no overlay
      case 'vector':
        component = <Vector currentOutput={currentOutput} />;
        break;
      // 2d or 3d, discrete values. 0 is always background, 1,2... are the
      // regions
      // numpy - yes overlay
      case 'mask_image':
        component = <MaskImage currentOutput={currentOutput} />;
        break;
      // 2d grayscale, 2d multi, 3d grayscale, 3d multi.
      // If normalized, 1 is highest, 0 is lowest
      // numpy - overlay yes
      case 'heatmap':
        component = <Heatmap currentOutput={currentOutput} />;
        break;
      // 2d grayscale, 2d multi, 3d grayscale, 3d multi
      // numpy - no overlay
      case 'image':
        component = <Image currentOutput={currentOutput} />;
        break;
      // Alien format we are not able to deal with yet.
      case 'custom':
        component = <NoSupport message={'output type'} />;
        break;
      default:
        component = <NoSupport message={'output type'} />;
    }
    return component;
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
