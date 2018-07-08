import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

/**
 * NoSupport
 * @extends Component
 */
class NoSupport extends Component {
  /**
   * Renders NoSupport
   * @return {ReactElement}
   */
  render() {
    const {message} = this.props;
    return (
      <Typography noWrap>
        This {message} is not supported by this frontend yet.
      </Typography>
    );
  }
}

NoSupport.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NoSupport;
