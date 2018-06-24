import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import glamorous from 'glamorous';

/**
 * Model Class
 * @extends Component
 */
class Model extends Component {
  /**
   * Renders Model
   * @return {ReactElement}
   */
  render() {
    // const {config} = this.props;
    return <div>Model</div>;
  }
}

Model.propTypes = {
  config: PropTypes.object.isRequired,
};

export default Model;
