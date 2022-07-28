import { useState, useEffect } from 'react';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =
      'https://api.giphy.com/v1/gifs/search?api_key=WuIOQrYRuhoWw73hXBZzhWrLd4yG5aJj&q=rick and Morty';

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    // console.log(gifs);
    setImages(gifs);
  };
  return (
    <>
      <h3>{category}</h3>
      <div className="images">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
