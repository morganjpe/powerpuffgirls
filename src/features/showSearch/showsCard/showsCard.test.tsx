import { screen, render } from '@testing-library/react';
import ShowsCard from './showsCard';

const IMAGE_PATH =
  'https://www.screwfix.com/images/CAT145B/assets/gfx/145b_summer2_makita_twin_hw_lg.png';
describe('<ShowsCard /> component', () => {
  it('should display the show name', () => {
    render(<ShowsCard title="Show Title" image={IMAGE_PATH} />);
    screen.getByText(/show title/i);
    const image = screen.getAllByAltText(/show title/i);

    image.forEach((img) => {
      expect(img).toHaveAttribute('src', IMAGE_PATH);
    });
  });
});
