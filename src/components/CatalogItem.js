import React from 'react';
import { Button, Card, CardTitle, Col } from 'react-materialize';

export default function (props) {
  let { item: { id, name, description, price, title, img }, stock, onAddAction } = props;
  return (
    <Col m={4} s={12}>
      <Card key={id} header={<CardTitle reveal image={img} waves='light'/>}
            title={name}
            reveal={
              <div>
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            }>
        <h4>{price}</h4>
        <p>Остаток: {stock} шт.</p>
        <Button
          className='cyan'
          waves='light'
          disabled={stock < 1}
          onClick={onAddAction(id)}>В корзину</Button>
      </Card>
    </Col>
  );
}
