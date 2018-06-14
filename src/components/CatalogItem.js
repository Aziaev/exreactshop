import React from 'react';
import { Button, Card, CardTitle, Col } from 'react-materialize';
import { getProductById } from '../helpers';

export default function (props) {
  const { id, addToCart } = props;
  const item = getProductById(id);
  return (
    <Col m={4} s={12}>
      <Card key={id} header={
        <CardTitle reveal image={item.img} waves='light'/>}
            title={item.name}
            reveal={
              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            }>
        <h4>{item.price}</h4>
        <Button
          className='cyan'
          waves='light'
          onClick={() => addToCart(id)}>Add to cart</Button>
      </Card>
    </Col>
  );
}
