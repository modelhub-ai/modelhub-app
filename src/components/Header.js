import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import glamorous from 'glamorous';
import logo from '../img/logo-white.svg';
import theme from '../theme.js';
import GithubCircleIcon from 'mdi-react/GithubCircleIcon';
import DockerIcon from 'mdi-react/DockerIcon';
import FileDocumentOutlineIcon from 'mdi-react/FileDocumentOutlineIcon';
import IconButton from '@material-ui/core/IconButton';

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
    const Gimg = glamorous.img({
      width: 150,
    });
    const GAppBar = glamorous(AppBar)({
      zIndex: '1500 !important',
      backgroundColor: theme.primary + ' !important',
    });
    const GDiv = glamorous.div({
      position: 'absolute',
      right: 20,
    });
    return (
      <GAppBar position="absolute">
        <Toolbar>
          <a href="http://modelhub.ai/" target="_blank">
            <Gimg src={logo} alt="logo" />
          </a>
          <GDiv>
            <IconButton aria-haspopup="false" color="inherit">
              <a href="https://github.com/modelhub-ai" target="_blank">
                <GithubCircleIcon color={'#fff'} size={32} />
              </a>
            </IconButton>
            <IconButton aria-haspopup="false" color="inherit">
              <a href="https://hub.docker.com/u/modelhub/" target="_blank">
                <DockerIcon color={'#fff'} size={32} />
              </a>
            </IconButton>

            <IconButton aria-haspopup="false" color="inherit">
              <a
                href="https://modelhub.readthedocs.io/en/latest/"
                target="_blank"
              >
                <FileDocumentOutlineIcon color={'#fff'} size={28} />
              </a>
            </IconButton>
          </GDiv>
        </Toolbar>
      </GAppBar>
    );
  }
}

export default Header;
