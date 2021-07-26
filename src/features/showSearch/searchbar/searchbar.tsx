/* eslint jsx-a11y/label-has-for: 0 */
import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';

interface SearchbarProps {
  handleUserInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
}

const Searchbar = ({
  handleUserInput,
  search,
}: SearchbarProps): JSX.Element => {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">
        <span>search</span>
        <DebounceInput
          onChange={(e) => handleUserInput(e)}
          id="search"
          name="search"
          value={search}
          minLength={2}
          debounceTimeout={500}
          placeholder="search..."
        />
      </label>
    </Form>
  );
};

const Form = styled.form`
  label {
    display: block;

    span {
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    input {
      padding: 1rem;
      width: calc(100% - 2rem);
      display: block;
      border: none;
      border-radius: 4px;
    }
  }
`;

export default Searchbar;
