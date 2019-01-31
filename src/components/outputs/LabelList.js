import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import glamorous from 'glamorous';
import BarPlot from '../BarPlot';

/**
 * LabelList
 * @extends Component
 */
class LabelList extends Component {
  /**
   * Renders LabelList
   * @return {ReactElement}
   */
  render() {
    const {currentOutput, params} = this.props;
    return currentOutput['output'] !== undefined ? (
      <BarPlot data={currentOutput['output']} params={params} />
    ) : null;
  }
}

LabelList.propTypes = {
  currentOutput: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};

export default LabelList;
