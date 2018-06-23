import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

/**
 * TabContainer Class
 * @extends Component
 */
class TabContainer extends Component {
  /**
   * Renders TabContainer
   * @return {ReactElement}
   */
  render() {
    const {children, dir} = this.props;
    return (
      <Typography component="div" dir={dir} style={{padding: 8 * 3}}>
        {children}
      </Typography>
    );
  }
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

export default TabContainer;
