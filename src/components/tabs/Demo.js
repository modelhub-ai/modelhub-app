import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout';
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
   * Demo constructor.
   * Input type is infered from the first sample. This means that all samples
   * should be of the same type. Output is just grabbed from the config file.
   */
  constructor() {
    super();
    this.state = {
      input: '',
      output: [],
    };
  }

  /**
   * Figures out the input and output types
   */
  componentDidMount() {
    const {samples, config} = this.props.fetches;
    let that = this;
    fetch(samples[0]).then(function(response) {
      that.setState({
        input: response.headers.get('Content-Type'),
        output: config.model.io.output,
      });
    });
  }

  /**
   * Renders Demo
   * @return {ReactElement}
   */
  render() {
    const {model, fetches} = this.props;
    return (
      <div>
        <Layout />
        {fetches.samples}
        {fetches.config.model.io.input.format}
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
