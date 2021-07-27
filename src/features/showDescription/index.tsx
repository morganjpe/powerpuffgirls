import styled from 'styled-components';

import { useGetShowByIdQuery, useGetEpisodesByIdQuery } from '../../api';

// components
import { ShowDetail } from '../showDetail';
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
    <ShowDescriptionContainer>
      <div className="top">
        <DetailContainer showID={showID} />
      </div>

      <div className="bottom">
        <EpisodeContainer showID={showID} />
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
