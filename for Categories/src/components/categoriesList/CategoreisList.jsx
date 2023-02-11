import './CategoreisList.sass';

import { useState, useEffect } from 'react';
import { API_URL, _API_KEY } from '../../config';
import Linear from '../Liner/Linear';
import Categories from '../categories/Categories';

function CategoreisList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function getCategories() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${_API_KEY}`,
      },
    };
    fetch(API_URL, options)
      .then((response) => response.json())
      .then((data) => {
        data.items && setItems(data.items);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className='categoryList'>
      <h3 className='categoryList__title'>OURS CATEGORIES</h3>
      <div className='categoryList__box'>
        {loading ? <Linear /> : <Categories items={items} />}
      </div>
    </div>
  );
}
export default CategoreisList;
