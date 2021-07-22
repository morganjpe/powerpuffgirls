interface ShowEpisodeCardProps {
  title: string;
  image: string;
  number: number;
}

const ShowEpisodeCard = ({
  title,
  image,
  number,
}: ShowEpisodeCardProps): JSX.Element => {
  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <h4>
          {title} <span>{number}</span>
        </h4>
      </div>
    </div>
  );
};

export default ShowEpisodeCard;
