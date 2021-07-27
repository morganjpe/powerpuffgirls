import { useReducer } from 'react';
import styled from 'styled-components';
import { useGetEpisodesByIdQuery } from '../../api';
import { Link } from 'react-router-dom';

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
}

const EpisodeDescription = ({
  number,
  showId,
  ...rest
}: EpisodeDescriptionProps): JSX.Element => {
  const [current, dispatch] = useReducer(reducer, number);
  const { data, error } = useGetEpisodesByIdQuery(showId);

  console.log(rest);

  if (error) {
    return (
      <div>
        There has been an error. Please search again? <Link to="/">Home</Link>
      </div>
    );
  }

  if (data && !error) {
    const { name, summary, image } = data[current];

    return (
      <EpisodeDescriptionContainer>
        <div className="top">
          <ShowDetail
            title={name}
            description={summary}
            image={image?.medium ? image?.medium : null}
          />
        </div>

        <div className="bottom">
          <div>
            {current > 0 && (
              <button onClick={() => dispatch({ type: 'decrement' })}>
                previous episode
              </button>
            )}
            {current < data.length - 1 && (
              <button onClick={() => dispatch({ type: 'increment' })}>
                next episode
              </button>
            )}
          </div>
        </div>
      </EpisodeDescriptionContainer>
    );
  }

  return <div />;
};

const EpisodeDescriptionContainer = styled.div`
  display: grid;
  height: 100vh;
  grid-template: 'top' 1fr 'bottom' 2fr;

  @media (min-width: 768px) {
    grid-template: 'top' 2fr 'bottom' 1fr;
  }

  .top {
    grid-area: top;
  }

  .bottom {
    grid-area: bottom;
    display: grid;
    grid-template-columns: 20px 1fr 1fr 20px;

    @media (min-width: 768px) {
      grid-template-columns: 1fr minmax(1200px, 1fr) 1fr;
    }

    > div {
      grid-column: 2/4;

      button {
        padding: 1rem 1.5rem;
        border-radius: 5px;
        background: var(--color-gray);
        color: var(--color-white);
        border: none;
        text-transform: capitalize;
        cursor: pointer;
        margin-right: 1rem;
        margin-bottom: 1rem;

        :hover {
          background: var(--color-red);
        }
      }
    }
  }
`;

export default EpisodeDescription;
