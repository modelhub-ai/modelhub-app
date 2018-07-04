import React, {Component} from 'react';
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
    return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12} md={6}>
          {'1'}
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          {'2'}
        </Grid>
      </Grid>
    );
  }
}

export default Layout;
