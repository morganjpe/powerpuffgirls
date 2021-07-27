import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import SearchBar from './searchbar';
import pretty from 'pretty';

describe('<SearchBar /> component', () => {
  let container: HTMLElement;

  beforeEach(() => {
    const component = render(
      <SearchBar
        isLoading={false}
        search={''}
        handleUserInput={() => {
          console.log('set');
        }}
      />
    );
    container = component.container;
  });

  it('should have a label and input', () => {
    const input = screen.getByLabelText(/search/i);
    expect(input).toHaveAttribute('type', 'text');
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  it('should be accessible', async () => {
    expect(await axe(container)).toHaveNoViolations();
  });
});
