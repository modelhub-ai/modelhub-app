import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import glamorous from 'glamorous';

/**
 * Test Class
 * @extends Component
 */
class Test extends Component {
  /**
   * Renders Test
   * @return {ReactElement}
   */
  render() {
    // const {config} = this.props;
    return <div>Test</div>;
  }
}

Test.propTypes = {
  model: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
};

export default Test;
