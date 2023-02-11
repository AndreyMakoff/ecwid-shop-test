import { useState, useEffect } from 'react';
import { API_URL, _API_KEY } from '../../config';
import Preloader from '../preloader/Preloader';
import ProductList from '../productList/ProductList';

function PageProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function getProducts() {
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
        data.items && setProducts(data.items);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>{loading ? <Preloader /> : <ProductList products={products} />}</div>
  );
}

export default PageProduct;
