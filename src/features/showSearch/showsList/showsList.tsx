import styled from 'styled-components';

import { ShowsCard } from '../showsCard';
import { ShowList } from '../../../api';

interface ShowsListProps {
  shows: ShowList | undefined;
  search: string;
}

const ShowsList = ({ shows, search }: ShowsListProps): JSX.Element => {
  if (shows && shows.length) {
    return (
      <ShowsListContainer>
        <div>
          <ul>
            {shows.map(({ show: { name, image, id } }) => (
              <li key={id}>
                <ShowsCard
                  title={name}
                  image={image?.medium ? image.medium : null}
                />
              </li>
            ))}
          </ul>
        </div>
      </ShowsListContainer>
    );
  }

  if (!shows?.length && search.length) {
    return (
      <ShowsListContainer>
        <div>Could not find shows</div>
      </ShowsListContainer>
    );
  }

  return <div />;
};

const ShowsListContainer = styled.div`
  position: relative;
  display: grid;

  grid-template-columns: 20px 4fr 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 4fr 1fr;
  }

  div {
    position: relative;
    grid-column: 2/3;

    > ul {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      display: grid;

      grid-gap: 1rem;
      gap: 2rem;
      padding: 0;
      padding-top: 2rem;
      list-style: none;
      grid-template-columns: repeat(2, minmax(0, 1fr));

      @media (min-width: 768px) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
    }
  }
`;

export default ShowsList;
