import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { LANDING_PATH, EXAMPLE } from './routes'

import Main from './components/Main';

import Example from './components/tabs/Example'

const Pages = {
  [EXAMPLE]: Example
}


/**
 * App class
 * @extends Component
 * @return {ReactElement} App
 */
const App = () => {
  return (<Router>
      <Switch>
        {/* Main entrypoint */}
        <Route exact path={LANDING_PATH} component={Main} />
        <Route
          exact
          path={'/:modelId/:tabId(example)'}
          render={({
            match, ...rest
          }) => {
            const Page = Pages[match.params.tabId]
            return <Page match={match} {...rest} />
          }}
        />
        <Route exact path={'/:modelId/:tabId'} component={Main} />
      </Switch>
    </Router>)
}

export default App;
