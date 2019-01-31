import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout';
import Input from '../Input';
import Output from '../Output';
import TestUpload from '../utils/TestUpload';
/**
 * Test Class
 * @extends Component
 */
class Test extends Component {
  /**
   * Test constructor.
   * Placeholders are loaded first, then replaced by the correct components.
   */
  constructor() {
    super();
    this.state = {
      status: 'ready', // calculating, done
      message: '',
      inputType: 'test-placeholder',
      outputType: [{name: '', type: 'test-placeholder'}],
      currentInput: '',
      currentOutput: {},
    };
    this.uploadRef = this.uploadRef.bind(this);
    this.displayInput = this.displayInput.bind(this);
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }
  /**
   * Callback for form reference in TestUpload
   * @param  {ReactReference} ref reference to upload form
   */
  uploadRef(ref) {
    this.inputRef = ref;
  }
  /**
   * Given an uploaded file, this function will read it and if output is "ok",
   * it will display it through changing the state.
   * @param  {blob} file file through form
   */
  displayInput(file) {
    let reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        currentInput: reader.result,
      });
    };
    reader.readAsDataURL(file);
  }
  /**
   * When a file is uploaded - passed on to TestUpload
   * @param  {UploadEvent} event upload event
   */
  handleUploadImage(event) {
    // set status to calculating and empty everything.
    event.preventDefault();
    this.setState({
      status: 'calculating',
      inputType: 'test-placeholder',
      outputType: [{name: '', type: 'test-placeholder'}],
      currentInput: '',
      currentOutput: {},
    });
    //
    const file = this.inputRef.files[0];
    const {config} = this.props.fetches;
    const data = new FormData();
    data.append('file', file);
    fetch(this.props.model.predict_upload, {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((result) => {
        // if result is ok
        if (result.error === undefined) {
          this.displayInput(file);
          this.setState({
            // output type does not change as images are uploaded,
            // but would like to keep the test placeholder until first upload.
            status: 'done',
            inputType: file.type,
            outputType: config.model.io.output,
            currentOutput: result,
          });
        } else if (result.error) {
          // if result is not ok
          this.setState({
            status: 'done',
            message: result.error,
            inputType: '',
            outputType: [{name: '', type: 'test-placeholder'}],
          });
        }
      });
    });
  }
  /**
   * Renders Demo
   * @return {ReactElement}
   */
  render() {
    const {
      status,
      message,
      inputType,
      outputType,
      currentInput,
      currentOutput,
    } = this.state;
    const {fetches} = this.props;
    return (
      <div>
        <Layout
          test
          input={
            <Input
              test
              message={message}
              type={inputType}
              currentInput={currentInput}
            />
          }
          upload={
            <TestUpload
              handleUploadImage={this.handleUploadImage}
              uploadRef={this.uploadRef}
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

Test.propTypes = {
  model: PropTypes.object.isRequired,
  fetches: PropTypes.object.isRequired,
};

export default Test;
