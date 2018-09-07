import React, {Component} from 'react';
import glamorous from 'glamorous';
import Typography from '@material-ui/core/Typography';
import logo from '../img/logo-blue.svg';

/**
 * [Welcome description]
 * @extends Component
 */
class Welcome extends Component {
  /**
   * Renders Welcome
   * @return {ReactElement}
   */
  render() {
    const GMain = glamorous.main({
      flexGrow: 1,
      minWidth: 0,
      textAlign: 'center',
      paddingTop: 200,
    });
    const Gimg = glamorous.img({
      width: 250,
      marginBottom: 20,
    });
    return (
      <GMain>
        <a href="http://modelhub.ai/" target="_blank" rel="noopener noreferrer">
          <Gimg src={logo} alt="logo" />
        </a>
        <Typography variant="title" noWrap>
          Welcome to Modelhub!<br />Select a model to start.
        </Typography>
      </GMain>
    );
  }
}

export default Welcome;
