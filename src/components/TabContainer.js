import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
    const {dir, model, config, tab} = this.props;
    const Component = tab.component;
    return (
      <div dir={dir} style={{padding: 8 * 3}}>
        <Component model={model} config={config} />
      </div>
    );
  }
}

TabContainer.propTypes = {
  dir: PropTypes.string.isRequired,
  model: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
  tab: PropTypes.object.isRequired,
};

export default TabContainer;
