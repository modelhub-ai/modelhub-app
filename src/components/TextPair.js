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
    const {title, body, code, spacer} = this.props;
    const GDiv = glamorous.div({
      marginBottom: spacer,
    });
    const Code = glamorous.div({
      backgroundColor: '#F1F1F1',
      fontSize: '0.875rem',
      paddingLeft: 25,
      fontFamily: '\'Courier\', sans-serif',
    });
    return (
      <GDiv>
        <Typography variant="button">{title}</Typography>
        {code ? (
          <Code>{body}</Code>
        ) : (
          <Typography variant="body1">{body}</Typography>
        )}
      </GDiv>
    );
  }
}

TextPair.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.node.isRequired,
  ]),
  body: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
  code: PropTypes.bool.isRequired,
  spacer: PropTypes.number.isRequired,
};

TextPair.defaultProps = {
  code: false,
  spacer: 25,
};
export default TextPair;
