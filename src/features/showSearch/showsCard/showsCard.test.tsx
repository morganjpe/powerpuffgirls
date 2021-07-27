import { screen } from '@testing-library/react';
import ShowsCard from './showsCard';
import pretty from 'pretty';

import renderWithBrowser from '../../../testutils';

const IMAGE_PATH =
  'https://www.screwfix.com/images/CAT145B/assets/gfx/145b_summer2_makita_twin_hw_lg.png';
describe('<ShowsCard /> component', () => {
  it('should display the show name', () => {
    const { container } = renderWithBrowser(
      <ShowsCard showId={9999} title="Show Title" image={IMAGE_PATH} />
    );
    screen.getByText(/show title/i);
    const image = screen.getAllByAltText(/show title/i);

    image.forEach((img) => {
      expect(img).toHaveAttribute('src', IMAGE_PATH);
    });

    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
