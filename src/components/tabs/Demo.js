import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout';
import Input from '../Input';
import Output from '../Output';

/**
 * Demo Class
 * @extends Component
 */
class Demo extends Component {
  /**
   * Demo constructor.
   * Input type is infered from the first sample. This means that all samples
   * should be of the same type. Output is just grabbed from the config file.
   * Only deals with single output and output type for now.
   */
  constructor() {
    super();
    this.state = {
      status: 'ready',
      inputType: '',
      outputType: [{name: '', type: ''}],
      currentInput: '',
      currentOutput: {},
    };
    this.predict = this.predict.bind(this);
    this.onCLickHandler = this.onCLickHandler.bind(this);
  }
  /**
   * Predicts on a given src of a sample
   * Response should always be a json
   * @param  {string} src full url of a sample file
   */
  predict(src) {
    this.setState({
      status: 'calculating',
    });
    const {predict_sample} = this.props.model;
    let that = this;
    fetch(predict_sample + src.split('/')[src.split('/').length - 1])
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        that.setState({
          status: 'done',
          // currently one object, should be list of objects
          currentOutput: result,
        });
      });
  }
  /**
   * Figures out the input and output types
   * The input type here is from the first sample and not the input type in the
   * config file.
   * The output type is based in a list of objects.
   */
  componentDidMount() {
    const {samples, config} = this.props.fetches;
    let that = this;
    fetch(samples[0]).then(function(response) {
      that.setState({
        inputType: response.headers.get('Content-Type'),
        outputType: config.model.io.output,
        currentInput: samples[0],
      });
      that.predict(samples[0]);
    });
  }
  /**
   * When a sample image is clicked
   * @param  {MouseEvent} event Mouse event
   */
  onCLickHandler(event) {
    this.predict(event.currentTarget.src);
    this.setState({
      currentInput: event.currentTarget.src,
    });
  }
  /**
   * Renders Demo
   * @return {ReactElement}
   */
  render() {
    const {fetches} = this.props;
    const {
      status,
      inputType,
      outputType,
      currentInput,
      currentOutput,
    } = this.state;
    return (
      <div>
        <Layout
          input={
            <Input
              type={inputType}
              data={fetches.samples}
              onCLickHandler={this.onCLickHandler}
              currentInput={currentInput}
            />
          }
          output={
            <Output
              status={status}
              type={outputType}
              currentOutput={currentOutput}
              params={fetches.config.modelhub}
            />
          }
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
