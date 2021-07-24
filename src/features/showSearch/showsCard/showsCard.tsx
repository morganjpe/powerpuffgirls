interface ShowsCardProps {
  title: string;
  image: string | null;
}

const ShowsCard = ({ title, image }: ShowsCardProps): JSX.Element => {
  return (
    <div>
      {image ? <img src={image} alt={title} /> : <div>no image thumbnail</div>}
      <h4>{title}</h4>
    </div>
  );
};

export default ShowsCard;
