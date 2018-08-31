import React from 'react';

import Header from './Header';
import ModelHub from './ModelHub';

/**
 * Main class
 * Contains the ModelHub and Header components.
 * @extends Component
 * @return {ReactElement} Main
 */
const Main = () => (
  <div>
    <ModelHub />
    <Header />
  </div>
)

export default Main;
