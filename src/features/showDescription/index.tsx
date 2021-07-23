import { useGetShowByIdQuery, useGetEpisodesByIdQuery } from '../../api';

// components
import { ShowDetail } from './showDetail';
import { ShowEpisodeList } from './showEpisodeList';

interface ShowDescriptionProps {
  showID: number;
}

const DetailContainer = ({ showID }: ShowDescriptionProps): JSX.Element => {
  const { data, error } = useGetShowByIdQuery(showID);

  if (!error && data) {
    const { name, image, summary } = data;
    return (
      <ShowDetail
        title={name}
        description={summary}
        image={image?.medium ? image.medium : null}
      />
    );
  }

  return <div />;
};

const EpisodeContainer = ({ showID }: ShowDescriptionProps): JSX.Element => {
  const { data, error } = useGetEpisodesByIdQuery(showID);

  if (!error && data) {
    return <ShowEpisodeList episodes={data} />;
  }

  return <div />;
};

const ShowDescription = ({ showID }: ShowDescriptionProps): JSX.Element => {
  return (
    <div>
      <DetailContainer showID={showID} />
      <EpisodeContainer showID={showID} />
    </div>
  );
};

export default ShowDescription;
