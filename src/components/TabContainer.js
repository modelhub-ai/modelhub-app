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
    const {dir, config, tab} = this.props;
    const Component = tab.component;
    return (
      <Typography component="div" dir={dir} style={{padding: 8 * 3}}>
        <Component config={config} />
      </Typography>
    );
  }
}

TabContainer.propTypes = {
  dir: PropTypes.string.isRequired,
  config: PropTypes.object.isRequired,
  tab: PropTypes.object.isRequired,
};

export default TabContainer;
