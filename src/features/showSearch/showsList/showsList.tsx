import { ShowsCard } from '../showsCard';
import { ShowList } from '../../../api';

interface ShowsListProps {
  shows: ShowList | undefined;
}

const ShowsList = ({ shows }: ShowsListProps): JSX.Element => {
  if (shows && shows.length) {
    return (
      <ul>
        {shows.map(({ show: { name, image, id } }) => (
          <li key={id}>
            {console.log(image?.medium, '??')}
            <ShowsCard
              title={name}
              image={image?.medium ? image.medium : null}
            />
          </li>
        ))}
      </ul>
    );
  }

  if (!shows?.length) {
    return <div>Could not find shows</div>;
  }

  return <div />;
};

export default ShowsList;
