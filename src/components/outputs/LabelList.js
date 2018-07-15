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
    // const {currentOutput} = this.props;
    return <BarPlot />;
  }
}

LabelList.propTypes = {
  currentOutput: PropTypes.object.isRequired,
};

export default LabelList;
