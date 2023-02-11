import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Product.sass';
function Product(props) {
  const { id, name, price, thumbnailUrl, categoryIds } = props;
  // description, 
  if (categoryIds.length > 0) {
    return (
      <div className='card-product' id={id}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src={thumbnailUrl} />
          <Card.Body>
            <Card.Title>{name.slice(9)}</Card.Title>
            {/* <Card.Text>
              {description.replace(/[^а-яА-я , : - .]/g, ' ')}.
            </Card.Text> */}
            <Button variant='primary'>Купить за {price} ₽</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default Product;
