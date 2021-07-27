// import ShowDescription from './features/showDescription';
// import EpisodeDescription from './features/episodeDescription';
import { Provider } from 'react-redux';
import store from './app/store';

// components
import Search from './pages/search';
import ShowDescriptionPage from './pages/showDescription';

function App(): JSX.Element {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <Search /> */}
        <ShowDescriptionPage />
        {/* <EpisodeDescription log={false} showId={6771} number={1} /> */}
      </Provider>
    </div>
  );
}

export default App;
