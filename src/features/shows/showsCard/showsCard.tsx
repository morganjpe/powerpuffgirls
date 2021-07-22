interface ShowsCardProps {
  title: string;
  image: string;
}

const ShowsCard = ({ title, image }: ShowsCardProps): JSX.Element => {
  return (
    <div>
      <img src={image} alt={title} />
      <h4>{title}</h4>
    </div>
  );
};

export default ShowsCard;
