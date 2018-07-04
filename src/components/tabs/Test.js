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
    const {model, fetches} = this.props;
    return (
      <div>
        {model.predict_upload}
        {fetches.config.model.io.input.format}
      </div>
    );
  }
}

Test.propTypes = {
  model: PropTypes.object.isRequired,
  fetches: PropTypes.object.isRequired,
};

export default Test;
