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
    const {model} = this.props;
    return (
      <div>
        {model.predict_upload}
        {model.model_io}
      </div>
    );
  }
}

Test.propTypes = {
  model: PropTypes.object.isRequired,
  fetches: PropTypes.object,
};

export default Test;
