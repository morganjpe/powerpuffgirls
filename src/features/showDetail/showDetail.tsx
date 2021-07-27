import { Link, useParams, useLocation } from 'react-router-dom';

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
  const location = useLocation();
  const params = useParams<{ showid: string; showname: string }>();

  return (
    <ShowDetailContainer>
      <ShowDetailInner>
        <ShowDetailContainerBackground img={image} />
        <div>
          <div className="description">
            <span className="breadcrumbs">
              <Link to="/">&lsaquo; Back to Search</Link>{' '}
              {location.pathname.includes('episode') && (
                <span>
                  {' '}
                  / <Link to={`/show/${params.showid}`}>{params.showname}</Link>
                </span>
              )}
            </span>
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
