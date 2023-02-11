import Product from '../product/Product';
import './ProductList.sass';
function ProductList(props) {
  const { products = [] } = props;
  if (!products.length) {
    return <h3>Nothing here</h3>;
  }
  return (
    <div className='pagelist'>
      {products.map((product) => {
        return <Product id={product.id} {...product} />;
      })}
    </div>
  );
}
export default ProductList;
