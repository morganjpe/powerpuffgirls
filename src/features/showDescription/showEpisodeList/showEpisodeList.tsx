import { useState } from 'react';
import type { EpisodeList } from '../showDescription.types';
import { ShowEpisodeCard } from '../showEpisodeCard';

interface ShowEpisodeList {
  episodes: EpisodeList;
}

const ShowEpisodeList = ({ episodes }: ShowEpisodeList): JSX.Element => {
  const [seasonState, setSeasonState] = useState(1);

  const seasons = episodes.reduce((prev, { season }) => {
    return prev > season ? prev : season;
  }, 1);

  const intial = episodes.filter(({ season }) => season === seasonState);

  return (
    <div>
      {[...Array(seasons)].map((_, index) => (
        <label htmlFor={`${index}_season`} key={index}>
          <input
            id={`${index}_season`}
            type="radio"
            checked={seasonState === index + 1}
            onChange={() => setSeasonState(index + 1)}
          />
          season {index + 1}
        </label>
      ))}
      <ul>
        {intial.map(({ name, image: { medium } }, index) => (
          <li key={`${name}_${Date.now()}`}>
            <ShowEpisodeCard image={medium} title={name} number={index + 1} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowEpisodeList;