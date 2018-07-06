import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import glamorous from 'glamorous';

/**
 * Output
 * @extends Component
 */
class Output extends Component {
  /**
   * Renders Output
   * @return {ReactElement}
   */
  render() {
    const {type, currentOutput} = this.props;
    return (
      <div>
        {type[0]['type']}
        <br />
        {currentOutput.processing_time}
      </div>
    );
  }
}

Output.propTypes = {
  type: PropTypes.array.isRequired,
  currentOutput: PropTypes.object.isRequired,
};

export default Output;
