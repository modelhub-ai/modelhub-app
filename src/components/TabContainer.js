import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';

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
    const {dir, model, fetches, tab} = this.props;
    const Component = tab.component;
    return (
      <div dir={dir} style={{padding: 8 * 3}}>
        <Component model={model} fetches={fetches} />
        <br />
        <br />
        <Footer model={model} fetches={fetches} />
      </div>
    );
  }
}

TabContainer.propTypes = {
  dir: PropTypes.string.isRequired,
  model: PropTypes.object.isRequired,
  fetches: PropTypes.object.isRequired,
  tab: PropTypes.object.isRequired,
};

export default TabContainer;
