/* eslint jsx-a11y/label-has-for: 0 */

import tw, { styled } from 'twin.macro';
import { DebounceInput } from 'react-debounce-input';

interface SearchbarProps {
  handleUserInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
}

const Searchbar = ({
  handleUserInput,
  search,
}: SearchbarProps): JSX.Element => {
  console.log(search);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="search">
        search
        <DebounceInput
          onChange={(e) => handleUserInput(e)}
          id="search"
          name="search"
          value={search}
          minLength={2}
          debounceTimeout={500}
        />
      </label>
    </form>
  );
};

export const Container = styled.form``;

export default Searchbar;
