import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import glamorous from 'glamorous';

/**
 * AppButton Class
 * @extends Component
 */
class AppButton extends Component {
  /**
   * Renders AppButton
   * @return {ReactElement}
   */
  render() {
    const {text, href} = this.props;
    const GButton = glamorous(Button)({
      marginRight: '15px !important',
    });
    return (
      <GButton
        variant="contained"
        color="primary"
        target={'_blank'}
        href={href}
      >
        {text}
      </GButton>
    );
  }
}

AppButton.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default AppButton;
