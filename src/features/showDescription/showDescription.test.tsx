import { Provider } from 'react-redux';
import store from '../../app/store';
import { render, screen, waitFor } from '@testing-library/react';

import ShowDescription from './index';

describe('<ShowDescription /> Component', () => {
  it('should render show details from API', async () => {
    render(
      <Provider store={store}>
        <ShowDescription showID={6771} />
      </Provider>
    );

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
});
