/* eslint jsx-a11y/label-has-for: 0 */
import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';
import { ClipLoader } from 'react-spinners';

interface SearchbarProps {
  handleUserInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
  isLoading: boolean;
}

const Searchbar = ({
  handleUserInput,
  search,
  isLoading,
}: SearchbarProps): JSX.Element => {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">
        <span className="hidden">search</span>
        <div className="search-container">
          <DebounceInput
            onChange={(e) => handleUserInput(e)}
            id="search"
            name="search"
            value={search}
            minLength={2}
            debounceTimeout={500}
            placeholder="search..."
          />
          {isLoading && (
            <div className="loader">
              <ClipLoader size={20} color="#E50914" />
            </div>
          )}
        </div>
      </label>
    </Form>
  );
};

const Form = styled.form`
  label {
    display: block;

    .hidden {
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    .search-container {
      position: relative;

      .loader {
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);
      }

      input {
        padding: 1rem;
        width: calc(100% - 2rem);
        display: block;
        border: none;
        border-radius: 4px;
      }
    }
  }
`;

export default Searchbar;
