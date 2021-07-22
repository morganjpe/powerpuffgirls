import { ShowsCard } from '../showsCard';
import type { ShowList } from '../shows.types';

interface ShowsListProps {
  hasSearched: boolean;
  shows: ShowList;
}

const ShowsList = ({ hasSearched, shows }: ShowsListProps): JSX.Element => {
  if (shows.length) {
    return (
      <ul>
        {shows.map(
          ({
            show: {
              name,
              image: { medium },
            },
          }) => (
            <li key={name}>
              <ShowsCard title={name} image={medium} />
            </li>
          )
        )}
      </ul>
    );
  }

  if (hasSearched && !shows.length) {
    return <div>Could not find shows</div>;
  }

  return <div />;
};

export default ShowsList;
