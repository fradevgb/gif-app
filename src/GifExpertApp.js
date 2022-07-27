import { useState } from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {
  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState([
    'One Punch',
    'Samurai X',
    'Dragon Ball',
  ]);
  // const handleAdd = () => {
  //   setCategories(['Spiderman', ...categories]);
  // };
  return (
    <div className="container">
      <h2 className="title">GifExpertApp</h2>
      <AddCategory />
      <hr />

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </div>
  );
};

export default GifExpertApp;
