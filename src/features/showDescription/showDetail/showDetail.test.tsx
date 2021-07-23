import { render, screen } from '@testing-library/react';
import ShowDetail from './showDetail';

function isHTML(str: string | null) {
  if (str === null) return false;

  const a = document.createElement('div');
  a.innerHTML = str;

  for (let c = a.childNodes, i = c.length; i--; ) {
    if (c[i].nodeType === 1) return true;
  }

  return false;
}

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

  it('should render a placeholder if no image', () => {
    render(<ShowDetail {...detailProps} image={null} />);
    screen.getByText(/no image thumbnail/i);
  });

  it('should not contain any html', () => {
    render(<ShowDetail {...detailProps} />);
    const text = screen.getByText(
      /the superhero children have grown and are now disillusioned/i
    );
    expect(isHTML(text.textContent)).toBeFalsy();
  });
});
