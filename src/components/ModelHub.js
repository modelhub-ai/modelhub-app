import React, {Component} from 'react';
import glamorous from 'glamorous';
import ModelList from './ModelList';
import Content from './Content';
import Welcome from './Welcome';

/**
 * ModelHub class
 * Receives the models.
 * @extends Component
 */
class ModelHub extends Component {
  /**
   * ModelHub constructor
   */
  constructor() {
    super();
    this.state = {
      extendedModels: [],
      currentModelIndex: -1, // 0
    };
    this.handleModelChoice = this.handleModelChoice.bind(this);
    this.fetchModels = this.fetchModels.bind(this);
  }

  /**
   * Handles choosing a different model.
   * Sets the state of this component
   * @param  {MouseEvent} event Mouse event
   */
  handleModelChoice(event) {
    const value = event.currentTarget.value;
    this.setState({currentModelIndex: value});
    console.log(
      'current model: ',
      this.state.extendedModels[value].name.toLowerCase()
    );
  }

  /**
   * Fetches the model json from modelhub-ai/modelhub repository
   * and sets the "extendedModels" state.
   * @param  {string} url url of json file
   */
  fetchModels(url) {
    const that = this;
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        that.setState({
          extendedModels: result.slice(0, 4).map((model) => {
            return that.extendModel(model);
          }),
        });
      });
  }

  /**
   * Adds more properties to models based on REST API
   * @param  {object} model model object from model.json
   * (modelhub-ai/modelhub repository)
   * @return {object}       extended model
   */
  extendModel(model) {
    const {url, api, viewer} = model;
    const urlApi = url + api;
    model.config = urlApi + 'get_config';
    model.legal = urlApi + 'get_legal';
    model.model_io = urlApi + 'get_model_io';
    model.model_files = urlApi + 'get_model_files';
    model.samples = urlApi + 'get_samples';
    model.predict_upload = urlApi + 'predict';
    model.predict_url = urlApi + 'predict?fileurl=';
    model.predict_sample = urlApi + 'predict_sample?filename='; // temp
    // extras
    model.thumbnail = urlApi + 'thumbnail/thumbnail.jpg';
    model.viewer = url + viewer;
    return model;
  }

  /**
   * When component mounts, fetch the models.json from github.
   */
  componentDidMount() {
    this.fetchModels(
      'https://raw.githubusercontent.com/modelhub-ai/modelhub/master/models.json'
    );
  }

  /**
   * Renders ModelHub
   * @return {ReactElement}
   */
  render() {
    const {extendedModels, currentModelIndex} = this.state;
    const GDiv = glamorous.div({
      flexGrow: 1,
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
    });
    return extendedModels.length !== 0 ? (
      <GDiv>
        <ModelList
          models={extendedModels}
          handleModelChoice={this.handleModelChoice}
          currentModelIndex={currentModelIndex}
        />
        {currentModelIndex === -1 ? (
          <Welcome />
        ) : (
          <Content model={extendedModels[currentModelIndex]} />
        )}
      </GDiv>
    ) : null;
  }
}

export default ModelHub;
