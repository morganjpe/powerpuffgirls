import { render, screen } from '@testing-library/react';

import ShowEpisodeList from './showEpisodeList';

const testEpisodes = [
  {
    id: 657308,
    name: 'Escape from Monster Island',
    season: 1,
    number: 1,
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_landscape/53/132617.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/53/132617.jpg',
    },
    summary:
      "<p>Bubbles wins two tickets to a concert and has to pick between Blossom and Buttercup to go with her. Meanwhile, the Mayor's plane goes down over Monster Island and it's up to the girls to rescue him.</p>",
  },
  {
    id: 657309,
    name: 'Princess Buttercup',
    season: 1,
    number: 2,
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_landscape/53/132618.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/53/132618.jpg',
    },
    summary:
      '<p>Buttercup becomes enamored with a team of roller derby girls called the Derbytantes. When she starts spending all of her time with them, Princess Morbucks seeks to be her replacement in the Powerpuff Girls.</p>',
  },
  {
    id: 691590,
    name: 'The Stayover',
    season: 2,
    number: 1,
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_landscape/53/132627.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/53/132627.jpg',
    },
    summary:
      '<p>Blossom and Buttercup suffer a candy hangover, and they must retrace their steps to find where they left Bubbles.</p>',
  },
  {
    id: 691591,
    name: 'Painbow',
    season: 2,
    number: 2,
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_landscape/53/132628.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/53/132628.jpg',
    },
    summary:
      '<p>A rainbow causes Townsville to become uncomfortably happy.</p>',
  },
];

describe('<ShowEpisodeList />', () => {
  beforeEach(() => {
    render(<ShowEpisodeList episodes={testEpisodes} />);
  });

  it('should initially display series `1` episodes', () => {
    screen.getByText(/escape from monster island/i);
    screen.getByText(/princess buttercup/i);
    expect(screen.queryByText(/the stayover/i)).toBeNull();
    expect(screen.queryByText(/painbow/i)).toBeNull();
  });
  it('should be able to toggle episodes for seasons', () => {});
});

// thing.reduce((prev, initial) => {
//     return prev > initial.number ? prev : initial.number
// }, 0);
