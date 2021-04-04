import { MainKo, MainEn, Test } from './components/main';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
      <Switch>
        <Route exact path="/" component={MainKo} />
        <Route path="/en" component={MainEn} />
        {/* <Route path="/testtest" component={Test} /> */}
      </Switch>
  );
}

export default App;
