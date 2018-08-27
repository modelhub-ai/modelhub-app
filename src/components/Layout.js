import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import glamorous from 'glamorous';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';

/**
 * Layout with material UI grid
 * @extends Component
 */
class Layout extends Component {
  /**
   * Renders Layout
   * @return {ReactElement}
   */
  render() {
    const {test, input, upload, output} = this.props;
    return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12} md={6}>
          {input}
          {test ? upload : null}
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          {output}
        </Grid>
      </Grid>
    );
  }
}

Layout.propTypes = {
  test: PropTypes.bool,
  input: PropTypes.node.isRequired,
  upload: PropTypes.node,
  output: PropTypes.node.isRequired,
};

export default Layout;
