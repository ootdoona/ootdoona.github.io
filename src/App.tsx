import { MainKo, MainEn } from './components/main';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
      <Switch>
        <Route exact path="/" component={MainKo} />
        <Route path="/en" component={MainEn} />
      </Switch>
  );
}

export default App;
