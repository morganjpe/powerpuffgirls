import * as React from 'react';
import Searchbar from './searchbar/searchbar';
import ShowsList from './showsList/showsList';

// state
import { useGetShowsQuery } from '../../api';

const Shows = (): JSX.Element => {
  const [search, setSearch] = React.useState('');
  const { data: shows, error, isLoading } = useGetShowsQuery(search);

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  if (error) return <div>there has been an error</div>;

  return (
    <div>
      <Searchbar search={search} handleUserInput={handleUserInput} />
      {isLoading ? 'loading ...' : <ShowsList shows={shows} />}
    </div>
  );
};

export default Shows;
