import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import glamorous from 'glamorous';
import theme from '../../theme.js';

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
      height: '25px !important',
      color: '#fff !important',
      backgroundColor: theme.primary + ' !important',
    });
    return (
      <GButton variant="flat" target={'_blank'} href={href}>
        {text}
      </GButton>
    );
  }
}

AppButton.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.node.isRequired,
  ]),
  href: PropTypes.string.isRequired,
};

export default AppButton;
