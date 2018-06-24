import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import glamorous from 'glamorous';

/**
 * Installation Class
 * @extends Component
 */
class Installation extends Component {
  /**
   * Renders Installation
   * @return {ReactElement}
   */
  render() {
    // const {config} = this.props;
    return <div>Installation</div>;
  }
}

Installation.propTypes = {
  config: PropTypes.object.isRequired,
};

export default Installation;
