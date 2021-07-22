import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import SearchBar from './searchBar';

describe('<SearchBar /> component', () => {
  let container: HTMLElement;

  beforeEach(() => {
    const component = render(<SearchBar />);
    container = component.container;
  });

  it('should have a label and input', () => {
    const input = screen.getByLabelText(/search/i);
    expect(input).toHaveAttribute('type', 'text');
  });

  it('should render an accessible input and label', async () => {
    expect(await axe(container)).toHaveNoViolations();
  });
});
