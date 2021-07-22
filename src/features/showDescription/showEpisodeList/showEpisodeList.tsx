import type { EpisodeList } from '../showDescription.types';
import { ShowEpisodeCard } from '../showEpisodeCard';

interface ShowEpisodeList {
  episodes: EpisodeList;
}

const ShowEpisodeList = ({ episodes }: ShowEpisodeList): JSX.Element => {
  // episodes[0].
  // const maxSeries = episodes.reduce((prev, cur) => {}, 0);

  const intial = episodes.filter(({ season }) => season === 1);

  return (
    <ul>
      {intial.map(({ name, image: { medium } }, index) => (
        <li key={`${name}_${Date.now()}`}>
          <ShowEpisodeCard image={medium} title={name} number={index + 1} />
        </li>
      ))}
    </ul>
  );
};

export default ShowEpisodeList;
