import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useGetShowByIdQuery, useGetEpisodesByIdQuery, Show } from '../../api';

// components
import { ShowDetail } from '../showDetail';
import { ShowEpisodeList } from './showEpisodeList';

interface ShowDescriptionProps {
  showID: number;
}

const DetailContainer = ({ data }: { data: Show }): JSX.Element => {
  const { name, image, summary } = data;
  return (
    <ShowDetail
      title={name}
      description={summary}
      image={image?.medium ? image.medium : null}
    />
  );
};

const EpisodeContainer = ({
  showID,
  name,
}: {
  showID: number;
  name: string;
}): JSX.Element => {
  const { data, error } = useGetEpisodesByIdQuery(showID);

  if (!error && data) {
    return <ShowEpisodeList showName={name} showId={showID} episodes={data} />;
  }

  return <div />;
};

const ShowDescription = ({ showID }: ShowDescriptionProps): JSX.Element => {
  const { data, error } = useGetShowByIdQuery(showID);

  if (error || !data) {
    return (
      <div>
        There has been an error. Please search again? <Link to="/">Home</Link>
      </div>
    );
  }

  return (
    <ShowDescriptionContainer>
      <div className="top">
        <DetailContainer data={data} />
      </div>

      <div className="bottom">
        <EpisodeContainer name={data.name} showID={showID} />
      </div>
    </ShowDescriptionContainer>
  );
};

const ShowDescriptionContainer = styled.section`
  display: grid;
  grid-template: 'top' 1fr 'bottom' 1fr;
  height: 100vh;

  .top {
    grid-area: top;
  }

  .bottom {
    grid-area: bottom;
  }
`;

export default ShowDescription;
