interface ShowDetailProps {
  title: string;
  description: string;
  image: string;
}

const ShowDetail = ({
  title,
  description,
  image,
}: ShowDetailProps): JSX.Element => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={image} alt={title} />
    </div>
  );
};

export default ShowDetail;
