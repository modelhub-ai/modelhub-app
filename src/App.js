import React, {Component} from 'react';
import Header from './components/Header';
import ModelHub from './components/ModelHub';
/**
 * App class
 * Contains the ModelHub and Header components.
 * @extends Component
 */
class App extends Component {
  /**
   * Render
   * @return {ReactElement} App
   */
  render() {
    return (
      <div>
        <ModelHub />
        <Header />
      </div>
    );
  }
}

export default App;
