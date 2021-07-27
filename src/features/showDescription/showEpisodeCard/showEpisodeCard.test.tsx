import { render, screen } from '@testing-library/react';
import ShowEpisodeCard from './showEpisodeCard';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<ShowEpisodeCard /> component', () => {
  it('should display a card with image, title and episode number', () => {
    render(
      <Router>
        <ShowEpisodeCard
          title="episode name"
          image={
            'https://static.tvmaze.com/uploads/images/medium_portrait/307/768002.jpg'
          }
          number={10}
        />
      </Router>
    );

    const image = screen.getByAltText(/episode name/i);
    expect(image).toHaveAttribute(
      'src',
      'https://static.tvmaze.com/uploads/images/medium_portrait/307/768002.jpg'
    );

    screen.getByText(/episode name/i);
    screen.getByText(/10/i);
  });

  it('should render a placeholder if no image', () => {
    render(
      <Router>
        <ShowEpisodeCard title="episode name" image={null} number={10} />
      </Router>
    );
    screen.getByText(/no image thumbnail/i);
  });
});
