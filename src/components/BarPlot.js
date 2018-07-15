import React, {Component} from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import Plot from 'react-plotly.js';

/**
 * BarPlot
 * @extends Component
 */
class BarPlot extends Component {
  /**
   * Renders a horizontal bar plot showing probabilities
   * @return {ReactElement}
   */
  render() {
    const GPlot = glamorous(Plot)({
      width: '100%',
    });
    return (
      <GPlot
        useResizeHandler={true}
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+points',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={{width: 320, height: 240, title: 'A Fancy Plot'}}
      />
    );
  }
}

BarPlot.propTypes = {};

export default BarPlot;
