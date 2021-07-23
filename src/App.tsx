import { Provider } from 'react-redux';
import ShowDescription from './features/showDescription';
import EpisodeDescription from './features/episodeDescription';
import store from './app/store';

function App(): JSX.Element {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <ShowDescription showID={6771} /> */}
        <EpisodeDescription log={false} showId={6771} number={1} />
      </Provider>
    </div>
  );
}

export default App;
