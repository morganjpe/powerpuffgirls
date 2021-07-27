import { useReducer } from 'react';
import { useGetEpisodesByIdQuery } from '../../api';

// components
import { ShowDetail } from '../showDetail';

interface ReducerAction {
  type: 'increment' | 'decrement';
}

const reducer = (state: number, action: ReducerAction): number => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

interface EpisodeDescriptionProps {
  number: number;
  showId: number;
  log: boolean;
}

const EpisodeDescription = ({
  number,
  showId,
}: EpisodeDescriptionProps): JSX.Element => {
  const [current, dispatch] = useReducer(reducer, number);
  const { data, error } = useGetEpisodesByIdQuery(showId);

  if (data && !error) {
    const { name, summary, image } = data[current];

    return (
      <div>
        <ShowDetail
          title={name}
          description={summary}
          image={image?.medium ? image?.medium : null}
        />
        <div>
          {current < data.length - 1 && (
            <button onClick={() => dispatch({ type: 'increment' })}>
              next episode
            </button>
          )}

          {current && (
            <button onClick={() => dispatch({ type: 'decrement' })}>
              previous episode
            </button>
          )}
        </div>
      </div>
    );
  }

  return <div />;
};

export default EpisodeDescription;
