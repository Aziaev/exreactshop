import * as React from 'react';
import { Button, Card, CardTitle, Col } from 'react-materialize';
import { getProductById } from '../helpers';

/**
 * Карточка товара
 *
 * @param {ICatalogItem} props
 *  id - уникальный идентификатор товара
 *  addToCart - добавление товара в корзину
 *
 * @returns - рендерит карточку товара
 */
export default function ( props: ICatalogItem ) {
  const { id, addToCart } = props;
  const item = getProductById( id );
  return (
    <Col m={4} s={12}>
      <Card
        key={id}
        header={
          <CardTitle reveal image={item.img} waves="light"/>}
        title={item.name}
        reveal={<div>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
        }
      >
        <h4>{item.price}</h4>
        <Button
          className="cyan"
          waves="light"
          onClick={() => addToCart( id )}
        >
          Add to cart
        </Button>
      </Card>
    </Col>
  );
}
