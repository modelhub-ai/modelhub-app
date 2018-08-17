import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import glamorous from 'glamorous';

/**
 * Heatmap
 * @extends Component
 */
class Heatmap extends Component {
  /**
   * Renders Heatmap
   * @return {ReactElement}
   */
  render() {
    // const {currentOutput} = this.props;
    return <div>{'Heatmap'}</div>;
  }
}

Heatmap.propTypes = {
  currentOutput: PropTypes.object.isRequired,
};

export default Heatmap;
