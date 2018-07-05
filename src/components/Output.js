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
    const {type} = this.props;
    return <div>{type[0]['type']}</div>;
  }
}

Output.propTypes = {
  type: PropTypes.array.isRequired,
};

export default Output;
