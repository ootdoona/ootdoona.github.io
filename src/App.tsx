import { MainKo, MainEn, PreviousKo, PreviousEn } from './components/main';
import { DevKO1, DevKO2, DevEN1, DevEN2 } from './components/main';
import { PausePage } from './components/main';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
      <Switch>
        <Route exact path="/" component={PausePage} />
        {/* <Route exact path="/" component={MainKo} /> */}
        <Route exact path="/en" component={MainEn} />
        <Route path="/previous" component={PreviousKo} />
        <Route path="/en/previous" component={PreviousEn} />
        <Route path="/devko1" component={DevKO1} />
        {/* <Route path="/devko2" component={DevKO2} /> */}
        <Route path="/deven1" component={DevEN1} />
        {/* <Route path="/deven2" component={DevEN2} /> */}
      </Switch>
  );
}

export default App;
