import {
  ShowDetailContainer,
  ShowDetailInner,
  ShowDetailContainerBackground,
} from './showDetail.styles';

interface ShowDetailProps {
  title: string;
  description: string;
  image: string | null;
}

const ShowDetail = ({
  title,
  description,
  image,
}: ShowDetailProps): JSX.Element => {
  return (
    <ShowDetailContainer>
      <ShowDetailInner>
        <ShowDetailContainerBackground img={image} />
        <div>
          <div className="description">
            <h2>{title}</h2>
            <div className="content">
              <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          </div>
          <div className="image">
            {image ? (
              <img src={image} alt={title} />
            ) : (
              <div>no image thumbnail</div>
            )}
          </div>
        </div>
      </ShowDetailInner>
    </ShowDetailContainer>
  );
};

export default ShowDetail;
