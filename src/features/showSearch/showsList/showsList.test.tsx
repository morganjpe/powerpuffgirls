import { screen } from '@testing-library/react';
import ShowsList from './showsList';
import renderWithBrowser from '../../../testutils';
import pretty from 'pretty';

import { search } from '../../../mocks/data';

describe('<ShowsList /> component', () => {
  it('should display no shows if no shows have been found', () => {
    const { container } = renderWithBrowser(
      <ShowsList isLoading={false} search="efqedqwdqwd" shows={[]} />
    );
    screen.getByText(/could not find shows/i);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  it('should display a list of show cards', () => {
    const { container } = renderWithBrowser(
      <ShowsList isLoading={false} search="dogs" shows={search} />
    );
    screen.getAllByText(/The Powerpuff Girls/i);
    screen.getByText(/Demashitaa! Powerpuff Girls Z/i);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
