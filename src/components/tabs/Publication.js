import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import glamorous from 'glamorous';

/**
 * Publication Class
 * @extends Component
 */
class Publication extends Component {
  /**
   * Renders Publication
   * @return {ReactElement}
   */
  render() {
    // const {config} = this.props;
    return <div>Publication</div>;
  }
}

Publication.propTypes = {
  config: PropTypes.object.isRequired,
};

export default Publication;
