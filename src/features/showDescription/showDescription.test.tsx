import { Provider } from 'react-redux';
import store from '../../app/store';
import { render, screen, waitFor } from '@testing-library/react';

import ShowDescription from './index';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<ShowDescription /> Component', () => {
  beforeEach(() =>
    render(
      <Router>
        <Provider store={store}>
          <ShowDescription showID={6771} />
        </Provider>
      </Router>
    )
  );

  it('should render show details from API', async () => {
    await waitFor(() => {
      screen.getByText(
        /This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s./i
      );
      screen.getByText('Girls');

      const image = screen.getByAltText(/girls/i);
      expect(image).toHaveAttribute(
        'src',
        'https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg'
      );
    });
  });

  it('should initially render the show episodes for season one from the API', async () => {
    await waitFor(() => {
      const seasonOneInput = screen.getByLabelText(/season 1/i);
      expect(seasonOneInput).toBeChecked();
      screen.getByText(/escape from monster island/i);
      screen.getByText(/princess Buttercup/i);
      // season two
      expect(screen.queryByText(/The Last Donnycorn/i)).toBeNull();
      expect(screen.queryByText(/Green Wing/i)).toBeNull(); // episode 2
      // season three
      expect(screen.queryByText(/Not So Secret Service/i)).toBeNull();
    });
  });

  it('should be able to click through seasons to show new episodes', async () => {
    await waitFor(() => {
      const seasonTwoInput = screen.getByLabelText(/season 2/i);
      userEvent.click(seasonTwoInput);

      expect(screen.queryByText(/escape from monster island/i)).toBeNull();
      expect(screen.queryByText(/princess Buttercup/i)).toBeNull();

      screen.getByText(/The Last Donnycorn/i);
      screen.getByText(/Green Wing/i);
    });
  });
});
