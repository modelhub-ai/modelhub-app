import React, {Component} from 'react';
import glamorous from 'glamorous';
import Typography from '@material-ui/core/Typography';

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
    return (
      <GMain>
        <Typography noWrap>
          Welcome to modelhub!<br />Plug & Predict solutions for medical AI
          research<br />select a model to start
        </Typography>
      </GMain>
    );
  }
}

export default Welcome;
