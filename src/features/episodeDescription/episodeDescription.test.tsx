import { Provider } from 'react-redux';
import store from '../../app/store';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

// mockdata
import { episodes } from '../../mocks/data';

// component
import EpisodeDescription from './index';
import userEvent from '@testing-library/user-event';

describe('<EpisodeDescription /> Component', () => {
  it('should be able to navigate between episode pages', async () => {
    render(
      <Router>
        <Provider store={store}>
          <EpisodeDescription number={0} showId={6771} />
        </Provider>
      </Router>
    );
    await waitFor(() => {
      // no initial previous button
      expect(screen.queryByText(/previous episode/i)).toBeNull();
      screen.getByText(/Escape from Monster Island/i);

      // go forward
      const next = screen.getByText(/next episode/i);
      userEvent.click(next);

      // change content
      expect(screen.queryByText(/Escape from Monster Island/i)).toBeNull();
      screen.getByText(/Princess Buttercup/i);

      // go back
      const prev = screen.getByText(/previous episode/i);
      userEvent.click(prev);

      // initial content
      expect(screen.queryByText(/Princess Buttercup/i)).toBeNull();
      screen.getByText(/Escape from Monster Island/i);
      expect(screen.queryByText(/previous episode/i)).toBeNull();

      // click to the end
      [...Array(episodes.length - 1)].forEach((_, i) => {
        userEvent.click(next);
      });

      // get to end content
      screen.getByText(/Not So Secret Service/i);
      // hide end button
      expect(screen.queryByText(/next episode/i)).toBeNull();
    });
  });
});
