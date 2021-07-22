import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ShowList } from './shows.types';
import { searchShows } from './api';

import Shows from './index';

jest.mock('./api');

const mockedSearchShows = searchShows as jest.Mock<Promise<ShowList | null>>;

export const shows: ShowList = [
  {
    score: 1,
    show: {
      name: 'show one',
      image: {
        medium:
          'https://static.tvmaze.com/uploads/images/medium_portrait/204/511371.jpg',
        original:
          'https://static.tvmaze.com/uploads/images/medium_portrait/204/511371.jpg',
      },
      summary: '<p>this is some content</p>',
    },
  },
  {
    score: 0.5,
    show: {
      name: 'show two',
      image: {
        medium:
          'https://static.tvmaze.com/uploads/images/medium_portrait/209/524335.jpg',
        original:
          'https://static.tvmaze.com/uploads/images/medium_portrait/209/524335.jpg',
      },
      summary: '<p>this is some other content</p>',
    },
  },
];

describe('<Shows /> Component', () => {
  it('Should search for shows', async () => {
    mockedSearchShows.mockResolvedValueOnce(shows);

    render(<Shows />);

    const input = screen.getByLabelText(/search/i);
    const button = screen.getByText(/search for films/i);

    userEvent.type(input, 'power puff girls');
    userEvent.click(button);

    await waitFor(() => {
      screen.getByText(/show one/i);
      screen.getByText(/show two/i);
    });
  });
});
