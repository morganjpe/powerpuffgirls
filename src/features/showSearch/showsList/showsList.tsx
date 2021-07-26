import styled from 'styled-components';

import { ShowsCard } from '../showsCard';
import { ShowList } from '../../../api';

interface ShowsListProps {
  shows: ShowList | undefined;
}

const ShowsList = ({ shows }: ShowsListProps): JSX.Element => {
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

  if (!shows?.length) {
    return <div>Could not find shows</div>;
  }

  return <div />;
};

const ShowsListContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;

  div {
    position: relative;
    grid-column: 2/3;

    > ul {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      grid-gap: 1rem;
      gap: 2rem;
      padding: 0;
      padding-top: 2rem;
      list-style: none;
    }
  }
`;

export default ShowsList;
