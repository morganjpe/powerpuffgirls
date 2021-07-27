import EpisodeDescription from '../features/episodeDescription';
import { useParams } from 'react-router-dom';

const EpisodeDescriptionPage = (): JSX.Element => {
  const { showid, shownumber } =
    useParams<{ showid: string; shownumber: string }>();

  if (showid && shownumber) {
    return (
      <EpisodeDescription
        number={parseInt(shownumber)}
        showId={parseInt(showid)}
      />
    );
  }

  return <div></div>;
};

export default EpisodeDescriptionPage;
