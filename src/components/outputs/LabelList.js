import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import glamorous from 'glamorous';

/**
 * LabelList
 * @extends Component
 */
class LabelList extends Component {
  /**
   * Renders LabelList
   * @return {ReactElement}
   */
  render() {
    const {currentOutput} = this.props;
    return <div>{'LabelList'}</div>;
  }
}

LabelList.propTypes = {
  currentOutput: PropTypes.object.isRequired,
};

export default LabelList;
