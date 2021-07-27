import ShowDescription from '../features/showDescription';
import { useParams } from 'react-router-dom';

const ShowDescriptionPage = (): JSX.Element => {
  const { showid } = useParams<{ showid: string }>();

  return <ShowDescription showID={parseInt(showid)} />;
};

export default ShowDescriptionPage;
