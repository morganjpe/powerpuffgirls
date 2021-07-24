import { render, screen } from '@testing-library/react';
import ShowsList from './showsList';

import { search } from '../../../mocks/data';

describe('<ShowsList /> component', () => {
  it('should handle no shows found', () => {
    render(<ShowsList shows={undefined} />);
    screen.getByText(/Could not find shows/i);
  });

  it('should display no shows if no shows have been found', () => {
    render(<ShowsList shows={[]} />);
    screen.getByText(/could not find shows/i);
  });

  it('should display a list of show cards', () => {
    render(<ShowsList shows={search} />);
    screen.getAllByText(/The Powerpuff Girls/i);
    screen.getByText(/Demashitaa! Powerpuff Girls Z/i);
  });
});
