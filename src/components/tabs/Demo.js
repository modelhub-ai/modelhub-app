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
   * @param  {string} src full url of a sample file
   */
  predict(src) {
    const {predict_sample} = this.props.model;
    let that = this;
    fetch(predict_sample + src.split('/')[src.split('/').length - 1])
      .then(function(response) {
        return response.json();
      })
      .then(function(output) {
        console.log(output);
        that.setState({
          currentOutput: output,
        });
      });
  }
  /**
   * Figures out the input and output types
   * The type here is from the first sample and not the input type in the
   * config file.
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
    const {inputType, outputType, currentInput, currentOutput} = this.state;
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
          output={<Output type={outputType} currentOutput={currentOutput} />}
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
