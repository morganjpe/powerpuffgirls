import styled from 'styled-components';
import Thumbnail from '../../../app/thumbnail';
interface ShowsCardProps {
  title: string;
  image: string | null;
}

const ShowsCard = ({ title, image }: ShowsCardProps): JSX.Element => {
  return (
    <div>
      <Inner>
        {image ? (
          <>
            <ShowsCardImg tw="absolute" src={image} alt={title} />
            <img className="main" tw="rounded" src={image} alt={title} />
          </>
        ) : (
          <Thumbnail>no image thumbnail</Thumbnail>
        )}
      </Inner>
      <h4>{title}</h4>
    </div>
  );
};

const Inner = styled.div`
  position: relative;

  .main {
    width: 100%;
    border-radius: 7px;
    cursor: pointer;
  }
`;

const ShowsCardImg = styled.img`
  position: absolute;
  top: 10px;
  left: 0%;
  width: 100%;
  filter: blur(15px);
  opacity: 0.4;
  z-index: -1;
`;

export default ShowsCard;
