import * as React from 'react';
import { Button } from 'react-materialize';

/**
 * Количество товара с кнопками уменьшения и увеличения количества товара
 *
 * @param props
 *  id - идентификатор товара
 *  quantity - количество товара
 *  reduceQuantity - уменьшает количество на одну штуку
 *  addToCart - добавляет одну штуку
 *
 * @returns - количество и кнопки
 */
export default function ( props: any ) {
  const { id, quantity, reduceQuantity, addToCart } = props;
  return (
    <div>
      {reduceQuantity &&
      <Button flat onClick={() => reduceQuantity( id )}>
        -
      </Button>
      }
      <div style={{ display: 'inline-flex', padding: '15px' }}>{quantity}</div>
      {addToCart &&
      <Button flat onClick={() => addToCart( id )}>
        +
      </Button>
      }
    </div>
  );
}
