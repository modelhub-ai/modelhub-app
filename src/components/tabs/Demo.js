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
  // componentDidMount() {}
  /**
   * Renders Demo
   * @return {ReactElement}
   */
  render() {
    const {model, fetches} = this.props;
    return (
      <div>
        {fetches.samples}
        {model.predict_url}
      </div>
    );
  }
}

Demo.propTypes = {
  model: PropTypes.object.isRequired,
  fetches: PropTypes.object.isRequired,
};

export default Demo;
