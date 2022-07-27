import { useState } from 'react';

const AddCategory = () => {
  const [inputValue, setInputValue] = useState('Hola Mundo');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Search</label>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
    </>
  );
};

export default AddCategory;
