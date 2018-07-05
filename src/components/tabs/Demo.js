import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout';
import Input from '../Input';
import Output from '../Output';
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
      inputType: '',
      outputType: [{name: '', type: ''}],
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
        inputType: response.headers.get('Content-Type'),
        outputType: config.model.io.output,
      });
    });
  }

  /**
   * Renders Demo
   * @return {ReactElement}
   */
  render() {
    // const {model, fetches} = this.props;
    const {inputType, outputType} = this.state;
    return (
      <div>
        <Layout
          input={<Input type={inputType} />}
          output={<Output type={outputType} />}
        />
      </div>
    );
  }
}

Demo.propTypes = {
  model: PropTypes.object.isRequired,
  fetches: PropTypes.object.isRequired,
};

export default Demo;

// {fetches.samples}
// {model.predict_url}
