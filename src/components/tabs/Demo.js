import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import TextPair from '../TextPair';
// import AppButton from '../AppButton';
// import Typography from '@material-ui/core/Typography';
// import glamorous from 'glamorous';

/**
 * Demo Class
 * @extends Component
 */
class Demo extends Component {
  /**
   * Renders Demo
   * @return {ReactElement}
   */
  render() {
    const {data} = this.props;
    return <div>{data.url}</div>;
  }
}

Demo.propTypes = {
  data: PropTypes.object.isRequired,
  config: PropTypes.object,
};

export default Demo;
