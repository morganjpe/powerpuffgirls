interface SearchbarProps {
  captureInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchForShows: () => Promise<void>;
  search: string;
}

const Searchbar = ({
  captureInput,
  searchForShows,
  search,
}: SearchbarProps): JSX.Element => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        searchForShows();
      }}
    >
      <label htmlFor="search">
        search
        <input
          onChange={captureInput}
          id="search"
          name="search"
          type="text"
          value={search}
        />
      </label>
      <button type="submit">Search for films</button>
    </form>
  );
};

export default Searchbar;
