import { render, screen } from '@testing-library/react';
import ShowDetail from './showDetail';

const detailProps = {
  title: 'show title',
  description:
    '<p>The superhero children have grown and are now disillusioned twentysomethings who resent having lost their childhood to crime fighting. Will they agree to reunite now that the world needs them more than ever?</p>',
  image:
    'https://static.tvmaze.com/uploads/images/medium_portrait/307/768002.jpg',
};

describe('<ShowDetail /> Component', () => {
  it('should display detail related to the show', () => {
    render(<ShowDetail {...detailProps} />);

    const image = screen.getByAltText(/show title/i);
    expect(image).toHaveAttribute('src', detailProps.image);

    screen.getByText(/show title/i);
    screen.getByText(
      /the superhero children have grown and are now disillusioned/i
    );
  });
});
