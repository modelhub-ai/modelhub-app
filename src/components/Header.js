import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import glamorous from 'glamorous';
import theme from '../theme.js';

/**
 * Header
 * @extends Component
 */
class Header extends Component {
  /**
   * Render
   * @return {ReactElement}
   */
  render() {
    const GAppBar = glamorous(AppBar)({
      zIndex: '1500 !important',
      backgroundColor: theme.darkTeal + ' !important',
    });
    return (
      <GAppBar position="absolute">
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            ModelHub
          </Typography>
        </Toolbar>
      </GAppBar>
    );
  }
}

export default Header;
