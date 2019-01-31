import React, {Component} from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import Plot from 'react-plotly.js';
import {sortBy} from 'lodash';
import theme from '../theme.js';

/**
 * BarPlot
 * @extends Component
 */
class BarPlot extends Component {
  /**
   * Renders a horizontal bar plot showing probabilities
   * assumes only the first output
   * assumes topX given
   * assumes sorting given
   * @return {ReactElement}
   */
  render() {
    const GPlot = glamorous(Plot)({
      width: '100%',
    });
    const {data, params} = this.props;
    // sort in ascending order
    let sortedResult = params.sort
      ? sortBy(data[0]['prediction'], 'probability')
      : data[0]['prediction'];
    // Take the top x entries
    let topXResult = sortedResult.slice(-1 * params.top);
    // let yAxisTitle = 'top ' + topX.toString() + ' classes';
    let x = [];
    let y = [];
    for (let key in topXResult) {
      x.push(parseFloat(topXResult[key].probability).toFixed(3));
      y.push(topXResult[key].label);
    }
    return (
      <GPlot
        useResizeHandler={true}
        data={[
          {
            type: 'bar',
            x: x,
            y: y,
            orientation: 'h',
            text: x,
            textposition: 'outside',
            hoverinfo: 'none',
            marker: {
              color: theme.primary,
            },
          },
        ]}
        layout={{
          // title: "Result",
          autosize: true,
          margin: {
            l: 200,
            r: 50,
            pad: 10,
          },
          xaxis: {
            autorange: 'false',
            range: [0, 1],
            // title: 'Probabilities',
            fixedrange: true,
          },
          yaxis: {
            fixedrange: true,
            // title: yAxisTitle,
          },
        }}
        config={theme.plotlyConfig}
      />
    );
  }
}

BarPlot.propTypes = {
  data: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired,
};

export default BarPlot;
