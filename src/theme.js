// colors
// http://www.material-ui.com/#/customization/colors
// https://meyerweb.com/eric/tools/color-blend/#:::hex
// plotly buttons
// https://github.com/plotly/plotly.js/blob/master/src/components/modebar/buttons.js
const theme = {
  background: '#f7fcfc',
  primary: '#4285f4', // blue
  secondary: '#ff9100', // orange
  //
  orange: '#ffab40',
  lightTeal: '#009688',
  darkTeal: '#00796b',
  tealScale: [
    [0, '#f7fcfc'],
    [0.000000000001, '#E0F2F1'],
    [0.2, '#B2DFDB'],
    [0.3, '#80CBC4'],
    [0.4, '#4DB6AC'],
    [0.5, '#26A69A'],
    [0.6, '#009688'],
    [0.7, '#00897B'],
    [0.8, '#00796B'],
    [0.9, '#00695C'],
    [1, '#004D40'],
  ],
  tealList: {
    // 2,3 and 4 not used for now.
    2: ['#004D40', '#80CBC4'],
    3: ['#004D40', '#00897B', '#4DB6AC'],
    4: ['#004D40', '#00796B', '#009688', '#4DB6AC'],
    // 10 is the original from material design
    10: [
      '#004D40',
      '#00695C',
      '#00796B',
      '#00897B',
      '#009688',
      '#26A69A',
      '#4DB6AC',
      '#80CBC4',
      '#B2DFDB',
      '#E0F2F1',
    ],
    19: [
      '#004D40',
      '#005B4E',
      '#00695C',
      '#007164',
      '#00796B',
      '#008173',
      '#00897B',
      '#009082',
      '#009688',
      '#139E91',
      '#26A69A',
      '#3AAEA3',
      '#4DB6AC',
      '#67C1B8',
      '#80CBC4',
      '#99D5D0',
      '#B2DFDB',
      '#C9E9E6',
      '#E0F2F1',
    ],
  },
  plotlyConfig: {
    displayModeBar: true,
    displaylogo: false,
    modeBarButtonsToRemove: [
      'sendDataToCloud',
      'sendDataToCloud',
      'hoverCompareCartesian',
      'hoverClosestPie',
      'zoom2d',
      'pan2d',
      'lasso2d',
      'select2d',
      'zoomIn2d',
      'zoomOut2d',
      'autoScale2d',
      'resetScale2d',
      'toggleSpikelines',
      'hoverClosestCartesian',
      'zoomInGeo',
      'zoomOutGeo',
      'hoverClosestGeo',
    ],
  },
};
export default theme;