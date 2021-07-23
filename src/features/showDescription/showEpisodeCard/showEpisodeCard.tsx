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
    <div>
      {image ? <img src={image} alt={title} /> : <div>no image thumbnail</div>}
      <div>
        <h4>
          {title} <span>{number}</span>
        </h4>
      </div>
    </div>
  );
};

export default ShowEpisodeCard;
