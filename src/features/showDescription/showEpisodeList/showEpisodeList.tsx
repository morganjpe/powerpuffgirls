/* eslint jsx-a11y/label-has-for: 0 */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import { EpisodeList } from '../../../api';
import { ShowEpisodeCard } from '../showEpisodeCard';

interface ShowEpisodeListProps {
  episodes: EpisodeList;
  showId: string | number;
  showName: string;
}

const ShowEpisodeList = ({
  episodes,
  showId,
  showName,
}: ShowEpisodeListProps): JSX.Element => {
  const [seasonState, setSeasonState] = useState(1);
  const seasons = episodes.reduce((prev, { season }) => {
    return prev > season ? prev : season;
  }, 1);

  const intial = episodes.filter(({ season }) => season === seasonState);

  return (
    <Container>
      <div className="inner">
        <div className="episodes">
          {[...Array(seasons)].map((_, index) => (
            <div key={index}>
              <input
                id={`${index}_season`}
                type="radio"
                checked={seasonState === index + 1}
                onChange={() => setSeasonState(index + 1)}
              />
              <label htmlFor={`${index}_season`} key={index}>
                Season {index + 1}
              </label>
            </div>
          ))}
        </div>
        <ul>
          {intial.map(({ name, image, id }, index) => {
            const mainIndex = episodes.findIndex((show) => {
              return show.id === id;
            });

            return (
              <li key={`${id}_${index}`}>
                <Link
                  to={{
                    pathname: `/episode/${showId}/${showName}/${mainIndex}`,
                  }}
                >
                  <ShowEpisodeCard
                    image={image?.medium ? image.medium : null}
                    title={name}
                    number={index + 1}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: 100%;

  .inner {
    display: grid;
    grid-template: '. tab tab .' auto '. episodes episodes .' auto / 20px 1fr 1fr 20px;

    @media (min-width: 768px) {
      grid-template:
        '. tab tab .' auto '. episodes episodes .' auto / minmax(20px, 1fr)
        minmax(auto, 600px)
        minmax(auto, 600px) minmax(20px, 1fr);
    }

    > .episodes {
      grid-area: tab;
      padding: 2rem 0;
      display: flex;
      flex-wrap: wrap;

      input {
        display: none;
      }

      label {
        position: relative;
        display: inline-block;
        padding: 0.8rem 1rem;
        margin-right: 0.6rem;
        margin-bottom: 0.6rem;
        font-size: 0.8em;
        cursor: pointer;
        border-radius: 5px;
        background: var(--color-gray);

        @media (min-width: 768px) {
          padding: 1rem 1.5rem;
          margin-right: 1rem;
          font-size: 1em;
        }
      }

      input:checked + label {
        background: var(--color-red);
      }
    }

    > ul {
      padding: 0;
      grid-area: episodes;
      display: grid;
      list-style: none;
      margin: 0;

      grid-gap: 1.5rem;
      gap: 1.5rem;

      a {
        text-decoration: none;
        color: var(--color-white);
      }

      @media (min-width: 768px) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
`;

export default ShowEpisodeList;
