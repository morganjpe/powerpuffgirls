import styled from 'styled-components';
import Thumbnail from '../../../app/thumbnail';

interface ShowEpisodeCardProps {
  title: string;
  image: string | null;
  number: number;
}

const ShowEpisodeCard = ({
  title,
  image,
  number,
}: ShowEpisodeCardProps): JSX.Element => {
  return (
    <ShowEpisodeCardContainer>
      {image ? (
        <img src={image} alt={title} />
      ) : (
        <Thumbnail ratio={140 / 250}>no image thumbnail</Thumbnail>
      )}
      <div>
        <h4>
          {title} <span>{number}</span>
        </h4>
      </div>
    </ShowEpisodeCardContainer>
  );
};

const ShowEpisodeCardContainer = styled.div`
  img {
    width: 100%;
    border-radius: 5px;
  }
`;

export default ShowEpisodeCard;
