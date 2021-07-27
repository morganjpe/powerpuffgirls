import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('<App /> component', () => {
  it('should initially render the search page', () => {
    render(<App />);
    screen.getByLabelText(/search/i);
  });

  it('should be able to navigate from search to show page to episode page', async () => {
    render(<App />);
    const input = screen.getByLabelText(/search/i);
    userEvent.type(input, 'power puff');

    await waitFor(() => {
      const [link] = screen.getAllByAltText(/The Powerpuff Girls/i);
      userEvent.click(link);
    });

    await waitFor(() => {
      screen.getAllByText(
        /This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s/i
      );

      const link = screen.getByAltText(/Escape from Monster Island/i);
      userEvent.click(link);
    });

    await waitFor(() => {
      screen.getByText(
        /Bubbles wins two tickets to a concert and has to pick between Blossom and Buttercup to go with her/i
      );
    });
  });
});
