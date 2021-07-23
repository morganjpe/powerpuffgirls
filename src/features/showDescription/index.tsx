import { useGetShowByIdQuery } from '../../api';

// components
import { ShowDetail } from './showDetail';

interface ShowDescriptionProps {
  showID: number;
}

const DetailContainer = ({ showID }: ShowDescriptionProps): JSX.Element => {
  const { data, error } = useGetShowByIdQuery(showID);

  if (!error && data) {
    const {
      name,
      image: { medium },
      summary,
    } = data;

    return <ShowDetail title={name} description={summary} image={medium} />;
  }

  return <div></div>;
};

const ShowDescription = ({ showID }: ShowDescriptionProps): JSX.Element => {
  return (
    <div>
      <DetailContainer showID={showID} />
    </div>
  );
};

export default ShowDescription;
