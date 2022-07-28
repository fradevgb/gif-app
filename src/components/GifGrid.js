const GifGrid = ({ category }) => {
  const getGifs = async () => {
    const url =
      'https://api.giphy.com/v1/gifs/search?api_key=WuIOQrYRuhoWw73hXBZzhWrLd4yG5aJj&q=rick and Morty';

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });
    console.log(gifs);
  };
  getGifs();
  return (
    <div>
      <h3>{category}</h3>
    </div>
  );
};

export default GifGrid;
