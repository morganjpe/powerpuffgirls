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
    <div>
      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: description }} />
      {image ? <img src={image} alt={title} /> : <div>no image thumbnail</div>}
    </div>
  );
};

export default ShowDetail;
