import React from 'react';
import { Button } from 'react-materialize';

export default function (props) {
  const { id, quantity, reduceQuantity, addToCart } = props;
  return (
    <div>
      {reduceQuantity &&
      <Button flat onClick={() => reduceQuantity(id)}>
        -
      </Button>
      }
      <div style={{ display: 'inline-flex', padding: '15px' }}>{quantity}</div>
      {addToCart &&
      <Button flat onClick={() => addToCart(id)}>
        +
      </Button>
      }
    </div>
  );
}
