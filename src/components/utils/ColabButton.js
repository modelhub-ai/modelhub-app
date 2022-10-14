import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import glamorous from 'glamorous';
import theme from '../../theme.js';

/**
 * ColabButton Class
 * @extends Component
 */
class ColabButton extends Component {
  /**
   * Renders ColabButton
   * @return {ReactElement}
   */
  render() {
    const {text, href} = this.props;
    const GButton = glamorous(Button)({
      marginRight: '15px !important',
      height: '25px !important',
      color: '#fff !important',
      backgroundColor: theme.secondary + ' !important',
    });
    return (
      <GButton variant="flat" target={'_blank'} href={href}>
        {text}
      </GButton>
    );
  }
}

ColabButton.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.node.isRequired,
  ]),
  href: PropTypes.string.isRequired,
};

export default ColabButton;
