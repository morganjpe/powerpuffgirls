import EpisodeDescription from '../features/episodeDescription';
import { useParams } from 'react-router-dom';

const EpisodeDescriptionPage = (): JSX.Element => {
  const { showid } = useParams<{ showid: string }>();
  return <EpisodeDescription number={0} showId={parseInt(showid)} />;
};

export default EpisodeDescriptionPage;
