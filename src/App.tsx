// import ShowDescription from './features/showDescription';
// import EpisodeDescription from './features/episodeDescription';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import store from './app/store';

// components
import Header from './app/header';
import Search from './pages/search';
import ShowDescriptionPage from './pages/showDescriptionPage';
import EpisodeDescriptionPage from './pages/episodeDescriptionPage';

function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <Header />
        <Provider store={store}>
          <Switch>
            <Route exact path="/">
              <Search />
            </Route>
            <Route path="/show/:showid">
              <ShowDescriptionPage />
            </Route>
            <Route path="/episode/:showid/:showname/:shownumber">
              <EpisodeDescriptionPage />
            </Route>
          </Switch>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
