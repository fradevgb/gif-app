const GifGridItem = ({ id, title, url }) => {
  // console.log(id, title, url);
  return (
    <div className="card">
      <img className="img-card" src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default GifGridItem;
