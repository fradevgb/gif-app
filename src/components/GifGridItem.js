const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img className="img-card" src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default GifGridItem;
