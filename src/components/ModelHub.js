import React, {Component} from 'react';
import glamorous from 'glamorous';
import ModelList from './ModelList';
import Content from './Content';
import Welcome from './Welcome';
import data from '../data';

/**
 * ModelHub class
 * Receives the data.
 * @extends Component
 */
class ModelHub extends Component {
  /**
   * ModelHub constructor
   */
  constructor() {
    super();
    this.state = {
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
    console.log('current model: ', data[value].name.toLowerCase());
  }
  /**
   * Renders ModelHub
   * @return {ReactElement}
   */
  render() {
    const {currentModelIndex} = this.state;
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
          data={data}
          handleModelChoice={this.handleModelChoice}
          currentModelIndex={currentModelIndex}
        />
        {currentModelIndex === -1 ? (
          <Welcome />
        ) : (
          <Content data={data[currentModelIndex]} />
        )}
      </GDiv>
    );
  }
}

export default ModelHub;
