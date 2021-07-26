import * as React from 'react';
import styled from 'styled-components';

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
      <SearchContainer>
        <Searchbar search={search} handleUserInput={handleUserInput} />
      </SearchContainer>

      <div>
        {isLoading ? (
          'loading ...'
        ) : (
          <ShowsList search={search} shows={shows} />
        )}
      </div>
    </div>
  );
};

const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: 15px 1fr 15px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr 1fr;
  }

  > form {
    grid-column: 2/3;
  }
`;

export default Shows;
