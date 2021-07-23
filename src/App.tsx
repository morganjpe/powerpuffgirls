import { Provider } from 'react-redux';
import ShowDescription from './features/showDescription';
import store from './app/store';

function App(): JSX.Element {
  return (
    <div className="App">
      <Provider store={store}>
        <ShowDescription showID={6771} />
      </Provider>
    </div>
  );
}

export default App;
