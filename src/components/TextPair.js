import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import glamorous from 'glamorous';

/**
 * TextPair Class
 * @extends Component
 */
class TextPair extends Component {
  /**
   * Renders TextPair
   * @return {ReactElement}
   */
  render() {
    const {title, body} = this.props;
    const GDiv = glamorous.div({
      marginBottom: 25,
    });
    return (
      <GDiv>
        <Typography variant="title">{title}</Typography>
        <Typography variant="body1">{body}</Typography>
      </GDiv>
    );
  }
}

TextPair.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

export default TextPair;
