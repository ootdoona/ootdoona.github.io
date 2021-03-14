import React from 'react';
import { MainKo, MainEn } from './components/main';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/en">
            <MainEn />
          </Route>
          <Route path="/">
            <MainKo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
