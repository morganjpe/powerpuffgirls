import { render, screen } from '@testing-library/react';
import ShowEpisodeCard from './showEpisodeCard';

describe('<ShowEpisodeCard /> component', () => {
  it('should display a card with image, title and episode number', () => {
    render(
      <ShowEpisodeCard
        title="episode name"
        image={
          'https://static.tvmaze.com/uploads/images/medium_portrait/307/768002.jpg'
        }
        number={10}
      />
    );

    const image = screen.getByAltText(/episode name/i);
    expect(image).toHaveAttribute(
      'src',
      'https://static.tvmaze.com/uploads/images/medium_portrait/307/768002.jpg'
    );

    screen.getByText(/episode name/i);
    screen.getByText(/10/i);
  });
});
