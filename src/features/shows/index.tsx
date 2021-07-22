import * as React from 'react';
import type { ShowList } from './shows.types';
import Searchbar from './searchbar/searchbar';
import ShowsList from './showsList/showsList';

import { searchShows } from './api';

const Shows = () => {
  const [search, setSearch] = React.useState('');
  const [shows, setShows] = React.useState<ShowList>([]);

  const captureInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const searchForShows = async () => {
    const shows = await searchShows(search);
    if (shows) {
      setShows(shows);
    }
  };

  return (
    <div>
      <Searchbar
        search={search}
        captureInput={captureInput}
        searchForShows={searchForShows}
      />
      <ShowsList shows={shows} hasSearched={false} />
    </div>
  );
};

export default Shows;
