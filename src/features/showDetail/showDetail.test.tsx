import { screen } from '@testing-library/react';
import ShowDetail from './showDetail';
import renderWithBrowser from '../../testutils';
import pretty from 'pretty';

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
    const { container } = renderWithBrowser(<ShowDetail {...detailProps} />);

    const image = screen.getByAltText(/show title/i);
    expect(image).toHaveAttribute('src', detailProps.image);

    screen.getByText(/show title/i);
    screen.getByText(
      /the superhero children have grown and are now disillusioned/i
    );

    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  it('should render a placeholder if no image', () => {
    const { container } = renderWithBrowser(
      <ShowDetail {...detailProps} image={null} />
    );
    screen.getByText(/no image thumbnail/i);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  it('should not contain any html', () => {
    const { container } = renderWithBrowser(<ShowDetail {...detailProps} />);
    const text = screen.getByText(
      /the superhero children have grown and are now disillusioned/i
    );
    expect(isHTML(text.textContent)).toBeFalsy();
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
