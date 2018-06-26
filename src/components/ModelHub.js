import React, {Component} from 'react';
import glamorous from 'glamorous';
import ModelList from './ModelList';
import Content from './Content';
import Welcome from './Welcome';
import models from '../models';

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
      extendedModels: models.map((model) => {
        return this.extendModel(model);
      }),
      currentModelIndex: 0, // -1
    };
    this.handleModelChoice = this.handleModelChoice.bind(this);
  }

  /**
   * Handles choosing a different model.
   * Sets the state of this component
   * @param  {MouseEvent} event Mouse event
   */
  handleModelChoice(event) {
    const value = event.currentTarget.value;
    this.setState({currentModelIndex: value});
    console.log('current model: ', models[value].name.toLowerCase());
  }

  /**
   * Adds more porperties to models based on REST API
   * @param  {object} model model object from Models.js
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
    model.predict = urlApi + 'predict';
    // extras
    model.thumbnail = urlApi + 'thumbnail/thumbnail.jpg';
    model.viewer = url + viewer;
    return model;
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
    return (
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
    );
  }
}

export default ModelHub;
