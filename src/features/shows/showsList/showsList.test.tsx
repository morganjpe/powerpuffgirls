import { render, screen } from '@testing-library/react';
import ShowsList from './showsList';

import { shows } from '../shows.test';

describe('<ShowsList /> component', () => {
  it('should display no shows if no shows have been found', () => {
    render(<ShowsList hasSearched={true} shows={[]} />);
    screen.getByText(/could not find shows/i);
  });

  it('should display a list of show cards', () => {
    render(<ShowsList hasSearched={true} shows={shows} />);
    screen.getByText(/show one/i);
    screen.getByText(/show two/i);
  });
});
