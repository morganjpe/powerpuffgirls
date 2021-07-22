import * as React from 'react';

const Searchbar = (): JSX.Element => {
  const [search, setSearch] = React.useState('');

  return (
    <form>
      <label htmlFor="search">
        search
        <input id="search" name="search" type="text" />
      </label>
      <button>Search for films</button>
    </form>
  );
};

export default Searchbar;
