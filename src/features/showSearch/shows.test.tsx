import { Provider } from 'react-redux';
import store from '../../app/store';

import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Shows from './index';

describe('<Shows /> Component', () => {
  it('Should search for shows', async () => {
    render(
      <Provider store={store}>
        <Shows />
      </Provider>
    );

    const input = screen.getByLabelText(/search/i);
    userEvent.type(input, 'power puff girls');

    await waitFor(() => {
      screen.getAllByText(/The Powerpuff Girls/i);
      screen.getByText(/Demashitaa! Powerpuff Girls Z/i);
    });
  });
});
