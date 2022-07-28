import { useState, useEffect } from 'react';
import getGifs from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category).then(setImages).catch(console.log);
  }, [category]);

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
